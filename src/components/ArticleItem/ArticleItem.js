import { Button, Flex, Image,Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";



const ArticleItem = ({article})=>{

    return(
        <Flex direction={'column'} width={400} justify={'center'} alignItems={'center'} alignContent={'baseline'} padding={5} margin={5}>
            <Image src={article.media} w={300} margin={5}></Image>
            <Text>{article.title}</Text>
            <Text>{article.summary}</Text>
            <Text>{article.published_date}{article.author}</Text>
            <Button>
                <Link to={article.link}>Leer noticia completa</Link>
            </Button>
        </Flex>
    )
}

export default ArticleItem;