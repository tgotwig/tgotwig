import { Component, OnInit } from '@angular/core'
declare var particlesJS: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'tgotwig'

  ngOnInit() {
    particlesJS.load('particles-js', './assets/js/particles.json', () => {
      console.log('callback - particles.js config loaded')
    })
  }
}
