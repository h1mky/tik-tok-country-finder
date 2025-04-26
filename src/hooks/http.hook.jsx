import axios from "axios";

export const request = async (
  url,
  method = "GET",
  body = null,
  headers = {}
) => {
  try {
    const response = await axios({
      url,
      method,
      data: body,
      headers: { "Content-Type": "application/json", ...headers },
    });

    return response.data;
  } catch (e) {
    throw new Error(
      `Could not fetch ${url}, status: ${e.response?.status || e.message}`
    );
  }
};
