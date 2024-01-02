import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, EMPTY, finalize, map, Observable, of, switchMap, tap, throwError} from 'rxjs';
import {environment} from '../../../environments/environment';
import { ProfileUser, TokenPayload } from '../user/user.types';
import { UserService } from '../user/user.service';
import { TokenResponse } from 'angular-oauth2-oidc';
import { AuthUtils } from './auth.utils';

@Injectable()
export class AuthService {
    private _authenticated: boolean = false;
    private _permissions: string[] = [];
    private _tokenPayload: TokenPayload = {} as TokenPayload;

    /**
     * Constructor
     */
    constructor(
        private _httpClient: HttpClient,
        private _userService: UserService,
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    get authenticated(): boolean {
        return this._authenticated;
    }

    get permissions(): string[] {
        return this._permissions;
    }

    /**
     * Setter & getter for token payload
     */
    get tokenPayload(): TokenPayload {
        return this._tokenPayload;
    }

    set tokenPayload(tokenPayload: TokenPayload) {
        this._tokenPayload = tokenPayload;
    }

    /**
     * Setter & getter for access token
     */
    get accessToken(): string {
        return localStorage.getItem('accessToken') ?? '';
    }

    set accessToken(token: string) {
        localStorage.setItem('accessToken', token);
    }

    /**
     * Setter & getter for refresh token
     */
    // eslint-disable-next-line @typescript-eslint/member-ordering
    get refreshToken(): string {
        return localStorage.getItem('refreshToken') ?? '';
    }

    set refreshToken(token: string) {
        localStorage.setItem('refreshToken', token);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Forgot password
     *
     * @param email
     */
    forgotPassword(email: string): Observable<any> {
        return this._httpClient.post('api/auth/forgot-password', email);
    }

    /**
     * Reset password
     *
     * @param password
     */
    resetPassword(password: string): Observable<any> {
        return this._httpClient.post('api/auth/reset-password', password);
    }

    /**
     * Sign in
     *
     * @param credentials
     */
    signIn(credentials: { username: string; password: string }): Observable<any> {
        // Throw error, if the user is already logged in
        if (this._authenticated) {
            return throwError('User is already logged in.');
        }

        const options = {
            headers: new HttpHeaders().set(
                'Content-Type',
                'application/x-www-form-urlencoded'
            )
        };

        const formData = new URLSearchParams();
        const data = {
            'username': credentials.username,
            'password': credentials.password,
            'client_id': environment.clientId,
            'grant_type': 'password'
        };
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                formData.set(key, data[key]);
            }
        }
        const a = {
            access_token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoidGFpIn0.kHCzK3XorPrfi0DcYAlZar2terCRblCSHUv7TfDYaa4"
        }
        return of(a).pipe(
            switchMap((response: TokenResponse) => {

                // Store the access token in the local storage
                this.accessToken = response.access_token;
                this.refreshToken = response.refresh_token;
                this.tokenPayload = this.parseJwt(response.access_token);
                console.log(this.tokenPayload)
                // Set the permissions
                this._permissions = this.tokenPayload.resource_access?.frontend?.roles || [];
                // Set the authenticated flag to true
                this._authenticated = true;


                // Return get user profile with the response
                return this.getUserProfile();
            })
        );
        return this._httpClient.post(`${environment.authUrl}/auth/realms/${environment.realm}/protocol/openid-connect/token`, formData.toString(), options).pipe(
            switchMap((response: TokenResponse) => {

                // Store the access token in the local storage
                this.accessToken = response.access_token;
                this.refreshToken = response.refresh_token;
                this.tokenPayload = this.parseJwt(response.access_token);

                // Set the permissions
                this._permissions = this.tokenPayload.resource_access?.frontend?.roles || [];
                // Set the authenticated flag to true
                this._authenticated = true;


                // Return get user profile with the response
                return this.getUserProfile();
            })
        );
    }

