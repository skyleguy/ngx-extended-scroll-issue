import { Component } from '@angular/core';
import { initializeApp } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'scroll-reproducer';

  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyD8kofbk6KUlIU_223REzM4wsBfa9b_OvA',
      authDomain: 'pdf-viewer-scroll-reproducer.firebaseapp.com',
      projectId: 'pdf-viewer-scroll-reproducer',
      storageBucket: 'pdf-viewer-scroll-reproducer.appspot.com',
      messagingSenderId: '582624565013',
      appId: '1:582624565013:web:ada999be43b80ace823b1c',
    };

    const app = initializeApp(firebaseConfig);
  }
}
