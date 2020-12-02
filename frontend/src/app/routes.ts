import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';

export const appRoutes: Routes = [
  {
      path: 'signup', component: UserComponent,
      children: [{ path: '', component: SignUpComponent }]
  },
  {
      path: '', redirectTo: '/signup', pathMatch: 'full'
  },
  /*{path: 'weightliftings' , component: ListeweightliftingComponent},
  {path: 'weightliftings/add' , component: AddWeightliftingFormComponent},
  {path: 'wods' , component: ListewodComponent},
  {path: 'wods/:id' , component: WodDisplayComponent, pathMatch: 'full'},
  {path: 'weightliftings/:id' , component: WodDisplayComponent, pathMatch: 'full'},
  {path: 'wods/add' , component: AddWodFormComponent},
  {path: 'login' , component: LoginPageComponent},
  {path: 'accueil' , component: PrincipalViewComponent},
  {path: '' , component: PrincipalViewComponent}*/
];
