import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private _htpp:HttpClient) { }
getAllTodo(){
const url = environment.server_url + 'get_todo';
return this._htpp.get(url); 
}
addTask(data:any ){
  const url = environment.server_url + 'add_task';
return  this._htpp.post(url,data);
}

update(data:any ){
  //console.log(data);
  const url = environment.server_url + 'update_task';
 return  this._htpp.post(url,data);
}


delete(data:any ){
  //console.log(data);
  const url = environment.server_url + 'delete_task';
 return  this._htpp.post(url,data);
}

done(data:any ){
  //console.log(data);
  const url = environment.server_url + 'delete_task';
 return  this._htpp.post(url,data);
}

}
