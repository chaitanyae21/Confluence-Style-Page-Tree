import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './PageTree.css';

const PageNode = ({ node }) => {
  const [collapsed, setCollapsed] = useState(true);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="page-node">
      <div className="node-header" onClick={() => setCollapsed(!collapsed)}>
        {hasChildren && (
          <span className="toggle-icon">{collapsed ? '+' : '-'}</span>
        )}
        <span>{node.title}</span>
      </div>
      {hasChildren && !collapsed && (
        <div className="children">
          {node.children.map((child, idx) => (
            <PageNode key={idx} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

PageNode.propTypes = {
  node: PropTypes.shape({
    title: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

const PageTree = ({ data }) => (
  <div className="page-tree">
    {data.map((node, idx) => (
      <PageNode key={idx} node={node} />
    ))}
  </div>
);

PageTree.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.object),
  })).isRequired,
};

export default PageTree;
