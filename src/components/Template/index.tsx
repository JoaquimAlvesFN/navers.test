import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Container, Aside, Main, Menu, LogoutButton } from './styles';

const Template: React.FC = ({children}) => {
    const history = useHistory();

    const handleLogout = () => {
        localStorage.removeItem('token');
        history.push('/');
    }

    return (
        <Container>
            <Aside>
                <Menu>
                    <Link to="/listNavers">List Navers</Link>
                    <Link to="/createNavers">Add Navers</Link>
                </Menu>
                <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
            </Aside>
            <Main>{children}</Main>
        </Container>
    );
}

export default Template;