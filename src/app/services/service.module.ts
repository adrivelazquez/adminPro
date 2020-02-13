import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService, UsuarioService, SidebarService, SharedService } from './service.index';
import { HttpClientModule } from '@angular/common/http';
import { LoginGuardGuard } from './guards/login-guard.guard';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SettingsService,
    SidebarService,
    SharedService,
    UsuarioService,
    LoginGuardGuard
  ],
  declarations: []
})
export class ServiceModule { }
