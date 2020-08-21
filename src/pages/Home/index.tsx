import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../reducer';

import Template from '../../components/Template';
import { Card, Title, Birthdate, FooterCard, ButtonFooter, Container } from './styles';

import api from '../../services/api';

interface HomeProps {
    navers: Array<TemplateStringsArray>
}

const Home: React.FC<HomeProps> = () => {
    const navers = useSelector((state: RootState) => state.home.data);

    const dispacth = useDispatch();
    const history = useHistory();

    const token = localStorage.getItem('token');

    const handleRedirect = (id: any) => {
        history.push({
            pathname: `/showNaver/${id}`,
        })
    }

    const handleDelete = (id: any) => {
        api
        .delete(`/navers/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => console.log(err));
    }

    useEffect(() => {
        api.get('/navers', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => {
            dispacth({
                type: 'LOADING',
                data: res.data
            })
        })
        .catch(err => console.log(err))
    }, []);

    return (
        <Template>
            <Container>
                {
                    navers.map((naver: any) => (
                        <Card key={naver.id}>
                            <>
                                <Title>Name: {naver.name}</Title>
                                <Birthdate>Birthdate: {naver.birthdate}</Birthdate>
                            </>
                            <FooterCard>
                                <ButtonFooter 
                                    onClick={() => {handleRedirect(naver.id)}}
                                >
                                    View
                                </ButtonFooter>
                                <ButtonFooter 
                                    onClick={() => {handleDelete(naver.id)}}
                                >
                                    Delete
                                </ButtonFooter>
                            </FooterCard>
                        </Card>
                    ))
                }
            </Container>
        </Template>
    );
}

export default Home;