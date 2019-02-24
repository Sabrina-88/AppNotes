import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '../../../node_modules/@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage  {
    formularioDeUsuario: FormGroup;
  public arrForms: Array<any> = [];
  public txtNote = '';
  public allForms = JSON.parse(localStorage.getItem('form'));
  public teste = '';
 
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.criarFormularioDeUsuario();

  }

  enviarDados() {
  this.arrForms.push({texto: this.formularioDeUsuario.value.texto});
    this.formularioDeUsuario.reset(this.criarFormularioDeUsuario());
    localStorage.setItem('form', JSON.stringify(this.arrForms)); // string com chave e valor

    let itemForm = JSON.parse(localStorage.getItem('form')); // objeto

    this.allForms = itemForm;

    console.log(this.allForms);
  }

   edit(index) {
    this.txtNote = this.arrForms[index];
    this.arrForms.splice(index, 1);
    }

  delete(index) {
    this.arrForms.splice(index, 1);
   localStorage.setItem('form', JSON.stringify(this.arrForms))  // como o array esta primeiro deletando de acordo com a posição, para "apagar" do localStorage basta setar a variavel que ja esta atualizada 
  }


  criarFormularioDeUsuario() {
    this.formularioDeUsuario = this.formBuilder.group({
    texto: ['']
    });
  }
}