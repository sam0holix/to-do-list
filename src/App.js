import styled from 'styled-components'
import Sidebar from './components/sidebar/Sidebar'
import MainScaffold from './components/mainScaffold/MainScaffold'
function App() {
  return (
    <Container>
      <Sidebar  />
      <MainScaffold />
    </Container>
  );
}

const Container = styled.div`
  display:flex;
  height:100vh;
`

export default App;
