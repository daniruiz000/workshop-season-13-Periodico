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
                <Text align={"center"} mb="5" fontSize={30}>Bienvenido a</Text>
                <Image m="0 auto" mb="5" w="1000px" objectFit="cover" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/The_New_York_Times_Logo.svg/2560px-The_New_York_Times_Logo.svg.png"></Image>
                <Text align={"justify"} width="800px" m="30px auto" mb="20">Nuestra misión es proporcionarte noticias objetivas y precisas de todo el mundo. Fundado en 2023 por Dani Ruiz 
                    y Juan Carlos Fernandez, nuestro equipo está dedicado a brindarte las últimas noticias de política, 
                    negocios, tecnología, deportes y más</Text>
            </Flex>
            <Flex justify={'center'} align={'center'} direction={'column'}>
                <Text mb="3">Conecta con nosotros:</Text>
                <Flex direction={'row'}>
                    <Flex mr="7" direction={'row'}>
                        <Image mr="1" boxSize="30px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1245px-Twitter-logo.svg.png"></Image>
                        <Link href="https://twitter.com/nytimes" isExternal>@The New York Times</Link> 
                    </Flex>
                    <Flex direction={'row'}>
                        <Image mr="1" boxSize="30px" src="https://w7.pngwing.com/pngs/902/996/png-transparent-internet-computer-icons-popular-text-trademark-logo.png"></Image>
                        <Link href="https://www.nytimes.com/international/" isExternal>The New York Times</Link>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>


    )
}

export default Homepage;