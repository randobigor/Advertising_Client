import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url = environment.url;

  constructor(private http: HttpClient) { }

  public get(queryUrl: string) {
    return this.http.get(`${this.url}${queryUrl}`);
  }

  public getById(queryUrl: string, id: number) {
    return this.http.get(`${this.url}${queryUrl}/${id}`);
  }

  public submit(queryUrl: string, body: any) {
    return this.http.post(`${this.url}${queryUrl}`, body);
  }
}
