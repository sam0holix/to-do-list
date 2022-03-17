import styled from 'styled-components'


const MainScaffold = ({selectedState}) => {
  const [selected, setSelected] = selectedState 
  return (
    <Container>{`${selected} scaffold is here`}</Container>
  )
}

const Container = styled.div`
    flex:8;
`

export default MainScaffold