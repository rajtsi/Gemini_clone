import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography, Box, Paper } from '@mui/material';

export const Text = () => {
    const navigate = useNavigate();
    const [text, setText] = useState('');
    const [ans, setAns] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const result = await axios.post('api/v1/request/para', { text });

            let cleanedAnswer = result.data.response;
            cleanedAnswer = cleanedAnswer.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

            // Set the cleaned answer
            setAns(cleanedAnswer);
        } catch (err) {
            console.error("Error while calling Generative AI:", err);
            setAns(err.message);
        }
    };

    const handleBack = () => {
        navigate('/dashBoard'); // Navigate to the dashboard
    };

    return (
        <Container maxWidth="md" sx={{ height: 'calc(100vh - 2cm)', width: '1000px' }}>
            <Paper elevation={3} sx={{ padding: 5, marginTop: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Generate Paragraph
                </Typography>

                <TextField
                    label="Enter topic to generate paragraph..."
                    multiline
                    rows={10}
                    fullWidth
                    variant="outlined"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    sx={{ marginBottom: 2 }}
                />

                <Box display="flex" justifyContent="space-between">
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Box>

                {ans && (
                    <Box mt={4}>
                        <Box>
                            <Typography variant="h5" gutterBottom>
                                Response:
                            </Typography>
                            <Typography variant="body1" dangerouslySetInnerHTML={{ __html: ans }}></Typography>
                        </Box>
                    </Box>
                )}
            </Paper>
            <br />
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
