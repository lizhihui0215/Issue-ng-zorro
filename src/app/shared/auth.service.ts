import { Inject, Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient} from '@angular/common/http';
import {Service} from './service';
import { SERVER_URL } from './server-url';


@Injectable()
export class AuthService extends Service {
  private authURL: string;

  get isLoggedin(): boolean {
    // const user: User = this.localStorageService.get<User>('user');
    // if (user != null ) { return user.rememberMe; }
    return false;
  }

  get user(): User {
    return null;
  }

  constructor( private http: HttpClient, @Inject(SERVER_URL) public serverURL: string) {
    super();
    this.authURL = `${serverURL}/auth`;
  }

}
