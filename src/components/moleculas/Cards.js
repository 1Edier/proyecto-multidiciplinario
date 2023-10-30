import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Imagen from '../atoms/Imagen';
import Titulo from '../atoms/Titulo';
import Button from '../atoms/Boton';

export default function Cards(props) {
  const [newTitulo, setNewTitulo] = useState(props.titulo);
  const [newEstatus, setNewEstatus] = useState(props.estatus);
  const [newImagenSrc, setNewImagenSrc] = useState(props.imagenSrc);

  const handleEditClick = () => {
    Swal.fire({
      title: 'Edita el producto',
      html: `
        <input type="text" id="estatus" class="swal2-input" value="${newEstatus}" placeholder="Estatus">
        <input type="text" id="titulo" class="swal2-input" value="${newTitulo}" placeholder="Título">
        <input type="text" id="imagenSrc" class="swal2-input" value="${newImagenSrc}" placeholder="URL de la imagen">
      `,
      showCancelButton: true,
      confirmButtonText: 'Guardar Cambios',
      cancelButtonText: 'Cancelar',
      preConfirm: () => {
        const titulo = Swal.getPopup().querySelector('#titulo').value;
        const estatus = Swal.getPopup().querySelector('#estatus').value;
        const imagenSrc = Swal.getPopup().querySelector('#imagenSrc').value;

        if (estatus !== 'disponible' && estatus !== 'agotado'&& estatus !== 'Disponible' && estatus !== 'Agotado') {
          Swal.showValidationMessage('Estatus no válido. Debe ser "Disponible" o "Agotado".');
          return false;
        }

        if (titulo.trim() === '' || imagenSrc.trim() === '') {
          Swal.showValidationMessage('Título y URL de la imagen no pueden estar en blanco.');
          return false;
        }

        setNewTitulo(titulo);
        setNewEstatus(estatus);
        setNewImagenSrc(imagenSrc);

        // Mostrar alerta de cambios guardados
        Swal.fire('Cambios guardados', '', 'success');
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.cancel) {
        // Mostrar alerta de cancelación
        Swal.fire('Edición cancelada', '', 'info');
      }
    });
  };

 

  return (
    <div className='product-card'>
      <div className='product-image'>
        <Titulo className={props.color1} titulo={newEstatus} />
        <Imagen className='product-thumb' logosrc={newImagenSrc} logoWidth={props.imagenWidth} logoHeight={props.imagenHeight} />
      </div>
      <div className='product-info'>
        <Titulo titulo={newTitulo} />
      </div>
      <div>
        <Button className={props.className} text={props.Tex_btn} onClick={handleEditClick} />
        <Button className={props.Eliminar_btn} text={props.Tex_btn1} onClick={props.onDelete} />


      </div>
    </div>
  );
}
