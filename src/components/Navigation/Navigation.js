
import { Button } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom'
import './Navigation.css'

const Navigation = ({setPageSelected}) => {

const navigate = useNavigate()

    return (
        <nav>   
            <Button onClick={()=>navigate(-1)}>Atrás</Button>
            <Link to={'/'}><Button onClick={()=>setPageSelected(1)}>Home</Button></Link>
            <Link to={'/news'}><Button onClick={()=>setPageSelected(1)}>Noticias</Button></Link>
            <Link to={'/news/sport/'}><Button onClick={()=>setPageSelected(1)}>Deportes</Button></Link>
            <Link to={'/news/tech/'}><Button onClick={()=>setPageSelected(1)}>Tecnología</Button></Link>
            <Link to={'/news/economics/'}><Button onClick={()=>setPageSelected(1)}>Economía</Button></Link>
            <Button onClick={()=>navigate(+1)}>Adelante</Button>
        </nav>
    )
}

export default Navigation;