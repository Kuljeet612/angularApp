import { Component, OnInit } from '@angular/core';
//import { fakeListings, fakeMyListings } from '../fake-data';
import { Listing } from '../types';
import { ListingsService } from '../listing.service';

@Component({
  selector: 'app-my-listings-page',
  templateUrl: './my-listings-page.component.html',
  styleUrls: ['./my-listings-page.component.css']
})
export class MyListingsPageComponent implements OnInit {
listings: Listing[] = [];
  constructor(private listingsService: ListingsService) { }

  ngOnInit(): void {
   // this.listing = fakeListings;
   this.listingsService.getListingsForUser()
   .subscribe(listings => this.listings = listings);
  }

  onDeleteClicked(listingId: string): void {       //listingId is passed from the buttont hat is clicked
    //alert(`Deleting your lisitng with id ${listingId}`);

    //adding logic to return the listings from the existing data (instead of calling the server again) by filetring put the id that got deleted
    this.listingsService.deleteListing(listingId)                           
    .subscribe(() => {      
    this.listings = this.listings.filter( 
      listing => listing.id !== listingId          
    );
    })
  }

}
