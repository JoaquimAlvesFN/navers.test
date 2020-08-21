import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
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

export const Button = styled.button`
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