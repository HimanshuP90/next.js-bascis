import Layout from "../components/Layout";
import { withRouter } from "next/router";

const Post = ({ router }) => (
  <Layout title={router.query.title}>
    <div  style={{ width: "80vw" }}>
    <p><b>1) Initialization:</b> setup props and state</p>
    <p><b>2) Mounting:</b> componentWillMount (Immediately before inital rendering)
      render ( return one of the following types: React elements, String and
      numbers, Portals, Booleans, null, ) componentDidMount (Immediately after
      inital rendering)
    </p>
    <p><b>3) Updation: </b> props componentWillReceiveProps (When component receives new
      props) shouldComponentUpdate (Before rendering, after receiving new props
      or state) componentWillupdate (Before rendering, after receiving new props
      or state) render componentDidUpdate (After component's updates are flushed
      to DOM) state shouldComponentUpdate( is shouldComponentUpdate return false
      then render() will not be invoked) componentWillupdate render
      componentDidUpdate
    </p>

    <p><b>4) Unmounting: </b> componentWillUnmount (Immediately before removing component
      from DOM)
    </p>

    <p><b>5): </b> componentDidCatch(error, info) </p>
    </div>
  </Layout>
);

export default withRouter(Post);
