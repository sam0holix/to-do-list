import {useState} from 'react'
import styled from 'styled-components'
import Title from './titleSection/Title'
import NavItems from './navSection/NavItems'
import Tools from './toolSection/Tools'

import {AiFillHome, AiTwotoneFolderOpen} from 'react-icons/ai'
import {IoMdStats, IoMdChatbubbles,IoMdCalendar, IoMdSettings,} from 'react-icons/io'
import {IoLogOutOutline} from 'react-icons/io5'

const Sidebar = ({selectedState}) => {
  const [selected, setSelected] = selectedState
  const navItemArray = [
    ['Overview', <AiFillHome  size={24} />],
    ['Stats', <IoMdStats size={24} />],
    ['Projects', <AiTwotoneFolderOpen size={24} />],
    ['Chats', <IoMdChatbubbles size={24} />], 
    ['Calender', <IoMdCalendar size={24} />],
  ]
  //useState hook returns an array containing the state itselt and a function to change the state.
  //anything you declare is immutable. so to change the values of your state, always use the function provided by useState.
  return (
    <Container>
        <Title />
        <NavItems items={navItemArray} selectedState={[selected, setSelected]} /> 
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