import {Component, OnInit} from '@angular/core';
import {Advert} from '../../../models/Advert';
import {HttpService} from '../../../services/http.service';
import {ActivatedRoute} from '@angular/router';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-advert-list',
  templateUrl: './advert-list.component.html',
  styleUrls: ['./advert-list.component.scss']
})
export class AdvertListComponent implements OnInit {

  private categoryId: number;
  env = environment;
  adverts: Array<Advert> = new Array<Advert>();

  constructor(private httpS: HttpService, private activatedRoute: ActivatedRoute) {
    this.categoryId = activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.httpS.getById("ac", this.categoryId).subscribe((adverts: Array<Advert>) => {
      console.log(this.adverts);
      this.adverts = adverts;
    });
  }

  counter(n: number) {
    return new Array(n);
  }

}
