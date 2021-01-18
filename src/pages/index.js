import React from 'react'
import graphql from 'gatsby'
import Img from 'gatsby-image'

import SEO from '../components/seo'
import Layout from '../components/layout'

import HeroSection from '../sections/HeroSection'
import PartnersSection from '../sections/PartnersSection'
import TabSection from '../sections/TabSection'
import AppSection from '../sections/AppSection'
import MacSection from '../sections/MacSection'
import VideoSection from '../sections/VideoSection'

import { CustomText } from '../components/StyledComponents'
import theme from '../styles/theme'

import healthinoteMP4 from '../images/healthinote.mp4'
import orchaApproved from '../images/orcha-approved.png'
import sfcEndorsed from '../images/skillsforcare-endorsed.jpg'

const content = {
    hero: {
        video: healthinoteMP4,
        heading: "Trusted health information, recommended by your clinician",
        subtitle: "Healthinote is the go-to source for for clinically approved, visual health information.",
        description: [
            "Find reliable health information from authoritative sources about any health condition - avoiding the risk of misleading or inaccurate information.",
            "Receive health information recommened to you by your healthcare professional via digital health information prescriptions."
        ],
        badge: <>
            <img src={orchaApproved} alt="orcha-approved"/>
            <CustomText weight="bold" color={theme.color.blue}>APPROVED</CustomText>
            <img src={sfcEndorsed} alt="skillsforcare-endorsed"/>
        </>
    },
    partners: {
        heading: "Healthinote's trusted partners",
    },
    tab: {
        heading: "FIND OUT MORE",
        tabs: [
            {
                title: "I'M A DOCTOR, NURSE OR PHARMACIST",
                content: <>
                    <MacSection content={{
                        appImage: require("../images/PCM-self-help.png"),
                        heading: <>Healthinote pro helps doctors, nurses and pharmacists to make <strong>health information prescriptions</strong> and send them to patients via email, SMS or letter.</>,
                        text: [
                            "Optimize your consultation time by sending recommended, trusted information that can be viewed outside of consultation time."
                        ]
                    }} />
                    <AppSection reverse background={theme.color.backgroundBlue} content={{
                        appImage: require('../images/healthinote-iphoneX.png'),
                        list: {
                            heading: "Using Healthinote Pro, you can find and share health information that is:",
                            items: [
                                <>from&nbsp;<strong>trusted sources including the NHS and many charities</strong></>,
                                <><strong>reviewed</strong>&nbsp;by a medical advisory board</>,
                                <><strong>locally relevant</strong></>,
                                <>can be&nbsp;<strong>easily previewed</strong></>,
                                <><strong>interactive, visual, immersive</strong></>,
                                <><strong>sharable via link or QR code</strong></>,
                                <>easy for people to&nbsp;<strong>understand and access</strong></>
                            ]
                        },
                        text: [
                            "Copy the generated link or QR code to send it via your preferred method of communication,",
                            "The person who receives your information perscription can view or save the information online or by using the Healthinote app on their smartphone."
                        ]
                    }} />
                    <VideoSection content={{
                        video: require('../images/Healthinote_eConsult.mp4'),
                        heading: "Integrated with eConsult",
                        text: [
                            "Healthcare professionals using eConsult can search and send health information directly to patients via their eConsult post consult messaging tool.",
                            "Linked to Emis, all of your health prescriptions will automatically be saved to your clinical records."
                        ]
                    }} />
                    <div style={{ maxWidth: "500px", margin: "0 2rem 2rem" }}>
                        <CustomText align="center" weight={600} size={theme.font.medium} color={theme.color.orange}>Go to Healthinote Pro now to explore our library and create a health information prescription.</CustomText>
                    </div>
                </>,
            },
            {
                title: "I'M A PATIENT",
                content: <>
                    <AppSection content={{
                        appImage: require('../images/healthinote-iphoneX.png'),
                        heading: "Healthinote provides you with clear, reliable health information about your condition or treatment recommended by your doctor, nurse or pharmacist.",
                        list: {
                            heading: "The health information is:",
                            items: [
                                "from trusted sources",
                                "often interactive and visual",
                                "easy to understand and access"
                            ]
                        },
                        text: [
                            "Receive your health information prescription via link or QR code.",
                            "Download your information on the Healthinote app so that you can return to the information at your convenience."
                        ],
                        download: {
                            text: "Download the app now to explore our Healthinote library of clear and reliable health information",
                            iosLink: "INSERT IOS LINK HERE",
                            googleLink: "INSERT GOOGLE LINK HERE"
                        }
                    }} />
                </>
            },
            {
                title: "I'M FROM THE HEALTHCARE INDUSTRY",
                content: <>
                    <VideoSection content={{
                        video: require('../images/Cognitant-innovation.mp4'),
                        heading: "Health information, delivered better.",
                        subtitle: "Our parent company, Cognitant Group Ltd, specialises in creating clear and reliable health information.",
                        text: [
                            "Cognitant uses visual and interactive techniques to communicate healthcare topics effectively, driving increases in patient understanding and adherance to medication and positive lifestlye behaviours.",
                        ]
                    }} />
                    <AppSection reverse background={theme.color.backgroundBlue} content={{
                        appImage: require('../images/healthinote-iphoneX.png'),
                        subtitle: "Where appropriate, the health information created can feature in the Healthinote library, allowing healthcare professionals to find and share the information with their patients as part of their health information prescriptions.",
                        list: {
                            heading: "Cognitant's solutions include:",
                            items: [
                                <>smartphone education hubs</>,
                                <>animated explainer videos</>,
                                <>3D avatar-led videos</>,
                                <>interactive, bespoke 3D experiences</>,
                                <>360° videos/films</>,
                                <>VR, AR and gamification</>,
                            ]
                        },
                        text: [
                            <>For more information, go to <a href="https://cognitant.com">Cognitant.com</a> or contact <a href="mailto:hello@cognitant.com">hello@cognitant.com</a>.</>,
                        ]
                    }} />
                </>
            },
        ]
    }
}

export default function Index() {
    return (
        <Layout>
            <SEO title="Healthinote" />
            <HeroSection content={content.hero} />
            <PartnersSection content={content.partners} />
            <TabSection content={content.tab} />
        </Layout>
    )
}
