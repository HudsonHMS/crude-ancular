import { NgModule } from '@angular/core';

import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@NgModule({
  declarations: [],
  imports: [
    MatIconModule
  ],
  exports: [
    MatIconModule
  ]
})
export class MaterialModule {

  private baseIconurl: string = '../../assets/icones';

  constructor( private register: MatIconRegistry, private sanitizer: DomSanitizer ) {
    register.addSvgIcon('home', this.savepath('home'));
  }

  private savepath( iconName: string ) : SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`${ this.baseIconurl }/${iconName}.svg`);
  }

}
