import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #03045e;
    height: 8rem;
    width: 20rem;
    padding: 0.8rem;
    border-radius: 0.8rem;
    font-family: Arial, Helvetica, sans-serif;
    color: #FFF;
`;

export const CardFooter = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const ButtonFooter = styled.button`
    border: none;
    background-color: #457b9d;
    cursor: pointer;
    padding: 0.4rem;
    border-radius: 0.2rem;
`;