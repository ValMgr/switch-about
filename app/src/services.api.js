import axios from 'axios';

const header = {
  'content-type': 'application/json',
};

export function getFormDetailsApi() {
  const response = axios.get(`https://eu-api.jotform.com/user/forms?apiKey=${process.env.REACT_APP_API_KEY_JOTFORM}`, 
    {
      ...header,
      method: 'GET'
    });

  return response;
}

export default { getFormDetailsApi };