    /**
     * Sign in using the access token
     */
    signInUsingToken(): Observable<any> {
        const formData = new URLSearchParams();
        const data = {
            'client_id': environment.clientId,
            'grant_type': 'refresh_token',
            'refresh_token': this.refreshToken,
        };
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                formData.set(key, data[key]);
            }
        }
        const options = {
            headers: new HttpHeaders().set(
                'Content-Type',
                'application/x-www-form-urlencoded'
            )
        };
        const a = {
            access_token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoidGFpIn0.kHCzK3XorPrfi0DcYAlZar2terCRblCSHUv7TfDYaa4"
        }
        // Sign in using the token
        return of(a).pipe(
            
            catchError(() =>

                // Return false
                of(false)
            ),
            map((data: any) => {
                // Kiểm tra và chuyển đổi dữ liệu nếu cần
                if (typeof data === 'boolean') {
                  // Xử lý trường hợp dữ liệu là boolean
                  // có thể return một giá trị mặc định hoặc ném một lỗi tùy thuộc vào logic của bạn.
                  // Ví dụ:
                  throw new Error('Dữ liệu không hợp lệ');
                }
        
                // Chắc chắn rằng data là kiểu dữ liệu mong muốn
                return {
                  // Chuyển đổi data thành kiểu TokenResponse
                  // ...
                } as TokenResponse;
              }),
            switchMap((response: TokenResponse) => {

                // Replace the access token with the new one if it's available on
                // the response object.
                //
                // This is an added optional step for better security. Once you sign
                // in using the token, you should generate a new one on the server
                // side and attach it to the response object. Then the following
                // piece of code can replace the token with the refreshed one.
                if (response.access_token) {
                    this.accessToken = response.access_token;
                    this.tokenPayload = this.parseJwt(response.access_token);
                    this._permissions = this.tokenPayload.resource_access?.frontend?.roles || [];
                }

                if (response.refresh_token) {
                    this.refreshToken = response.refresh_token;
                }

                // Set the authenticated flag to true
                this._authenticated = true;

                // Get user profile
                return this.getUserProfile();
            })
        );
    }

    /**
     * Sign out
     */
    signOut(): Observable<any> {
        // Set the authenticated flag to false
        this._authenticated = false;

        // Return the observable
        return this._httpClient.post(`${environment.authUrl}/auth/admin/realms/${environment.realm}/users/${this._userService.user?.id}/logout`, {})
            .pipe(
                catchError((error) => {
                    console.error(error);
                    return EMPTY;
                }),
                finalize(() => {
                    // Remove the access token & refresh token from the local storage
                    localStorage.removeItem('accessToken');
                    localStorage.removeItem('refreshToken');
                }));
    }

    /**
     * Sign up
     *
     * @param user
     */
    signUp(user: { name: string; email: string; password: string; company: string }): Observable<any> {
        return this._httpClient.post('api/auth/sign-up', user);
    }

    /**
     * Unlock session
     *
     * @param credentials
     */
    unlockSession(credentials: { email: string; password: string }): Observable<any> {
        return this._httpClient.post('api/auth/unlock-session', credentials);
    }

    /**
     * Check the authentication status
     */
    check(): Observable<boolean> {
        // Check if the user is logged in
        if (this._authenticated) {
            return of(true);
        }
        console.log(this.accessToken)
        // Check the access token availability
        if (!this.accessToken) {
            return of(false);
        }
        console.log(this.accessToken)
        console.log(AuthUtils.isTokenExpired(this.accessToken))

        // Check the access token expire date
        // if (AuthUtils.isTokenExpired(this.accessToken)) {
        //     return of(false);
        // }
        console.log(12321321)
        // If the access token exists and it didn't expire, sign in using it
        return this.signInUsingToken();
    }

    /**
     * Check the permission
     */
    checkPermission(permission: string[] | undefined): boolean | undefined {
        return permission && !this._permissions.some(item => permission.some(x => x === item));
    }

    /**
     * Get user profile
     */
    private getUserProfile(): Observable<ProfileUser> {
        return of({
            id: 1,
                  username: "tài",
                  email: "tài",
                  emailVerified: "tài",
        }).pipe(
            map((data: any) => {
                // Kiểm tra và chuyển đổi dữ liệu nếu cần
                return {
                  id: data.id,
                  username: data.username,
                  email: data.email,
                  emailVerified: data.emailVerified,
                  // ...
                } as ProfileUser;
              }),
            tap((user: ProfileUser) => {
                // Store the user on the user service
                this._userService.user = user;
            }),
            
        );
        return this._httpClient.get(`${environment.authUrl}/auth/realms/${environment.realm}/account`)
        .pipe(
            map((data: any) => {
                // Kiểm tra và chuyển đổi dữ liệu nếu cần
                return {
                  id: data.id,
                  username: data.username,
                  email: data.email,
                  emailVerified: data.emailVerified,
                  // ...
                } as ProfileUser;
              }),
            tap((user: ProfileUser) => {
                // Store the user on the user service
                this._userService.user = user;
            }),
            
        );
    }

    private parseJwt(accessToken: string): TokenPayload {
        const base64Url = accessToken.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    }
}
