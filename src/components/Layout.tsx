import * as React from 'react'
import { Container } from 'reactstrap'
import NavMenu from './NavMenu'

const Layout = (props: { children?: React.ReactNode }) => (
  // eslint-disable-next-line react/jsx-fragments
  <React.Fragment>
    <NavMenu />
    <Container>{props.children}</Container>
  </React.Fragment>
)

export default Layout
