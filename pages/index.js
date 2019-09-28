import Layout from "../components/Layout";

const Index = () => (
  <Layout title="himanshu pandey <code>javascript enthusiast </code>">
    <p style={{ color: "gray" }}>
      A Full Stack Developer, UI Engineer & Performance Optimizer.
    </p>
    <div style={{ margin: "2px" }}></div>
    <img src={"./static/reduce.png"} alt="js" height="280px" />
    <div style={{ margin: "5px" }}></div>
    <img
      src={"./static/javascript-logo.png"}
      alt="js"
      height="50px"
      width="50px"
    />
    <style jsx>{`
            @media only screen and (max-width: 768px){
                p {
                    text-align: center;
                }
                img {
                    max-width: 100%;
                    height: auto;                }
        `}</style>
  </Layout>
);

export default Index;
