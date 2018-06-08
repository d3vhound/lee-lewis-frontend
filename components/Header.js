import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import Menu from "./Menu.js";
import { Config } from "../config.js";


class Header extends Component {
    constructor() {
        super();
    }

    render() {

        return (
            <div>
                <Head>
                    <link rel="stylesheet" href="/_next/static/style.css" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <meta charSet="utf-8" />
                    <title>
                        Lee Lewis Construction
                    </title>
                </Head>
            </div>
        );
    }
}

export default Header;
