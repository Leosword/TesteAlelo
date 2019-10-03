import { NotificacaoService } from './../shared/notificacao/notificacao.service';
import { AuthStorage } from './authentication/auth.storage';
import { Interceptor } from './authentication/inteceptor';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { LayoutModule } from '../../../core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoadingPageModule, MaterialBarModule } from 'angular-loading-page';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InputValidationComponent } from './app-validation-component';
import { DominioLdapModule } from './authentication/dominio-ldap/dominio-ldap.module';
import { AuthGuard } from './authentication/auth.guard';
import { LoginModule } from './login/login.module';
import { AuthService } from './authentication/auth.service';

@NgModule({
  imports: [
    AppRoutingModule,
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    DominioLdapModule,
    LoadingPageModule, 
    MaterialBarModule,
    HttpClientModule,
    CommonModule,
    LoginModule,
    LayoutModule.forRoot({
      skin: 'blue',
      //isSidebarLeftCollapsed: true,
      isSidebarLeftExpandOnOver: false,
      //isSidebarLeftMouseOver: true,
      isSidebarLeftMini: false,
      //sidebarRightSkin: 'dark',
      //isSidebarRightCollapsed: true,
      //isSidebarRightOverContent: true,
      //layout: 'fixed',
      sidebarLeftMenu: null
    }),
  ],
  declarations: [
    AppComponent,
    InputValidationComponent,
    HomeComponent
  ],
  providers: [
    AuthGuard, 
    AuthService,
    NotificacaoService,
    AuthStorage,

    { provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
