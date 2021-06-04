import Layout from "../components/Layout";

import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <style global jsx>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap");

          body {
            background: #f2f2f2;
            color: #333;
            font-family: "Nunito";
          }

          h1 {
            font-size: 2rem;
          }
          h2 {
            font-size: 1.5rem;
          }
          h3 {
            font-size: 1.17rem;
          }
          h4 {
            font-size: 1rem;
          }

          a {
            color: #333;
            text-decoration: none;
          }
          .content {
            max-width: 960px;
            margin: 0 auto;
          }
          nav {
            margin: 10px auto 80px;
            padding: 10px 0;
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
            border-bottom: 1px solid #ddd;
          }
          nav a {
            margin-left: 12px;
          }
          nav .logo {
            margin-right: auto;
            align-items: baseline;
          }
          footer {
            display: block;
            text-align: center;
            padding: 30px 0;
            margin-top: 60px;
            color: #777;
            border-top: 1px solid #eaeaea;
          }

          .not-found {
            text-align: center;
          }
          .not-found a {
            color: #4979ff;
            text-decoration: underline;
          }
        `}
      </style>
    </Layout>
  );
}

export default MyApp;
