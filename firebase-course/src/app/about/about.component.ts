import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as firebase from  'firebase/app';
import  'firebase/firestore';
import { Course } from 'app/model/course';
import {AngularFirestore} from '@angular/fire/firestore';
import { of } from 'rxjs';


@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  save(){

  }

}
