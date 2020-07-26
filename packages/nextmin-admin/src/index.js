import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Provider, defaultTheme, Button } from '@adobe/react-spectrum';
import Dashboard from './routes/Dashboard';
import './index.css';
import Layout from './components/layout/Layout';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route path='/blog' element={<h1>Blog</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <Provider theme={defaultTheme}>
      <Router />
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
