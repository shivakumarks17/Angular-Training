import { Component, OnInit } from '@angular/core';
import { Bike } from './bike.model';


@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {
  // bike=[
  //   'ns 200',
  //   'duke 200',
  //   'apache 200'
  // ]
  bikes: Bike[] = [
    {
      brand: "tvs",
      model: 'apache 200',
      imageUrl: 'https://cdn.pixabay.com/photo/2016/03/27/17/59/vintage-1283299__340.jpg',
      price: 200000
    },
    {
      brand: "bmw",
      model: '1000',
      imageUrl: 'https://cdn.pixabay.com/photo/2016/04/07/06/53/bmw-1313343__340.jpg',
      price: 2000000
    },
    {
      brand: "mahindra",
      model: 'mojo',
      imageUrl: 'https://cdn.pixabay.com/photo/2016/01/19/16/46/motorcycle-1149389__340.jpg',
      price: 300000
    }
  ]
  selectedBike = this.bikes[0];
  constructor() { }

  ngOnInit(): void {
  }
  onSelectingBike(bike) {
    this.selectedBike = (bike)
  }
}
