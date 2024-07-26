import Layout from "../Layout";

/**
 * @param {import("../types").RouteProps} props
 */
export default function HeadDemo({}) {
  return (
    <Layout
      title="Head demo"
      description="Use head-tags everywhere in your JSX"
      css="/preact/index.css"
    >
      <main>
        <section>
          <h1>A Helmet for the HTML-Head</h1>
          <p>
            In Jeasx you can easily implement a helmet like functionality: use
            head-tags in any sub-component and beam the title, meta tags, styles
            and scripts into the head of your document.
          </p>
          <p>
            You only have to wire up a simple guard which takes care of the
            process. Have a look at the source to see how it works.
          </p>
          <br />
          <Subcomponent />
        </section>
      </main>
    </Layout>
  );
}

function Subcomponent() {
  return (
    <div class="container">
      <h2>This is a subcomponent</h2>
      <p>If you want to add something to your head, just go ahead...</p>
      <head>
        <title>Beam a title into the head from a sub-component</title>
        <meta
          name="description"
          value="If you want to add something to your head, just go ahead..."
        />
        <style>{/* css */ `.container { background-color: orange;}`}</style>
      </head>
    </div>
  );
}
