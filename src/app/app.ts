import { Component, effect, signal } from '@angular/core';
import { JobList } from './job-list/job-list';
import { JobDetailPanel } from './job-detail-panel/job-detail-panel';

export interface DetailData {
  id: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-root',
  imports: [
    JobList,
    JobDetailPanel
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  selectedId = signal<number | null>(null);
  detailData = signal<DetailData | null>(null);
  loading = signal(false);

  private requestSeq = 0;

  constructor() {
    effect(() => {
      const id = this.selectedId();
      this.detailData.set(null);
      if (!id) {
        this.loading.set(false);
        return;
      }

      this.loading.set(true);
      const seq = ++this.requestSeq;

      setTimeout(() => {
        if (seq !== this.requestSeq) return;
        this.detailData.set({ id, title: 'Job #' + id, description: 'Details for job ' + id });
        this.loading.set(false);
      }, 1000);
    });
  }

  openItem(id: number) {
    this.selectedId.set(id);
  }

  closeDetail() {
    this.selectedId.set(null);
  }
}


