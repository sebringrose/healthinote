import React, {useState} from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import SEO from '../components/seo';
import Layout from '../components/layout'
import theme from '../styles/theme'

import FirstSection from '../components/FirstSection'
import CardBordered from '../components/CardBordered'
import {
    CustomText,
    CardText,
    FlexWrapper,
  } from '../components/StyledComponents'

export default function News() {
    const [filter, setFilter] = useState()

    const data = useStaticQuery(graphql`
      query {
        buildings: file(relativePath: { eq: "buildings.png" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        blogs: file(relativePath: { eq: "blogs.png" }) {
          childImageSharp {
            fluid(maxWidth: 150) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        whitepapers: file(relativePath: { eq: "whitepapers.png" }) {
          childImageSharp {
            fluid(maxWidth: 150) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        news: file(relativePath: { eq: "news.png" }) {
          childImageSharp {
            fluid(maxWidth: 150) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        allMarkdownRemark(sort: {fields: frontmatter___date}) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                date(formatString: "MMMM, YYYY")
                slug
              }
              excerpt
            }
          }
        }
      }
    `)

    const cardData = [
      {
        title: "Blogs",
        fluid: data.blogs.childImageSharp.fluid,
        color: theme.color.blue,
        flex: 1,
        spaced: true,
        onClick: () => setFilter(filter => filter !== theme.color.blue ? theme.color.blue : null)
      },
      {
        title: "Whitepapers",
        fluid: data.whitepapers.childImageSharp.fluid,
        color: theme.color.orange,
        flex: 1,
        spaced: true,
        onClick: () => setFilter(filter => filter !== theme.color.orange ? theme.color.orange : null)
      },
      {
        title: "News & Press",
        fluid: data.news.childImageSharp.fluid,
        color: theme.color.yellow,
        flex: 1,
        spaced: true,
        onClick: () => setFilter(filter => filter !== theme.color.yellow ? theme.color.yellow : null)
      },
    ]

    const news = [
      ...data.allMarkdownRemark.edges.map(edge => ({ ...edge.node, color: theme.color.blue, frontmatter: { ...edge.node.frontmatter, link: `/blog/${edge.node.frontmatter.slug}` } })),
      {
        frontmatter: {
          title: "Cognitant Vaccination Animation Press Release",
          date: "September 2020",
          link: "/Cognitant_Vaccination_Animation_press_release-Sept20_FINAL3.pdf"
        },
        color: theme.color.yellow,
        excerpt: "16 year old talent creates animation to educate public about vaccinations.",
      },
      {
        frontmatter: {
          title: "Cognitant Digital Counselling Tool (LARC VR) Press Release",
          date: "October 2020",
          link: "/GB.WH_2020_Cognitant_Digital_Counselling_tool_(LARC_VR)_Press_Release.EN_(002).pdf"
        },
        color: theme.color.yellow,
        excerpt: "Cognitant Group, the Oxford based healthtech company whose mission is to empower patients with clear, reliable health information, has won the prestigious award for best patient programme...",
      },
      {
        frontmatter: {
          title: "Pharma Strategies for Patient Support in a Changing World.",
          date: "October 2020",
          link: "/Whitepaper-Strategies_patient_engagement_changing_world.pdf"
        },
        color: theme.color.orange,
        excerpt: "As patients increasingly take centre stage in the world of medicine, pharma and biotech, patient engagement and support programmes are changing.",
      },
      {
        frontmatter: {
          title: "The Patient Experience Post Covid-19",
          date: "May 2020",
          link: "/whitepaper-2020final.pdf"
        },
        color: theme.color.orange,
        excerpt: "The COVID-19 pandemic has exposed the fragility of our services and has accelerated radical change.",
      },
      {
        frontmatter: {
          title: "Healthinote Release",
          date: "March 2020",
          link: "/Healthinote_update_release_March2020.pdf"
        },
        color: theme.color.yellow,
        excerpt: "Cognitant Group to launch healthinote app with verified NHS Corona virus guidance.",
      },
      {
        frontmatter: {
          title: "Cognitant 2019 Year Review",
          date: "December 2019",
          link: "/Cognitant_Year_Review_Dec19.pdf"
        },
        color: theme.color.yellow,
        excerpt: "Oxford-based healthtech company Cognitant Group is poised for further growth and expansion in 2020 following a successful first year of operations.",
      },
    ]

    return (
        <Layout>
          <SEO title="News" />
          <FirstSection 
              titleText={"Our news."}
              descText={"Read the latest news coverage about Cognitant and insights from the team."}
              imgFluid={data.buildings.childImageSharp.fluid}
              cardData={cardData}
          />
            
          <div style={{ backgroundColor: theme.color.lightBlue }}>
            <FlexWrapper column HAlign='center' style={{ margin: "auto", padding: '25px', maxWidth: "1000px" }}>
                <CardText id="the-healthinote-story" fweight={'500'} fsize={'4vh'} color={theme.color.blue}>Our news</CardText>
                <FlexWrapper row>
                    {news.filter(news => filter ? news.color === filter : news).map(({ frontmatter, color, excerpt }, index) => <CardBordered key={index} minHeight={"16vh"} style={{ minWidth: '200px', maxWidth: "273px", flex: 1, justifyContent: "space-between" }} color={color} align={'flex-start'}>
                        <CustomText fsize={"20px"} fweight={500} color={color} style={{ textAlign: "center" }}>{frontmatter.title}</CustomText>
                        <CardText>{excerpt}</CardText>
                        <CustomText fsize={"12px"} color={"grey"}>{frontmatter.date}</CustomText>
                        <CustomText fsize={"12px"} color={theme.color.orange}><Link to={frontmatter.link}>Read more</Link></CustomText>
                    </CardBordered>)}
                </FlexWrapper>
            </FlexWrapper>
          </div>
      </Layout>
    )
}

