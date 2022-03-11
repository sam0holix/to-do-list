import styled from 'styled-components'
import Title from './titleSection/Title'
import NavItems from './navSection/NavItems'
import Tools from './toolSection/Tools'
const Sidebar = () => {
  return (
    <Container>
        <Title />
        <NavItems />
        <Tools />
    </Container>
  )
}

const Container = styled.div`
    flex:2;
    display: flex;
    flex-direction: column; 
`

export default Sidebar