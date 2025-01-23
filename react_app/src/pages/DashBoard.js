import React from 'react';
import { useNavigate } from 'react-router-dom';

export const DashBoard = () => {
    const navigate = useNavigate();

    const handleText = () => {
        navigate('/text');
    };

    const handleSummary = () => {
        navigate('/summary');
    };

    const handleBot = () => {
        navigate('/chatBot');
    };

    return (
        <div className="dashboard-container">
            <h1>Choose AI Features to use</h1>
            <div>
                <button
                    className="dashboard-button text-button"
                    onClick={handleText}
                >
                    Paragraph Generator
                </button>
                <button
                    className="dashboard-button summary-button"
                    onClick={handleSummary}
                >
                    Summary Creator
                </button>
                <button
                    className="dashboard-button chatbot-button"
                    onClick={handleBot}
                >
                    Chat Bot
                </button>
            </div>
        </div>
    );
};
