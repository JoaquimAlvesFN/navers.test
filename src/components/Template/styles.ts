import styled, { css } from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 15vw 1fr;
    grid-template-areas: 'aside main';
    grid-gap: 20px;
    height: 100vh;
`;

export const Aside = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.2em;
    grid-area: 'aside';
    background-color: #F2F2F2;
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    grid-area: 'main';
    background-color: #FFF;
    padding: 1.2em;
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const LogoutButton = styled.button`
    border: none;
    background-color: #03045e;
    cursor: pointer;
    padding: 0.4rem;
    border-radius: 0.2rem;
    margin-right: 0.8rem;
    margin-top: 1.2rem;
    width: '100%';
    height: 3.0rem;
    color: #FFF;
`;