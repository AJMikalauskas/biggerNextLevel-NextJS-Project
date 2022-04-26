import Layout from "../components/layout/Layout";
import "../styles/globals.css";

// Just wrap with <Layout> tags, the component tag is every page, 
  // so now every page is wrapped and has a mainnav and header
    // This could be only really useful for Components that show on every page with minor adjustments to what 
      // is on the component that is on every page.
        // Way more maintainable and effective
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
