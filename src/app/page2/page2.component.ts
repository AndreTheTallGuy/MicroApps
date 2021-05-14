import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  constructor(  
    private renderer: Renderer2,  
    private el: ElementRef,  
    @Inject(DOCUMENT) private document: Document  
  ) { console.log("in constructor");
  }  
  
  ngOnInit() {  
      // APP 1  
      console.log("in onInit");
      
      const appTestOne = this.renderer.createElement('app-test-one');  
      this.renderer.appendChild(this.el.nativeElement, appTestOne);  
      const s = this.renderer.createElement('script');  
      s.type = 'text/javascript';  
      s.src = './assets/Library.js';  
      this.renderer.appendChild(this.document.body, s);  
  }  
  
}
