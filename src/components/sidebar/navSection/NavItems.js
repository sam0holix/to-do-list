import styled from 'styled-components'

const NavItems = ({items}) => {
  return (
    <Container>
      {items.map(item =>
        <NavItem>
          <Icon>{item[1]}</Icon>
          <ItemHeader>{item[0]}</ItemHeader>
        </NavItem>
      )}
    </Container>
  )
}

const Container = styled.div`
flex:6;
`

const NavItem = styled.div`
  display:flex;
`

const Icon = styled.div`

`

const ItemHeader = styled.span`

`

export default NavItems