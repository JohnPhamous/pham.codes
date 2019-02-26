import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Typist from 'react-typist'
import '../../node_modules/react-typist/dist/Typist.css'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const HeaderContainer = styled.div`
  margin-bottom: 0px;
`

const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 12px;
`

const Title = styled(Link)`
  all: unset;
  cursor: pointer;

  h1 {
    margin-bottom: 0px;

    @media (max-width: 500px) {
      font-size: 28px;
    }
  }
`

const LinkItem = styled.div`
  a {
    color: white;
    text-decoration: none;
  }

  @media (max-width: 600px) {
    margin-bottom: 10px;
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

const NavItems = [
  {
    name: 'projects',
    path: '/projects',
  },
  {
    name: 'email',
    url: 'mailto:johnphammail@gmail.com',
  },
  {
    name: 'github',
    url: 'https://github.com/JohnPhamous',
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/johnphamous/',
  },
  {
    name: 'design',
    url: 'https://www.flickr.com/photos/pnt101/',
  },
  {
    name: 'thePhamous',
    path: '/hall-of-fame',
  },
]

const Header = () => {
  const NavItemsRender = NavItems.map(item => {
    // Render for internal page if path exists, external page if url exists
    if (item.path) {
      return (
        <LinkItem key={item.name}>
          <Link to={item.path}>
            <Method>
              {item.name}
              <Argument>()</Argument>
            </Method>
            ;
          </Link>
        </LinkItem>
      )
    } else {
      return (
        <LinkItem>
          <OutboundLink
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Method>
              {item.name}
              <Argument>()</Argument>
            </Method>
            ;
          </OutboundLink>
        </LinkItem>
      )
    }
  })
  return (
    <HeaderContainer>
      <Title to="/">
        <h1>
          <Typist>
            JohnPham<Location>@Riverside</Location>
          </Typist>
        </h1>
      </Title>
      <LinksContainer>{NavItemsRender}</LinksContainer>
    </HeaderContainer>
  )
}

export default Header
