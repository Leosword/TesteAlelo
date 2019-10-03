import { AbstractControl } from '@angular/forms';
import { AppUtil } from '../../../../shared/app-util';

export function validadeCampoSenha(control: AbstractControl): {[key: string]: boolean}  {
    const campoSenha = control.get('senha'); 
    const tpProfile = control.get('profile');     
  
    if (AppUtil.isBlankOrNull(campoSenha.value) && tpProfile.value == 'LOCAL') {
        return {
            modeloReq: true 
        } 
    }
 
    return null;
}