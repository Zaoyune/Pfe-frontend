import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Environment} from "./environment";
import {Router, RouterLink} from "@angular/router";
import {AuthentificationService} from "../SecurityServices/authentification.service";

@Injectable({
  providedIn: 'root'
})
export class ManagerService {


  constructor(private http: HttpClient,private r:Router,private auth:AuthentificationService) {
  }

  getArticleByCategory(category: string | undefined) {
    return this.http.get(Environment.host + '/getArticlesBycategories/' + category);
  }

  get5FirstArticleByCategory(category: string | undefined) {
    return this.http.get(Environment.host + '/getFirstArticlesByCategories/' + category);
  }

  getArticleById(id: string) {
    return this.http.get(Environment.host +'/articles/' + id + '?projection=p2');
  }
  getRatings(s:string){
    return this.http.get(s)
  }

  goArticle(id:string) {
    this.r.navigateByUrl('/product/' + id)
  }
}
