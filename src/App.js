import styled from 'styled-components'
import Sidebar from './components/sidebar/Sidebar'
import MainScaffold from './components/mainScaffold/MainScaffold'
import {useState} from 'react'


function App() {
  const [selected, setSelected] = useState('Projects')
  return (
    <Container>
      <Sidebar selectedState={[selected, setSelected]}/> 
      <MainScaffold selectedState={[selected, setSelected]}/>
    </Container>
  );
}

const Container = styled.div`
  display:flex;
  height:100vh;
`

export default App;
