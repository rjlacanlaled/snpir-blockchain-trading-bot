import { useState } from 'react';
import styled from 'styled-components';

const TokenBalance = ({ userAddress = 'none' }) => {
    const [token, setToken] = useState('');
    const [address, setAddress] = useState(userAddress);

    return (
        <Container>
            <Token>{token}</Token>
            <Balance>{address}</Balance>
        </Container>
    );
};

const Container = styled.div``;
const Token = styled.button``;
const Balance = styled.p``;

export default TokenBalance;
