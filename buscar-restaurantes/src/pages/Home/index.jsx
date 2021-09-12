import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import bomprato from '../../assets/bomprato.png';

import { Container, Busca} from './styled';

const Home = () => {
    const [inputValue, setInputValue] = useState('');

    return(
        <Container>
            <Busca>
                <img src={bomprato} alt="logo do restaurante" />
                <TextField label="Pesquisar">
                    <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)}></Input>
                </TextField>
            </Busca>
        </Container>
    );
}

export default Home;