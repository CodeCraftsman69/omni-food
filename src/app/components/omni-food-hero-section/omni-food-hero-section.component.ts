import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-omni-food-hero-section',
  templateUrl: './omni-food-hero-section.component.html',
  styleUrls: ['./omni-food-hero-section.component.css'],
})
export class OmniFoodHeroSectionComponent implements OnInit {
  customerData: string[] = [];

  ngOnInit(): void {
    this.customerData = [
      '../../assets/customers/customer-1.jpg',
      '../../assets/customers/customer-2.jpg',
      '../../assets/customers/customer-3.jpg',
      '../../assets/customers/customer-4.jpg',
      '../../assets/customers/customer-5.jpg',
      '../../assets/customers/customer-6.jpg',
      '../../assets/customers/ben.jpg',
      '../../assets/customers/dave.jpg',
    ];
  }
}
