import axios from 'axios';
import { REQUEST_PATHS } from './enums/request-paths.enum';

export default class LoginService {
  private async login_with_link(clientId: string, scope = 'r_usr w_usr w_sub') {
    const url = REQUEST_PATHS.DEVICE_AUTHORIZATION;
    const request = await axios.post(url, { clientId, scope });
    if (request.status >= 400) {
      console.log(`Unable to login, received HTTP error ${request.status}`);
    }
  }
}
