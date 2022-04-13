import '../styles/globals.css';

import {Layout} from '../components/LayoutComponents';
import {ReactRelayContainer} from '../lib/relay/app';

const IS_SERVER = typeof window === typeof undefined;

export default function RelayApp({Component, pageProps}) {
  return (
    <Layout>
      <ReactRelayContainer Component={Component} props={pageProps} />
    </Layout>
  );
}
