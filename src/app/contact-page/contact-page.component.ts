import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';
//import { fakeListings } from '../fake-data';
import { ListingsService } from '../listing.service';
//test

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
//Adding member variables
email: string = '';
message: string = '';
listing: Listing;
  constructor(private route: ActivatedRoute, 
    private router: Router,
    private listingsService: ListingsService
    ) { }

  ngOnInit(): void {
    //pulling the lisitng id from the url parameter and using it to select the lsitng from the data
    const id = this.route.snapshot.paramMap.get('id');
    //this.listing = fakeListings.find(listing => listing.id == id);   //old code
    this.listingsService.getListingById(id)
    .subscribe(listing => {
      this.listing = listing;  //Using this listing details to add a starting content to message variable
      this.message = `Hi, I am interested in your ${this.listing.name.toLowerCase()}!`
    })        
  
  }
  //Adding mrthod to call when send button is clicked
  sendMessage(): void {
    alert('Your message has been sent!');
    this.router.navigateByUrl('/listings');
  }
 

}
