import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-page1-component',
  templateUrl: './page1-component.component.html',
  styleUrls: ['./page1-component.component.css']
})
export class Page1ComponentComponent implements OnInit {
  constructor(  
    private renderer: Renderer2,  
    private el: ElementRef,  
    @Inject(DOCUMENT) private document: Document  
  ) {}  

  ngOnInit(): void {
    console.log("in OnInit");
    
    const appTestTwo = this.renderer.createElement('app-test-one');  
      this.renderer.appendChild(this.el.nativeElement, appTestTwo);  
      const s = this.renderer.createElement('script');  
      s.type = 'text/javascript';  
      s.src = './assets/HowlingWolfe.js';  
      this.renderer.appendChild(this.document.body, s);  
      
  }

}
