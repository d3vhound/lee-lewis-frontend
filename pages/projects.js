import Layout from "../components/Layout.js";
import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Error from "next/error";
import PageWrapper from "../components/PageWrapper.js";
import ProjectHero from "../components/ProjectHero.js";
import Menu from "../components/Menu.js";
import { Config } from "../config.js";

class Project extends Component {
  static async getInitialProps(context) {
    const { slug, apiRoute } = context.query;
    const res = await fetch(
      `${Config.apiUrl}/wp-json/wp/v2/${apiRoute}?slug=${slug}`
    );
    const project = await res.json()
    return { project };
  }

  render() {

    const project = this.props.project.map((project, index) => {
      return (
        <React.Fragment key={index}>
          <ProjectHero heroImage={project.acf.image1.url}/>
          <div className="section">
          <div className="container">
            <div className="columns is-desktop">
                <div className="column is-one-third-desktop">
                  <div className="left">
                    <div className="title-section framed shadow">
                      <h2 className="title">{project.acf.title}</h2>
                      <div className="separator"></div>
                      <h3 className="title">Location</h3>
                    </div>
                    <dl className="project-info">
                      <dt>Architect</dt>
                      <dd>{project.acf.architect}</dd>
                      <dt>Project Delivery</dt>
                      <dd>{project.acf.project_delivery}</dd>
                      <dt>Type of Construction</dt>
                      <dd>{project.acf.type_of_construction}</dd>
                      <dt>Owner</dt>
                      <dd>{project.acf.owner}</dd>
                    </dl>
                    <div className="separator"></div>
                  </div>
                <p>{project.acf.description}</p>
              </div>
                <div className="column">
                <div className="right">
                  <div className="gallery">
                    <div className="gallery-row">
                        <div href="#" className="width-50 image bg-transfer" style={{backgroundImage: `url(${project.acf.image1.url})`}}>
                        </div>
                        <div className="width-50 image bg-transfer" style={{ backgroundImage: `url(${project.acf.image2.url})` }}></div>
                    </div>
                    <div className="gallery-row">
                      <div className="width-50 image bg-transfer" style={{ backgroundImage: `url(${project.acf.image3.url})` }}></div>
                      <div className="width-50 image bg-transfer" style={{ backgroundImage: `url(${project.acf.image4.url})` }}></div>
                    </div>
                    <div className="video">
                      <div className="fluid-width-video-wrapper" style={{paddingTop: '56.2%'}}>
                          <iframe src="//player.vimeo.com/video/34741214?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff" id="fitvid714923"></iframe>
                      </div>
                    </div>
                    <div className="gallery-row">
                      <div className="width-33 image bg-transfer" style={{ backgroundImage: `url(${project.acf.image5.url})` }}></div>
                      <div className="width-33 image bg-transfer" style={{ backgroundImage: `url(${project.acf.image6.url})` }}></div>
                      <div className="width-33 image bg-transfer" style={{ backgroundImage: `url(${project.acf.image7.url})` }}></div>
                    </div>
                  </div>
                </div>
              </div>  
            </div>
          </div>
          </div>
        </React.Fragment>
      )
    })

    return (
      <Layout>
        <Menu menu={this.props.headerMenu} />
        {project}
      </Layout>
    );
  }
}

export default PageWrapper(Project);