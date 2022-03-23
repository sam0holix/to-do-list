import styled from 'styled-components'
import { useState, useEffect } from 'react'



const MainScaffold = ({ selectedState }) => {
  
  const [selected, setSelected] = selectedState
  const [response, setResponse] = useState([])
  const [numClicks, setNumClicks] = useState(0)
  const url = 'https://6235694e163bf7c4745ad1bb.mockapi.io/api/v1/users'
  const handleClick = () => {
    const reqObject = {
      method: 'GET',
    }
    getData(url, reqObject)
  }
  
  const getData = async (url, reqObject) => {
    try {
      const response = await fetch(url, reqObject)
      const data = await response.json()
      setResponse(data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleAdd = () => {
    setNumClicks(prev=>prev+1)
  }
  useEffect(() => {
    const reqObject = {
      method: 'GET',
    }
    getData(url, reqObject)
  },[])
  return (
    <Container>
      <Button onClick={handleAdd}>add</Button>
      <UsersSection>
        {response.map(item=>
        <User>
          <Avatar></Avatar>
          <UserName>{item.name}</UserName>
          <ID>{item.id}</ID>
        </User>)}
      </UsersSection>
    </Container>
  )
}

const Container = styled.div`
    flex:8;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    max-height:100%;
    overflow:scroll;
`

const Button = styled.button`
  
`

const User  = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`

const UserName = styled.div`  
`

const Avatar = styled.div`
  width:100px;
  height:100px;
  background-color:grey;
`

const ID = styled.div`

`

const UsersSection = styled.div`
height:100%;
`

export default MainScaffold