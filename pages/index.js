import "../static/styles.scss"
import Layout from "../components/Layout.js";
import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper.js";
import Menu from "../components/Menu.js";
import { Config } from "../config.js";


const headerImageStyle = {
    marginTop: 50,
    marginBottom: 50
};

class Index extends Component {
    static async getInitialProps(context) {
        const postsRes = await fetch(
            `${Config.apiUrl}/wp-json/wp/v2/posts?_embed`
        );
        const posts = await postsRes.json();
        const pagesRes = await fetch(
            `${Config.apiUrl}/wp-json/wp/v2/pages?_embed`
        );
        const pages = await pagesRes.json();
        const projectRes = await fetch(`${Config.apiUrl}/wp-json/wp/v2/projects?_embed`);
        const projects = await projectRes.json()
        return { posts, pages, projects };
    }

    render() {
        const posts = this.props.posts.map((post, index) => {
            return (
                <ul key={index}>
                    <li>
                        <Link
                            as={`/post/${post.slug}`}
                            href={`/post?slug=${post.slug}&apiRoute=posts`}
                        >
                            <a>{post.title.rendered}</a>
                        </Link>
                    </li>
                </ul>
            );
        });
        const pages = this.props.pages.map((page, index) => {
            return (
                <ul key={index}>
                    <li>
                        <Link
                            as={`/page/${page.slug}`}
                            href={`/post?slug=${page.slug}&apiRoute=pages`}
                        >
                            <a>{page.title.rendered}</a>
                        </Link>
                    </li>
                </ul>
            );
        });

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
                <div className="section">
                  <div className="container">
                    <h1 className="title">Home</h1>
                    <h2 className="subtitle">Posts</h2>
                    <div className="content">
                    {posts}
                    </div>
                    <h2 className="subtitle">Pages</h2>
                    <div className="content">
                    {pages}
                    </div>
                    <h2 className="subtitle">Projects</h2>
                    <div className="content">
                    {projects}
                    </div>
                  </div>
                </div>
            </Layout>
        );
    }
}

export default PageWrapper(Index);
