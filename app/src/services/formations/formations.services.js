import axios from 'axios';

const headers = {
  'content-type': 'application/json',
  Accept: 'application/json',
};

export function getFormationsApi() {
  return axios.get('http://127.0.0.1:3000/formations', {
    headers: headers,
    mode: 'no-cors',
    method: 'GET',
  });
}

export default { getFormationsApi };