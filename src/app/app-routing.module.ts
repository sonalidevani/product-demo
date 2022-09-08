import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helper/Auth/authguard';
import { HomeComponent } from './modules/Account/home/home/home.component';

const accountModule = () => import('./modules/Account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./modules/users/users.module').then(x => x.UsersModule);
const ProductModule = () => import('./modules/product/product.module').then(x => x.ProductModule);
const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
  { path: '', loadChildren: accountModule },
  { path: 'product', loadChildren: ProductModule, canActivate: [AuthGuard] },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
