import { Component, OnInit } from '@angular/core';
import { ApiService,Task } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {
  task: Task = new Task;

  constructor(private apiService : ApiService,private route:ActivatedRoute,) 
  { }

  async ngOnInit() {
    console.log("here");
    let id = this.route.snapshot.paramMap.get('id');
    this.apiService.GetTaskById(id).subscribe((res : any)=>{
      this.task = res;
      console.log(this.task);
    })
  }

}
