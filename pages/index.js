import withRoot from '../src/withRoot';
// --- Post bootstrap -----
import React from 'react';
import ProductCategories from '../modules/ProductCategories';
import ProductSmokingHero from '../modules/ProductSmokingHero';
import AppFooter from '../modules/AppFooter';
import ProductHero from '../modules/ProductHero';
import ProductValues from '../modules/ProductValues';
import ProductHowItWorks from '../modules/ProductHowItWorks';
import ProductCTA from '../modules/ProductCTA';
import AppAppBar from '../modules/AppAppBar';
import Address from '../modules/Address';

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <Address />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
