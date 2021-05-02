import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tiltSettings = {
    max: 25,
    speed: 200,
    glare: true,
    "max-glare": .4
  }

  constructor() { }

  ngOnInit(): void {
  }

}
