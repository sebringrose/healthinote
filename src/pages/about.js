import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import SEO from '../components/seo';
import Layout from '../components/layout'
import Img from 'gatsby-image'
import theme from '../styles/theme'

import FirstSection from '../components/FirstSection'
import CardBordered from '../components/CardBordered'
import {
    CustomText,
    Quote,
    CardText,
    FlexWrapper,
    HorizontalRule,
    HorizontalScroller
  } from '../components/StyledComponents'

export default function About() {
    const [contactMoreDetails, setContactMoreDetails] = useState('')
    const [toggleMoreDetails, setToggleMoreDetails] = useState(false)

    const data = useStaticQuery(graphql`
    query {
      buildings: file(relativePath: { eq: "buildings.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Prototype: file(relativePath: { eq: "healthinote_old.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      V1: file(relativePath: { eq: "healthinote_new.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mission: file(relativePath: { eq: "mission_icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      vision: file(relativePath: { eq: "vision_icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      purpose: file(relativePath: { eq: "purpose_icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tim: file(relativePath: { eq: "tim.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rick: file(relativePath: { eq: "rick.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      daisy: file(relativePath: { eq: "daisy.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      juhi: file(relativePath: { eq: "juhi.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      becca: file(relativePath: { eq: "becca.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      alex: file(relativePath: { eq: "alex.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      emma: file(relativePath: { eq: "emma.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jake: file(relativePath: { eq: "jake.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bayer: file(relativePath: { eq: "client_bayer.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      berkshire: file(relativePath: { eq: "client_berkshire.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      health_foundation: file(relativePath: { eq: "client_health_foundation.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      innovateuk: file(relativePath: { eq: "client_innovateuk.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sanofi: file(relativePath: { eq: "client_sanofi.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      servier: file(relativePath: { eq: "client_servier.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ucb: file(relativePath: { eq: "client_ucb.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      brompton_nhs: file(relativePath: { eq: "partner_brompton_nhs.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      brookes: file(relativePath: { eq: "partner_brookes.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cambridge_nhs: file(relativePath: { eq: "partner_cambridge_nhs.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      econsult: file(relativePath: { eq: "partner_econsult.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      esc: file(relativePath: { eq: "partner_esc.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gcrf: file(relativePath: { eq: "partner_gcrf.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hci: file(relativePath: { eq: "partner_hci.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ics: file(relativePath: { eq: "partner_ics.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imperial: file(relativePath: { eq: "partner_imperial.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ips: file(relativePath: { eq: "partner_ips.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nhs_england: file(relativePath: { eq: "partner_nhs_england.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      orcha: file(relativePath: { eq: "partner_orcha.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      oxford: file(relativePath: { eq: "partner_oxford.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pkb: file(relativePath: { eq: "partner_pkb.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rcgp: file(relativePath: { eq: "partner_rcgp.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rcp: file(relativePath: { eq: "partner_rcp.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sanignacio: file(relativePath: { eq: "partner_sanignacio.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sickle_cell: file(relativePath: { eq: "partner_sickle_cell.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wessex: file(relativePath: { eq: "partner_wessex.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pm_society: file(relativePath: { eq: "pm_society.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      oxba: file(relativePath: { eq: "oxba.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

    const cardData = [
      {
        title: "Mission",
        subtitle: "To empower people with clear, reliable health information",
        fluid: data.mission.childImageSharp.fluid,
        color: theme.color.blue,
        flex: 1,
        spaced: true,
      },
      {
        title: "Vision",
        subtitle: "A world where everyone understands their health and treatment",
        fluid: data.vision.childImageSharp.fluid,
        color: theme.color.orange,
        flex: 1,
        spaced: true,
      },
      {
        title: "Purpose",
        subtitle: "To drive better health outcomes and save lives",
        fluid: data.purpose.childImageSharp.fluid,
        color: theme.color.yellow,
        flex: 1,
        spaced: true,
      },
    ]

    const clients = [
      data.bayer.childImageSharp.fluid,
      data.berkshire.childImageSharp.fluid,
      data.health_foundation.childImageSharp.fluid,
      data.innovateuk.childImageSharp.fluid,
      data.sanofi.childImageSharp.fluid,
      data.servier.childImageSharp.fluid,
      data.ucb.childImageSharp.fluid
    ]

    const partners = [
      data.brompton_nhs.childImageSharp.fluid,
      data.brookes.childImageSharp.fluid,
      data.cambridge_nhs.childImageSharp.fluid,
      data.econsult.childImageSharp.fluid,
      data.esc.childImageSharp.fluid,
      data.gcrf.childImageSharp.fluid,
      data.hci.childImageSharp.fluid,
      data.ics.childImageSharp.fluid,
      data.imperial.childImageSharp.fluid,
      data.ips.childImageSharp.fluid,
      // data.nsh_england.childImageSharp.fluid,
      data.orcha.childImageSharp.fluid,
      data.oxford.childImageSharp.fluid,
      data.pkb.childImageSharp.fluid,
      data.rcgp.childImageSharp.fluid,
      data.rcp.childImageSharp.fluid,
      data.sanignacio.childImageSharp.fluid,
      data.sickle_cell.childImageSharp.fluid,
      data.ucb.childImageSharp.fluid,
      data.wessex.childImageSharp.fluid
    ]

    const awards = [
      data.pm_society.childImageSharp.fluid,
      data.oxba.childImageSharp.fluid
    ]

    const images = [
        {
            image: data.Prototype.childImageSharp.fluid,
            quote: 'Prototype'
        },
        {
            image: data.V1.childImageSharp.fluid,
            quote: 'V1.0'
        }
    ]

    const team = [
      {
          image: data.tim.childImageSharp.fluid,
          name: 'Dr Tim Ringrose',
          position: 'Chief Executive Office and Founder',
          color: theme.color.orange,
          links: {
              twitter: 'https://twitter.com/timringrose',
              linkedin: 'https://www.linkedin.com/in/timringrose/'
          },
          more: 'A nephrologist and intensive care specialist, Tim helped to build Doctors.net.uk, the UK’s leading online doctor community, taking on the role of CEO in 2011. When the company was acquired by M3 Group, Tim became CEO of M3’s European division up until he founded Cognitant Group in 2018. He is a mentor for the NHS clinical entrepreneur programme and serves as a non-executive director and adviser for several other health technology companies. Tim originally planned to be an engineer and spends his spare time taking things apart. Sometimes he even fixes them!'
      },
      {
        image: data.daisy.childImageSharp.fluid,
        name: 'Daisy Allington',
        color: theme.color.orange,
        position: 'Chief Operating Officer and Founder',
        links: {
            twitter: 'https://twitter.com/daisy_allington',
            linkedin: 'https://www.linkedin.com/in/daisy-allington-8656578/'
        },
        more: 'Daisy has an established career in running commercial and operational functions of health technology companies. After graduating with BA (hons) in Languages for Business, Daisy started out her career as a marketer for a major NGO and developed into an exceptional client service manager in the healthcare industry. She led the client services and operations divisions for M3 (EU) for 5 years, and was responsible for the recruitment and retention of staff, key account management, new business development and operational excellence strategies, demonstrating an impressive growth in top line sales, profitability and client retention. Daisy is a natural project manager and is leads our operations and commercial activities.'
      },
      {
          image: data.rick.childImageSharp.fluid,
          name: 'Rick Knowles',
          position: 'Chief Technical Officer and Founder',
          color: theme.color.orange,
          links: {
              twitter: null,
              linkedin: 'https://linkedin.com/in/rick-knowles-a578797b'
          },
          more: 'Rick leads the development of Cognitant’s proprietary platforms and immersive experiences for patients and healthcare professionals, which manages to incorporate all his favourite elements of technology in the one job, including game engines, smartphones and making technology solve hard-to-reach problems that no-one else has fixed yet. He has been a core part of many startups over a long career, in the beginning as an electrical engineer with a talent for software development, and more recently as a CTO for the last 10 years (after having a turn covering almost every job in between!).'
      },
      {
          image: data.juhi.childImageSharp.fluid,
          name: 'Dr Juhi Tandon',
          color: theme.color.orange,
          position: 'Clinical Director and Founder',
          links: {
              twitter: null,
              linkedin: 'https://www.linkedin.com/in/juhi-tandon-b439aaa1/'
          },
          more: 'As Clinical Director for Cognitant Juhi is passionate about empowering patients to make informed decisions about their health. She graduated from University College London in 2005 and during this period, undertook a BSc in Pharmacology (2002), gaining 1st Class honours, the AJ Clark Prize and the Jackson Lewis Scholarship Award for academic achievement. Juhi is a practising NHS GP and has been for 10 years, with specialist interests in women’s health, dermatology and GP education. She is also involved in teaching junior doctors attached to primary care. Outside of work she is a classic foodie but also enjoys a good fine wine and travelling with her family in the USA.'
      },
      {
          image: data.becca.childImageSharp.fluid,
          name: 'Becca Sharman',
          position: 'Business Director',
          color: theme.color.blue,
          links: {
              twitter: 'https://www.linkedin.com/in/becca-sharman-417ab646/',
              linkedin: 'https://www.twitter.com/BeccaLSharman'
          },
          more: 'Becca joined us in May 2019 and leads on all new business activity, working with clients across the healthcare sector including pharmaceutical, charity and NHS clients. With a BSc in Biochemistry, she has a knack and real enjoyment for devouring a problem and developing innovative solutions that align with a client’s wider strategy. A talented researcher, proposal/bid writer and pitcher with a demonstrated track record over a number of years in the MedTech industry. When Becca isn’t out working with our clients, she’s usually found on a climbing wall or really any piece or rock she can cling to.'
      },
      {
          image: data.alex.childImageSharp.fluid,
          name: 'Alex Merckx',
          position: 'Director of Marketing and Partnerships',
          color: theme.color.blue,
          links: {
              twitter: null,
              linkedin: 'https://www.linkedin.com/in/alex-merckx-a7b5b360/'
          },
          more: 'Alex has extensive experience in developing business and marketing strategy for the healthcare, digital, publishing and B2B industries. A graduate in Economics and French from the University of Nottingham and Marketing from the Chartered Institute of Marketing, Alex formed part of the Doctors.net.uk team in its early years. Having worked in multiple sales and marketing roles for JohnsonDiversey, Alex ran for a number of years her own consultation business. She moved on to become International Development Manager and then Marketing Director for M3 Europe. Prior to joining Cognitant, Alex was Marketing Director for the Corporate Solutions division of Wiley, an academic publisher of scientific research. In her spare time, Alex can sometimes be seen performing music in Oxfordshire, if anyone is prepared to listen to her!'
      },
      {
          image: data.emma.childImageSharp.fluid,
          name: 'Emma Bishop',
          color: theme.color.blue,
          position: 'Head of Content',
          links: {
              twitter: null,
              linkedin: null
          },
          more: "Emma's role is to craft immersive, engaging, and accurate campaigns that meet client objectives, working with the wider team to dream up content that captivates viewers. After studying Medical Biochemistry at the University of Manchester, science and medical communications have been at the heart of her work. In 2019, she began working for Cognitant, where her years of experience working on digital strategies could be channelled into an innovative medium that has the power to influence and improve many lives. On the weekend she exchanges her office for a stage, singing and playing guitar with her band."
      },
      {
          image: data.jake.childImageSharp.fluid,
          name: 'Jake Sykes',
          color: theme.color.blue,
          position: 'Account Director',
          links: {
              twitter: null,
              linkedin: 'https://linkedin.com/in/jakesykes'
          },
          more: null
      }
    ]

    return (
        <Layout>
          {toggleMoreDetails && <FlexWrapper column VAlign='center' HAlign='center' 
            style={{position: 'fixed', top: '0px', left: '0px', height: '100vh',width: '100vw', backgroundColor: 'rgba(0, 0, 0, 0.31)', zIndex: 1}}
            onClick={() => setToggleMoreDetails(false)}
          >
            <div style={{ padding: '10px', width: '50%', minWidth: '300px', minHeight: '300px', backgroundColor: "white", borderRadius: '0.5rem', overflowY: 'scroll' }}>
              <button
                style={{ 
                  border: "none",
                  backgroundColor: "#fff",
                  color: theme.color.blue,
                  float: 'right',
                  margin: '10px'
                }} 
                onClick={() => setToggleMoreDetails(false)}
              >
                X
              </button>
              <CustomText fsize='2vh' style={{ margin: '10px' }}>{contactMoreDetails}</CustomText>
            </div>
          </FlexWrapper>}
          <SEO title="About Us" />
          <FirstSection 
              titleText={"Mission, vision, purpose."}
              descText={"We empower patients with clear, reliable health information, helping patients to make informed decisions and healthcare professionals to deliver best care."}
              imgFluid={data.buildings.childImageSharp.fluid}
              cardData={cardData}
          />
          <div style={{ backgroundColor: theme.color.blue }}>
            <FlexWrapper column HAlign='center' style={{ margin: "auto", maxWidth: "1000px", backgroundColor: theme.color.blue, padding: "20px 0px" }}>
                <CustomText fweight={'500'} fsize={'4vh'} color="white">Our story</CustomText>
                <CardText fsize={'2.4vh'} color="white">Founded in Oxford, UK, in 2018, Cognitant is the brainchild of four experienced healthcare and medical communications professionals: Chief Technology Officer Rick Knowles, Clinical Director Dr Juhi Tandon, Chief Operating Officer Daisy Allington, and Chief Executive Officer Dr Tim Ringrose, previously a kidney specialist at Oxford University Hospital.</CardText>
                <CardText fsize={'2vh'} color="white">Cognitant offers clear, clinically led information that can be prescribed by a doctor and easily accessed by patients on smartphones, tablets and in virtual reality, at their convenience.</CardText>
            </FlexWrapper>
          </div>
            
          <FlexWrapper column HAlign='center' style={{ padding: '25px 0', backgroundColor: 'white', width: "100%" }}>
              <CustomText fweight={'500'} fsize={'4vh'} color={theme.color.blue}>Who we work with</CustomText>
              <CustomText fweight={'500'} fsize={'3vh'} color={theme.color.orange}>Our clients</CustomText>
              <HorizontalScroller>
                {clients.map(client => <Img fluid={client} imgStyle={{objectFit: 'contain'}}  style={{ margin: '16px', width: "150px", minWidth: '100px' }} />)}
              </HorizontalScroller>
          </FlexWrapper>
          <FlexWrapper column HAlign='center' style={{ padding: '25px 0', backgroundColor: theme.color.lightBlue, width: "100%" }}>
              <CustomText fweight={'500'} fsize={'3vh'} color={theme.color.orange}>Our partners</CustomText>
              <HorizontalScroller>
                {partners.map(partner => <Img fluid={partner} imgStyle={{objectFit: 'contain'}} style={{ margin: '16px', width: "150px", minWidth: '100px' }} />)}
              </HorizontalScroller>
          </FlexWrapper>
          <FlexWrapper column HAlign='center' style={{ padding: '25px 0', backgroundColor: 'white', width: "100%" }}>
              <CustomText fweight={'500'} fsize={'3vh'} color={theme.color.orange}>Awards</CustomText>
              <HorizontalScroller>
                {awards.map(award => <Img fluid={award} imgStyle={{objectFit: 'contain'}} style={{ margin: '16px', width: "150px", minWidth: '100px' }} />)}
              </HorizontalScroller>
          </FlexWrapper>

          <div style={{ backgroundColor: theme.color.lightBlue }}>
            <FlexWrapper column HAlign='center' style={{ margin: "auto", padding: '25px', maxWidth: "1000px" }}>
                <CardText id="the-healthinote-story" fweight={'500'} fsize={'4vh'} color={theme.color.blue}>The Healthinote story</CardText>
                <CardText fsize={'2vh'}>Our Healthinote service for information prescriptions was inspired by discussions with patients and clinicians. At the early stages of the company when we were building and testing immersive experiences about health, we realised that there was a need for a system for patients and the public to receive recommended health information from a health professional. We used a rapid product design process to build and test a basic prototype with users then set out a product development plan to build our version 1 product.</CardText>
                <CardText fsize={'2vh'}>We learned a lot when we tested our first version with a range of people from different backgrounds and ages (some with long-term conditions). We had positive comments:</CardText>
                <Quote>“It’s a really good idea, having tailored information just for you. I’d use it if I was considering a new treatment – especially one where there’s a lot to think about.”</Quote><Quote>“I like that it tells you to talk to an HCP. That’s important and it makes me trust it more."</Quote>&nbsp;
                <Quote>It’s professional but it’s also fun because of how it’s presented.</Quote>&nbsp;
                <HorizontalRule />
                <CardText fsize={'2vh'}>But we also learned a lot from some of the comments:</CardText>
                <FlexWrapper VAlign="center">
                    <Quote>“I think it’s a bit too abstract…make it more relatable”</Quote>&nbsp;
                    <Quote>“The video is way too long and repetitive. I find it a bit confusing”</Quote>&nbsp;
                    <Quote>“It’s way too slow.”</Quote>&nbsp;
                    <Quote>“It’s not obvious that you can click on that”</Quote>&nbsp;
                </FlexWrapper>
                <HorizontalRule />
                <CardText fsize={'2vh'}>We’ve updated and amended the apps based on user testing and feedback, also added new features suggested by users – both healthcare professionals and patients – and we continue to do that.</CardText>
                <CardText fsize={'2vh'}>You can see the look of the app has changed quite a lot since our first prototype:</CardText>
                <FlexWrapper VAlign={'space-around'}>
                    {images.map(({image, quote}, key) => 
                        <div style={{width: '200px', margin: '20px'}} key={key}>
                            <Img fluid={image}/>
                            <p style={{textAlign: 'center'}}>{quote}</p>
                        </div>
                    )}
                </FlexWrapper>
                <CardText fsize={'2vh'}>If you would like to help us with user testing, please get in touch! <span style={{ color: theme.color.orange }}>hello@cognitant.com</span></CardText>
            </FlexWrapper>
          </div>
          
          <FlexWrapper column HAlign='center' style={{ padding: "20px 0px" }}>
              <CustomText fweight={'500'} fsize={'4vh'} color={theme.color.blue}>Meet the team</CustomText>
              <FlexWrapper VAlign='center'>
                {team.map(({image, name, color, position, links, more}, key) => 
                  <CardBordered team height={'30vh'} style={{maxWidth: '300px', marginTop: '95px' }} color={color} key={key} align={'flex-start'}>
                    <Img fluid={image} style={{ margin: '-95px 0 5px', width: '150px', minHeight: "150px" }} />
                    <CardText fsize='2.4vh' fweight='500'>{name}</CardText>
                    <CardText fsize='2vh'>{position}</CardText>
                    <FlexWrapper VAlign='center'>
                      {links.twitter && <a target="_blank" rel="noreferrer" href={links.twitter}>
                        <div style={{width: '30px', margin: '10px'}}>
                          <img src={require("../images/twitter.svg")} alt="twitter"/>
                        </div>
                      </a>}
                      {links.linkedin && <a target="_blank" rel="noreferrer" href={links.linkedin}>
                        <div style={{width: '30px', margin: '10px'}}>
                          <img src={require("../images/linkedin.svg")} alt="linkedin"/>
                        </div>
                      </a>}
                    </FlexWrapper>
                    {more && <CustomText 
                      fweight='500' 
                      fsize='2vh' 
                      color={theme.color.orange}
                      style={{ marginTop: "auto", cursor: "pointer", color: theme.color.blue }}
                      onClick={() => {
                        setContactMoreDetails(more)
                        setToggleMoreDetails(true)
                      }}
                    >
                      Read more
                    </CustomText>}
                  </CardBordered>
                )}
              </FlexWrapper>
          </FlexWrapper>
      </Layout>
    )
}

