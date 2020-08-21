import React, { SyntheticEvent } from 'react';
import { useSelector, useDispatch, useStore } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../../reducer';

import { IoIosArrowRoundForward } from "react-icons/io";

import api from '../../services/api';

import { ContainerLogin, Form, Badge, Input, ButtonLogin, Img } from './styles';

function Login() {
    const email = useSelector((state: RootState) => state.login.email);
    const password = useSelector((state: RootState) => state.login.password);

    const dispatch = useDispatch();
    const history = useHistory();
    // const store: any = useStore();

    const handleLogin = (event: SyntheticEvent) => {
        event.preventDefault();

        if(email != '' && password != '') {
            api
            .post('/users/login', {
                email,
                password
            })
            .then(res => {
                if(res.status == 200) {
                    localStorage.setItem('token', res.data.token);
                    history.push('/listNavers');

                    // store.dispatch([
                    //     { type: 'EMAIL', email: '' },
                    //     { type: 'PASSWORD', password: '' },
                    // ])

                }
            })
            .catch(err => console.log(err));
        }

    }

    return (
        <ContainerLogin>
            <Form onSubmit={handleLogin} autoComplete="off">
                <Input 
                    placeholder="You Email"
                    type="text" 
                    id="email" 
                    name="email" 
                    className="login-input" 
                    value={email} 
                    onChange={(event) => {
                        dispatch({
                            type: 'EMAIL',
                            email: event.target.value
                        });
                    }}
                />
                <Input 
                    placeholder="You Password"
                    type="password" 
                    id="password" 
                    name="password" 
                    className="login-input"
                    value={password}
                    onChange={(event) => {
                        dispatch({
                            type: 'PASSWORD',
                            password: event.target.value
                        });
                    }}
                />
                <ButtonLogin type="submit">
                    Log In
                    <IoIosArrowRoundForward color="#FFF" size={30}/>
                </ButtonLogin>
            </Form>
            <Badge>

            </Badge>
        </ContainerLogin>
    );

}

export default Login;