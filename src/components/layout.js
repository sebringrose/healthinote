import React, { useState } from 'react'
import Nav from './Nav'
import styled from 'styled-components'
import Footer from './Footer'
import theme from '../styles/theme'

import CookieBanner from "./CookieBanner"

export default function Layout({modal, setModal, children}) {
  const [cookieOverlay, setCookieOverlay] = useState(false)

  return (<Wrapper overlay={cookieOverlay}>
    <CookieBanner setCookieOverlay={setCookieOverlay}/>
    {modal && <Modal onClick={() => setModal(false)}>
      <ModalContent onClick={(e) => e.stopPropagation()}>{modal}</ModalContent>
    </Modal>}
    <Nav setModal={setModal}/>
    {children}
    <Footer/>
  </Wrapper>)
}

const Wrapper = styled.div`
    height: 100%;
    box-sizing: border-box;
    width: 100%;
    font-family: mont;
    background-color: white;
    overflow: ${({overlay}) => overlay ? "hidden" : "scroll"}
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  background-color: ${theme.color.opaque};
  z-index: 3;
`

const ModalContent = styled.div`
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  text-align: center;
  border-radius: 1rem;
  padding: 20px;
  font-size: 1rem;
  background-color: white;
  min-width: 260px;
  max-width: 400px;
  max-height: 75vh;
  overflow: scroll;
`