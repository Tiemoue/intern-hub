import React from 'react';

// Renamed component to start with an uppercase letter and changed prop type to number
const ProgressBar = ({ prog }: { prog: number }) => {
    return (
        
        <progress className="progress progress-accent w-70 my-10 " value={prog} max="100"></progress>
    );
}

export default ProgressBar;
