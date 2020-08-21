import React, { SyntheticEvent } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducer';

import api from '../../services/api';

import Template from '../../components/Template';

import { Container, Form, Input, Button } from './styles';

function Edit() {
    const navers = useSelector((state: RootState) => state.home.data);

    const token = localStorage.getItem('token');

    let { id }: any = useParams();

    const handleUpdate = (event: SyntheticEvent) => {
        event.preventDefault();
        alert('Falta implementar a atualizacao.');
        // api
        // .put(`/navers/${id}`, {
        //     name: 'Joaquim Inject',
        //     birthdate: '10105050',
        //     job_role: 'jjjjjj',
        //     project: 'kkkkkk',
        //     admission_date: '10105050',
        //     url: 'hhhhhhhhh'
        // }, {
        //     headers: { Authorization: `Bearer ${token}` }
        // })
        // .then(res => console.log(res))
        // .catch(err => console.log(err));
    }

    return (
        <Template>
            <span>Update Naver</span>
            <Container>
                {
                    navers.map((naver: any) => {
                        if(naver.id == id) {
                            return (
                                <Form onSubmit={handleUpdate}>
                                    
                                    <Input value={naver.name}/>
                                    <Input value={naver.birthdate} />
                                    <Input value={naver.job_role} />
                                    <Input value={naver.project} />
                                    <Input value={naver.admission_date} />
                                    <Input value={naver.url} />

                                    <Button type="submit" >Atualizar</Button>
                                </Form>
                            );
                        }
                    })
                }
            </Container>
        </Template>
    );
}

export default Edit;