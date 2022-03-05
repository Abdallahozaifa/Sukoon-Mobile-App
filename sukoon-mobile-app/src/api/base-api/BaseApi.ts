import axios from 'axios';
import qs from 'qs';

class BaseApi {
  static _data(response: any) {
    if (response) {
      return response.data;
    }
  }

  static _headers() {
    return {
      Accept: 'application/json',
      'Content-type': 'application/json'
    };
  }

  static _get(url: string, params: object) {
    return axios.get(url, { params: params });
  }

  static _getWithArraySerializer(url: string, params: object) {
    return axios.get(url, {
      params: params,
      paramsSerializer: (params) => {
        return qs.stringify(params, { arrayFormat: 'repeat' });
      }
    });
  }

  static _post(url: string, payload: object) {
    return axios.post(url, payload);
  }

  static _put(url: string, payload: object) {
    return axios.put(url, payload);
  }

  static _delete(url: string) {
    return axios.delete(url);
  }
}

export default BaseApi;
