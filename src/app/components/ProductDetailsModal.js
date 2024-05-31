// components/ProductDetailsModal.js
import React from 'react';
import { Box, Modal, Typography, Button } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%', // Wider width
    maxWidth: '1200px', // Max width to prevent it from being too wide
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    maxHeight: '90%', // Max height to ensure it doesn't get too tall
    overflowY: 'auto', // Scroll if content is too tall
};

const ProductDetailsModal = ({ product, onClose }) => {
    return (
        <Modal open={true} onClose={onClose}>
            <Box sx={style}>
                <Typography variant="h6" component="h2">
                    {product.title}
                </Typography>
                <img className='mx-28' src={product.image} alt={product.title} style={{ width: '30%', height: '30%', marginTop: '16px' }} />
                <Typography sx={{ mt: 2 }}>{product.description}</Typography>
                <Typography sx={{ mt: 2 }}>${product.price}</Typography>
                <Typography sx={{ mt: 2 }}>Category: {product.category}</Typography>
                <Typography sx={{ mt: 2 }}>Rating: {product.rating.rate} ({product.rating.count} reviews)</Typography>
                <Button onClick={onClose} variant="contained" color="primary" sx={{ mt: 2 }}>
                    Close
                </Button>
            </Box>
        </Modal>
    );
};

export default ProductDetailsModal;
