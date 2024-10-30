
import React from 'react';
import Card from './Card';

const App: React.FC = () => {
    return (
        <div>
            <h1>Card Component Example</h1>
            <Card>
                <h2>Title 1</h2>
                <p>This is the content of the first card.</p>
            </Card>
            <Card>
                <h2>Title 2</h2>
                <p>This card contains some different text content. It can be anything!</p>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </Card>
            <Card>
                <h2>Title 3</h2>
                <p>This card demonstrates flexibility with mixed content.</p>
                <button onClick={() => alert('Button clicked!')}>Click Me!</button>
            </Card>
        </div>
    );
};

export default App;