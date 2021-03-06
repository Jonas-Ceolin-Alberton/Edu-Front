import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Inject } from '@angular/core';


export class SvgIconBuilder {
    constructor(@Inject( MatIconRegistry) iconReg: MatIconRegistry, @Inject(DomSanitizer) sanitizer: DomSanitizer ) {
        iconReg.addSvgIcon('atividades', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/atividades.svg'))
        iconReg.addSvgIcon('add', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/add.svg'))
        iconReg.addSvgIcon('editar', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/editar.svg'))
        iconReg.addSvgIcon('enviar', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/enviar.svg'))
        iconReg.addSvgIcon('more', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/more.svg'))
        iconReg.addSvgIcon('video', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/video.svg'))
        iconReg.addSvgIcon('imagem', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/imagem.svg'))
        iconReg.addSvgIcon('filtro', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/filtro.svg'))
        iconReg.addSvgIcon('criador', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/criador.svg'))
        iconReg.addSvgIcon('solicitacoes', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/solicitacoes.svg'))
        iconReg.addSvgIcon('reproduzir', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/reproduzir.svg'))
        iconReg.addSvgIcon('fechar', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/fechar.svg'))
        iconReg.addSvgIcon('minhas_atividades', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/minhas_atividades.svg'))
        iconReg.addSvgIcon('menu', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu.svg'))
        iconReg.addSvgIcon('certificados', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/certificados.svg'))
        iconReg.addSvgIcon('account', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/account.svg'))
        iconReg.addSvgIcon('playlist', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/playlist.svg'))
        iconReg.addSvgIcon('exit', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/exit.svg'))
        iconReg.addSvgIcon('person', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/person.svg'))
        iconReg.addSvgIcon('estrela', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/estrela.svg'))
        iconReg.addSvgIcon('configuracoes', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/configuracoes.svg'));
    }
}