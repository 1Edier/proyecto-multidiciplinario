import ProjectCard from "../components/organisms/projectcardRe";
import Refresco1 from "../assets/coca (1).webp";
import Refresco2 from "../assets/fresca.webp";
import Refresco3 from "../assets/manzana.webp";
import "../css/styles.css";


function Refrescos({ txtIdioma }) {
  const {
    titulo,
    refresco1: {
      titulo: titulorefresco1,
      descripcion: descripcionrefresco1,
      alt: altProyecto1,
      title: titleProyecto1,
    },
    refresco2: {
      titulo: titulorefresco2,
      descripcion: descripcionrefresco2,
      alt: altProyecto2,
      title: titleProyecto2,
    },
    refresco3: {
      titulo: titulorefresco3,
      descripcion: descripcionrefresco3,
      alt: altProyecto3,
      title: titleProyecto3,
    },
  } = txtIdioma.TipoRefresco;

  return (
    <section id="refresco">
      <h2 className="section-titulo">{titulo}</h2>
      <div className="cards">
        <ProjectCard
          name={titulorefresco1}
          description={descripcionrefresco1}
          img={Refresco1}
          alt={altProyecto1}
          title={titleProyecto1}
        />
        <ProjectCard
          name={titulorefresco2}
          description={descripcionrefresco2}
          img={Refresco2}
          alt={altProyecto2}
          title={titleProyecto2}
        />
        <ProjectCard
          name={titulorefresco3}
          description={descripcionrefresco3}
          img={Refresco3}
          alt={altProyecto3}
          title={titleProyecto3}
        />
      </div>
    </section>
  );
}

export default Refrescos;
