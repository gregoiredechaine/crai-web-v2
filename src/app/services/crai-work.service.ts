import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Portfolio, Media, Fields } from '../crai-work/Portfolio';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CraiWorkService {

  constructor(protected http: HttpClient, @Inject('BASE_URL') protected baseUrl: string) { }

  getData(): Observable<Portfolio[]> {
    var url = 'https://crai-web.azurewebsites.net/api/Projects';
    return this.http.get<Portfolio[]>(url);
  }

  getDetail(id: string): Observable<Portfolio> {
    var url = 'https://crai-web.azurewebsites.net/api/Projects/' + id;
    return this.http.get<Portfolio>(url);
  }

  getMediaData(): Observable<Media[]> {
    var url = 'https://crai-web.azurewebsites.net/api/Medias';
    return this.http.get<Media[]>(url);
  }

  getMediaForProject(id: string): Observable<Media[]> {
    var url = 'https://crai-web.azurewebsites.net/api/Medias/' + id;
    return this.http.get<Media[]>(url);
  }
}
