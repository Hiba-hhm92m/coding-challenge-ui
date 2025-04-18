import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })

  export class ApiService {
    url = "https://localhost:7238";

    constructor(private httpClient : HttpClient)
    {}
    GetTasks(){
        return this.httpClient.get(this.url +"/Challenge/List");
    }
    GetTaskById(id:any){
        return this.httpClient.get(this.url +"/Challenge/Get?id="+id);
    }
  }

  export class Task {
    id : number | undefined;
    title : string | undefined;
    description : string | undefined;
    isCompleted : boolean | undefined;
    createdAt : Date | undefined;
    dueDate: Date | undefined;
  }