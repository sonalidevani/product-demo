import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { User } from '../../../../class/user';
import { AccountService } from '../../../../services/account.services';
import { AlertService } from '../../../../services/alert.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  user: User;
  public isLoggedin = localStorage.getItem('user') || false;

  constructor(private accountService: AccountService,
    private route: Router,
    private alertService: AlertService) {
    this.user = this.accountService.userValue;
  }

  navigateTo(path: string) {
    this.route.navigate([path]);
  }

  alert() {
    this.alertService.error("please Login first")
  }
}
