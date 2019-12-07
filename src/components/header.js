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
  margin-top: 12px;

  @media screen and (max-width: 600px) {
    .hide-on-mobile {
      display: none;
    }
  }
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
  margin-right: 24px;
  a {
    color: white;
    text-decoration: none;
  }

  @media (max-width: 600px) {
    margin-bottom: 10px;
  }

  .active-page {
    font-weight: 800;
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
    name: 'email',
    url: 'mailto:john@pham.codes',
    classNames: '',
  },
  {
    name: 'github',
    url: 'https://github.com/JohnPhamous',
    classNames: 'hide-on-mobile',
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/johnphamous/',
    classNames: '',
  },
  {
    name: 'design',
    url: 'https://www.flickr.com/photos/pnt101/albums/72157633512030429/page2',
    classNames: 'hide-on-mobile',
  },
  {
    name: 'twitter',
    url: 'https://twitter.com/JohnPhamous',
    classNames: 'hide-on-mobile',
  },
  {
    name: 'thePhamous',
    path: '/hall-of-fame',
    classNames: 'hide-on-mobile',
  },
]

const Header = () => {
  const NavItemsRender = NavItems.map(item => {
    // Render for internal page if path exists, external page if url exists
    if (item.path) {
      return (
        <LinkItem key={item.name}>
          <Link
            to={item.path}
            activeClassName="active-page"
            className={item.classNames}
          >
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
        <LinkItem key={item.name} className={item.classNames}>
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
            JohnPham<Location>@Washington</Location>
          </Typist>
        </h1>
      </Title>
      <LinksContainer>{NavItemsRender}</LinksContainer>
    </HeaderContainer>
  )
}

export default Header
