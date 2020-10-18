import { Component, OnInit } from '@angular/core'
import { StoreService } from '../../store.service'
declare var gsap: any

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data = [
    {
      name: 'Github',
      class: 'github',
      href: 'https://github.com/TGotwig',
      text: 'Check out my projects on Github 🐱',
    },
    {
      name: 'Linkedin',
      class: 'linkedin',
      href: 'https://www.linkedin.com/in/tgotwig',
      text: 'Connect with me on a professional level on Linkedin 🤗',
    },
    {
      name: 'Stackoverflow',
      class: 'stack-overflow',
      href: 'https://stackoverflow.com/users/6244047/thomas-gotwig',
      text: 'Check out my contributions on Stackoverflow 📚',
    },
    {
      name: 'Dev',
      class: 'dev',
      href: 'https://dev.to/tgotwig',
      text: 'Check out my writings on dev.to ✍️',
    },
  ]

  ngOnInit() {
    if (this.store.HOME_ANIMATION) {
      gsap.from('#left', { opacity: 0, duration: 1, x: -50, y: -50 })
      gsap.from('#right', { opacity: 0, duration: 1, x: 50, y: -50 })
      gsap.from('#block1', { opacity: 0, duration: 1.5, delay: 0.4 })
      gsap.from('#block2', { opacity: 0, duration: 1.5, delay: 0.6 })
      gsap.from('#block3', { opacity: 0, duration: 1.5, delay: 0.8 })
      gsap.from('.material-icons', { opacity: 0, delay: 1, duration: 2 })
    } else {
      gsap.from('#left,#right,#block1,#block2,#block3', { opacity: 0 })
    }
    this.store.HOME_ANIMATION = false
  }

  constructor(public store: StoreService) {}
}
