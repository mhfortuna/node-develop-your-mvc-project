import axios from "axios";
import { getCurrentUserToken } from "../services/auth";

import { API } from "../constants/routes";

export async function syncUserData() {
  const userToken = await getCurrentUserToken();

  // process.env.REACT_APP_API_BASE_URL
  // http://localhost:4000

  return axios({
    method: "POST",
    url: `${API.MAIN}${API.CLIENTS_SIGN_IN}`,
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}
