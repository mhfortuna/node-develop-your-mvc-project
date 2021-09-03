import axios from "axios";
import { getCurrentUserToken } from "../services/auth";

import { API } from "../constants/routes";

export async function sendUserData(firstName) {
  const userToken = await getCurrentUserToken();

  return axios({
    method: "POST",
    url: `${API.MAIN}${API.CLIENTS_SIGN_UP}`,
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
    firstName: firstName,
  });
}
