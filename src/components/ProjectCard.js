import { Col } from "react-bootstrap";


export const ProjectCard = ({ title, description, imgUrl, sourceUrl, siteUrl }) => {
  return (
    <Col  sm={true} md={6}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="Project" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="button-container">
            <a href = {sourceUrl}>Source Link</a>
            <a href={siteUrl}>Site Link</a>
          </div>
        </div>
      </div>
    </Col>
  )
}
