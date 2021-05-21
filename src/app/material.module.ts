import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

const materialModules = [MatButtonModule, MatToolbarModule, MatIconModule];

@NgModule({
  imports: materialModules,
  exports: [materialModules],
})
export class MaterialModule {
  constructor() {}
}
