import propertyInformation from './propertyInformation';
import Axios from 'axios';

// fetch API by using property id & group id & auth(name ,password)
const fetchResponse = async (
  code: string,
  propertyId: string,
  groupId: string
) => {
  try {
    return await Axios.get(
      `https://conapi.bookmebob.com/bot-responses/${code}`,
      {
        params: {
          ct: `lang|en-US,pid|${propertyId}`,
          gid: groupId,
        },
        auth: {
          username: 'bot',
          password: '331098F1-D73B-41B0-9810-62EDFDEE853A',
        },
      }
    );
  } catch (error) {
    console.error(`${code} Not found`);
  }
};

// use the responseCode as code in properyInformation to fetch data,
// then add "example" property to APIresult
const buildResponseWithExample = async (data, propertyId, groupId) => {
  const responsesWithExample = [];
  for (const element of data) {
    const code = element.responseCode;
    const result = await fetchResponse(code, propertyId, groupId);
    if (result) {
      const responses = { ...result.data };
      const template = {
        query: {
          code: responses.query.code || '',
          category: element.category || '',
          hintQuestion: element['hint-question'] || '',
          detailedExplanation: element['detailed-explanation'] || '-',
        },
        response: {
          type: responses.response.type || '',
          isExample: false,
          messages: responses.response.messages || [],
          example: element.example || '',
        },
      };
      responsesWithExample.push(template);
    } else {
      const template = {
        query: {
          code: element.responseCode || '',
          category: element.category || '',
          hintQuestion: element['hint-question'] || '',
          detailedExplanation: element['detailed-explanation'] || '-',
        },
        response: {
          type: 'example',
          isExample: true,
          // messages array need a number item, then the front end can always show messages block when there is a example messsge.
          messages: [0],
          example: element.example || '',
        },
      };
      responsesWithExample.push(template);
      console.log(`${code} Not found`);
    }
  }
  return responsesWithExample;
};

// arr.every return true if there is no object element inside array
function checkObjInclude(arr) {
  try {
    return arr.every(x => typeof x === 'string');
  } catch (e) {
    return false;
  }
}

/**
 * Extract the object in messages and add it to APIresult.response.details
 * If there in no object in messages, just set APIresult.response.details to { type: "messages" }
 */
const buildResponseWithDetails = async (data, propertyId, groupId) => {
  const ResponsesWithExample = await buildResponseWithExample(
    data,
    propertyId,
    groupId
  );
  const responses = ResponsesWithExample.map(elem => {
    const messages = elem.response.messages;
    const objNotInclude = checkObjInclude(messages);
    if (objNotInclude) {
      elem.response.details = {
        type: 'messages',
      };
      /** add numberOfMsg to response  */
      messages.forEach((msg, index) => {
        elem.response.numberOfMsg = index + 1;
      });
    } else {
      if (messages) {
        messages.forEach((msg, index) => {
          if (typeof msg === 'string') {
            /** add numberOfMsg to response  */
            elem.response.numberOfMsg = index + 1;
          }
          if (typeof msg === 'object') {
            elem.response.details = msg;
            /** remove this object from messages array */
            messages.splice(index, 1);
          }
        });
      }
    }
    return elem;
  });

  return responses;
};

export const buildFormatedTestResponse = (data, propertyId, groupId) => {
  const response = buildResponseWithDetails(data, propertyId, groupId);
  return response;
};
