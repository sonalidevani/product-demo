import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { first } from 'rxjs';
import { User } from './class/user';
import { AccountService } from './services/account.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loginUser = localStorage.getItem('user') || false;
  user!: User;
  constructor(private accountService: AccountService,
    private router: Router,
    private httpClient: HttpClient) {
    this.accountService.user.subscribe(x => this.user = x);
  }
  ngOnInit(): void {
    // this.accountService.getAll()
    //   .pipe(first())
    //   .subscribe(users => localStorage.setItem('allUsers', JSON.stringify(users))); {
    // }
  }

  logout() {
    this.accountService.logout();
    this.loginUser = false;
    this.router.navigateByUrl('registration');
  }
}
