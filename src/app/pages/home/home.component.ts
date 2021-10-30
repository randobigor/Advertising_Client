import { Component, OnInit } from '@angular/core';
import {Category} from '../../models/Category';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories: Array<Category> = new Array<Category>();

  constructor(private httpS: HttpService) { }

  ngOnInit(): void {
    this.httpS.get("c").subscribe((categories: Array<Category>) => this.categories = categories);
  }

  counter(n: number) {
    return new Array(n);
  }

}
