import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

declare var google: any;

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})

export class InfoPage implements OnInit {
  emptyInput: boolean = true;
  shopLocation: string;
  locationInput: boolean;

  @ViewChild('searchbar', { read: ElementRef }) searchbar: ElementRef;

  addressElement: HTMLInputElement = null;

  map: any;
  address = '';

  constructor(
    private router: Router,
    public platform: Platform,
  ) {
    this.platform.ready().then(() => this.loadMaps());
  }

  ngOnInit() {
  }

  loadMaps() {
    if (!!google) {
      this.initAutocomplete();
    } else {
      console.log('Error', 'Something went wrong with the Internet Connection. Please check your Internet.')
    }
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

  fullLocationMode(){
    if(this.locationInput){
      this.locationInput = false;
    }else{
      this.locationInput = true;
    }

  }

  initAutocomplete(): void {
    this.addressElement = this.searchbar.nativeElement.querySelector('.searchbar-input');
    this.createAutocomplete(this.addressElement).subscribe((location) => {
      console.log('Searchdata', location);
      let latLngObj = {'lat': location.lat(), 'long': location.lng()};
      console.log(latLngObj)
    });
  }

  createAutocomplete(addressEl: HTMLInputElement): Observable<any> {
    const autocomplete = new google.maps.places.Autocomplete(addressEl);
    return new Observable((sub: any) => {
      google.maps.event.addListener(autocomplete, 'place_changed', () => {
        const place = autocomplete.getPlace();
        if (!place.geometry) {
          sub.error({
            message: 'Autocomplete returned place with no geometry'
          });
        } else {
          let latLngObj = {'lat': place.geometry.location.lat(), 'long': place.geometry.location.lng()}
          console.log(latLngObj)
        }
      });
    });
  }



  inputTyped(searchValue : string ){
    console.log(searchValue);
  }

}
