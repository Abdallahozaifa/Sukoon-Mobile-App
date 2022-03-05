import BaseApi from '../base-api/BaseApi';
import Config from 'react-native-config';

const SUKOON_MANAGEMENT_URL = Config.API_URL;

class SukoonManagementApi extends BaseApi {
  static registerUser(payload: object) {
    return this._post(`${SUKOON_MANAGEMENT_URL}/users`, payload);
  }
}

export default SukoonManagementApi;
