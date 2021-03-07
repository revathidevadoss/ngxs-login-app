import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

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
}