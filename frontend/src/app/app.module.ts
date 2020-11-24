import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListewodComponent } from './listewod/listewod.component';
import { FooterComponent } from './footer/footer.component';
import { AddWodFormComponent } from './addwodform/addwodform.component';
import { AuthComponent } from './auth/auth.component';
import { PrincipalViewComponent } from './principal-view/principal-view.component';
import {RouterModule,Routes} from "@angular/router";
import {AuthService} from "./services/auth.service";
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import {HttpClientModule} from '@angular/common/http';
import { WodService} from './wod.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  {path: 'wods' , component: ListewodComponent},
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
    HttpClientModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    BrowserAnimationsModule,
  ],
  providers: [AuthService, WodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
