import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';


@Injectable()
export class freeApiService
{

    constructor(private httpclient:HttpClient) {  }
    
    apiCall()
    {
        return this.httpclient.get('https://jsonplaceholder.typicode.com/todos/1');
    }
    postcall(data:any){
        return this.httpclient.post('https://jsonplaceholder.typicode.com/todos/1',data);

    }
}

    // getcomments(): Observable<any>{
    //     return this.httpclient.get("https://jsonplaceholder.typicode.com/posts/1/comments")

    // }


