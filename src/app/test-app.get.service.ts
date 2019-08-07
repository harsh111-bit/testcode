import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable, Subject} from "rxjs";



@Injectable()
export class UsersGetService {

  constructor(private http: HttpClient) {
  }


  getUsers(): Observable<Object> {
    return this.http.get('https://randomuser.me/api/?results=100');
  }

  getUniqueUser(): Observable<Object> {
    return this.http.get('https://randomuser.me/api/?id=123456');

  }
}
