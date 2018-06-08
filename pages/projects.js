import Layout from "../components/Layout.js";
import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Error from "next/error";
import PageWrapper from "../components/PageWrapper.js";
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
          <div>
            <h1>{project.acf.title}</h1>
            <p>{project.acf.description}</p>
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