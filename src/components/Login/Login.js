import React from "react";
import { Button, Flex, Text, Input } from "@chakra-ui/react";
import { AuthContext } from "../../App"

const Login = ({ login }) => {

    const authInfo = React.useContext(AuthContext);

    const inputUserRef = React.useRef();
    const inputPasswordRef = React.useRef();

    const doLogin = (authInfo) => {

        login({ ...authInfo, user: inputUserRef.current.value, password: inputPasswordRef.current.value })

        inputPasswordRef.current.value = ''
        inputUserRef.current.value = ''
    }

    return (

        <Flex direction={'column'} margin={'20px auto'} alignContent={'center'}
      >
            {authInfo && authInfo.user === 'dani' && authInfo.password === '1234'?
                <Flex>
                    <Text margin={2} >Estás logado</Text>
                    <Button onClick={() => login({ ...authInfo, user: null, password: null })}>Logout</Button>
                </Flex>
                :
                <Flex  margin={10} direction={'column'} alignItems={'center'}>
                    <Flex direction={'column'} alignItems={'center'}margin={'20px auto'}>
                        <Text>Usuario:</Text>
                        <Input type='text' placeholder="Introduce tu usuario" ref={inputUserRef}></Input>
                    </Flex>
                    <Flex direction={'column'} alignItems={'center'}margin={'20px auto'}>
                        <Text>Clave:</Text>
                        <Input type='password' placeholder="Introduce tu clave" ref={inputPasswordRef}></Input>
                    </Flex>
                    <Button margin={2}  onClick={() => doLogin(authInfo)}>LOGIN</Button>
                </Flex>
            }
        </Flex>
    )
}

export default Login;