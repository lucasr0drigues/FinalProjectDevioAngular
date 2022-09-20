import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContaRoutingModule } from './conta.route';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { ContaAppComponent } from './conta.app.component';

@NgModule({
  declarations: [CadastroComponent, LoginComponent, ContaAppComponent],
  imports: [
    CommonModule,
    ContaRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class ContaModule {}
