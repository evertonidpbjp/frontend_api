import React, { useState } from 'react';
import { Dialog, AppBar, Toolbar, IconButton, Typography, Button, TextField, Container, styled, RadioGroup, FormControlLabel, Radio, Checkbox, FormGroup } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const StyledAppBar = styled(AppBar)({
  position: 'relative',
});

const StyledTitle = styled(Typography)({
  marginLeft: '16px',
  flex: 1,
});

const StyledContainer = styled(Container)({
  marginTop: '16px',
});

const EditNewsModal = ({ open, onClose, news, onSave }) => {
  const [title, setTitle] = useState(news.title || '');
  const [content, setContent] = useState(news.content || '');
  const [source, setSource] = useState(news.source || '');
  const [author, setAuthor] = useState(news.author || '');
  const [categories, setCategories] = useState(news.categories || []);
  const [image, setImage] = useState(news.imageUrl || '');

  const handleSave = () => {
    onSave({ ...news, title, content, source, author, categories, image });
    onClose();
  };

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleCategoryChange = (event) => {
    const categoryName = event.target.name;
    if (categories.includes(categoryName)) {
      setCategories(categories.filter(cat => cat !== categoryName));
    } else {
      setCategories([...categories, categoryName]);
    }
  };

  return (
    <Dialog fullScreen open={open} onClose={onClose}>
      <StyledAppBar>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={onClose} aria-label="close">
            <CloseIcon />
          </IconButton>
          <StyledTitle variant="h6">
            Editar Notícia
          </StyledTitle>
          <Button autoFocus color="inherit" onClick={handleSave}>
            Salvar
          </Button>
        </Toolbar>
      </StyledAppBar>
      <StyledContainer>
        <TextField
          fullWidth
          label="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Conteúdo"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          margin="normal"
          multiline
          rows={4}
        />
        <RadioGroup
          aria-label="Fonte"
          name="fonte"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          row
        >
          <FormControlLabel value="jornal" control={<Radio />} label="Jornal" />
          <FormControlLabel value="radio" control={<Radio />} label="Rádio" />
        </RadioGroup>
        <TextField
          fullWidth
          label="Autor"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          margin="normal"
        />
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={categories.includes('politics')} onChange={handleCategoryChange} name="politics" />}
            label="Política"
          />
          <FormControlLabel
            control={<Checkbox checked={categories.includes('sports')} onChange={handleCategoryChange} name="sports" />}
            label="Esportes"
          />
          <FormControlLabel
            control={<Checkbox checked={categories.includes('technology')} onChange={handleCategoryChange} name="technology" />}
            label="Tecnologia"
          />
          <FormControlLabel
            control={<Checkbox checked={categories.includes('culture')} onChange={handleCategoryChange} name="culture" />}
            label="Cultura"
          />
          <FormControlLabel
            control={<Checkbox checked={categories.includes('education')} onChange={handleCategoryChange} name="education" />}
            label="Educação"
          />
          <FormControlLabel
            control={<Checkbox checked={categories.includes('entertainment')} onChange={handleCategoryChange} name="entertainment" />}
            label="Entretenimento"
          />
        </FormGroup>
        <input
          accept="image/*"
          style={{ display: 'none' }}
          id="raised-button-file"
          type="file"
          onChange={handleImageChange}
        />
        <label htmlFor="raised-button-file">
          <Button variant="contained" color="primary" component="span">
            Enviar Imagem
          </Button>
        </label>
        {image && <img src={image} alt="Preview" style={{ marginTop: '16px', maxHeight: '200px' }} />}
      </StyledContainer>
    </Dialog>
  );
};

export default EditNewsModal;
