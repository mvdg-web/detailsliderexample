import { Component, input, output } from '@angular/core';
import { DetailData } from '../app';


@Component({
  selector: 'app-job-detail-panel',
  imports: [],
  templateUrl: './job-detail-panel.html',
  styleUrl: './job-detail-panel.css',
})
export class JobDetailPanel {
  data=input.required<DetailData | null>();
  back = output<void>();

  onBack() {
    this.back.emit();
  }
}
