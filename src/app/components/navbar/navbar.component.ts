import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  navLinks = [
    {
      path: "/",
      label: "Home"
    },
    {
      path: "/services",
      label: "Services"
    },
    {
      path: "/certificates",
      label: "Certificates"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
