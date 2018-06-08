import Layout from "../components/Layout.js";
import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Error from "next/error";
import PageWrapper from "../components/PageWrapper.js";
import Menu from "../components/Menu.js";
import { Config } from "../config.js";

class Post extends Component {
    static async getInitialProps(context) {
        const { slug, apiRoute } = context.query;
        const res = await fetch(
          `${Config.apiUrl}/wp-json/wp/v2/${apiRoute}?slug=${slug}`
        );
        const post = await res.json()
        return { post };
    }


    render() {

      const post = this.props.post.map((post, index) => {
        return (
          <React.Fragment key={index}>
              <div>
                <h1>{post.title.rendered}</h1>
                <div
                  dangerouslySetInnerHTML={{
                    __html: post.content.rendered
                  }}
                />
              </div>
          </React.Fragment>
        )
      })

        return (
            <Layout>
                <Menu menu={this.props.headerMenu} />
                {post}
            </Layout>
        );
    }
}

export default PageWrapper(Post);
