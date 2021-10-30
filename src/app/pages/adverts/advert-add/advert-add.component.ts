import {Component, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {Advert} from '../../../models/Advert';
import {HttpService} from '../../../services/http.service';
import {Category} from '../../../models/Category';
import {Region} from '../../../models/Region';
import {Picture} from '../../../models/Picture';

@Component({
  selector: 'app-advert-add',
  templateUrl: './advert-add.component.html',
  styleUrls: ['./advert-add.component.scss']
})
export class AdvertAddComponent implements OnInit {

  blankAdPicture = environment.adPicture;
  categories: Array<Category> = new Array<Category>();
  regions: Array<Region> = new Array<Region>();
  advert: Advert = new Advert();

  constructor(private httpS: HttpService) {}

  ngOnInit(): void {
    delete this.advert.publicationDate;
    this.advert.user.id = 1;
    this.httpS.get("regions").subscribe((regions: Array<Region>) => this.regions = regions);
    this.httpS.get("c").subscribe((categories:Array<Category>) => this.categories = categories)
  }

  submitAd() {
    console.log(this.advert);
    this.httpS.submit("", this.advert).subscribe(resp => console.log(resp))
  }

  processPicture(event: any){
    let file: File = event.target.files[0];
    let reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      this.advert.pictures.push(new Picture(null, reader.result.toString()));
    }
  }
}
