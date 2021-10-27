import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardGroup,
  CCardHeader,
  CCardImage,
  CCardLink,
  CCardSubtitle,
  CCardText,
  CCardTitle,
  CListGroup,
  CListGroupItem,
  CNav,
  CNavItem,
  CNavLink,
  CCol,
  CRow,
} from '@coreui/react'

import ReactImg from '../../src/react.jpg'



const Cards = () => {
    return ( 
        <CCard style={{ width: '2em' }}>
          <CCardImage orientation="top" src={ReactImg} width="100%"/>
          <CCardBody>
            <CCardTitle>Card title</CCardTitle>
            <CCardText>
              Some quick example text to build on the card title and make up the bulk of the
              card&#39;s content.
            </CCardText>
            <CButton href="#">Go somewhere</CButton>
          </CCardBody>
        </CCard>);
}
 
export default Cards;