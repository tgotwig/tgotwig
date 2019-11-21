import { Component } from '@angular/core'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  navLinks = [
    {
      path: '/',
      label: 'Home'
    },
    {
      path: '/services',
      label: 'Services'
    },
    {
      path: '/certificates',
      label: 'Certificates'
    }
  ]
}
