import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatMenuModule,
  MatToolbarModule, MatIconModule,
  MatSidenavModule, MatListModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class MaterialModule {

}