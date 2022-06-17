import axios from "axios";

const headers = {
  "content-type": "application/json",
  Accept: "application/json",
};

export function getFormDetailsApi() {
  return axios.get(
    `https://eu-api.jotform.com/user/forms?apiKey=${process.env.REACT_APP_API_KEY_JOTFORM}`,
    {
      headers: headers,
      method: "GET",
    }
  );
}

export function getFormationsApi() {
  return axios.get("http://127.0.0.1:3000/formation", {
    headers: headers,
    mode: "no-cors",
    method: "GET",
  });
}

export default { getFormDetailsApi, getFormationsApi };
