import React, {useContext} from 'react'
import styled from 'styled-components'

import Modal from '../../components/Modal'
import { ModalContext } from '../../context/ModalContext'
import LeftSection from './LeftSection'
import RightSection from './RightSection'

const StyledHome = styled.div`
  width: 100%;
  min-height: 100vh;
`

const Home = () => {
  const {isOpenModal} = useContext(ModalContext);
  
  return (
    <StyledHome>
      <LeftSection />
      <RightSection />
      { isOpenModal.show && <Modal />}
    </StyledHome>
  )
}

export default Home