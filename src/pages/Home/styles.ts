import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2.0rem;
    overflow-y: auto;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #03045e;
    height: 8rem;
    width: 20rem;
    padding: 0.8rem;
    border-radius: 0.5rem;
    color: #FFF;
`;

export const Title = styled.span`
    font-family: Arial, Helvetica, sans-serif;
`;

export const Birthdate = styled.span`
    font-family: Arial, Helvetica, sans-serif;
`;

export const FooterCard = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const ButtonFooter = styled.button`
    border: none;
    background-color: #457b9d;
    cursor: pointer;
    padding: 0.4rem;
    border-radius: 0.2rem;
    margin-right: 0.8rem;
`;