import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  emptyInput: boolean = true;
  shopLocation: string;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  getLocation($event){
    var searchQuery = $event.srcElement.value;

    if(searchQuery.length >= 1){
      this.emptyInput = false;
    }else{
      this.emptyInput = true;
    }
  }

  goHome(){
    this.router.navigateByUrl('/home');
  }

}
