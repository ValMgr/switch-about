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

export function getFormSubmissionIdApi({ id }) {
  return axios.get(`http://127.0.0.1:3000/profils/submissionID/${id}`, {
    headers: headers,
    mode: 'no-cors',
    method: 'GET',
  });
}

export function getUserFormationsAnswersApi({ profilId }) {
  return axios.get(`http://127.0.0.1:3000/profils/${profilId}/formations`, {
    headers: headers,
    mode: 'no-cors',
    method: 'GET',
  });
}

export default { getUsersApi, getUserFormAnswersApi, getUserFormationsAnswersApi };