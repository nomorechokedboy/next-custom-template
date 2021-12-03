import '../styles/globals.css';
import '../styles/normalize.min.css';
import '../public/fontawesome-free-5.15.4-web/css/all.min.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../redux';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}
export default MyApp;
