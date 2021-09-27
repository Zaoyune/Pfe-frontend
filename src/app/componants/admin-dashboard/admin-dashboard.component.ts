import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from "../../SecurityServices/authentification.service";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  public article:any;
  constructor(public auth:AuthentificationService) { }

  ngOnInit(): void {
    this.auth.IsAdmin();
  }
  onSaveArticle(art:any) {
    this.auth.saveResource(art).subscribe(data=>{
      this.article=data;
      alert("article enregistré avec succés")
    })
  }

  onSaveUser(art:any) {
    this.auth.AddUser(art).subscribe(data=>{
      this.article=data;
      alert("article enregistré avec succés")
    })
  }
}
