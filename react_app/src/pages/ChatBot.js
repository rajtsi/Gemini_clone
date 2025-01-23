import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Box, TextField, Button, Paper, Typography } from '@mui/material';

export const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSend = async () => {
        if (input.trim()) {
            setMessages([...messages, { text: input, sender: 'user' }]);
            setInput('');
            try {
                const result = await axios.post('api/v1/request/chatbot', { text: input });
                let cleanedAnswer = result.data.response;
                setMessages(prevMessages => [
                    ...prevMessages,
                    { text: cleanedAnswer, sender: 'bot' }
                ]);
            } catch (error) {
                console.error('Error fetching bot response:', error);
            }
        }
    };

    const navigate = useNavigate();
    const handleBack = () => { navigate('/dashBoard'); }

    return (
        <Container maxWidth="md" sx={{ height: 'calc(100vh - 2cm)', width: '1000px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', pt: '2cm' }}>
            <Paper elevation={3} sx={{ flex: 1, p: 2, overflowY: 'scroll', mb: 2 }}>
                {messages.length > 0 ? (
                    messages.map((message, index) => (
                        <Box
                            key={index}
                            sx={{
                                alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start',
                                backgroundColor: message.sender === 'user' ? '#DCF8C6' : '#FFF',
                                p: 1,
                                borderRadius: 1,
                                mb: 1,
                                width: '100%'
                            }}
                        >
                            <Typography>{message.text}</Typography>
                        </Box>
                    ))
                ) : (
                    <Typography variant="h6" color="textSecondary" align="center">
                        No messages yet. Start the conversation!
                    </Typography>
                )}
            </Paper>
            <Box sx={{ display: 'flex', mb: 2 }}>
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Type your message here..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    sx={{ mr: 1 }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSend}
                    sx={{ width: 'calc(2 * 40px)', height: '40px' }}
                >
                    Send
                </Button>
            </Box>
            <Button
                variant="contained"
                color="secondary"
                onClick={handleBack}
                sx={{ width: 'calc(2 * 40px)', height: '40px' }}
            >
                Back
            </Button>
        </Container>
    );
};
