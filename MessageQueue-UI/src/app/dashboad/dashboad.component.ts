import { Component, OnInit, NgModule } from '@angular/core';
import { queue } from 'rxjs/internal/scheduler/queue';
import { Queue } from '../Queue';
import { QueueServiceService } from '../queue-service.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@Component({
  selector: 'app-dashboad',
  templateUrl: './dashboad.component.html',
  styleUrls: ['./dashboad.component.scss']
})
export class DashboadComponent implements OnInit {
    queues: Queue[] = [];
    settings = {
      columns: {
        name: {
          title: 'Queue Name'
        },
        maxLimit: {
          title: 'Max Limit'
        },
        user: {
          title: 'User'
        },
        createdBy: {
          title: 'created By'
        }
      }
    };
    data = [
      {
        id: 1,
    name: "queue1",
    maxLimit: 20,
    user:"public",
    createdBy:"prasad"
      },
      {
        id: 2,
    name: "queue2",
    maxLimit: 30,
    user:"private",
    createdBy:"varma",
      },
      
      {
        id: 3,
        name: "DuBuque",
        maxLimit:60,
        username: "public",
        user:"private",
        createdBy: "kumar"
      }
    ];
    constructor(private queueService: QueueServiceService) { }
  
    ngOnInit() {
      //this.getHeroes();
    }
  
    getHeroes(): void {
      this.queueService.getQueuse()
        .subscribe(queues => this.queues = queues);
    }
}
