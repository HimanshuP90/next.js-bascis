import Layout from "../components/Layout";
import { withRouter } from "next/router";

const Post = ({ router }) => (
  <Layout title={router.query.title}>
    {router.query.title === "React Redux NodeJS" && (
      <div style={{ width: "80vw", textAlign: "left" }}>
        <p>
          <b>1) Initialization:</b> setup props and state
        </p>
        <p>
          <b>2) Mounting:</b> componentWillMount (Immediately before inital
          rendering) render ( return one of the following types: React elements,
          String and numbers, Portals, Booleans, null, ) componentDidMount
          (Immediately after inital rendering)
        </p>
        <p>
          <b>3)Updation: </b> props componentWillReceiveProps (When component
          receives new props) shouldComponentUpdate (Before rendering, after
          receiving new props or state) componentWillupdate (Before rendering,
          after receiving new props or state) render componentDidUpdate (After
          component's updates are flushed to DOM) state shouldComponentUpdate(
          is shouldComponentUpdate return false then render() will not be
          invoked) componentWillupdate render componentDidUpdate
        </p>

        <p>
          <b>4) Unmounting: </b> componentWillUnmount (Immediately before
          removing component from DOM)
        </p>

        <p>
          <b>5): </b> componentDidCatch(error, info){" "}
        </p>
      </div>
    )}
    {router.query.title === "Interview Prepration tips" && (
      <div style={{ width: "80vw" }}>
        <p>
          Interviews are hard, and as a candidate, you are typically given 45-50
          minutes to show what you can do. As an interviewer, this is equally as
          hard to assess if the person is a good fit in such a short amount of
          time. There are no one-size fits all for interviews, interviewers are
          typically given an area to cover but apart from that the questions
          they ask are at their own discretion
        </p>

        <p>
          From being on both sides of the table as an interviewee to interviewer
          myself, this post tries to cover the most important areas of front-end
          development you’re likely to be asked.
        </p>
      </div>
    )}
    {router.query.title === "Data Structures and Algorithms" && (
      <div style={{ width: "80vw" }}>
        <p>
          Being a developer or engineer building for the web requires a lot of
          knowledge.Algorithm interviews go beyond just algorithms and data
          structures.
        </p>
        <ul>
          <li>Array</li>
          <li>String</li>
          <li>Searching</li>
          <li>Sorting</li>
          <li>Stack, Queue, Heaps</li>
          <li>Recursion, Dynamic Programming</li>
          <li>Binary Search Tree</li>
        </ul>
      </div>
    )}
    {router.query.title === "Docker and Kubernetes" && (
      <div style={{ width: "80vw" }}>
        <p>
          Docker is a set of platform as a service products that uses OS-level
          virtualization to deliver software in packages called containers.
        </p>
        <p>
          Containers are isolated from one another and bundle their own
          software, libraries and configuration files; they can communicate with
          each other through well-defined channels
        </p>
        <a href="https://github.com/HimanshuP90/docker-react">
          {" "}
          Docker React setup with CI and CD
        </a>
      </div>
    )}
    {router.query.title === "Node Package Manager" && (
      <div style={{ width: "80vw" }}>
        <p>
          It is the default package manager for the JavaScript runtime
          environment Node.js. It consists of a command line client, also called
          npm, and an online database of public and paid-for private packages,
          called the npm registry.
        </p>
        <h4>Semantic Versioning</h4>
        <table style={{ display: 'table', width: '100%', borderCollapse: 'collapse', borderSpacing: '0', overflow: 'auto', boxSizing: 'border-box'}}>
          <thead>
            <tr>
              <th>Code status</th>
              <th>Stage</th>
              <th>Rule</th>
              <th>Example version</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>First release</td>
              <td>New product</td>
              <td>Start with 1.0.0</td>
              <td>1.0.0</td>
            </tr>
            <tr>
              <td>Backward compatible bug fixes</td>
              <td>Patch release</td>
              <td>Increment the third digit</td>
              <td>1.0.1</td>
            </tr>
            <tr>
              <td>Backward compatible new features</td>
              <td>Minor release</td>
              <td>Increment the middle digit and reset last digit to zero</td>
              <td>1.1.0</td>
            </tr>
            <tr>
              <td>Changes that break backward compatibility</td>
              <td>Major release</td>
              <td>
                Increment the first digit and reset middle and last digits to
                zero
              </td>
              <td>2.0.0</td>
            </tr>
          </tbody>
        </table>
      </div>
    )}
  </Layout>
);

export default withRouter(Post);
