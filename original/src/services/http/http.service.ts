/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable arrow-body-style */
/* eslint-disable class-methods-use-this */

import axios from 'axios';
import Store from '../../utils/store/store';

export default class HttpService {

  public getData(): Promise<any> {
    return axios.get('/myUrl');
  }

  public getDataAndSetStore(): void {
    axios.get('/myUrl')
      .then((res) => {
        Store.setData(res.data);
      });
  }

}
