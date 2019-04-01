import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import Img from 'gatsby-image';
import './Projects.css';
import projectList from '../../data/projects.json';
import classNames from 'classnames';

function Projects({ projectImgs }) {
  const [selectedType, setSelectedType] = useState('react');

  const selectChange = (e) => {
    setSelectedType(e)
  }

  return(
    <section id="projects" className="section projects">
      <h2 className="text-center">PROJECTS</h2>
      <div className="section-content">
        <div className="subheader">
          <Nav variant="tabs" defaultActiveKey="react">
            <Nav.Item>
              <Nav.Link eventKey="front-end" onSelect={selectChange} value="front-end" className={classNames(selectedType === 'front-end' ? 'bg-primary text-white': '')}>Front End</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="react" onSelect={selectChange} value="react" className={classNames(selectedType === 'react' ? 'bg-primary text-white': '')}>React</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="back-end" onSelect={selectChange} value="back-end" className={classNames(selectedType === 'back-end' ? 'bg-primary text-white': '')}>Back End</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div className="project-list">
          {projectList.map(project => {
            const isSelectedType = selectedType === project.type;
            const singleCardClass = classNames("single-card ", { hide: !isSelectedType });
            const image = projectImgs.find(n => n.node.relativePath === `projects/${project.img}`)
            const imageSizes = image.node.childImageSharp.sizes;
            return (
              <div className={singleCardClass} key={project.url}>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <div className="card-img">
                    <Img 
                      title={project.name}
                      alt={`Screenshot of Project - ${project.name}`}
                      sizes={imageSizes}
                      className="card-img_src center-block"
                    />
                  </div>
                  <div className="blue-divider" />
                  <div className="card-info">
                    <h4 className="card-name">{project.name}</h4>
                    <p>{project.description}</p>
                  </div>
                </a>
                <a href={project.github} className="github" target="_blank" rel="noopener noreferrer">
                  <i class="fa fa-github fa-2x"></i>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects