import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  background: rgb(59, 62, 79);
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  h1 {
    margin: 0;
  }
`
const FooterItem = styled.span`
  padding: 5px 20px;
`

const Mode = styled(FooterItem)`
  background: rgb(49, 6, 110);
`

// const Size = styled(FooterItem)`
//   background: rgb(139, 72, 0);
//   margin-left: auto;
// `

const Date = styled(FooterItem)`
  margin-left: auto;
  background: rgb(53, 63, 92);
  @media (max-width: 600px) {
    display: none;
  }
`

const Footer = () => {
  return (
    <FooterWrapper>
      <Mode>NORMAL</Mode>
      <FooterItem>pham.html</FooterItem>

      {/* <Size>12kb</Size> */}
      <Date>Last Updated: 12/11/2018</Date>
    </FooterWrapper>
  )
}
export default Footer
