import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListewodComponent } from './listewod/listewod.component';
import { FooterComponent } from './footer/footer.component';
import { AddWodFormComponent } from './addwodform/addwodform.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PrincipalViewComponent } from './principal-view/principal-view.component';
import {RouterModule,Routes} from "@angular/router";
import {AuthService} from "./services/auth.service";
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import {HttpClientModule} from '@angular/common/http';
import { WodService} from './services/wod.service';
import {WeightliftingService} from './services/weightlifting.service';
import {AddWeightliftingFormComponent} from './addweightliftingform/addweightliftingform.component';
import {WodDisplayComponent} from './woddisplay/woddisplay.component';
import {WeightliftingDisplayComponent} from './weightliftingdisplay/weightliftingdisplay.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListeweightliftingComponent } from './listeweightlifting/listeweightlifting.component';

const appRoutes: Routes = [
  {path: 'weightliftings' , component: ListeweightliftingComponent},
  {path: 'weightliftings/add' , component: AddWeightliftingFormComponent},
  {path: 'wods' , component: ListewodComponent},
  {path: 'wods/:id' , component: WodDisplayComponent, pathMatch: 'full'},
  {path: 'weightliftings/:id' , component: WodDisplayComponent, pathMatch: 'full'},
  {path: 'wods/add' , component: AddWodFormComponent},
  {path: 'login' , component: LoginPageComponent},
  {path: 'accueil' , component: PrincipalViewComponent},
  {path: '' , component: PrincipalViewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    WodDisplayComponent,
    AddWodFormComponent,
    AddWeightliftingFormComponent,
    ListewodComponent,
    FooterComponent,
    LoginPageComponent,
    PrincipalViewComponent,
    WeightliftingDisplayComponent,
    ListeweightliftingComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    BrowserAnimationsModule,
  ],
  providers: [AuthService, WodService, WeightliftingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
