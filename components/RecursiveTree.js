import React from 'react';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import Folder from './Folder';
import styled from 'styled-components'
import { useSpring, animated } from '@react-spring/web';

const RecursiveTree = ({ nodes }) => (
  <StyledTreeView
    aria-label="recursive-tree"
    defaultCollapseIcon={<MinusSquare />}
    defaultExpandIcon={<PlusSquare />}
  >
    {nodes.map((node, index) => (
      <TreeNode key={index} node={node} />
    ))}
  </StyledTreeView>
);

const TreeNode = ({ node }) => (
  <StyledTreeItem nodeId={node.value} label={node.value}>
    {node.nodes && node.nodes.map((subNode, index) => (
      <TreeNode key={index} node={subNode} />
    ))}
  </StyledTreeItem>
);

// Custom SVG icon components
function MinusSquare() {
  return (
    <Folder />
  );
}

function PlusSquare() {
  return (
    <Folder />
  );
}

function TransitionComponent(props) {
  const style = useSpring({
    from: {
      opacity: 0,
      transform: 'translate3d(20px,0,0)',
    },
    to: {
      opacity: props.in ? 1 : 0,
      transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,
    },
  });

  return (
    <animated.div style={style}>
      
    </animated.div>
  );
}

export default RecursiveTree;

const StyledTreeView = styled(TreeView)`
  font-size: 15px; 
  color: #ffffff;
  font-size: 15px;
  font-weight: 300;
`; 

const StyledTreeItem = styled(TreeItem)`
  font-size: 30px;
  border-radius: 4px; 
  &:hover {
    background: #414141;
  }
`;