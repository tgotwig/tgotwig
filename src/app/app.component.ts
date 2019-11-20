import { Component } from '@angular/core';
declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tgotwig';

  ngOnInit() {
    particlesJS.load("particles-js", "./assets/js/particles.json", function() {
      console.log("callback - particles.js config loaded");
    });
  }
}
