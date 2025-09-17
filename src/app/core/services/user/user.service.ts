import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from '@angular/core';
import { User } from "../../models/user";
import { CreateUserDto } from "../../../shared/dto/user/create-user.dto";
import { LoginUserDto } from "../../../shared/dto/user/login-user.dto";
import { AuthMessage } from "../../../shared/interfaces/messages/auth-message";
import { Observable } from "rxjs";

declare const API_URL: string;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);
  private apiUrl = API_URL + "/user";

  public create(createUserDto: CreateUserDto): Observable<AuthMessage> {
    return this.http.post<AuthMessage>(this.apiUrl, createUserDto);
  }

  public login(loginUserDto: LoginUserDto): Observable<AuthMessage> {
    return this.http.post<AuthMessage>(this.apiUrl + "/login", loginUserDto);
  }

  public decodeToken(token: string): Observable<User> {
    return this.http.get<User>(this.apiUrl + "/decodeToken/" + token);
  }
}
