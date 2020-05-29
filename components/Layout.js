import Link from "next/link";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";

Router.onRouteChangeStart = url => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();

Router.onRouteChangeError = () => NProgress.done();

export default ({ children, title, subdescrip }) => (
  <div className="root">
    <Head>
      <link
        rel="icon"
        href="../static/javascript-logo.png"
        type="image"
        sizes="16x16"
      />
      <title>himanshu pandey: javascript enthusiast</title>
    </Head>
    <header>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/hireme">
        <a>Hire Me</a>
      </Link>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
    </header>
    <h1>{title}</h1>
    <p>{subdescrip}</p>
    {children}
    <div style={{width: '70%', color: 'gray'}}>
      <footer style={{minHeight: '50px',width: '70%',
    display: 'flex', margin: '0 auto',flexDirection: 'column-reverse',
    padding: '30px 0', justifyContent: 'center',alignItems: 'center'
    }}>Copyright &copy; {new Date().getFullYear()} All rights reserved </footer>
    </div>
   
    <style jsx>{`
      .root {
        font-family: sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      header {
        width: 100%;
        display: flex;
        justify-content: space-around;
        padding: 1em;
        font-size: 1.2rem;
        background: white;
      }

      header a {
        color: darkgray;
        text-decoration: none;
      }

      header a:hover {
        color: black;
        text-decoration: none;
      }

      footer {
        padding: 1em;
      }
      table td, table th{
        padding: 6px 13px;
        border: 1px solid #ddd;
      }
    `}</style>
    <style global jsx>{`
      * {
        box-sizing: border-box;
      }
      a {
        text-decoration: none;
      }
      p {
        text-align: justify;
      }
      body {
        margin: 0;
        font-size: 110%;
      }
      @media only screen and (max-width: 768px) {
        h1,
        p {
          text-align: center;
        }
      }
    `}</style>
  </div>
);
