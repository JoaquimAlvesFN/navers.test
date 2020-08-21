import styled from 'styled-components';

export const ContainerLogin = styled.div`
    display: flex;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #FFF;
    width: 50vw;
    height: 100vh;
`;

export const Badge = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #caf0f8;
    width: 50vw;
    height: 100vh;
`;

export const Img = styled.img`
    max-width: 100%;
    max-height: 100%;
    height: auto;
`;

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 0.8rem;
`;

export const Input = styled.input`
    width: 20rem;
    height: 3.0rem;
    padding-left: 1.2rem;
    margin-bottom: 0.8rem;
    border: none;
    border-width: 0.01rem;
    border-color: #e5e5e5;
    border-style: solid;
`;

export const ButtonLogin = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: none;
    background-color: #03045e;
    cursor: pointer;
    padding: 0.4rem;
    border-radius: 0.2rem;
    margin-right: 0.8rem;
    margin-top: 1.2rem;
    width: 21rem;
    height: 3.0rem;
    color: #FFF;
`;