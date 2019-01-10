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
    console.log(`init called`);
    this.readPostedData();
  }

  deleteItem(param: Product) {
    if (this.prodArray.filter(item => item.name === param.name)) {
      let arryIdx = this.prodArray.indexOf(param);
      this.prodArray.splice(arryIdx, 1);
    }
  }

  private readPostedData() {
    if (localStorage.getItem('tempData') !== null) {
      let temp = JSON.parse(localStorage.getItem('tempData'));
      this.prodArray.push(temp);
      console.log(`now array is ${this.prodArray[0]}`);

      setTimeout(() => {
        this.clearLocalStorage();
      }, 120000);

    }
  }

  private clearLocalStorage() {
    localStorage.clear();
  }


}
