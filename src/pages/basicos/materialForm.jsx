import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';

function materialForm1(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [idade, setIdade] = useState('');

    const [user, setUser] = useState({
        nome: 'Fulano',
        idade: '55',
        email: 'fulano@fulano.com'
    });

    function handleRegister(e){
        e.preventDefault();

        alert('Usuario registrado com sucesso!');
        setUser({
            nome: nome,
            idade: idade,
            email: email,
        });
    }

    return(
        <Container>
            <Box component="div" sx={{ marginTop: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Cadastrando usuário
                </Typography>
                <form onSubmit={handleRegister}>
                    <TextField
                        label="Nome"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={nome}
                        onChange={ (e) => setNome(e.target.value) }
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={email}
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                    <TextField
                        label="Idade"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={idade}
                        onChange={ (e) => setIdade(e.target.value) }
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
                        Registrar
                    </Button>
                </form>

                <Box component="div" sx={{ marginTop: 4 }}>
                    <Typography variant="h6" component="p">
                        Bem vindo: {user.nome}
                    </Typography>
                    <Typography variant="body1" component="p">
                        Idade: {user.idade}
                    </Typography>
                    <Typography variant="body1" component="p">
                        Email: {user.email}
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
}

export default materialForm1;
