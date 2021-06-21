import { Component, OnInit } from '@angular/core';
import data from '../../app/data.json';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  sampleData:any = data;
  msg!: string;
  image:string = "assets/bg.png";
  onClickMe () {
    this.msg = 'Successful';
    return this.msg;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
