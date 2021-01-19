import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {
  students = [
    "sagar",
    "shiva",
    "prajwal",
    "akash",
    "bhavesh",
    "satya",
    'suresh',
    "saleem",
    "sushanth"
  ]
  message: string;
  trainerName = 'Shiva';
  employee = [
    {
      name: 'sagar',
      empid: 'ty122124',
      salary: 10000
    },
    {
      name: 'shiva',
      empid: 'ty122123',
      salary: 10000
    },
    {
      name: 'satya',
      empid: 'ty12212',
      salary: 10000
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  onDelete(index): void {
    this.students.splice(index, 1);
    this.message = `student ${index + 1} deleted successfully `;
    setTimeout(() => {
      this.message = null;
    }, 2000);
  }
  deleteObj(index) {
    this.employee.splice(index, 1);
  }
}
