import { Component, OnInit } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {Advert} from '../../../models/Advert';
import {HttpService} from '../../../services/http.service';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-advert-view',
  templateUrl: './advert-view.component.html',
  styleUrls: ['./advert-view.component.scss']
})
export class AdvertViewComponent implements OnInit {

  private advertId: number;
  env = environment;
  advert: Advert = new Advert();

  constructor(private httpC: HttpClient, private activatedRoute: ActivatedRoute) {
    this.advertId = activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.httpC.get(this.env.url + `${this.advertId}`).subscribe((advert: Advert) => {
      this.advert = advert;
      console.log(this.advert);
    })
  }

}
