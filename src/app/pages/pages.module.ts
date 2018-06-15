import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { AuthGuard } from '../shared/auth.guard';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {UserService} from '../shared/user.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroAntdModule.forRoot(),
    PagesRoutingModule,
  ],
  declarations: [PagesComponent],
  providers: [UserService, AuthGuard]
})
export class PagesModule { }
