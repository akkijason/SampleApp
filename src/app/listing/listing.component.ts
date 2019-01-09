import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { SearchFilterPipe } from '../search-filter.pipe';
import { Product } from '../product';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  dataContent: any;
  search: any;
  prodArray: Product[] = [];
  initProdArray: Product[] = [];

  constructor(private _api: ApiService) {
    this._api.getJsonData().subscribe(res => {
    res.forEach(val => {
      this.prodArray.push(val);
    });
  });

}

  ngOnInit() {

    // this._api.getJsonData().subscribe(res => {
    //   res.forEach(val => {
    //     console.log(`product name is ${val.name}`);
    //     this.initProdArray.push(val);
    //   });
    // });
    // this.initProdArray.push(new Product('raw', 'millets', 'CSD', 20));
    // this.prodArray = this.initProdArray;
    console.log(`init called`);
    if (localStorage.getItem('tempData') !== null) {
      let temp = JSON.parse(localStorage.getItem('tempData'));
      this.prodArray.push(temp);
      console.log(`now array is ${this.prodArray[0]}`);
      localStorage.clear();
    }

  }

}
