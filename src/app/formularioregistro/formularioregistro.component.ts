import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'

@Component({
  selector: 'app-formularioregistro',
  templateUrl: './formularioregistro.component.html',
  styleUrls: ['./formularioregistro.component.css']
})
export class FormularioregistroComponent implements OnInit {

  formulario!:FormGroup;

  constructor(public fabricaDiccionario:FormBuilder) { }

  ngOnInit(): void {

    this.formulario=this.inicializarFormulario()
  }

  public analizarFormulario():void{
    console.log(this.formulario.value)
  }

  public inicializarFormulario():FormGroup{
    return this.fabricaDiccionario.group({
      iup:['nocturno',[Validators.required,Validators.minLength(6)]],
      tiporemitente:['empresa',[Validators.required]],
      idremitente:['123456789',[Validators.required]],
      nombreremitente:['andercol',[Validators.required]],
      deptoremitente:['antioquia',[Validators.required]],
      munucipioremitente:['bello',[Validators.required]],
      direccionremitente:['calle siempre viva #123',[Validators.required]],
      tipodestinatario:['persona',[Validators.required]],
      iddestinatario:['124578963',[Validators.required]],
      nombredestinatario:['pipe',[Validators.required]],
      deptodestinatario:['morroplancho',[Validators.required]],
      munucipiodestinatario:['elrobadero',[Validators.required]],
      direcciondestinatario:['esa misma #45-5',[Validators.required]],
    
    }) 
  }

}
