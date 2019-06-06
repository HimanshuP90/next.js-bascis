import Layout from '../components/Layout';

export default ({ statusCode }) => (
    <Layout title="Error !!!">
        { statusCode 
            ? `Could't load your user data: Satus Code ${statusCode}`
            : `Could't get that page, sorry!`
        }
    </Layout>
);