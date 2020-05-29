import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = ({ slug, title, descriptions, totalTime, minutes  }) => (
    <li style={{padding: '10px'}}>
        <Link as={`/${slug}`} href={`/post?title=${title}`} >
            <div style={{
                backgroundColor: 'white', boxShadow: "0 3px 5px rgba(50,50,93,.1)", borderRadius: '4px',
                borderLeft:'4px solid blue', cursor: 'pointer', transition: 'boxShadow .2s,transform .2s',
                padding: '20px'
                }}>
                <a>{title}</a>                
                <div style={{color: '#6d8494', fontSize: '14px',margin: '5px 0 15px'}}>
                    <time>{new Date().toDateString() }</time>
                </div>
                <div style={{color: 'gray'}}>
                    <p>{descriptions}</p>
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
                    <span style={{fontSize: '14px', color: 'blue', fontWeight: '700'}}>{minutes} min read</span>
                </div>
            </div>
        </Link>
    </li>
);

export default () => (
    <Layout title="Blog Posts" subdescrip="Tips, thoughts, ideas and insights from developer experiences">
        <ul style={{listStyle: 'none', padding: '5px', width: '50%'}}>
            <PostLink slug="react-post" title="React Redux NodeJS" descriptions="A JavaScript library for building user interfaces" totalTime={5} minutes={5}/>
            <PostLink slug="datastructure-post" title="Data Structures and Algorithms" descriptions="understanding the nature of the problem at a deeper level and thereby a better understanding of the world" totalTime={6} minutes={4} />
            <PostLink slug="interview-post" title="Interview Prepration tips  " descriptions="required for all" totalTime={6} minutes={7} />
            <PostLink slug="docker-k8" title="Docker and Kubernetes " descriptions="for contenarized" totalTime={6} minutes={10}/>
            <PostLink slug="npm" title="Node Package Manager" descriptions="All js developer must know about " totalTime={6} minutes={5}/>
        </ul>
    </Layout>
);