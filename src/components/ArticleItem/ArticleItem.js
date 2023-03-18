import { Button, Flex, Image,Text } from "@chakra-ui/react";

const ArticleItem = ({article})=>{

    return(
        <Flex boxShadow='md' rounded='md' bg='#f4f4f4' borderRadius={5} p="5px 10px" direction={'column'} width={400} h="920px" justify={'center'} alignContent={'baselineenter'} alignItems={'center'} padding={5} margin={5}>
            <Image src={article.media} width={350} height={250} margin={2}></Image>
            <Text fontSize={30} textAlign={'start'} margin={2}>{article.title}</Text>
            <Text fontSize={20} textAlign={'justify'} margin={2} noOfLines={10} padding={'5px'}>{article.summary}</Text>
            <Text fontSize={10} textAlign={'justify'} margin={2}>{article.published_date}{" - "}{article.author}</Text>
            <Button boxShadow='md' rounded='md' bg='white' backgroundColor={'lightgray'} borderRadius={5} p="5px 30px">
                <a href={article.link} target='_blank'  rel="noreferrer">Leer noticia completa</a>
            </Button>
        </Flex>
    )
}

export default ArticleItem;