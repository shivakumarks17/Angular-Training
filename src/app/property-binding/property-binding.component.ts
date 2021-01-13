import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {


  name = 'Sagar gowda';
  imageUrl = 'https://cdn.pixabay.com/photo/2021/01/05/12/55/springbok-5891080__340.jpg';
  student2 = 'shivakumar'
  constructor() {
    console.log('component object created')
  }

  onClick(event,headerElement){
    console.log(headerElement.innerHtml);
    console.log(event);
    console.log('button clicked')
  }

  ngOnInit(): void {
  }

}
