import styled from 'styled-components';
import useCharacters from '../components/hooks/useCharacters';
import CharacterProfile from '../components/CharacterProfile';
import { Spinner } from 'react-bootstrap';
import { Outlet, useParams } from 'react-router-dom';
import { Error } from '../components/styles/Error.styled';

const GraphQLTest = () => {
    const { error, loading, data } = useCharacters();
    const { id } = useParams();

    console.log(id);
    return (
        <>
            {!id ? (
                <Container>
                    <MainTitle>Rick and Morty Wiki</MainTitle>
                    <SubTitle>Choose your character</SubTitle>

                    {error ? (
                        <Error>Something went wrong, please try again...</Error>
                    ) : data ? (
                        <ResultContainer>
                            {data.characters.results.map(character => (
                                <CharacterProfile key={character.id} character={character} />
                            ))}
                        </ResultContainer>
                    ) : (
                        <Spinner animation='grow' variant='dark' />
                    )}
                </Container>
            ) : (
                <Outlet />
            )}
        </>
    );
};

const Container = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 120px;
    padding-left: 250px;

    background-image: url('/assets/background.webp');

    gap: 80px;

    height: 100vh;
    width: 100vw;

    overflow: auto;


    @media (max-width: 1020px) {
        justify-content: flex-start;
        padding-left: 0px;
    }
`;

const ResultContainer = styled.div`
    width: 100%;
`;
const ErrorMessage = styled.div``;

const MainTitle = styled.h1`
    color: hsl(0, 0%, 90%);
    font-size: 4rem;
    font-weight: 400;
    text-align: center;

    @media (max-width: 760px) {
        font-size: 2rem;
    }
`;

const SubTitle = styled.h2`
    color: hsl(0, 0%, 80%);
    font-size: 1rem;
    font-weight: 300;
    text-align: center;
`;

export default GraphQLTest;
