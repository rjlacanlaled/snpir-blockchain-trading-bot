import styled from 'styled-components';
import { BsFillCaretDownFill } from 'react-icons/bs';

const TokenDetails = ({ isSend }) => {
    return (
        <Container>
            <BasicDetails>
                <LogoContainer>
                    <TokenLogo src='/' />
                    <TokenName>Token Name</TokenName>
                </LogoContainer>
                <SymbolContainer>
                    <TokenSymbol>CRO</TokenSymbol>
                    <StyledBsFillCaretDownFill />
                </SymbolContainer>
            </BasicDetails>
            <TradeAmount>
                <TradeSide isSend={isSend}>{isSend ? 'You Send' : 'You Get'}</TradeSide>
                <Amount placeholder='0.0'></Amount>
            </TradeAmount>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 20px 20px 0px 20px;
    min-width: 300px;
    min-height: 250px;

    border-radius: 15px;
    border: 0.1px solid rgb(180, 180, 180, 0.4);

    background-color: hsl(216, 41%, 5%, 0.7);

    @media (max-width: 760px) {
        min-width: 100%;
    }
`;
const BasicDetails = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 5px;

    border-bottom: 0.1px solid rgb(180, 180, 180, 0.4);
`;
const TokenLogo = styled.img``;
const TokenName = styled.p`
    color: gray;
`;
const LogoContainer = styled.div`
    display: flex;
    gap: 5px;
`;
const TokenSymbol = styled.p`
    padding-top: 5px;
    padding-bottom: 5px;
    border-style: none;

    background-color: transparent;
    color: hsl(0, 0%, 100%);
    text-align: left;
    font-size: 1.3rem;
    font-weight: 300;

    transition: color 0.3s ease;
`;
const TradeSide = styled.p`
    color: ${({isSend}) => isSend ? 'orange' : 'green'};
`;
const TradeAmount = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    padding-top: 10px;
    padding-bottom: 10px;
`;
const Amount = styled.input`
    padding-top: 5px;
    padding-bottom:20px;

    background-color: transparent;
    outline: none;
    border-style: none;
    color: white;
    font-size: 1.5rem;
    font-weight: 300;

    border-bottom: 1px solid transparent;

    &:focus {
        border-bottom: 1px solid hsl(194, 81%, 46%);
    }
`;
const SymbolContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    cursor: pointer;

    &:nth-child(2) {
        color: white;
    }

    &:hover {
        p,
        &:nth-child(2) {
            color: hsl(194, 81%, 46%);
        }
    }
`;
const StyledBsFillCaretDownFill = styled(BsFillCaretDownFill)`
    transition: color 0.3s ease;
`;

export default TokenDetails;
