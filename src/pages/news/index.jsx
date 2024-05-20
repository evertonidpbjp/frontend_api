import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Grid, Typography, AppBar, Toolbar, InputBase, alpha, styled } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import NewsCard from './components/NewsCard';
import EditNewsModal from './components/EditNewsModal';

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#1e88e5',
  borderRadius: '16px',
  marginBottom: '20px',
  boxShadow: 'none',
  '& .MuiToolbar-root': {
    padding: '0',
  },
});

const StyledTypography = styled(Typography)({
  flexGrow: 1,
  marginLeft: '20px',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#fff',
  textTransform: 'uppercase',
});

const StyledSearch = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '16px',
  backgroundColor: alpha('#fff', 0.15),
  '&:hover': {
    backgroundColor: alpha('#fff', 0.25),
  },
  marginRight: '20px',
  width: 'auto',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

const StyledSearchIcon = styled('div')({
  padding: '10px',
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  padding: '12px',
  paddingLeft: 'calc(1em + 20px)',
  transition: 'width 0.5s',
  width: '100%',
  [theme.breakpoints.up('md')]: {
    width: '25ch',
  },
  '&::placeholder': {
    color: '#ccc',
  },
}));

const StyledContainer = styled(Container)({
  backgroundColor: '#f2f2f2',
  borderRadius: '16px',
  padding: '20px',
});

const StyledGrid = styled(Grid)({
  justifyContent: 'center',
});

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            country: 'us',
            apiKey: '55e86249a2f5473f83a08be670a6a181'
          }
        });
        setNews(response.data.articles);
      } catch (error) {
        console.error("Error fetching the news:", error);
      }
    };

    fetchNews();
  }, []);

  const handleCloseModal = () => {
    setSelectedNews(null);
    setEditModalOpen(false); // Fecha o modal de edição
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleEditModalOpen = (newsItem) => {
    setSelectedNews(newsItem);
    setEditModalOpen(true);
  };

  const handleEditModalClose = () => {
    setSelectedNews(null);
    setEditModalOpen(false);
  };

  return (
    <StyledContainer>
      <StyledAppBar position="static">
        <Toolbar>
          <StyledTypography variant="h6">
            Latest News
          </StyledTypography>
          <StyledSearch>
            <StyledSearchIcon>
              <SearchIcon />
            </StyledSearchIcon>
            <StyledInputBase
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search' }}
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </StyledSearch>
        </Toolbar>
      </StyledAppBar>
      <StyledGrid container spacing={3}>
        {news.length > 0 ? (
          news.map((newsItem, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} style={{ display: 'flex' }}>
              <NewsCard
                title={newsItem.title}
                imageUrl={newsItem.urlToImage}
                description={newsItem.description}
                category={newsItem.category}
                onEdit={() => handleEditModalOpen(newsItem)}
              />
            </Grid>
          ))
        ) : (
          <Typography variant="h6">No news found</Typography>
        )}
      </StyledGrid>
      {selectedNews && (
        <EditNewsModal
          open={editModalOpen}
          onClose={handleEditModalClose}
          news={selectedNews}
        />
      )}
    </StyledContainer>
  );
};

export default NewsPage;
