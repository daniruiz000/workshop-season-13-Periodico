
import { Button, Flex } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom'
import './Navigation.css'

const Navigation = ({setPageSelected}) => {

const navigate = useNavigate()

    return (
        <nav>
            <Flex mb="5" justify={'center'}>
                <Button boxShadow='md' rounded='md' bg='white' backgroundColor={'lightgray'} borderRadius={5} p="5px 10px" fontSize={20} margin={5} onClick={()=>navigate(-1)}>Atrás</Button>
                <Link to={'/'}><Button boxShadow='md' rounded='md' bg='white' border="1px solid black" borderRadius={5} p="5px 10px" fontSize={20} margin={5} onClick={()=>setPageSelected(1)}>Home</Button></Link>
                <Link to={'/news'}><Button boxShadow='md' rounded='md' bg='white' border="1px solid black" borderRadius={5} p="5px 10px" fontSize={20} margin={5} onClick={()=>setPageSelected(1)}>Noticias</Button></Link>
                <Link to={'/news/sport/'}><Button boxShadow='md' rounded='md' bg='white' border="1px solid black" borderRadius={5} p="5px 10px" fontSize={20} margin={5} onClick={()=>setPageSelected(1)}>Deportes</Button></Link>
                <Link to={'/news/tech/'}><Button boxShadow='md'  rounded='md' bg='white' border="1px solid black" borderRadius={5} p="5px 10px" fontSize={20} margin={5} onClick={()=>setPageSelected(1)}>Tecnología</Button></Link>
                <Link to={'/news/economics/'}><Button boxShadow='md'  rounded='md' bg='white' border="1px solid black" borderRadius={5} p="5px 10px" fontSize={20} margin={5} onClick={()=>setPageSelected(1)}>Economía</Button></Link>
                <Button boxShadow='md'  rounded='md' bg='white' backgroundColor={'lightgray'} borderRadius={5} p="5px 10px" fontSize={20} margin={5} onClick={()=>navigate(+1)}>Adelante</Button>
            </Flex>   
        </nav>
    )
}

export default Navigation;