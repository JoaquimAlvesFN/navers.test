import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { RootState } from '../../reducer';

import Template from '../../components/Template';

import { Container, Card, CardFooter, ButtonFooter } from './styles';

function Show() {
    const navers = useSelector((state: RootState) => state.home.data);

    let { id }: any = useParams();

    const history = useHistory();

    const redirect = (id: any) => {
        history.push({
            pathname: `/editNaver/${id}`,
        })
    }

    return (
        <Template>
            <span>View Naver</span>
            <Container>
                {
                    navers.map((naver: any) => {
                        if(naver.id == id) {
                            return(
                                <Card>
                                    <>
                                        <span>{naver.name}</span>
                                        <span>{naver.birthdate}</span>
                                        <span>{naver.job_role}</span>
                                        <span>{naver.project}</span>
                                        <span>{naver.admission_date}</span>
                                        <span>{naver.url}</span>
                                    </>
                                    <CardFooter>
                                        <ButtonFooter onClick={() => {redirect(naver.id)}}>Edit</ButtonFooter>
                                    </CardFooter>
                                </Card>
                            );
                        }
                    })
                }
            </Container>
        </Template>
    );
}

export default Show;