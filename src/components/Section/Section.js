import './Section.css'
import React from 'react';
import { useParams } from 'react-router-dom';
import { Button, Flex, Text } from '@chakra-ui/react';
import ArticleItem from '../ArticleItem/ArticleItem';

const Section = ({ pageSelected, setPageSelected }) => {

    const { topic } = useParams();

    const [newsList, setNewList] = React.useState([])



    const callAPI = (page, topic) => {

        const API_URL = 'https://raw.githubusercontent.com/The-Valley-School/react-w5-newspaper/main/api/' + topic + '/' + page + '.json';

        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                setNewList(data.articles)
            })

    }

    React.useEffect(() => callAPI(pageSelected, topic), [pageSelected, topic])

    const backPage = (page) => {
        if (page > 1) {
            setPageSelected(page - 1)
        }
    }

    const nextPage = (page) => {
        if (page < 5) {
            setPageSelected(page + 1)
        }
    }

    return (

        <Flex direction={'row'} wrap={'wrap'} justify={'center'} alignItems={'flex-start'}>
            <Text>{topic}</Text>
            <Flex>
            {newsList.map(article => <ArticleItem article={article} />)}    
            </Flex>
            
            <Flex direction={'row'} justify={'space-between'}>
                <Button onClick={() => backPage(pageSelected)}>Atrás</Button>
                <Button onClick={() => nextPage(pageSelected)}>Adelante</Button>
            </Flex>
        </Flex>
    )
}

export default Section;