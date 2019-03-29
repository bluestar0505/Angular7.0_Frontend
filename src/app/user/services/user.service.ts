import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient,
    @Inject(APP_BASE_HREF) private baseHref: string
  ) {}

  getAccountData(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.baseHref + '/assets/data/user.json')
      .subscribe(
        data => {
          resolve(data);
        },
        err => {
          reject();
        }
      );
    });
  }
}
