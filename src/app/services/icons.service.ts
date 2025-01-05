import {Injectable} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import {environment} from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class IconsService {
  constructor(domSanitizer: DomSanitizer, matIconRegistry: MatIconRegistry) {
    matIconRegistry.addSvgIcon('ps', domSanitizer.bypassSecurityTrustResourceUrl(`${environment.base}assets/icons/ps-icon.svg`));
  }
}
