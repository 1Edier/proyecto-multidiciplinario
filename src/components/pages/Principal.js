import React, { useState } from 'react';
import Taco from '../../img/logo.png';
import Card from '../moleculas/Cards';
import Icon_agregar from '../../img/icono_agregar.png';
import '../../css/App.css';
import '../../css/Cards.css';
import Swal from 'sweetalert2';

const Datos = {
  Cards: [
    {
      id: 1,
      estatus: "Disponible",
      imagenSrc: Taco,
      imagenWidth: "210",
      imagenHeight: "200",
      color1: "titulo_blanco",
      className: "card-btn1",
      Tex_btn: "Editar",
      Tex_btn1: "Eliminar",
      Eliminar_btn: "card-btn",
      titulo: "Taco de bistec",
    },
    {
      id: 2,
      estatus: "Disponible",
      imagenSrc: Taco,
      imagenWidth: "210",
      imagenHeight: "200",
      color1: "titulo_blanco",
      className: "card-btn1",
      Tex_btn: "Editar",
      Tex_btn1: "Eliminar",
      Eliminar_btn: "card-btn",
      titulo: "Taco de ojo",
    },
    {
      id: 3,
      estatus: "Disponible",
      imagenSrc: Taco,
      imagenWidth: "210",
      imagenHeight: "200",
      color1: "titulo_blanco",
      className: "card-btn1",
      Tex_btn: "Editar",
      Tex_btn1: "Eliminar",
      Eliminar_btn: "card-btn",
      titulo: "Taco de lengua",
    },
    {
      id: 4,
      estatus: "Agregar nuevos tacos",
      imagenSrc: Icon_agregar,
      imagenWidth: "210",
      imagenHeight: "270",
      className: "card-btn1",
      Tex_btn: "agregar",
      Eliminar_btn: "boton4",
      color1: "titulo_blanco",
    },
  ],
};

function Principal() {
  const [cards, setCards] = useState(Datos.Cards);

  const handleDeleteCard = (id) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
  }

  const handleDete = (id) => {
    Swal.fire({
      title: '¿Eliminar tarjeta?',
      text: '¿Estás seguro de que deseas eliminar esta tarjeta?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        handleDeleteCard(id);
      }
    });
  };

  return (
    <section className="product-card-container">
      {cards.map((card, index) => (
        <Card key={card.id} {...card} onDelete={() => handleDete(card.id)} />
      ))}
    </section>
  );
}

export default Principal;
