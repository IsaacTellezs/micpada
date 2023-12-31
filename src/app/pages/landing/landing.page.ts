import { Component, OnInit } from '@angular/core';
import { AutheticationService } from '../../authetication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  user:any
  constructor(public authService: AutheticationService, public route: Router) {
    this.user = authService.getProfile()
  }
  ngOnInit() {
    this.authService.user$.subscribe((user) => {
      this.user = user;
      console.log('Usuario actualizado:', this.user);
    });
  }

  async getUserProfile() {
    try {
      this.user = await this.authService.getProfile();
      console.log('Usuario recuperado:', this.user);
    } catch (error) {
      console.error('Error al recuperar el perfil del usuario:', error);
    }
  }

  async logout(){
    this.authService.signOut().then(()=>{
      this.route.navigate(['/login'])
    }).catch((error)=>{
      console.log(error);
      
    })
  }

}
