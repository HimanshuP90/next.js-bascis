import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = ({ slug, title }) => (
    <li>
        <Link as={`/${slug}`} href={`/post?title=${title}`} >
            <a>{title}</a>
        </Link>
    </li>
);

export default () => (
    <Layout title="My Blog">
        <ul>
            <PostLink slug="react-post" title="React Redux NodeJS" />
            <PostLink slug="datastructure-post" title="Data Structures and Algorithms" />
            <PostLink slug="interview-post" title="Interview Prepration tips  " />
            <PostLink slug="docker-k8" title="Docker and Kubernetes " />
            <PostLink slug="npm" title="Node Package Manager" />
        </ul>
    </Layout>
);