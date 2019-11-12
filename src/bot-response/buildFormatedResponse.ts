import propertyInformation from './propertyInformation';
import Axios from 'axios';

// fetch API by using property id & group id & auth(name ,password)
const fetchResponse = async (code: string) => {
  try {
    return await Axios.get(
      `https://conapi.devtest.bookmebob.com/bot-responses/${code}`,
      {
        params: {
          ct: `lang|en-US,pid|e655dab2-987b-4683-ad9b-599814b414b6`,
          gid: `73574010-2f33-4b41-8b8a-09d18b025a56`,
        },
        auth: {
          username: 'bot',
          password: 'bac99f72-8ee9-4308-a68a-59ecd0b677c9',
        },
      },
    );
  } catch (error) {
    console.error(error);
  }
};

// use the responseCode as code in properyInformation to fetch data,
// then add "example" property to APIresult
const buildResponseWithExample = async data => {
  const responsesWithExample = [];
  for (const element of data) {
    const code = element.responseCode;
    const result = await fetchResponse(code);
    if (result) {
      const responses = result.data;
      responses.response.example = element.example;
      responsesWithExample.push(responses);
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

// Extract the object in messages and add it to APIresult.response.details
// If there in no object in messages, just set APIresult.response.details to { type: "messages" }
const buildResponseWithDetails = async data => {
  const ResponsesWithExample = await buildResponseWithExample(data);

  const responses = ResponsesWithExample.map(elem => {
    const messages = elem.response.messages;
    const objNotInclude = checkObjInclude(messages);
    if (objNotInclude) {
      elem.response.details = { type: 'messages' };
    } else {
      if (messages) {
        messages.forEach((msg, index) => {
          if (typeof msg === 'object') {
            elem.response.details = msg;
            messages.splice(index, 1);
          }
        });
      }
    }
    return elem;
  });

  return responses;
};

export const getFormatedResponse = data => {
  const response = buildResponseWithDetails(data);
  return response;
};
