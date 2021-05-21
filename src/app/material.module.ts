import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

const materialModules = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
];

@NgModule({
  imports: materialModules,
  exports: [materialModules],
})
export class MaterialModule {
  constructor() {}
}
