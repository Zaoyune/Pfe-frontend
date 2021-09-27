import { Component, OnInit } from '@angular/core';
import {ManagerService} from "../services/manager.service";
import {Router} from "@angular/router";
import {AuthentificationService} from "../SecurityServices/authentification.service";
import {Environment} from "../services/environment";

@Component({
  selector: 'app-recom-test',
  templateUrl: './recom-test.component.html',
  styleUrls: ['./recom-test.component.css']
})
export class RecomTestComponent implements OnInit {
  public  articles: any;
  public TestRecom:any
  host=Environment.host
  categories=["laptops","smartphones","cameras","Accessories"]
  constructor(public service:ManagerService,private r:Router,private Auth:AuthentificationService) { }

  ngOnInit(): void {
    this.get5firstArticles('laptops')
    this.Auth.IsAdmin()
  }

  get5firstArticles(s:string)
  {
    this.service.get5FirstArticleByCategory(s).subscribe( data =>{
      this.articles = data
    })
  }

  getRecomArticle(id:any){
    this.Auth.recom(id).subscribe(data=>{
      //this.test=JSON.stringify(data)
      let r=data
      this.TestRecom=r
      console.log(this.TestRecom['num of ratings'])

    })
  }

}
