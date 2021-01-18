import React, { useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import SEO from '../components/seo';
import Layout from '../components/layout'
import theme from '../styles/theme'

import {
    CenterFlex,
    CustomText,
  } from '../components/StyledComponents'

export default function About() {

    return (
      <Layout>
        <SEO title="Healthinote" />
        <CenterFlex>
          <CustomText>About</CustomText>
        </CenterFlex>
      </Layout>
    )
}

