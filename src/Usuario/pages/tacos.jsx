import ProjectCard from "../components/organisms/projectcard";
import Tacos1 from "../assets/taquito.webp";
import Tacos2 from "../assets/taquito.webp";
import Tacos3 from "../assets/taquito.webp";
import "../css/styles.css";
import "../informacion"

function Tacos({ txtIdioma }) {
  const {
    titulo,
    taco1: {
      titulo: titulotaco1,
      descripcion: descripciontaco1,
      alt: altProyecto1,
      title: titleProyecto1,
    },
    taco2: {
      titulo: titulotaco2,
      descripcion: descripciontaco2,
      alt: altProyecto2,
      title: titleProyecto2,
    },
    taco3: {
      titulo: titulotaco3,
      descripcion: descripciontaco3,
      alt: altProyecto3,
      title: titleProyecto3,
    },
  } = txtIdioma.TipoTaco;

  return (
    <section id="tacos">
      <h2 className="section-titulo">{titulo}</h2>
      <div className="cards">
        <ProjectCard
          name={titulotaco1}
          description={descripciontaco1}
          img={Tacos1}
          alt={altProyecto1}
          title={titleProyecto1}
        />
        <ProjectCard
          name={titulotaco2}
          description={descripciontaco2}
          img={Tacos2}
          alt={altProyecto2}
          title={titleProyecto2}
        />
        <ProjectCard
          name={titulotaco3}
          description={descripciontaco3}
          img={Tacos3}
          alt={altProyecto3}
          title={titleProyecto3}
        />
      </div>
    </section>
  );
}

export default Tacos;
