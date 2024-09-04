import Layout from "./Layout";

/**
 * @param {import("../types").RouteProps} props
 */
export default function PageNotFound({}) {
  return (
    <Layout title="404 - Resource Not Found">
      <h1>Error 404</h1>
      <p>
        The resource you requested has not been found at the specified address.
      </p>
      <a href="/wizard">Go to homepage</a>
    </Layout>
  );
}
