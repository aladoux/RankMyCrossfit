import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ListeweightliftingComponent } from './listeweightlifting/listeweightlifting.component';
import { AddWeightliftingFormComponent } from './addweightliftingform/addweightliftingform.component';
import { ListewodComponent } from './listewod/listewod.component';
import { WodDisplayComponent } from './woddisplay/woddisplay.component';
import { AddWodFormComponent } from './addwodform/addwodform.component';
import { PrincipalViewComponent } from './principal-view/principal-view.component';
import { ModifyWeightliftingFormComponent } from './modifyweightliftingform/modifyweightliftingform.component';
import { WeightliftingDisplayComponent } from './weightliftingdisplay/weightliftingdisplay.component';
import { LoginPageComponent} from './login-page/login-page.component';
import { ModifyWodFormComponent } from './modifywod/modifywodform.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ListRecordWeiComponent } from './list-record-wei/list-record-wei.component';
import { ListRecordWodComponent } from './list-record-wod/list-record-wod.component';
import {UserRecordsGraphComponent} from './user-records-graph/user-records-graph.component';
import {UserRecordsGraphWodComponent} from './user-records-graph-wod/user-records-graph-wod.component';


import {AuthGuard} from './auth/auth.guard';

export const appRoutes: Routes = [
  {
      path: 'signup', component: SignUpComponent,
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
    path: 'wods/add' , component: AddWodFormComponent
  },
  {
    path: 'wods/:id' , component: WodDisplayComponent, pathMatch: 'full'
  },
  {
    path: 'weightliftings/:id' , component: WeightliftingDisplayComponent, pathMatch: 'full'
  },
  {
    path: 'weightliftings/:idUser/:idWei' , component: UserRecordsGraphComponent
  },
  {
    path: 'wods/modify/:id' , component: ModifyWodFormComponent
  },
  {
    path: 'wods/:idUser/:idWod' , component: UserRecordsGraphWodComponent
  },
  {
    path: 'accueil' , component: PrincipalViewComponent
  },
  {
    path: '' , component: PrincipalViewComponent
  },
  {
    path: 'login' , component: LoginPageComponent
  },
  {
    path: 'userprofile' , component: UserProfileComponent, canActivate: [AuthGuard]
  },
  {
    path: 'myRecordsWei/:id' , component: ListRecordWeiComponent
  },
  {
    path: 'myRecordsWod/:id' , component: ListRecordWodComponent
  },
];
