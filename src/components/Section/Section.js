import './Section.css'
import React from 'react';
import { useParams } from 'react-router-dom';
import { Button, Flex, Text, Input, Grid } from '@chakra-ui/react';
import ArticleItem from '../ArticleItem/ArticleItem';

const Section = ({ pageSelected, setPageSelected }) => {

    const { topic } = useParams();

    const [newsList, setNewList] = React.useState([])
    const [newsListFiltered, setNewListFiltered] = React.useState([])

    const callAPI = (page, topic) => {

        const API_URL = 'https://raw.githubusercontent.com/The-Valley-School/react-w5-newspaper/main/api/' + topic + '/' + page + '.json';

        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                setNewList(data.articles)
                setNewListFiltered(data.articles)
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


    const filter = (event)=>{

        if(event.target.value.length > 0){ const filtered = newsList.filter((element)=>

            element.title.toLowerCase().includes(event.target.value.toLowerCase())

        )
        setNewListFiltered(filtered)
        }else{
            setNewListFiltered(newsList)
        }
    }

    return (
        <Flex direction={'column'} wrap={'wrap'} justify={'space-around'} alignItems={'center'} >
            <Text fontSize={50} margin={'20px auto'}>{topic.toUpperCase()}</Text>

            <Input boxShadow='md' rounded='md' bg='white' border="1px solid black" borderRadius={5} p="5px 10px" onChange={filter} margin={'20px auto'} placeholder='Introduce tu busqueda...'></Input>

            <Grid templateColumns='repeat(1, 1fr)' gap={2} alignItems="center" alignContent={'baseline'}>
                <Flex wrap={'wrap'} alignItems={'center'} justify={'space-around'}>
                    {newsListFiltered.map(article => <ArticleItem key={article._id} article={article} />)}
                </Flex>
            </Grid>

            <Flex direction={'row'} alignItems={'center'} justify={'space-between'} w={300} margin={'0 auto'}>
                <Button boxShadow='md' rounded='md' bg='white' backgroundColor={'lightgray'} borderRadius={5} p="5px 10px" onClick={() => backPage(pageSelected)}>Atrás</Button>
                <Text>{pageSelected}</Text>
                <Button boxShadow='md' rounded='md' bg='white' backgroundColor={'lightgray'} borderRadius={5} p="5px 10px" onClick={() => nextPage(pageSelected)}>Adelante</Button>
            </Flex>
        </Flex>
    )
}

export default Section;