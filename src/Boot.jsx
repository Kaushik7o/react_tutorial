import React, { useState} from 'react';
import './Boot.css';
import Button from 'react-bootstrap/Button';

export default function Boot() {
    let [data, setData] = useState("Kunal");
    let [status, setStatus] = useState(true);
    return (
        <div id="div">
            {status ? <h1 className='hi'>Hi {data}</h1> : ""}
            <button onClick={() => setData("Kaushik")}>
                Change Name
            </button>
            <button onClick={() => setStatus(!status)}>
                Toggle
            </button>
            <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
        </div>
    );
}
