import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
 

  constructor( private route: ActivatedRoute, private router: Router) {
  }
  
 
  ngOnInit() {

}
  
 
 
  ngOnDestroy(): void {
  
  }
  home(){
    this.router.navigate(['/home']);
  }
  product(){
    this.router.navigate(['/product']);
  }
  logout(){
    this.router.navigate(['/login']);
  }
  sales(){
    this.router.navigate(['/sales']);
  }
 
}
