import React, { useRef, useState, useEffect } from 'react'
import Nav from './Nav'
import styled from 'styled-components'
import Footer from './Footer'
import theme from '../styles/theme'

export default function Layout({children}) {
  const [modal, setModal] = useState(false)

  return (<Wrapper>
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
