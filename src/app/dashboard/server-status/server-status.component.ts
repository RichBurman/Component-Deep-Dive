import { AfterViewInit, Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, AfterViewInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';
  // private interval?: ReturnType<typeof setInterval>;
  private destroyRef = inject(DestroyRef)
  constructor() {}

  ngOnInit(): void {
    console.log('ON INIT RUNNING');
    const interval = setInterval(() => {
      const randomValue = Math.random();
      if (randomValue < 0.5) {
        this.currentStatus = 'online';
      } else if (randomValue < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      console.log('ON DESTROY RUNNING');
      clearInterval(interval);
    });
  }

  ngAfterViewInit(): void {
    console.log('AFTER VIEW INIT RUNNING');
  }



  // ngOnDestroy(): void {
  //   console.log('ON DESTROY RUNNING');
  //   clearTimeout(this.interval);
  // }
}
