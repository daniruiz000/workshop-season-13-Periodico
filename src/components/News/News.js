import './News.css';
import {
    Text,
    Flex,
    Button,
    
} from '@chakra-ui/react';

import {
    Link
} from 'react-router-dom'

const News = ({setPageSelected}) => {

    return (
        <Flex direction={'column'}>
            <Text>Por favor elige una de estas categorías:</Text>
            <Flex direction={'row'} justify={'space-around'}>

                <Flex direction={'column'} >
                    <Button colorScheme={'blue'}>
                    <Link to={'/news/sport/'}><Button onClick={()=>setPageSelected(1)}>Deportes</Button></Link>
                    </Button>
                    <Text>Encuentra las ultimas noticias sobre tu deporte favorito, desde futbol hasta tenis, baloncesto, golf y mucho más.</Text>
                </Flex>
                <Flex direction={'column'}>
                <Link to={'/news/tech/'}><Button onClick={()=>setPageSelected(1)}>Tecnología</Button></Link>
                    <Text>Mantente al día con las últimas tendencias tecnológicas, desde dispositivos móviles a </Text>
                </Flex>
                <Flex direction={'column'}>
                <Link to={'/news/economics/'}><Button onClick={()=>setPageSelected(1)}>Economía</Button></Link>
                    <Text>Descubre las noticias económicas, desde mercados financieros hasta empresas, negocios y mucho más.</Text>
                </Flex>
            </Flex>

        </Flex>


    )
}

export default News;



