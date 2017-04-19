import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'browser-event-experiments2',
  templateUrl: './browser-event-experiments2.component.html',
  styleUrls: ['./browser-event-experiments2.component.css']
})
export class BrowserEventExperiments2Component implements OnInit {

  hoverSection: HTMLElement;
  constructor() { }

  ngOnInit() {
    this.hoverSection = document.getElementById('hover');
    this.hoverSection.addEventListener('mousemove', ev => {
      console.log(ev);
    });
  }

}
