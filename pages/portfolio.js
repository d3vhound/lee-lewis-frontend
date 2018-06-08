import Layout from "../components/Layout.js";
import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Error from "next/error";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper.js";
import Menu from "../components/Menu.js";
import { Config } from "../config.js";

class Post extends Component {
  static async getInitialProps(context) {
    const projectRes = await fetch(`${Config.apiUrl}/wp-json/wp/v2/projects?_embed`);
    const projects = await projectRes.json()
    return { projects };
  }


  render() {

    const projects = this.props.projects.map((project, index) => {
      return (
        <ul key={index}>
          <li>
            <Link
              as={`/projects/${project.slug}`}
              href={`/projects?slug=${project.slug}&apiRoute=projects`}
            >
              <a>{project.title.rendered}</a>
            </Link>
          </li>
        </ul>
      );
    });

    return (
      <Layout>
        <Menu menu={this.props.headerMenu} />
        <h1>Portfolio</h1>
        {projects}
      </Layout>
    );
  }
}

export default PageWrapper(Post);