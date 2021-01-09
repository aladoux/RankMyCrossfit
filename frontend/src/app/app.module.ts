import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
import {DialogRecordWeiComponent} from './dialog-record-wei/dialog-record-wei.component';
import {DialogRecordWodComponent} from './dialog-record-wod/dialog-record-wod.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListewodComponent } from './listewod/listewod.component';
import { FooterComponent } from './footer/footer.component';
import { AddWodFormComponent } from './addwodform/addwodform.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PrincipalViewComponent } from './principal-view/principal-view.component';
import { RouterModule,Routes } from "@angular/router";
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { WodService } from './shared/wod.service';

import { WeightliftingService } from './shared/weightlifting.service';
import { AddWeightliftingFormComponent } from './addweightliftingform/addweightliftingform.component';
import { WodDisplayComponent } from './woddisplay/woddisplay.component';
import { WeightliftingDisplayComponent } from './weightliftingdisplay/weightliftingdisplay.component';

import { ModifyWeightliftingFormComponent } from './modifyweightliftingform/modifyweightliftingform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListeweightliftingComponent } from './listeweightlifting/listeweightlifting.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ModifyWodFormComponent } from './modifywod/modifywodform.component';

//routes
import {appRoutes} from './routes';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserService } from './shared/user.service';

import {AuthGuard} from './auth/auth.guard';
import {AuthInterceptor} from './auth/auth.interceptor';
import { ListRecordWeiComponent } from './list-record-wei/list-record-wei.component';
import { ListRecordWodComponent } from './list-record-wod/list-record-wod.component';
import { DialogModifyRecordWodComponent } from './dialog-modify-record-wod/dialog-modify-record-wod.component';
import { DialogModifyRecordWeiComponent } from './dialog-modify-record-wei/dialog-modify-record-wei.component';
import { DialogDisplayExerciseComponent } from './dialog-display-exercise/dialog-display-exercise.component';
import { UserRecordsGraphComponent } from './user-records-graph/user-records-graph.component';
import { UserRecordsGraphWodComponent } from './user-records-graph-wod/user-records-graph-wod.component';
import {ChartsModule} from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    WodDisplayComponent,
    AddWodFormComponent,
    AddWeightliftingFormComponent,
    ModifyWeightliftingFormComponent,
    ListewodComponent,
    FooterComponent,
    LoginPageComponent,
    PrincipalViewComponent,
    WeightliftingDisplayComponent,
    ListeweightliftingComponent,
    SignUpComponent,
    ModifyWodFormComponent,
    UserProfileComponent,
    DialogRecordWeiComponent,
    DialogRecordWodComponent,
    ListRecordWeiComponent,
    ListRecordWodComponent,
    DialogModifyRecordWodComponent,
    DialogModifyRecordWeiComponent,
    DialogDisplayExerciseComponent,
    UserRecordsGraphComponent,
    UserRecordsGraphWodComponent,
  ],
  entryComponents: [
    DialogRecordWeiComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatDialogModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    BrowserAnimationsModule,
    ChartsModule,
  ],
  providers: [WodService, WeightliftingService, UserService, AuthGuard, {
    provide:HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
