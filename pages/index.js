import fetch from 'isomorphic-fetch';
import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/Layout';


const Index = props => (
  <div>
    <Head>
      <title>Chart Stocks</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <style>{`
        body {
          font-family: Roboto, "Noto Sans", sans-serif;
        }
      `}</style>
    </Head>
    <Layout stocks={props.stocks} />
  </div>
);

Index.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/stocks');
  const stocks = await res.json();
  return { stocks };
};

Index.propTypes = {
  stocks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Index;
