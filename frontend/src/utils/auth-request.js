import axios from "axios";
import { getCurrentUserToken } from "../services/auth";

import { API } from "../constants/routes";

export async function sendUserData(firstName) {
  const userToken = await getCurrentUserToken();
  console.log("TOKEN");
  console.log(userToken);

  // process.env.REACT_APP_API_BASE_URL
  // http://localhost:4000

  return axios({
    method: "POST",
    url: `${API.MAIN}${API.CLIENTS_SIGN_UP}`,
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
    firstName: firstName,
  });
}
