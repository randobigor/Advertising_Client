import {User} from './User';
import {Category} from './Category';
import {Region} from './Region';
import DateTimeFormat = Intl.DateTimeFormat;
import {Picture} from './Picture';

export class Advert{
  id: number;
  user: User;
  category: Category;
  region: Region;
  title: string;
  description: string;
  pictures: Array<Picture>;
  price: number;
  publicationDate: DateTimeFormat;


  constructor(id?: number, user?: User, category?: Category, region?: Region, title?: string, description?: string, pictures?: Array<Picture>, price?: number, publicationDate?: Intl.DateTimeFormat) {
    this.id = id;
    this.user = user || new User();
    this.category = category || new Category();
    this.region = region || new Region();
    this.title = title;
    this.description = description;
    this.pictures = pictures || new Array<Picture>();
    this.price = price;
    this.publicationDate = publicationDate;
  }
}
