import styled from 'styled-components'
// const navItemArray = [
//   ['Overview', <AiFillHome  size={24} />],
//   ['Stats', <IoMdStats size={24} />],
//   ['Projects', <AiTwotoneFolderOpen size={24} />],
//   ['Chats', <IoMdChatbubbles size={24} />], 
//   ['Calender', <IoMdCalendar size={24} />],
// ]
const NavItems = ({items, selectedState}) => {
  const [selected, setSelected] = selectedState 
  const handleClick = (itemName) => {
    setSelected(itemName)
  }
  return (
    <Container>
      {items.map(item => 
        <NavItem selected={selected} itemName={item[0]} onClick={() => handleClick(item[0])}>
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
  padding:20px 40px;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: #f5f5f5;
  }
  transition: all 0.2s ease-in;
  ${props => props.selected === props.itemName ? {
    color:'black'
  } : {
    color:'#c9c9c9'
  }}
`

const Icon = styled.div`
  flex:2;
`

const ItemHeader = styled.span`
  flex:8;
  font-family: 'Prompt', sans-serif;
  font-weight: 400;
  font-size:18px;
`

export default NavItems