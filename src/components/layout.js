import React, { useState } from 'react'
import Nav from './Nav'
import styled from 'styled-components'
import Footer from './Footer'
import theme from '../styles/theme'

import CookieConsent from "react-cookie-consent"

export default function Layout({children}) {
  const [modal, setModal] = useState(false)

  return (<Wrapper>
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      cookieName="CookieConsent"
      style={{ background: "#2B373B" }}
      buttonStyle={{ color: "black", fontSize: "1rem", padding: "0.6rem 1rem" }}
      enableDeclineButton
      declineButtonText="Decline"
      declineButtonStyle={{ background: "none", textDecoration: "underline" }}
      buttonWrapperClasses="cookie-buttons"
      onAccept={() => {
          // Global site tag (gtag.js) - Google Analytics
          let id = (window.location.href.indexOf('//preview.') !== -1 || window.location.href.indexOf('localhost') !== -1) ? 'UA-116709596-1' : 'UA-116709596-2'

          let gaScript1 = document.createElement("script")
          gaScript1.async = ""
          gaScript1.src = `https://www.googletagmanager.com/gtag/js?id='${id}'`

          let gaScript2 = document.createElement('script');
          gaScript2.text = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${id}');
          `;
            

          document.body.append(gaScript1)
          document.body.append(gaScript2)
      }}
    >
      <p style={{ fontSize: "1.5rem" }}>Do you accept the use of cookies on this site?</p>
      <p style={{ fontSize: "1rem" }}>We use cookies for anonymous analytics purposes only.&nbsp;<a href="https://cognitant.com/privacy">Learn more</a></p>
    </CookieConsent>
    {modal && <Modal onClick={() => setModal(false)}>
      <ModalContent onClick={(e) => e.stopPropagation()}>{modal}</ModalContent>
    </Modal>}
    <Nav setModal={setModal}/>
    <Main>
      {children}
    </Main>
    <Footer/>
  </Wrapper>)
}

const Wrapper = styled.div`
    min-height: 100%;
    width: 100%;
    font-family: mont;
    display: flex;
    flex-direction: column;
    background-color: white;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${theme.color.opaque};
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalContent = styled.div`
  text-align: center;
  border-radius: 1rem;
  padding: 20px;
  font-size: 1rem;
  background-color: white;
  max-width: 400px;
  margin: 10px;
`

const Main = styled.main`
  flex: 1;
  width: 100%;
  overflow-x: hidden;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`
