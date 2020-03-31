import axios from 'axios';

const API = process.env.API_URI;

// Provider that wraps axios HTTP client instance.
// In case that the client is changed in the future the source code should not be affected.
export async function http(url, method = 'get', data, options = {}) {
  const hasBody = ['delete', 'patch', 'post', 'put'].includes(
    method.toLowerCase(),
  );
  let response;

  try {
    response = await axios({
      [hasBody ? 'data' : 'params']: data,
      baseURL: API,
      method,
      url,
      ...options,
    });
  } catch (error) {
    if (!error.response) {
      throw new Error('NETWORK');
    }

    ({ response } = error);
  }

  return response;
}

['get', 'patch', 'post', 'put'].forEach(method => {
  http[method] = (url, data, configuration) =>
    http(url, method, data, configuration);
});

export default http;
