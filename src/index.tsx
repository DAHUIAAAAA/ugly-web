import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.less';

const root = document.getElementById('app');
if (root) {
    createRoot(root).render(<App />);
}
