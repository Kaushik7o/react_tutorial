import React, { useEffect } from 'react';
import './b.css';

function Bhaijx() {
    useEffect(() => {
        const divs = document.querySelectorAll('.div');

        const handleClick = (div) => {
            // Check the current background color and toggle
            if (div.style.backgroundColor === 'green') {
                div.style.backgroundColor = ''; // Reset to original color
            } else {
                div.style.backgroundColor = 'green';
            }
        };

        const handleDivClick = 
        (event) => handleClick(event.currentTarget);

        divs.forEach(div => {
            div.addEventListener('click', handleDivClick);
        });

        // Cleanup event listeners on component unmount
        return () => {
            divs.forEach(div => {
                div.removeEventListener('click', handleDivClick);
            });
        };
    }, []);

    return (
        <div id="op">
            <div className="div"></div>
            <div className="div"></div>
            <div className="div"></div>
            <div className="div"></div>
            <div className="div"></div>
            <div className="div"></div>
            <div className="div"></div>
            <div className="div"></div>
        </div>
    );
}

export default Bhaijx;
