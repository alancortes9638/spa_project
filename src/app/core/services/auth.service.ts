import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap, mapTo, catchError } from 'rxjs/operators';
import { EntryPoints } from './entrypoints';
import { JwtToken } from './models/jwt-token';
import { CookieService } from './cookie.service';
import { UserLogin } from './models/user-login';
import { ObjectResultDto } from './models/ObjectResult';



@Injectable({ providedIn: 'root' })
export class AuthenticationService extends EntryPoints {
    userJwt: JwtToken;
    

    constructor(private httpClient: HttpClient, private cookieService: CookieService) {
        super();
    }

    /**
     * Returns the current user
     */
    public currentUser(): JwtToken {
        if (!this.userJwt) {
            this.userJwt = JSON.parse(this.cookieService.getCookie('currentUser'));
        }
        return this.userJwt;
    }

    /**
     * Performs the auth
     * @param user user data
     */
    public login(user: UserLogin): Observable<ObjectResultDto> {
        console.log("Start Login");

        if (user.username == 'alancortes9638@gmail.com' && user.password == '1234') {

            
            this.userJwt = new JwtToken();
            this.userJwt.access_token = "1234";
            this.userJwt.refresh_token = "1234";
            this.userJwt.roles=["1234"];

            this.cookieService.setCookie('currentUser', JSON.stringify(this.userJwt), 1);

            

                        
        } else {
            
        }

        const promise = this.httpClient
                          .post<ObjectResultDto>(this.loginUrl, user)                          
                          .pipe(
                              tap((response: ObjectResultDto) => {                              
                                    this.userJwt = response.data;
                                   this.cookieService.setCookie('currentUser', JSON.stringify(response.data), 1);
                                   console.log(response.data);
                                    return response;
                                })
                                
                          )
        console.log("Observable Created");
        return promise;
    
    }




    public loginWithRefreshToken(): Observable<ObjectResultDto> {
        const refreshToken = this.currentUser().refresh_token;

       const userInfo = new UserLogin();
        userInfo.refresh_token = refreshToken;
        return this.login(userInfo);
      }

    /**
     * Logout the user
     */
    logout() {
        // remove user from local storage to log user out
        this.cookieService.deleteCookie('currentUser');
        this.userJwt = null;
    }

    public requestResetPassword(email: string)
    {
      const promise = this.httpClient.post(this.requestResetPasswordUrl, email);
      return promise;
    }

    
  
}

