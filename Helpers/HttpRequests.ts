import axios, { Method } from "axios";

interface HttpRequestParams {
  url: string;
  method: Method;
  data?: any;
  headers?: Record<string, string>;
}

export const httpRequest = async <T>({
  url,
  method,
  data,
  headers,
}: HttpRequestParams): Promise<T> => {
  try {
    const response = await axios({
      url,
      method,
      data,
      headers,
    });
    return response.data;
  } catch (error) {
    console.error("HTTP request error:", error);
    throw error;
  }
};
