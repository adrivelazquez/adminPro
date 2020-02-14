import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario/usuario.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  usuario: Usuario;

  imagenSubir: File;
  imagenTemp: string | ArrayBuffer;

  constructor(public _usuariService: UsuarioService) { }

  ngOnInit() {
    this.usuario = this._usuariService.usuario;
  }


  guardar( usuario: Usuario) {

    this.usuario.nombre = usuario.nombre;
    if ( !this.usuario.google) {
      this.usuario.email = usuario.email;
    }

    this._usuariService.actualizarUsuario(this.usuario)
      .subscribe(
        resp => {
          console.log( resp );
        });

  }


  seleccionarImagen( archivo: File ){

    if ( !archivo) {
      this.imagenSubir = null;
      return;
    }

    if ( archivo.type.indexOf('image') < 0) {
      swal( 'Sólo imágenes', 'El archivo seleccionado no es una imagen', 'error');
      this.imagenSubir = null;
      return;
    }

    this.imagenSubir = archivo;

    let reader = new FileReader();
    let urlImagenTemp = reader.readAsDataURL( archivo );

    reader.onloadend = () => {
     this.imagenTemp = reader.result;

    }

    console.log(event);

  }

  cambiarImagen() {
    this._usuariService.cambiarImagen(this.imagenSubir, this.usuario._id);
  }

}
