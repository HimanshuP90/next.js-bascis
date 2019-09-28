import Link from "next/link";
import Layout from "../components/Layout";
import { Component } from "react";
import fetch from "isomorphic-unfetch";
import Error from "./_error";

export default class About extends Component {
  static async getInitialProps() {
    const res = await fetch("https://api.github.com/users/HimanshuP90");
    const statusCode = res.status > 200 ? res.status : false;
    const data = await res.json();
    return { user: data, statusCode };
  }

  render() {
    const { user, statusCode } = this.props;
    if (statusCode) {
      return <Error statusCode={statusCode} />;
    }
    return (
      <Layout title="About Me">
        <img src={user.avatar_url} alt="Me" height="180px" />
        <p>{user.name}</p>
        <p>
          So, my name is Himanshu Pandey, and I'm a Software Engineer at PayTM
        </p>
        <p>
          Previously I worked at numerous early-stage startups, most notably
          product based, and graduated from from{" "}
          <a href="http://www.mnnit.ac.in/">NIT-Allahabad</a> with computer
          science degree
        </p>
        <style jsx>{`
                    img {
                        box-shadow: 0 2px 20px 0 rgba(0,0,0,0.2);
                        overflow: hidden;
                        border-radius: 50%;
                        border-width: 3px;
                        border-style: solid;
                        border-color: rgb(255, 255, 255);
                        border-image: initial;
                    }
                    @media only screen and (max-width: 768px){
                        img {
                            width: 120px;
                            height: 120px;
                        }
                `}</style>
      </Layout>
    );
  }
}
