import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box, FormGroup, FormControlLabel, Checkbox, Radio, RadioGroup, FormLabel } from '@mui/material';
import axios from 'axios';
import app from './config';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

function MaterialFormWithTextFieldID() {
    const [title, setTitle] = useState('');
    const [users_email, setUsersEmail] = useState('');
    const [content, setContent] = useState('');
    const [sources_name, setSourcesName] = useState('Jornal');
    const [categoriesFile, setCategoriesFile] = useState({
        esporte: false,
        educacao: false,
        politica: false,
        turismo: false,
        tecnologia: false
    });
    const [image, setImage] = useState("");

    const bd_image = getStorage(app);

    const [news, setNews] = useState({
        title: '',
        users_email: '',
        content: '',
        sources_name: '',
        categoriesFile: ''
    });

    async function handleRegister(e) {
        e.preventDefault();

        const selectedCategories = Object.keys(categoriesFile)
            .filter(category => categoriesFile[category]);

        const uploadPromises = selectedCategories.map(category => {
            const storagePath = `images-news/${category}/${image.name}`;
            const storageRef = ref(bd_image, storagePath);
            return uploadBytes(storageRef, image)
                .then(snapshot => getDownloadURL(snapshot.ref))
                .then(downloadURL => {
                    console.log(`Imagem enviada com sucesso para a categoria ${category}:`, downloadURL);
                    return downloadURL;
                });
        });

        try {
            const imagesURLs = await Promise.all(uploadPromises);

            const newNews = {
                title: title,
                users_email: users_email,
                content: content,
                sources_name: sources_name,
                categoriesFile: selectedCategories.join(','),
                images: imagesURLs
            };

            alert('Notícia registrada com sucesso!');
            console.log(imagesURLs[0])
            setNews(newNews);

            const formData = new FormData();
            formData.append('title', title);
            formData.append('users_email', users_email);
            formData.append('content', content);
            formData.append('sources_name', sources_name);
            formData.append('categoriesFile', selectedCategories.join(','));
            formData.append('image_url', imagesURLs[0]);

            const response = await axios.post('http://localhost:3000/news', formData);
            console.log('Sucesso:', response.data);
        } catch (error) {
            console.error('Erro:', error);
        }
    }

    function handleCategoryChange(event) {
        const { name, checked } = event.target;
        setCategoriesFile(prevState => ({
            ...prevState,
            [name]: checked
        }));
    }

    return (
        <Container sx={{ minHeight: '100vh', padding: 4 }}>
            <Box component="div" sx={{ padding: 4, borderRadius: 2, backgroundColor: 'white' }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Cadastrando Notícia
                </Typography>
                <form onSubmit={handleRegister}>
                    <TextField
                        label="Título"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={users_email}
                        onChange={(e) => setUsersEmail(e.target.value)}
                    />
                    <TextField
                        label="Conteúdo"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        multiline
                        rows={4}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <FormGroup>
                        <Typography variant="h6" component="p" gutterBottom>
                            Categorias:
                        </Typography>
                        {Object.entries(categoriesFile).map(([category, checked]) => (
                            <FormControlLabel
                                key={category}
                                control={<Checkbox checked={checked} onChange={handleCategoryChange} name={category} />}
                                label={category.charAt(0).toUpperCase() + category.slice(1)}
                            />
                        ))}
                    </FormGroup>
                    <FormGroup>
                        <FormLabel component="legend" sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Fonte da Notícia</FormLabel>
                        <RadioGroup
                            value={sources_name}
                            onChange={(e) => setSourcesName(e.target.value)}
                        >
                            <FormControlLabel value="Jornal" control={<Radio />} label="Jornal" />
                            <FormControlLabel value="Radio" control={<Radio />} label="Radio" />
                        </RadioGroup>
                    </FormGroup>
                    <label htmlFor="image" style={{ display: 'block', marginBottom: '1rem' }}>
                        <Typography variant="h6" component="p" sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Enviar Imagem</Typography>
                        <input 
                            id="image"
                            type="file" 
                            accept="image/*" 
                            onChange={(e) => {
                                setImage(e.target.files[0]);
                                console.log(e.target.files[0]); // Verifica se o arquivo está sendo corretamente atribuído ao estado 'image'
                            }} 
                            required 
                            style={{ display: 'none' }} 
                        />
                        <Button variant="contained" component="span">
                            Escolher Imagem
                        </Button>
                    </label>

                    <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
                        Registrar
                    </Button>
                </form>

                <Box component="div" sx={{ marginTop: 4 }}>
                    <Typography variant="h6" component="p">
                        Título: {news.title}
                    </Typography>
                    <Typography variant="body1" component="p">
                        Email: {news.users_email}
                    </Typography>
                    <Typography variant="body1" component="p">
                        Conteúdo: {news.content}
                    </Typography>
                    <Typography variant="body1" component="p">
                        Fonte: {news.sources_name}
                    </Typography>
                    <Typography variant="body1" component="p">
                        Categorias: {news.categoriesFile}
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
}

export default MaterialFormWithTextFieldID;
