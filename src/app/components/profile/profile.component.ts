import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.user$.subscribe((success: any) => {
      this.user = success;
      console.log(this.user);
    });
  }

}
