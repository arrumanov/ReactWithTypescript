import * as React from 'react'
import { observer } from 'mobx-react'
import { Container } from 'reactstrap'
import NavMenu from './NavMenu'

export const Layout: React.FC = observer((props: { children?: React.ReactNode }) => {
  return (
    // eslint-disable-next-line react/jsx-fragments
    <React.Fragment>
      <NavMenu />
      <Container>{props.children}</Container>
    </React.Fragment>
  )
})
