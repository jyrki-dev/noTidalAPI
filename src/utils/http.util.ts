import axios, { AxiosResponse } from 'axios';
import { Logger } from './logger.util';

export default class http {
  private readonly logger = new Logger();

  async post(url: string, payload: any): Promise<AxiosResponse<any, any>> {
    const response = await axios.post(url, payload);
    if (response.status >= 400) {
      this.logger.error(`received error code ${response.status}`);
      Promise.reject(response.statusText);
    }
    return response;
  }
}
