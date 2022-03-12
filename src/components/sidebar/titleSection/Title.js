import styled from 'styled-components'

const Title = () => {
  return (
    <Container>
      <HeaderSection>
        <Heading>.studio</Heading>
      </HeaderSection>
    </Container>
  )
}

const Container = styled.div`
    flex:2;
    display:flex;
    align-items: center;
    justify-content: flex-start;

`
const HeaderSection = styled.div`
  padding: 40px;
`

const Heading = styled.span`
  font-size: 32px;
  font-family: 'Prompt', sans-serif;
  font-weight:  800;
`

export default Title