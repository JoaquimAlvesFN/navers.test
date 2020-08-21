import React, { SyntheticEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../reducer';
import api from '../../services/api';

import Template from '../../components/Template';
import { Container, Input, ButtonSave, Form } from './styles';

function Create() {
    const {
        name, 
        birthdate,
        project,
        job_role,
        admission_date,
        url
    } = useSelector((state: RootState) => state.create);

    const token = localStorage.getItem('token');

    const history = useHistory();
    const dispatch = useDispatch();
    
    const handleCreate = (event: SyntheticEvent) => {
        event.preventDefault();

        api
        .post('/navers', {
            name, 
            birthdate,
            project,
            job_role,
            admission_date,
            url
        }, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
            if(res.status == 200) {
                history.push('/listNavers');
            }
        })
        .catch(err => console.log(err));
    }

    return (
        <Template>
                <span>Create Naver</span>
            <Container>
                <Form onSubmit={handleCreate} autoComplete="off">
                    <Input 
                        placeholder="Name"
                        type="text" 
                        id="name" 
                        value={name}
                        onChange={(event) => {
                            dispatch({type: 'NAME', name: event.target.value})
                        }}/>
                    <Input 
                        placeholder="Birthdate"
                        type="text" 
                        id="birthdate"
                        value={birthdate}
                        onChange={(event) => {
                            dispatch({type: 'BIRTHDATE', birthdate: event.target.value})
                        }}
                    />
                    <Input 
                        placeholder="Project"
                        type="text" 
                        id="project"
                        value={project}
                        onChange={(event) => {
                            dispatch({type: 'PROJECT', project: event.target.value})
                        }}
                    />
                    <Input 
                        placeholder="Job Role"
                        type="text" 
                        id="job_role"
                        value={job_role}
                        onChange={(event) => {
                            dispatch({type: 'JOB_ROLE', job_role: event.target.value})
                        }}
                    />
                    <Input 
                        placeholder="Admission Date"
                        type="text" 
                        id="admission_date"
                        value={admission_date}
                        onChange={(event) => {
                            dispatch({type: 'ADMISSION_DATE', admission_date: event.target.value})
                        }}
                    />
                    <Input 
                        placeholder="Url"
                        type="text" 
                        id="url"
                        value={url}
                        onChange={(event) => {
                            dispatch({type: 'URL', url: event.target.value})
                        }}
                    />
                    <ButtonSave type="submit">Salvar</ButtonSave>
                </Form>
            </Container>
        </Template>
    );
}

export default Create;