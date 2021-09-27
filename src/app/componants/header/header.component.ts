import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {CaddyService} from "../../services/caddy.service";
import {Environment} from "../../services/environment";
import {Caddy} from "../Model/Caddy";
import {AuthentificationService} from "../../SecurityServices/authentification.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    public c: Caddy | any;

  constructor(private r: Router, public caddy: CaddyService,public authService:AuthentificationService,public router:Router) {
  }

  categories = ["laptops", "smartphones", "cameras", "Accessories"]

  host: any = Environment.host

  nb:any
  ngOnInit(): void {

  }

  goTocategory(st: string) {
    console.log("clicked : " + st)
    this.r.navigateByUrl('/listproduct/' + st)

  }


  deleteCAddy(id: any) {
    this.caddy.removeFromCaddy(id)
  }

  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  onLogin() {
    this.router.navigateByUrl("/login")
  }
}
