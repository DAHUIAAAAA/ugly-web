import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import Header from './components/headers';

function Content() {
    return (
        <div className="page">
            <Routes>
                {routes.map((route, index) => (
                    <Route path={route.path} element={<route.component />} key={index} />
                ))}
            </Routes>
        </div>
    );
}

function App() {
    return (
        <Suspense fallback={<div>loading...</div>}>
            <BrowserRouter>
                <Header />
                <Content />
            </BrowserRouter>
        </Suspense>
    );
}
export default App;
