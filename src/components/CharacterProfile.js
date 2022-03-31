import { Grow } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const CharacterProfile = ({ character: { id, name, image } }) => {
    const navigate = useNavigate();

    return (
        <Container onClick={() => navigate(id)}>
            <Grow in={true}>
                <Picture src={image}></Picture>
            </Grow>
            <Name>{name}</Name>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    transition: transform 0.5s;

    p {
        color: hsl(0, 0%, 80%);
    }

    &:hover {
        transform: scale(1.2);
        p {
            color: hsl(194, 81%, 46%);
        }
    }

    cursor: pointer;
`;
const Picture = styled.img`
    width: 200px;
    height: 200px;

    border-radius: 500px;
`;
const Name = styled.p`
    text-align: center;
    font-size: 1.2rem;
    font-weight: 600;
`;

export default CharacterProfile;
