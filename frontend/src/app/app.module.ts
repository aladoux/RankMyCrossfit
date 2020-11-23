import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListewodComponent } from './listewod/listewod.component';
import { FooterComponent } from './footer/footer.component';
import { WodsComponent } from './wods/wods.component';
import { AddWodFormComponent } from './addwodform/addwodform.component';
import {AppareilService} from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { PrincipalViewComponent } from './principal-view/principal-view.component';
import {RouterModule,Routes} from "@angular/router";
import {AuthService} from "./services/auth.service";

const appRoutes: Routes = [
  {path: 'wods' , component: WodsComponent},
  {path: 'wods/addWod' , component: AddWodFormComponent},
  {path: 'auth' , component: AuthComponent},
  {path: 'accueil' , component: PrincipalViewComponent},
  {path: '' , component: PrincipalViewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AddWodFormComponent,
    ListewodComponent,
    FooterComponent,
    WodsComponent,
    AuthComponent,
    PrincipalViewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AppareilService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
