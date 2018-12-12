import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  margin-bottom: 25px;
`

const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Title = styled.h1`
  margin-bottom: 0px;
`

const LinkItem = styled.div`
  a {
    color: white;
    text-decoration: none;
  }
`

const Method = styled.span`
  color: rgb(139, 233, 253);
`

const Argument = styled.span`
  color: rgb(255, 121, 198);
`

const Location = styled.span`
  color: rgb(189, 147, 249);
`

const Header = () => {
  return (
    <HeaderContainer>
      <Title>
        JohnPham<Location>@Riverside</Location>
      </Title>
      <LinksContainer>
        <LinkItem>
          <a href="#">
            <Method>
              resume(<Argument>this</Argument>)
            </Method>
          </a>
        </LinkItem>
        <LinkItem>
          <a href="mailto:johnphammail@gmail.com">
            <Method>
              email(<Argument>this</Argument>)
            </Method>
          </a>
        </LinkItem>
        <LinkItem>
          <a href="#">
            <Method>
              projects(<Argument>this</Argument>)
            </Method>
          </a>
        </LinkItem>
        <LinkItem>
          <a href="http://goo.gl/T7TX7j">
            <Method>
              github(<Argument>this</Argument>)
            </Method>
          </a>
        </LinkItem>
        <LinkItem>
          <a href="http://linkedin.com/in/johnpham97">
            <Method>
              linkedin(<Argument>this</Argument>)
            </Method>
          </a>
        </LinkItem>
        <LinkItem>
          <a href="https://goo.gl/7708EP">
            <Method>
              design(<Argument>this</Argument>)
            </Method>
          </a>
        </LinkItem>
      </LinksContainer>
    </HeaderContainer>
  )
}

export default Header
