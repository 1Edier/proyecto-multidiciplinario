import { useState } from "react";
import "../../css/projectcard.css";

function ProjectCard({ name, description, img, alt, title, webLink, webSource }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="card">
      <div
        className="card-img-container"
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
      >
          <img className="card-img" loading="lazy" src={img} alt={alt} title={title} />
        <div
          className={`card-buttons ${hovered ? "card-buttons--visible" : ""}`}
        >
          {webLink && (
            <a className="card-view-button" href={webLink} target="_blank" rel="noopener noreferrer">
              View
            </a>
          )}
          {webSource && (
            <a className="card-code-button" href={webSource} target="_blank" rel="noopener noreferrer">
              Code
            </a>
          )}
        </div>
      </div>
      <div className="card-text">
        <h2 className="card-titulo">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
