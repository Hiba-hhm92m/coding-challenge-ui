import { Component, OnInit } from '@angular/core';
import { ApiService,Task } from '../services/api.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {
tasks :Task[] = [];

  constructor(private apiService : ApiService) 
  { }

  async ngOnInit() {
    console.log("hiiii");
    this.apiService.GetTasks().subscribe((res : any)=>{
      this.tasks = res;
      console.log(this.tasks);
    })
  }

}
