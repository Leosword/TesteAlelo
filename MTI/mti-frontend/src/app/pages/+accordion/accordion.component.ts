import { Component, AfterViewInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';

declare var Prism;

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements AfterViewInit {
  public activeIndex: any = 0;
      cars: any[];
  
      cols: any[];

  constructor(private ngZone: NgZone, private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {
       
            this.cols = [
                { field: 'vin', header: 'Vin' },
                {field: 'year', header: 'Year' },
                { field: 'brand', header: 'Brand' },
                { field: 'color', header: 'Color' }
            ];
  }

  ngAfterViewInit() {
    Prism.highlightAll();

    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.activeIndex = [1,2,3];
        this.changeDetectorRef.detectChanges();
      }, 500);
    });

  }
}
