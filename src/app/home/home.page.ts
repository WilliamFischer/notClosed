import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  searchMode: boolean;

  constructor() {}

  searchTrigger(){
    if(this.searchMode){
      this.searchMode = false
    }else{
      this.searchMode = true;
    }
  }
}
