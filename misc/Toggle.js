import React, { useState } from 'react';

function Toggle({ title }) {
    const [showTitle, setShowTitle] = useState(true);
    console.log(title);
    return (
        <div>
            <h1>Toggle Component</h1>
            {showTitle ? <h1>{title}</h1> : ''}
            <button onClick={() => setShowTitle(!showTitle)}>Toggle Title</button>
        </div>
    );
}

export default Toggle;
