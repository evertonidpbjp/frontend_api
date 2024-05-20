import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, Card, CardContent, CardMedia, Button, Modal, Backdrop, Fade, CircularProgress } from '@mui/material';
import axios from 'axios';


function NewsList() {
    const [loading, setLoading] = useState(true);
    const [news, setNews] = useState([]);
    const [selectedNews, setSelectedNews] = useState(null);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        // Função para carregar a lista de notícias da API externa
        const fetchNews = async () => {
            try {
                const response = await axios.get('http://localhost:3000/news');
                setNews(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao carregar notícias:', error);
            }
        };

        // Chama a função para carregar a lista de notícias quando o componente é montado
        fetchNews();
    }, []);

    // Função para abrir o modal com o conteúdo completo da notícia
    const handleOpenModal = (selectedNews) => {
        setSelectedNews(selectedNews);
        setOpenModal(true);
    };

    // Função para fechar o modal
    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <Container sx={{ minHeight: '100vh', padding: 4 }}>
            <Box component="div" sx={{ padding: 4, borderRadius: 2, backgroundColor: 'white' }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Lista de Notícias
                </Typography>
                {loading ? (
                    <CircularProgress />
                ) : (
                    news.map((item) => (
                        <Card key={item.id} sx={{ marginBottom: 2 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={item.image_url}
                                alt={item.title}
                            />
                            <CardContent>
                                <Typography variant="h6" component="h2" gutterBottom>
                                    {item.title}
                                </Typography>
                                <Button variant="contained" onClick={() => handleOpenModal(item)}>
                                    Ver Notícia
                                </Button>
                            </CardContent>
                        </Card>
                    ))
                )}
            </Box>
            {/* Modal para exibir o conteúdo completo da notícia */}
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openModal}>
                    <Box sx={{ backgroundColor: 'white', padding: 4, borderRadius: 2 }}>
                        {selectedNews && (
                            <div>
                                <Typography variant="h5" id="modal-title" gutterBottom>
                                    {selectedNews.title}
                                </Typography>
                                <Typography variant="body1" id="modal-description" gutterBottom>
                                    {selectedNews.content}
                                </Typography>
                                <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                                    Fonte: {selectedNews.sources_name}
                                </Typography>
                            </div>
                        )}
                    </Box>
                </Fade>
            </Modal>
        </Container>
    );
}

export default NewsList;
