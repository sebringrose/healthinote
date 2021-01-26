import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import theme from "../styles/theme"
import FirstSection from "../components/FirstSection"
import CardSection from "../components/CardSection"
import CardBordered from "../components/CardBordered"

import landingVid from "../images/cog-landing-vid-desktop.mp4"

import {
  CenterFlex,
  ParaFlex,
  FlexWrapper,
  CustomText,
  Quote,
  CustomBold,
  OrangeButton
} from '../components/StyledComponents'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      woman: file(relativePath: { eq: "woman.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      personIconWhite: file(relativePath: { eq: "person-icon-white.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      heartIconWhite: file(relativePath: { eq: "heart-icon-white.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      healthinoteIconWhite: file(relativePath: { eq: "healthinote-icon-white.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      iPhone: file(relativePath: { eq: "healthinote_new.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      appStore: file(relativePath: { eq: "app-store.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      googlePlay: file(relativePath: { eq: "google-play.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      personIconBlue: file(relativePath: { eq: "person-icon-blue.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      heartIconOrange: file(relativePath: { eq: "heart-icon-orange.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      caseIconYellow: file(relativePath: { eq: "case-icon-yellow.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      caseIconWhite: file(relativePath: { eq: "case-icon-white.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      linkedIn: file(relativePath: { eq: "linkedin.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      twitter: file(relativePath: { eq: "twitter.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      healthinoteLogo: file(relativePath: { eq: "Healthinote_Blue.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const healthInfo = [
    {
      flex: 1,
      spaced: false,
      id: "patients",
      title: "Patients and the public",
      subtitle: "Providing clear, reliable knowledge and enabling informed decisions.",
      fluid: data.personIconWhite.childImageSharp.fluid,
      color: theme.color.blue,
      align: "center",
      cards: [
        <React.Fragment>
          <CustomText fsize='4vh' style={{ padding: 0, color: theme.color.blue, fontWeight: 500 }}>"43%</CustomText>
          <Quote style={{ marginTop: "10px" }}>of people find current health information <CustomBold>difficult to understand.</CustomBold>"</Quote>
          <CustomText fweight={'500'}>JONATHAN BERRY</CustomText>
          <CustomText style={{textAlign: 'center'}}>Personalisation and Control Specialist, NHS England</CustomText>
        </React.Fragment>,
        <React.Fragment>
          <CustomText fsize='4vh' style={{ padding: 0, color: theme.color.blue, fontWeight: 500 }}>"50%</CustomText>  
          <Quote style={{ marginTop: "10px" }}>of medication is <CustomBold>not taken as prescribed</CustomBold>, on average."</Quote>
          <CustomText fweight={'500'}>BROWN & BRUSSELL</CustomText>
          <CustomText style={{textAlign: 'center'}}>Medication Adherence: WHO cares?</CustomText>
        </React.Fragment>,
        <React.Fragment>   
          <CustomText fsize='4vh' style={{ padding: 0, color: theme.color.blue, fontWeight: 500 }}>"Only half</CustomText>  
          <Quote style={{ marginTop: "10px" }}>of what is discussed in medical appointments <CustomBold>is remembered</CustomBold> by patients."</Quote>
          <CustomText fweight={'500'}>SARA HEATH</CustomText>
          <CustomText style={{textAlign: 'center'}}>Patient Engagement Hit</CustomText>
        </React.Fragment>,
        <React.Fragment>
          <CustomText fsize='4vh' style={{ padding: 0, color: theme.color.blue, fontWeight: 500 }}>"200,000</CustomText>
          <Quote style={{ marginTop: "10px" }}><CustomBold>deaths are contributed to</CustomBold> by non-adherence to medication. It also costs £125bn a year in Europe.</Quote>
          <CustomText fweight={'500'}>FRANCOIS FEIG</CustomText>
          <CustomText style={{textAlign: 'center'}}>Implementing eHealth innovation</CustomText>
        </React.Fragment>
        ],
      child: <PatientSection id="patients" data={data}/>,
      quotes: [
        {
          quote: 'In the 2020s, people will not be passive recipients of care. They will be co-creators of their own health. The challenge is to equip them with the skills, knowledge and confidence they need to help themselves.',
          author: 
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <CustomText style={{fontWeight: '600', fontSize: '20px', textAlign: 'center'}}>PREVENTION GREEN PAPER</CustomText>
              <CustomText fsize={'18px'} fweight={'400'}>Secretary of State for Public Health and Primary Care</CustomText>
            </div>
        }
      ]
    },
    {
      flex: true,
      spaced: false,
      id: "industry",
      title: "The healthcare industry",
      subtitle: "Driving better outcomes through trusted engagement and data-driven insights",
      quotes: [{
        quote: "Patient services will become a competitive driver and are no longer optional for pharmaceutical companies",
        author: 'ACCENTURE'
      },
      {
        quote: "Developing partnerships with technology companies is another key initiative that pharma has been using to be more patient-centric and digitally enabled across both their commercial and clinical spaces",
        author: 'DELOITTE'
      }],
      fluid: data.heartIconWhite.childImageSharp.fluid,
      color: theme.color.orange,
      align: "center",
      style: {
        minWidth: "300px"
      },
      cards: [
        <>
          <CustomText fsize='4vh' style={{ padding: 0, color: theme.color.orange, fontWeight: 500 }}>43%</CustomText>
          <Quote>One of the greatest challenges that will face health systems globally in the twenty-first century will be the increasing burden of long-term diseases (according to World Health Organization)</Quote>
        </>,
        <>
          <CustomText fsize='4vh' style={{ padding: 0, color: theme.color.orange, fontWeight: 500 }}>1 in 3</CustomText>
          <Quote>people, Globally, have at least one long-term condition</Quote>
        </>,
        <>
          <CustomText fsize='4vh' style={{ padding: 0, color: theme.color.orange, fontWeight: 500 }}>75%</CustomText>
          <Quote>of healthcare costs in developed nations are caused by long-term condition</Quote>
        </>,
        <>
          <CustomText fsize='4vh' style={{ padding: 0, color: theme.color.orange, fontWeight: 500 }}>50%</CustomText>
          <Quote>of prescribed medication is not taken correctly</Quote>
        </>
      ],
      child: <IndustrySection data={data}/>
    },
    {
      flex: 1,
      spaced: false,
      id: "hcps",
      title: "Healthcare professionals and services",
      subtitle: "Optimising consultation time, facilitating person-centred care",
      quotes: [{
        quote: "Appointments are simply too short to fully meet the needs of patients",
        author: null
      },
      {
        quote: "We face a growing challenge of how best to educate our patients beyond the virtual consultation",
        author: null
      },
      {
        quote: "Keeping up to date with current best practice can feel like a daunting challenge",
        author: null
      }
    ],
      fluid: data.caseIconWhite.childImageSharp.fluid,
      color: theme.color.yellow,
      align: "center",
      cards: [
        <>
          <CustomText fsize='4vh' style={{ padding: 0, color: theme.color.yellow, fontWeight: 500 }}>50%</CustomText>
          <Quote>(approximately) of the world’s population experience a mean consultation length of 5 min or less in primary care</Quote>
        </>,
        <>
          <Img fluid={data.caseIconYellow.childImageSharp.fluid} style={{ width: "50px" }}/>
          <Quote>Short consultation length drives polypharmacy and overuse of antibiotics</Quote>
        </>,
        <>
          <Img fluid={data.caseIconYellow.childImageSharp.fluid} style={{ width: "50px" }}/>
          <Quote>Short consultation length is likely to adversely affect the workload and stress of the consulting clinician</Quote>
        </>,
        <>
          <Img fluid={data.caseIconYellow.childImageSharp.fluid} style={{ width: "50px" }}/>
          <Quote>Poor or inadequate information leads to higher levels of complaints and litigation</Quote>
        </>
      ],
      child: null
    },
  ]
  return(
  <Layout data={data}> 
    <SEO title="Home" />
    <FirstSection 
      titleText={"Health information,<br /> delivered better."}
      descText={"We empower patients by providing clear, reliable health information, allowing them to become actively involved in improving their health, and enabling healthcare professionals to optimise their care."}
      videoSrc={landingVid}
      cardData={healthInfo}
    />
    <MainSection healthInfo={healthInfo}/>
  </Layout>
)}

function MainSection({healthInfo}) {
  return (
    <div>
      {healthInfo.map(({child, ...rest},key) => 
        <CardSection key={key} {...rest}>{child}</CardSection>
      )}
    </div>
  )
}
function PatientSection({data}) {
  const [index, setIndex] = useState(0);
  const images = [data.googlePlay.childImageSharp.fluid, data.appStore.childImageSharp.fluid];
  const orangeButtons = [
    {
      title: 'Read the Healthinote story',
      link: '/about#the-healthinote-story'
    },
    // {
    //   title: 'View some of our immersive content',
    //   link: null
    // },
    // {
    //   title: 'See how we support virtual consultations',
    //   link: null
    // }
  ]
  const screens = [data.googlePlay.childImageSharp.fluid, data.appStore.childImageSharp.fluid, data.iPhone.childImageSharp.fluid];

  useEffect(() => {
    const interval = setInterval(() => {
      if (index >= 2) { 
        setIndex(0) 
      } else {
        setIndex(index + 1)
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <FlexWrapper id="healthinote" column style={{ padding: "20px 20px 0px 20px", backgroundColor: "#f0f4f5", overflow: "hidden" }}>
      <FlexWrapper style={{ margin: "10px 0", justifyContent: "center", alignItems: "center" }}>
        <img src={require('../images/Orcha_Healthinote_iOSbadge.png')} alt="orcha-approved-ios-badge" style={{ height: "150px" }}/>
        <img src={require('../images/Orcha_Healthinote_Androidbadge.png')} alt="orcha-approved-ios-badge" style={{ height: "150px", margin: "0 10px" }}/>
      </FlexWrapper>
      <FlexWrapper>
        <ParaFlex flex={2} style={{ marginBottom: "20px" }}>
          <div>
            <img src={require('../images/Healthinote_Blue.png')} alt="healthinote-logo" style={{ height: "30px", margin: "10px 0" }}/>
            <CustomText fsize={'22px'} color={theme.color.blue}>Trusted information recommended by your clinician</CustomText>
            <CustomText>We deliver health information, via our free app Healthinote, to a global audience</CustomText>
            <CenterFlex row style={{ backgroundColor: theme.color.lightBlue, alignItems: "flex-start"}} mobileWrap={true}>
              <CardBordered align={'flex-start'} HAlign={'flex-start'} color={theme.color.orange} width={'25vw'}>
                <CustomText fsize={'18px'} fweight={'600'} color={theme.color.blue}>Better understanding of health information.</CustomText>
                <CustomText>Healthinote information is:</CustomText>
                <ul>
                  <li style={{padding: '5px 0px', fontWeight: '300'}}><b>personalised</b> - selected by your doctor, nurse or pharmacist</li>
                  <li style={{padding: '5px 0px', fontWeight: '300'}}><b>comprehensive</b> - about health, disease and treatment</li>
                  <li style={{padding: '5px 0px', fontWeight: '300'}}><b>trustworthy</b> - from the NHS, patient charities and leading experts</li>
                  <li style={{padding: '5px 0px', fontWeight: '300'}}><b>interactive, visual, immersive</b></li>
                  <li style={{padding: '5px 0px', fontWeight: '300'}}><b>easy to understand and access</b></li>
                </ul>
              </CardBordered>
              <CardBordered align={'flex-start'} HAlign={'flex-start'} color={theme.color.orange} width={'25vw'}>
              <CustomText fsize={'18px'} fweight={'600'} color={theme.color.blue}>Optimising consultation time</CustomText>
              <CustomText>Healthinote:</CustomText>
                <ul>
                  <li style={{padding: '5px 0px', fontWeight: '300'}}>helps health care professionals to deliver more effective consultations – whether face to face or virtual.</li>
                  <li style={{padding: '5px 0px', fontWeight: '300'}}>already reaches <b>3,000 GP clinics</b> covering over 26.5 million patients in the UK.</li>
                </ul>
              {/* <CustomText ><q style={{fontStyle: 'italic'}}>Easy to navigate and very informative. Useful for patients and clinicians alike. Useful for clinicians to signpost patients to so they can learn about certain things before returning if they have further questions.</q></CustomText> */}
              {/* <CustomText><b>Rated 5 stars</b></CustomText> */}
              </CardBordered>
            </CenterFlex>
            <FlexWrapper>
              <CenterFlex style={{ backgroundColor: theme.color.lightBlue }} flex={1}>
                {orangeButtons.map(({title, link}, key) => link ? 
                  <a href={link} key={key}>
                    <OrangeButton key={key}>
                      {title}
                    </OrangeButton>
                  </a>
                : 
                  <OrangeButton key={key}>
                    {title}
                  </OrangeButton>
                )}
              </CenterFlex>
            </FlexWrapper>
          </div>
        </ParaFlex>
        <CenterFlex color={theme.color.lightBlue} flex={1} column VAlign={'flex-end'} mobileWrap style={{ alignItems: "center" }}>
          <CenterFlex VAlign={'flex-end'} style={{ width: "100%" }}>
            <ParaFlex row fstart style={{flex: 1, padding: '20px 0px', justifyContent: "space-around"}}>
              {images.map((image, key) => 
                <div style={{width: '135px'}} key={key}>
                  <Img fluid={image} key={key}/>
                </div>
              )}
            </ParaFlex>
          </CenterFlex>
          <div style={{ width: '330px', marginBottom: "-25%" }}>
            <Img style={{ width: '100%' }} fluid={screens[2]}/>
          </div>
        </CenterFlex>
      </FlexWrapper>
    </FlexWrapper>
  )
}

function IndustrySection({data}) {
  const cards = [{
    title: 'Disease awareness programmes',
    points: [
      'Improving patient understanding about health conditions',
      'Empowering patients to make the most of their prescribed medicines and available services',
      'Patient behaviour insights through access to engagement and outcomes data',
      'Easily transferable to multiple markets'
    ]
  }, 
  {
    title: 'Product-specific programmes',
    points: [
      'Product-specific education given alongside medication'
      ,'Designed specifically to improve adherence – e.g. injection technique, complex dosing'
      ,'Higher level of engagement compared with printed leaflets'
      ,'Outcomes data and patient diaries'
      ,'Improved medication adherence and patient outcomes'
      ,'Easily transferable to multiple markets'
    ]
  }]
  return (
    <CenterFlex column style={{alignItems: 'center', padding: '20px'}} color={theme.color.lightBlue}>
      <CustomText fsize={'24px'} color={theme.color.blue}>Cognitant group delivers:</CustomText>
      <CenterFlex flex={1} color={theme.color.lightBlue}>
        {cards.map(({title, points}, key) => 
          <CardBordered width={'40vw'} align={'flex-start'} color={theme.color.orange} key={key}>
            <CustomText fsize={'20px'} fweight={'600'} color={theme.color.blue} style={{padding: '0px'}}>{title}</CustomText>
            <ul>{points.map((point, key) => 
                <li style={{fontWeight: '300', padding: '5px 0px'}} key={key}>{point}</li> 
            )}
            </ul>
          </CardBordered>
        )}
      </CenterFlex>
    </CenterFlex>
  )
}


export default IndexPage
