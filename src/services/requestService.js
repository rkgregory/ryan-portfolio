import axios from "axios";

const postCityState = async (cityInput, stateInput) => {
  let response = await axios.post(
    "https://n9dwh11ibk.execute-api.us-west-1.amazonaws.com/test/altershowrequests",
    {
      state: stateInput,
      city: cityInput,
    }
  );

  console.log("axios response: ", response);
  return response;
};

const getAllCityStates = async () => {
  let response = await axios.get(
    "https://n9dwh11ibk.execute-api.us-west-1.amazonaws.com/prd/"
  );
  console.log("axios response: ", response);
  return response;
};

const postEmail = async (emailInput) => {
  let response = await axios.post(
    "https://n9dwh11ibk.execute-api.us-west-1.amazonaws.com/test/altershowrequests",
    {
      email: emailInput,
    }
  );

  console.log("axios response: ", response);
  return response;
};

const getAllEmails = async () => {
  let response = await axios.get(
    "https://n9dwh11ibk.execute-api.us-west-1.amazonaws.com/prd/emails"
  );
  console.log("axios response: ", response);
  return response;
};

export { getAllCityStates, postCityState, getAllEmails, postEmail };
