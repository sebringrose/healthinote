import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  FlexWrapper,
  ParaFlex,
  CustomText
} from "../components/StyledComponents"
import theme from "../styles/theme"

export default function Template({ data }) {
  const { markdownRemark } = data 
  const { frontmatter, html } = markdownRemark

  return <Layout data={data}> 
    <SEO title={frontmatter.title} />
      <FlexWrapper style={{position: 'relative'}}>
        <ParaFlex style={{padding: '40px 20px', alignItems: 'flex-start', minWidth: "300px", maxWidth: "800px", margin: "auto" }}  flex>
          <CustomText fsize={'5vh'} color={theme.color.blue} margin={"2rem 0 0"}>{frontmatter.title}</CustomText>
          <CustomText fsize={'2vh'} fweight={'200'} color={"grey"} margin={"0 0 3rem"}>{frontmatter.date}</CustomText>
          <div
            className="blog-post"
            style={{ width: "100%", marginBottom: "5rem" }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </ParaFlex>
      </FlexWrapper>
  </Layout>
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`