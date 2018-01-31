
import {NgForm} from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  location: string;
  
head=' SEARCH FACEBOOK PAGE';
time='50';
  title = 'timesofindia';

  
  constructor() { }

  ngOnInit() {
  }

}
