import './News.css';
import {
    Text,
    Flex,
    Button
} from '@chakra-ui/react';

import {
    Link
} from 'react-router-dom'
import React from 'react';

import { AuthContext } from '../../App';


const News = ({ setPageSelected }) => {


    const authInfo = React.useContext(AuthContext)

    return (
        authInfo && authInfo.user === 'dani' && authInfo.password === '1234' ?
            <Flex direction={'column'}>
                <Text m="40px 60px" as='b' fontSize={"4xl"} mb="50px" pl="150px">Por favor, elige una de estas categorías:</Text>
                <Flex direction={'row'} justify={'center'}>
                    <Flex direction={'column'} >
                        <Link to={'/news/sport/'}><Button boxShadow='md' rounded='md' bg='white' backgroundColor={'lightgray'} borderRadius={5} p="5px 30px" onClick={() => setPageSelected(1)}>Deportes</Button></Link>
                        <Text align={"justify"} width="300px" m="30px auto" mr="60px">Encuentra las ultimas noticias sobre tu deporte favorito, desde futbol hasta tenis, baloncesto, golf y mucho más.</Text>
                    </Flex>
                    <Flex direction={'column'}>
                        <Link to={'/news/tech/'}><Button boxShadow='md' rounded='md' bg='white' backgroundColor={'lightgray'} borderRadius={5} p="5px 30px" onClick={() => setPageSelected(1)}>Tecnología</Button></Link>
                        <Text align={"justify"} width="300px" m="30px auto" mr="60px">Mantente al día con las últimas tendencias tecnológicas, desde dispositivos móviles a </Text>
                    </Flex>
                    <Flex direction={'column'}>
                        <Link to={'/news/economics/'}><Button boxShadow='md' rounded='md' bg='white' backgroundColor={'lightgray'} borderRadius={5} p="5px 30px" onClick={() => setPageSelected(1)}>Economía</Button></Link>
                        <Text align={"justify"} width="300px" m="30px auto" mr="60px">Descubre las noticias económicas, desde mercados financieros hasta empresas, negocios y mucho más.</Text>
                    </Flex>
                </Flex>

            </Flex>
            : <Flex direction={'column'} justify={'center'} textAlign={'center'}>
                <Text width="800px" fontSize={70} fontWeight={500}>Opps!!!</Text>
                <Text width="800px" fontSize={50} fontWeight={500}>Tienes que hacer login para ver el contenido.(dani-1234)</Text>
            </Flex>



    )
}

export default News;



