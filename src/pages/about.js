import React from 'react'

import SEO from '../components/seo'
import Layout from '../components/layout'

import FAQSection from '../sections/FAQSection'

import { CustomText } from '../components/StyledComponents'

const content = {
    FAQs: {
        questions: [
            {
                q: "Can I view the content (and its source) to ensure that the health prescriptions are safe, relevant and applicable to my patients?",
                a: <>
                    <p>We are careful to only use sources of health information that are known to be clinically- led, trusted and reliable. With the support of our advisory board, our cClinical dDirector makes decisions about which resources should be included for the library.  Our content sources currently include:</p>
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
                q: "Can you explain how accessing ‘health prescriptions’ from eConsult works?",
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
                    <p>Yes, <a href="#user-testing">user testing</a> is conducted on an ongoing basis with patients and healthcare professionals. For more information about input received from user testing, please contact Cognitant’s Mmarketing dDirector, Alex Merckx (<a href="mailto:alex.merckx@cognitant.com">alex.merckx@cognitant.com</a>).</p>
                </>
            }
        ]
    }
}

export default function Index() {
    return (
        <Layout>
            <SEO title="About Healthinote" />
            <FAQSection content={content.FAQs} />
        </Layout>
    )
}

