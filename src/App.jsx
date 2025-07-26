import React from 'react';
import PageTree from './components/PageTree.jsx';
import './App.css';

// Sample hierarchical data representing pages with nested sub-pages.
const treeData = [
  {
    title: 'Home',
    children: [
      { title: 'Introduction' },
      {
        title: 'Getting Started',
        children: [
          { title: 'Installation' },
          { title: 'Usage' },
        ],
      },
    ],
  },
  {
    title: 'Docs',
    children: [
      { title: 'API Reference' },
      {
        title: 'Examples',
        children: [
          { title: 'Example 1' },
          { title: 'Example 2' },
        ],
      },
    ],
  },
];

// Top-level App component that renders a header and the PageTree.
function App() {
  return (
    <div className="app">
      <h1>Confluence-Style Page Tree</h1>
      <PageTree data={treeData} />
    </div>
  );
}

export default App;
