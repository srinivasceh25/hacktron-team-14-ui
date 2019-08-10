import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Queue } from './Queue';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class QueueServiceService {

  private queueUrl = 'api/queues';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: QueueServiceService) { }

  /** GET heroes from the server */
  getQueuse(): Observable<Queue[]> {
    return this.http.get<Queue[]>(this.queueUrl);
  }

}
