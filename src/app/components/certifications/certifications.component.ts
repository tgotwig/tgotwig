import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {
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
    // {
    //   name: "Udemy",
    //   cert: [
    //     { url: "assets/img/zertifikate/udemy/7-angular.jpg" },
    //     { url: "assets/img/zertifikate/udemy/6-angular.jpg" },
    //     { url: "assets/img/zertifikate/udemy/5-js.jpg" },
    //     { url: "assets/img/zertifikate/udemy/4-r.jpg" },
    //     { url: "assets/img/zertifikate/udemy/3-meteor.jpg" },
    //     { url: "assets/img/zertifikate/udemy/2-neuralNetworks.jpg" },
    //     { url: "assets/img/zertifikate/udemy/1-python.jpg" }
    //   ]
    // },
    // {
    //   name: "Lynda",
    //   cert: [
    //     { url: "assets/img/zertifikate/lynda/8-grid.png" },
    //     { url: "assets/img/zertifikate/lynda/7-elastic.png" },
    //     { url: "assets/img/zertifikate/lynda/6-nodejs.png" },
    //     { url: "assets/img/zertifikate/lynda/5-angular.png" },
    //     { url: "assets/img/zertifikate/lynda/4-seo.png" },
    //     { url: "assets/img/zertifikate/lynda/3-ux.png" },
    //     { url: "assets/img/zertifikate/lynda/2-latex.png" },
    //     { url: "assets/img/zertifikate/lynda/1-code.png" }
    //   ]
    // },
    // {
    //   name: "Mooin",
    //   cert: [
    //     { url: "assets/img/zertifikate/mooin/3-menschMaschine.jpg" },
    //     { url: "assets/img/zertifikate/mooin/2-Netzwerksicherheit.jpg" },
    //     { url: "assets/img/zertifikate/mooin/1-mathe.jpg" }
    //   ]
    // },
    // {
    //   name: "others",
    //   cert: [{ url: "assets/img/zertifikate/others/1-ngrx.jpg" }]
    // }
  ];

  constructor() {}

  ngOnInit() {}
}
