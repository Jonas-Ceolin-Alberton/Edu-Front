import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Inject } from '@angular/core';


export class SvgIconBuilder {
    constructor(@Inject( MatIconRegistry) iconReg: MatIconRegistry, @Inject(DomSanitizer) sanitizer: DomSanitizer ) {
        iconReg.addSvgIcon('menu', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu.svg'));
    }
}