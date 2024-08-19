import React from 'react';

const LoaderComponent = ({ position = 'center' }) => {
    const svgStyle = {
        width: '300px',
    };

    const pathStyle1 = {
        strokeLinecap: 'round',
        strokeWidth: 6,
        stroke: '#d500f9', // Violet color
        fill: 'none',
        strokeDasharray: '136px 136px',
        animation: 'animate 2s linear infinite',
    };

    const pathStyle2 = {
        strokeLinecap: 'round',
        strokeWidth: 6,
        stroke: '#ADFF2F', // Lemon green color
        fill: 'none',
        strokeDasharray: '136px 136px',
        animation: 'animate 2s linear infinite',
    };

    const containerStyle = {
        position: 'fixed',
        top: position === 'top' ? 0 : position === 'bottom' ? 'auto' : '50%',
        bottom: position === 'bottom' ? 0 : 'auto',
        left: '50%',
        transform: position === 'center' ? 'translate(-50%, -50%)' : 'translateX(-50%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: 'auto',
        zIndex: 1000, // Ensures the loader is above other content
    };

    return (
        <div style={containerStyle}>
            <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 59" style={svgStyle}>
                <style>
                    {`
                        @keyframes animate {
                            0% {
                                stroke-dashoffset: -136px;
                            }
                            30%, 50% {
                                stroke-dashoffset: 0;
                            }
                            80%, 100% {
                                stroke-dashoffset: 136px;
                            }
                        }
                    `}
                </style>
                <path 
                    d="M55.42 25.14C55.64 26.48 55.75 27.85 55.75 29.25C55.75 43.27 44.46 54.61 30.5 54.61C16.54 54.61 5.25 43.27 5.25 29.25C5.25 15.23 16.54 3.89 30.5 3.89 C34.8 3.89 38.84 4.97 42.38 6.86" 
                    style={pathStyle1}
                />
                <path 
                    d="M44.28 33.78C44.04 32.45 43.9 31.08 43.88 29.68C43.64 15.66 54.73 4.13 68.69 3.9C82.65 3.66 94.13 14.8 94.37 28.82C94.61 42.84 83.52 54.36 69.56 54.6C65.26 54.68 61.19 53.67 57.62 51.84" 
                    style={pathStyle2}
                />
            </svg>
        </div>
    );
};

export default LoaderComponent;
