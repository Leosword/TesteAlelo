import { Component, AfterViewInit, HostListener } from '@angular/core';

declare var Prism;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  /**
   * @method ngAfterViewInit
   */
  iniciaScrollBar = 0;
  ngAfterViewInit() {
    Prism.highlightAll();
    
  }
  ngAfterViewChecked(){    
    if(this.iniciaScrollBar == 0){
      $(".sidebar").slimScroll({
        height: ($(window).height() - $('.main-header').height()) + 'px'
      });
      //$(".sidebar").slimScroll();
    }
    this.iniciaScrollBar = 1;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    $(".sidebar").slimScroll({
      height: ($(window).height() - $('.main-header').height()) + 'px'
    });
  }
}
