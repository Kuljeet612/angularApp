import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';
//import { fakeListings, fakeMyListings } from '../fake-data';
import { ListingsService } from '../listing.service';

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.css']
})
export class EditListingPageComponent implements OnInit {
listing: Listing;
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private listingsService: ListingsService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    //this.listing = fakeListings.find(listing => listing.id === id);
    this.listingsService.getListingById(id)
  .subscribe(listing => this.listing = listing);
  }

  onSubmit({name, description, price}): void {
    //alert('Saving changes to the listing...');
    this.listingsService.editListing(this.listing.id, name, description, price)
    .subscribe(() => {
      this.router.navigateByUrl('/my-listings');
    })
    // this.router.navigateByUrl('/my-listings');
  }

}
