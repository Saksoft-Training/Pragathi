import { Component } from '@angular/core';
import { Demoservice } from '../demoservice';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo-http',
  imports: [CommonModule],
  templateUrl: './demo-http.html',
  styleUrl: './demo-http.scss'
})
export class DemoHttp {
  data: any;
  constructor(private router: Router, private demoService: Demoservice) {}

 ngOnInit(){
    this.demoService.fetchData().subscribe({
      next:(users)=>{
        this.data=users.items;
        console.log(users);
      },
      error:(error)=>{
        console.error('Request failed with error:',error);
      },
      complete(){
        console.log('Request completed')
      }
    })
  }
}
