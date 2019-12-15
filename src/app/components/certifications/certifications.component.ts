import { Component } from '@angular/core'
declare var gsap: any

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent {
  items = [
    {
      name: 'Education',
      cert: [
        {
          preview: 'assets/img/bachelor.png',
          download: '../../assets/pdf/bachelor.pdf'
        },
        {
          preview: 'assets/img/gcb2017.jpg',
          download: '../../assets/pdf/gcb2017.pdf'
        },
        {
          preview: 'assets/img/gcb2015.jpg',
          download: '../../assets/pdf/gcb2015.pdf'
        }
      ]
    },
    {
      name: 'Jobs',
      cert: [
        {
          preview: 'assets/img/arago.jpg',
          download: '../../assets/pdf/arago.pdf'
        },
        {
          preview: 'assets/img/jlu.jpg',
          download: '../../assets/pdf/jlu.pdf'
        },
        {
          preview: 'assets/img/tci.jpg',
          download: '../../assets/pdf/tci.pdf'
        },
        {
          preview: 'assets/img/infobase.jpg',
          download: '../../assets/pdf/infobase.pdf'
        },
        {
          preview: 'assets/img/hagel.jpg',
          download: '../../assets/pdf/hagel.pdf'
        },
        {
          preview: 'assets/img/thm.jpg',
          download: '../../assets/pdf/thm.pdf'
        }
      ]
    }
  ]

  ngOnInit() {
    gsap.from('.mat-tab-group', {
      opacity: 0,
      duration: 1.5,
      y: -50
    })
  }
}
