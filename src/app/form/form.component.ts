import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import data from '../../app/data.json';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  hide = true;
  sampleData:any = data;
  constructor() { }
  DropdownValues = new FormControl('', Validators.required);
  ngOnInit(): void {
  }

}
