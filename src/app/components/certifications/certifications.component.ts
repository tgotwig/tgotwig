import { Component } from '@angular/core'

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
        { url: 'assets/img/zertifikate/education/bachelor.png' },
        { url: 'assets/img/zertifikate/seminars/gcb2017.jpg' },
        { url: 'assets/img/zertifikate/seminars/gcb2015.jpg' }
      ]
    },
    {
      name: 'Jobs',
      cert: [
        { url: 'assets/img/zertifikate/jobs/arago.jpg' },
        { url: 'assets/img/zertifikate/jobs/jlu.jpg' },
        { url: 'assets/img/zertifikate/jobs/tci.jpg' },
        { url: 'assets/img/zertifikate/jobs/infobase.jpg' },
        { url: 'assets/img/zertifikate/jobs/hagel.jpg' },
        { url: 'assets/img/zertifikate/jobs/thm.jpg' }
      ]
    }
  ]
}
