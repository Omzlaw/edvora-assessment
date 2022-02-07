
import { useState } from "react";

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [products] = useState();
  return <Component {...pageProps} />
}

export default MyApp
