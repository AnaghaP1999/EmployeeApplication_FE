import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  items:any;
  constructor(private service:EmployeeserviceService) {}

  ngOnInit(): void {
    this.service.getEmployees().subscribe((data=>{
      this.items=data;
      // console.log(data);
    }))
  }
}
