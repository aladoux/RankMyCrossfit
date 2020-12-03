import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { ListeweightliftingComponent } from './listeweightlifting/listeweightlifting.component';
import { AddWeightliftingFormComponent } from './addweightliftingform/addweightliftingform.component';
import { ListewodComponent } from './listewod/listewod.component';
import { WodDisplayComponent } from './woddisplay/woddisplay.component';
import { AddWodFormComponent } from './addwodform/addwodform.component';
import { PrincipalViewComponent } from './principal-view/principal-view.component';
import { ModifyWeightliftingFormComponent } from './modifyweightliftingform/modifyweightliftingform.component';
import { WeightliftingDisplayComponent } from './weightliftingdisplay/weightliftingdisplay.component';

export const appRoutes: Routes = [
  {
      path: 'signup', component: UserComponent,
      children: [{ path: '', component: SignUpComponent }]
  },
  {
      path: '', redirectTo: '/signup', pathMatch: 'full'
  },
  {
    path: 'weightliftings/modify/:id' , component: ModifyWeightliftingFormComponent
  },
  {
    path: 'weightliftings' , component: ListeweightliftingComponent
  },
  {
    path: 'weightliftings/add' , component: AddWeightliftingFormComponent
  },
  {
    path: 'wods' , component: ListewodComponent
  },
  {
    path: 'wods/:id' , component: WodDisplayComponent, pathMatch: 'full'
  },
  {
    path: 'weightliftings/:id' , component: WeightliftingDisplayComponent, pathMatch: 'full'
  },
  {
    path: 'wods/add' , component: AddWodFormComponent
  },
 /* {
    path: 'login' , component: LoginPageComponent
  },*/
  {
    path: 'accueil' , component: PrincipalViewComponent
  },
  {
    path: '' , component: PrincipalViewComponent
  }
];
