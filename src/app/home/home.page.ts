import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  searchMode: boolean;

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
}
