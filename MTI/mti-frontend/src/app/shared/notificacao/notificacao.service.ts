import { Injectable } from '@angular/core';
import swal from 'sweetalert2';

@Injectable()
export class NotificacaoService {

  constructor() { }

  position: string = 'toast-top-right';
  animationType: string = 'flyRight';
  title: string = 'HI there!';
  content: string = `I'm cool toaster!`;
  timeout: number = 3000;
  toastsLimit: number = 5;
  type: string = 'default';

  isNewestOnTop: boolean = true;
  isHideOnClick: boolean = true;
  isDuplicatesPrevented: boolean = false;
  isCloseButton: boolean = true;

  types: string[] = ['default', 'info', 'success', 'warning', 'error'];
  animations: string[] = ['fade', 'flyLeft', 'flyRight', 'slideDown', 'slideUp'];
  positions: string[] = ['toast-top-full-width', 'toast-bottom-full-width', 'toast-top-left', 'toast-top-center',
    'toast-top-right', 'toast-bottom-right', 'toast-bottom-center', 'toast-bottom-left', 'toast-center'];

  public alertConfirm(titulo, texto, type) {
    return swal({
      title: titulo,
      text: texto,
      type: type,
      showCancelButton: true,
      allowOutsideClick: false,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
    })
  }

  public showAlert(titulo, texto, type) {
    swal(
      titulo,
      texto,
      type
    )
  }

  public showWithHtml(title: string, htmlInput: string, idProcesso: number) {
    swal({
      title: title,
      html: '<div id="swal-input2"></div>',
      //'<progress-bar [idProcesso]="' +idProcesso+'" [nomeOperacao]="nomeOperacao"></progress-bar>',
      showConfirmButton: false,
      showCancelButton: false
    })
    $("#progressBar").append("#swal-input2");
  }

  sucesso() {
    this.type = 'success';
    this.title = 'Sucesso';
    this.content = 'Operação realizada com sucesso.';

    this.showToastSweet_sucesso();
  }

  exibirErroAoUsuario(error){
    if(!error){
      this.erro("Ocorreu um erro inesperado!");
      return;
    }

    if(!error.error){
      this.erro("Ocorreu um erro inesperado!");
      return;
    }

    if(!error.error.fieldErrors){
      this.erro("Ocorreu um erro inesperado!");
      return;
    }

    if(!error.error.fieldErrors[0]){
      this.erro("Ocorreu um erro inesperado!");
      return;
    }

    if(!error.error.fieldErrors[0].message){
      this.erro("Ocorreu um erro inesperado!");
      return;
    }
    
    let errorMessage : string = error.error.fieldErrors[0].message;
    this.erro(errorMessage);
  }

  erro(msg: string) {
    this.type = 'error';
    this.title = 'Erro';
    this.position = 'toast-top-full-width';


    if (msg === 'Operação não realizada.') {
      this.content = '.';
    } else {
      this.content = msg;
    }
    this.showToastSweet_erro();
    //this.makeToast();
  }

  erro_fixo(msg: string, timeout: number) {
    this.type = 'error';
    this.title = 'Erro';
    this.position = 'toast-top-full-width';


    if (msg === 'Operação não realizada.') {
      this.content = '.';
    } else {
      this.content = msg;
    }
    this.showToastSweet_erro_fixo(timeout);
    //this.makeToast();
  }

  aviso(msg: string) {
    this.type = 'warning';
    this.title = 'Atenção';
    this.position = 'toast-top-full-width';

    if (msg === 'Warnig sem mensagem de texto') {
      this.content = '.';
    } else {
      this.content = msg;
    }

    this.showToastSweet_aviso();
    // this.makeToast();
  }

  public showToastSweet_erro() {
    swal({
      text: this.content,
      toast: true,
      position: 'top-end',
      timer: 5000,
      showConfirmButton: false,
      background: 'rgba(192, 64, 60, 0.9)',
      padding: 30,
      customClass:'swal2-toaster'
    })
  }

  public showToastSweet_erro_fixo(timeout: number) {
    swal({
      text: this.content,
      toast: true,
      position: 'top-end',
      timer: timeout,
      showConfirmButton: false,
      background: 'rgba(192, 64, 60, 0.9)',
      padding: 30,
      customClass:'swal2-toaster'
    })
  }

  public showToastSweet_sucesso() {
    swal({
      text: "Operação realizada com sucesso.",
      toast: true,
      position: 'top-end',
      timer: 5000,
      showConfirmButton: false,
      background: 'rgba(64, 220, 126, 1)',
      padding: 30,
      customClass:'swal2-toaster', 
    })
  }

  public sucessoUpload() {
    swal({
      text: "Upload realizado com sucesso.",
      toast: true,
      position: 'top-end',
      timer: 5000,
      showConfirmButton: false,
      background: 'rgba(64, 220, 126, 1)',
      padding: 30,
      customClass:'swal2-toaster', 
    })
  }

  public showToastSweet_aviso() {
    swal({
      text: this.content,
      toast: true,
      position: 'top-end',
      timer: 5000,
      showConfirmButton: false,
      background: 'rgba(244, 209, 61, 1)',
      padding: 30,
      customClass:'swal2-toaster', 
    })
  }

}