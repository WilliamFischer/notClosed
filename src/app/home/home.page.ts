import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  searchMode: boolean;
  shop: string;

  constructor(
    private router: Router
  ) {}

  searchTrigger(){
    if(this.searchMode){
      this.searchMode = false
    }else{
      this.searchMode = true;
    }
  }

  goToInfo(){
    this.router.navigateByUrl('/info');
  }

  showShop(shop) {
    console.log(shop);
    if(!this.shop){
      this.shop = shop
    }else{
      this.shop = ''
    }

  }
}
