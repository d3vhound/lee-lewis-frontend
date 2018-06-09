import Layout from "../components/Layout.js";
import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Error from "next/error";
import PageWrapper from "../components/PageWrapper.js";
import ProjectHero from "../components/ProjectHero.js";
import Menu from "../components/Menu.js";
import classNames from 'classnames'
import { Config } from "../config.js";
import Modal from '../components/Modal'

class Project extends Component {
  static async getInitialProps(context) {
    const { slug, apiRoute } = context.query;
    const res = await fetch(
      `${Config.apiUrl}/wp-json/wp/v2/${apiRoute}?slug=${slug}`
    );
    const project = await res.json()
    return { project };
  }

  constructor(props) {
    super(props)

    this.state = {
      showModal: false
    }
  }

  render() {

    const showModal = (id) => {
      const modal = document.getElementById('modal' + id)
      // let target = modal.dataset.target
      console.log(modal)
      modal.classList.add('is-active')
    }

    const closeModal = (id) => {
      const modal = document.getElementById('modal' + id)
      modal.classList.remove('is-active')
    }

    let modalStyles = classNames({
      'modal': true,
      'is-active': this.state.showModal
    })

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
                        <Modal id="modal1" close={() => closeModal(1)} classes={modalStyles} lbImage={project.acf.image1.url}>
                          <a onClick={e => {
                            e.preventDefault()
                            showModal(1)
                          }} href="#" data-target="modal1" className="width-50 image gallery-image bg-transfer" style={{backgroundImage: `url(${project.acf.image1.url})`}}>
                          </a>
                        </Modal>
                        <Modal id="modal2" close={() => closeModal(2)} classes={modalStyles} lbImage={project.acf.image2.url}>
                          <a onClick={e => {
                            e.preventDefault()
                            showModal(2)
                          }} href="#" data-target="modal2" className="width-50 image gallery-image bg-transfer" style={{ backgroundImage: `url(${project.acf.image2.url})` }}>
                          </a>
                        </Modal>
                    </div>
                    <div className="gallery-row">
                        <Modal id="modal3" close={() => closeModal(3)} classes={modalStyles} lbImage={project.acf.image3.url}>
                          <a onClick={e => {
                            e.preventDefault()
                            showModal(3)
                          }} href="#" className="width-50 image gallery-image bg-transfer" style={{ backgroundImage: `url(${project.acf.image3.url})` }}>
                          </a>
                        </Modal>
                        <Modal id="modal4" close={() => closeModal(4)} classes={modalStyles} lbImage={project.acf.image4.url}>
                          <a onClick={e => {
                            e.preventDefault()
                            showModal(4)
                          }} href="#" className="width-50 image gallery-image bg-transfer" style={{ backgroundImage: `url(${project.acf.image4.url})` }}>
                          </a>
                        </Modal>
                    </div>
                    <div className="video">
                      <div className="fluid-width-video-wrapper" style={{paddingTop: '56.2%'}}>
                          <iframe src="//player.vimeo.com/video/34741214?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff" id="fitvid714923"></iframe>
                      </div>
                    </div>
                    <div className="gallery-row">
                        <Modal id="modal5" close={() => closeModal(5)} classes={modalStyles} lbImage={project.acf.image5.url}>
                          <a onClick={e => {
                            e.preventDefault()
                            showModal(5)
                          }} href="#" className="width-33 image gallery-image bg-transfer" style={{ backgroundImage: `url(${project.acf.image5.url})` }}>
                          </a>
                        </Modal>
                        <Modal id="modal6" close={() => closeModal(6)} classes={modalStyles} lbImage={project.acf.image6.url}>
                          <a onClick={e => {
                            e.preventDefault()
                            showModal(6)
                          }} href="#" className="width-33 image gallery-image bg-transfer" style={{ backgroundImage: `url(${project.acf.image6.url})` }}>
                          </a>
                        </Modal>
                        <Modal id="modal7" close={() => closeModal(7)} classes={modalStyles} lbImage={project.acf.image7.url}>
                          <a onClick={e => {
                            e.preventDefault()
                            showModal(7)
                          }} href="#" className="width-33 image gallery-image bg-transfer" style={{ backgroundImage: `url(${project.acf.image7.url})` }}>
                          </a>
                        </Modal>
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