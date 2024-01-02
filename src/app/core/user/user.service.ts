import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, ReplaySubject, tap } from 'rxjs';
import {environment} from '../../../environments/environment';
import { ProfileUser } from './user.types';

@Injectable({
    providedIn: 'root'
})
export class UserService
{
    private _userData: ProfileUser | undefined;
    private _user: ReplaySubject<ProfileUser> = new ReplaySubject<ProfileUser>(1);

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter & getter for user
     *
     * @param value
     */
    set user(value: ProfileUser)
    {
        // Store the value
        this._user.next(value);
        this._userData = value;
    }

    // eslint-disable-next-line @typescript-eslint/member-ordering,@typescript-eslint/explicit-function-return-type
    get user(): ProfileUser | undefined
    {
        return this._userData;
    }

    get user$(): Observable<ProfileUser>
    {
        return this._user.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get the current logged in user data
     */
    get(): Observable<ProfileUser>
    {
        return this._httpClient.get<ProfileUser>(
            `${environment.authUrl}/auth/realms/${environment.realm}/account`
        ).pipe(
            map(user => ({
                ...user,
                attributes: user.attributes || {},
            })), 
            tap((user) => {
                this._user.next(user);
            })
        );
    }

    /**
     * Update the user
     *
     * @param user
     */
    update(user: ProfileUser): Observable<any>
    {
        return this._httpClient.patch<ProfileUser>('api/common/user', {user}).pipe(
            map((response) => {
                this._user.next(response);
            })
        );
    }
}
