import { Component, OnInit } from '@angular/core';
import { fail } from 'assert';
import { PostService } from '../services/postservice';


@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css'],
  providers: [PostService]
})
export class Test1Component implements OnInit {
name: string;
Email: string;
Phone: number;
Address:Address;
hobbies:string[];
ShowHobbies: boolean;

  constructor() {
    this. name='Vikash';
    this. Email='Vikash130891@gmail.com';
    this. Phone=9798995375;
    this. Address={
  street: '59 1174/1 room no-102',
  locality: 'Ayappa Society hyderabad madhapur'
 }
    this.hobbies=[ 'Photography', 'Cooking', 'Movies', 'Games' ];
    this.ShowHobbies=true;
  }
  ToggleHobbies(){
    if( this.ShowHobbies==true)  {
      this.ShowHobbies=false;
    }
    else{
      this.ShowHobbies=true;
    }
  }

  addHobby(hob){this.hobbies.push(hob);}

  DeleteHobbie(i){
    this.hobbies.splice(i,1);
  }

  ngOnInit() {
 }
}
interface Address{
  street: string;
  locality: string;}



