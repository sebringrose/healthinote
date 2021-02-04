import React, {useState} from 'react'

import theme from '../styles/theme'

import SEO from '../components/seo'
import Layout from '../components/layout'
import { CustomText } from '../components/StyledComponents'

import FAQSection from '../sections/FAQSection'
import TestimonialSection from '../sections/TestimonialSection'
import TestingSection from '../sections/TestingSection'
import TeamSection from '../sections/TeamSection'

const content = {
    FAQs: {
        heading: "Frequently asked questions",
        questions: [
            {
                q: "How does Healthinote ensure that all content and their sources are credible and can be trusted?",
                a: <>
                    <p>We are careful to only use sources of health information that are known to be clinically- led, trusted and reliable. With the support of our advisory board, our clinical director makes decisions about which resources should be included for the library.  Our content sources currently include:</p>
                    <ul>
                        <li>the NHS Health A to Z and medication library</li>
                        <li>charity partners, including Macmillan, Cancer Research UK, Asthma UK, British Pregnancy Advisory Service, Royal National Institute of Blind PeopleBPAS, RNIB, Mind, and many more</li>
                        <li>HCI’s library of Health and Care videos, which has been commissioned by NHSX</li>
                        <li>Cognitant Group Ltd (the parent company of Healthinote), which specialises in visual and interactive content, with all content created by medical writers followed by a stringent clinical review process.</li>
                    </ul>
                    <p>Our trusted charity content partners have been included in response to a survey that we have circulated amongst GPs to ask for their preferred content sources. The source of all content that appears in Healthinote is clearly shown.</p>
                </>
            },
            {
                q: "How can I, as a doctor, send health information prescriptions using Healthinote Pro vía eConsult?",
                a: <>
                    <p><strong>If you are a clinician&nbsp;</strong>with access to eConsult, sending an information prescription is easy.</p>
                    <p>When you are in the post consult messaging service (PCM) you have access to the Healthinote search bar. Use the search bar to search for any health information. For example, if you search ‘contraception’, it will bring up all contraception health information from a variety of trusted sources. You can click to ‘preview’ the content and then press ‘insert’ to insert the link into the body of your message. Any links you insert will be sent to the patient who can then access the information via the Healthinote app for free.</p>
                    <p><a href="https://youtu.be/Cl9aUR9kkc0" target="_blank">This video may help summarise the above.</a></p>
                    <p><strong>If you are a patient</strong>, you will receive an email from your clinician, which will include links to the content selected by them. On receiving these links, you can simply click on them to access the information. If you are using a smartphone, you will be prompted to download the Healthinote app the first time you receive an information prescription, and the content will then load onto your phone. On future occasions you will be able to click straight through to the prescribed information.</p>
                </>
            },
            {
                q: "What do you do with my data?",
                a: <>
                    <p>We do not require you to provide any personal information and only track anonymised data. The app has security options so that sensitive content can be secured and accessed only with a password, fingerprint or face ID.</p>
                </>
            },
            {
                q: "How often will the information on Healthinote be checked and reviewed so that the advice remains current and safe?",
                a: <>
                    <p>Our sources of content are carefully vetted by Cognitant’s clinical director, with support from our clinical advisory board. In most cases, we provide redirect links to the content on the partner websites, so that information remains up to date. In the case of the NHS, we have a licensing agreement to reproduce the content in the app. We have a feed for the content from the NHS so that content is updated automatically with updates made to the NHS website. Content developed by Cognitant Group is reviewed regularly (as a minimum annually) and updated to ensure it is compliant with the latest guidelines and reflects best practice.</p>
                </>
            },
            {
                q: "Can we include Healthinote in our practice website?",
                a: <>
                    <p>Yes. We can provide you with information to help you give patients instructions as to how to access Healthinote.  Please contact Cognitant’s marketing director, Alex Merckx Alex.Merckx@cognitant.com for this support.</p>
                </>
            },
            {
                q: "How do your commercial and financial arrangements work?",
                a: <>
                    <p>Our standard service is available for free to both health care professionals and patients using NHS services.</p>
                    <p>Charges are applied for:</p>
                    <ul>
                        <li>commissioned content: eg an organisation may wish to commission specific content to address a particular care pathway or service</li>
                        <li>additional services: eg detailed reporting or an interface to upload locally developed content</li>
                    </ul>
                    <p>Content may be funded or commissioned by industry partners such as Pharma but, in this case, the sponsorship is clearly labelled and content must follow strict compliance rules as well as our stringent review process that we have built with our advisory group. Information about a specific product, for example an inhaler, is only available for patients who have been prescribed that particular product.</p>
                </>
            },
            {
                q: "Do you do any user testing?",
                a: <>
                    <p>Yes, <a href="#User-testing">user testing</a> is conducted on an ongoing basis with patients and healthcare professionals. For more information about input received from user testing, please contact Cognitant’s Mmarketing dDirector, Alex Merckx (<a href="mailto:alex.merckx@cognitant.com">alex.merckx@cognitant.com</a>).</p>
                </>
            }
        ]
    },
    testimonials: {
        heading: "Testimonials",
        testimonialSections: [
            {
                title: "Health Care Professionals",
                quotes: [
                    {
                        quote: `"I have found invaluable on a day-to-day basis in practice. It allows me to free up some of my clinical time by guiding the patient towards a reliable source of education to improve the patients understanding and knowledge. In times where General Practice is under an increased burden to do more and more, it is encouraging to know that there are ideas out there to support the GP as a clinician."`,
                        from: "GP"
                    },
                    {
                        quote: `"This tool will enable care workers like myself to learn visually about how to effectively manage sepsis, deal with a deteriorating resident and understand the principals of infection control.  I think it will improve our confidence in managing such cases and thus improve the care received by the residents."`,
                        from: "Care Provider"
                    },
                ]
            },    
            {
                title: "Patients",
                quotes: [
                    {
                        quote: `"I found it all so informative and simple to understand. The navigation section is simple to use and allows you to skip to the sections that are relevant to you. It is explained clearly and concisely and the avatar makes it a lot more user friendly."`,
                    },
                    {
                        quote: `"There needs to be more like this to help educate and inform people. Amazing!"`
                    },
                    {
                        quote: `"If I had this when I was diagnosed it would have been so helpful"`
                    },
                ]
            }
        ]
    },
    testing: {
        heading: "User testing",
        content: <>
            <CustomText size={theme.font.medium}>Over 60 patients and healthcare professionals (doctors, nurses, carers, physiotherapists) have been consulted as part of our ongoing user research programme.</CustomText>
            <p>The research has highlighted the wide range of needs that healthinote users have, including cognitive load or impairment, mobility issues which make certain kinds of screen interactions more challenging, and visual impairments. This has led to careful attention being paid to reducing the amount of text on the screen, improvements to the search facility, and increasing the target size of buttons/clickable areas. Search data and app analytics have also been reviewed to identify patterns of usage.</p>
            <p>Users have been shown designs and prototypes to help to test the quality of the designs and enable us to improve the service.</p>
            <p>Some comments from users involved in the testing include:</p>
            <ul>
                <li><i>"I'm newly diagnosed and I think it's really helpful."</i>&nbsp;Female, 37</li>
                <li><i>"It feels comfortable and takes away the scary aspect of getting help about a health issue."</i>&nbsp;Female, 21</li>
                <li><i>"I like this because you can digest it at your leisure."</i>&nbsp;Nurse, 52</li>
                <li><i>"This is really good. This is something that a lot of patients and carers would like."</i>&nbsp;Nurse, 52</li>
                <li><i>"It's easy to navigate."</i>&nbsp;Male, 31</li>
                <li><i>"This is easier to digest than what I find online. Like the visual aids, [and I] like to know what’s causing the condition. My GP wouldn’t always have time to talk about it, they’d just talk about treatment. It’s really thorough. It goes into the background before talking about treating it, I like that."</i>&nbsp;Female, 31</li>
            </ul>
        </> 
    },
    team: {
        heading: "Meet the team",
        members: [
            {
                image: require("../images/team/tim.png"),
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
              image: require("../images/team/daisy.png"),
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
                image: require("../images/team/rick.png"),
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
                image: require("../images/team/juhi.png"),
                name: 'Dr Juhi Tandon',
                color: theme.color.orange,
                position: 'Clinical Director, Clinical Safety Officer and Founder',
                links: {
                    twitter: null,
                    linkedin: 'https://www.linkedin.com/in/juhi-tandon-b439aaa1/'
                },
                more: 'As Clinical Director for Cognitant Juhi is passionate about empowering patients to make informed decisions about their health. She graduated from University College London in 2005 and during this period, undertook a BSc in Pharmacology (2002), gaining 1st Class honours, the AJ Clark Prize and the Jackson Lewis Scholarship Award for academic achievement. Juhi is a practising NHS GP and has been for 10 years, with specialist interests in women’s health, dermatology and GP education. She is also involved in teaching junior doctors attached to primary care. Outside of work she is a classic foodie but also enjoys a good fine wine and travelling with her family in the USA.'
            },
            {
                image: require("../images/team/becca.png"),
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
                image: require("../images/team/alex.png"),
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
                image: require("../images/team/emma.png"),
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
                image: require("../images/team/jake.png"),
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
    }
}

export default function About() {
    const [modal, setModal] = useState(false)
    return (
        <Layout modal={modal} setModal={setModal}>
            <SEO title="About Healthinote" />
            <FAQSection content={content.FAQs} />
            <TestimonialSection content={content.testimonials} />
            <TestingSection content={content.testing} />
            <TeamSection content={content.team} setModal={setModal} />
        </Layout>
    )
}

