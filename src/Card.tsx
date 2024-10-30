
import React from 'react';


interface CardProps {
    children: React.ReactNode; 
}


const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', margin: '16px' }}>
            {children} 
        </div>
    );
};

export default Card;