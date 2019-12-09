import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import About from '@sections/About';
import Learn from '@sections/Learn';
import Music from '@sections/Music';
import Faq from '@sections/Faq';
import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <About />
    <Learn />
    <Music />
    {/* <Faq /> */}
    <Footer />
  </Layout>
);

export default IndexPage;
