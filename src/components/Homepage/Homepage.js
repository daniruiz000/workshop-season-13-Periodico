import './Homepage.css';
import React from 'react';
import {

    Text,
    Flex,
    Image,
    Link
} from '@chakra-ui/react';

const Homepage = () => {

    return (
        <Flex direction={'column'}>
            <Flex direction={'column'}>
                <Text>Bienvenido al periódico digital</Text>
                <Image></Image>
                <Text>Nuestra misión es proporcionarte noticias objetivas y precisas de todo el mundo. Fundado en 2023 por Dani Ruiz 
                    y Juan Carlos Fernandez, nuestro equipo está dedicado a brindarte las últimas noticias de política, 
                    negocios, tecnología, deportes y más</Text>
            </Flex>
            <Flex direction={'column'}>
                <Text>Contacta con nosotros:</Text>
                <Flex>
                    <Image></Image>
                    <Link href="https://twitter.com/marca" isExternal>@periodico_digital</Link>
                    <Image></Image>
                    <Link href="https://www.marca.com/" isExternal>Periodico Digital</Link>
                </Flex>
            </Flex>
        </Flex>


    )
}

export default Homepage;