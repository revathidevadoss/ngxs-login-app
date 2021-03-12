import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Authenticate,User} from './models/product.model';
import { Observable, of, throwError } from 'rxjs';

//import {StateModel} from '../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class PojoService {
listFlag:boolean;
    constructor(private http: HttpClient) {
    }
   
    setFlag(flag){
        this.listFlag =flag;
        
      }
    
      getFlag(){
        return this.listFlag;
      }

      login({ username, password }: Authenticate): Observable<User> {
        /**
         * Simulate a failed login to display the error
         * message for the login form.
         */
        console.log("Pojo");
        if (username !== 'test') {
          return throwError('Invalid username or password');
        }
    
        return of({ name: 'User' });
      }
    
      logout() {
        return of(true);
      }
}