import axios from 'axios';

const headers = {
  'content-type': 'application/json',
  Accept: 'application/json',
};

export function getUsersApi() {
  return axios.get('http://127.0.0.1:3000/users', {
    headers: headers,
    mode: 'no-cors',
    method: 'GET',
  });
}

export function getUserFormAnswersApi() {
  return axios.get('http://127.0.0.1:3000/profils', {
    headers: headers,
    mode: 'no-cors',
    method: 'GET',
  });
}

export function getUserSubmissionsDetailsApi({ id }) {
  return axios.get(`http://127.0.0.1:3000/profils/${id}/formations`, {
    headers: headers,
    mode: 'no-cors',
    method: 'GET',
  });
}

export default { getUsersApi, getUserFormAnswersApi };