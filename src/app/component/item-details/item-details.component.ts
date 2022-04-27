import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  itemList = [
    {
      Id: "1", Des: "Hàng kẹo  "
    },
    {
      Id: "2", Des: "Hàng bánh "
    },
    {
      Id: "3", Des: "Hàng bột"
    }]
  renderItem: any;
  constructor(public query: ActivatedRoute) { }

  ngOnInit(): void {
    this.query.queryParams.subscribe((data) => {
          for(let i=0;i<this.itemList.length;i++){
            if(this.itemList[i].Id==data['Id']){
              this.renderItem=this.itemList[i];
            }
          }
    })
  }

}
