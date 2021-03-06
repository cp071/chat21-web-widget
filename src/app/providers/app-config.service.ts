import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
// services
import { Globals } from '../utils/globals';

@Injectable()
export class AppConfigService {
  private appConfig;

  constructor(private http: HttpClient, public g: Globals) {
    this.appConfig = environment;
    console.log('chat21-web-widget environment: ', environment);
  }

  loadAppConfig() {
    // return this.http.get(this.appConfig.apiUrl + 'settings')
    return this.http.get(this.appConfig.remoteConfigUrl)
      .toPromise()
      .then(data => {
        this.appConfig = data;
      }).catch(err => {
        // console.log('error loadAppConfig');
      });
  }

  getConfig() {
    return this.appConfig;
  }
}
