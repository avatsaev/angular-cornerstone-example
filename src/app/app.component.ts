import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CornerstoneService} from './services/cornerstone.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements  OnInit {


  imageData: any;

  constructor(public csS: CornerstoneService) {

  }


  ngOnInit() {

    for (const i of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11 , 12 , 13, 14 ,15 , 16 , 17 , 18]) {
      this.csS.fetchDicomImage(`http://localhost:4200/assets/dicom/im${i}`)
        .subscribe(res =>  this.imageData = res);
    }


  }


}
