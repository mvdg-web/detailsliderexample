import { Component, output, signal } from '@angular/core';
import { JobDetailPanel } from '../job-detail-panel/job-detail-panel';

export interface Job {
  id: number;
  title: string;
  summary: string;
}

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.html',
  styleUrl: './job-list.css',
})
export class JobList {
  jobs = [
    { id: 1, title: 'Frontend Developer', summary: 'Angular, RxJS' },
    { id: 2, title: 'Backend Developer', summary: 'Node.js, NestJS' },
    { id: 3, title: 'DevOps Engineer', summary: 'AWS, Terraform' },
  ];

  select = output<number>();

}
