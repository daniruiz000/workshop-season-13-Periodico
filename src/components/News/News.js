import './News.css';
import {
    Text,
    Flex,
    Button
} from '@chakra-ui/react';

import {
    NavLink
} from 'react-router-dom'

const News = () => {

    return (
        <Flex direction={'column'}>
            <Text>Por favor elige una de estas categorías:</Text>
            <Flex direction={'row'} justify={'space-around'}>

                <Flex direction={'column'} >
                    <Button colorScheme={'blue'}>
                        <NavLink to='/news/sport/'>Deportes</NavLink>
                    </Button>
                    <Text>Encuentra las ultimas noticias sobre tu deporte favorito, desde futbol hasta tenis, baloncesto, golf y mucho más.</Text>
                </Flex>
                <Flex direction={'column'}>
                    <NavLink to='/news/tech/'>Tecnología</NavLink>
                    <Text>Mantente al día con las últimas tendencias tecnológicas, desde dispositivos móviles a </Text>
                </Flex>
                <Flex direction={'column'}>
                    <NavLink to='/news/economics/'>Economía</NavLink>
                    <Text>Descubre las noticias económicas, desde mercados financieros hasta empresas, negocios y mucho más.</Text>
                </Flex>
            </Flex>

        </Flex>


    )
}

export default News;