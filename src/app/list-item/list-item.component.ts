import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  constructor( private _api: ApiService) { }

  submitted = false;
  product = new Product('', '', '', 0);

  onSubmit(data: Product) {
    this.submitted = true;
    console.log('data', data);
    this._api.addItemToList(data);
  }

  ngOnInit() {

  }

}
