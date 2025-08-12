import { useState } from "react";
import { FiChevronRight, FiChevronDown, FiFolder, FiFile } from "react-icons/fi";

// Sample data structure
const treeData = {
  name: "Root",
  children: [
    {
      name: "Documents",
      children: [
        { name: "Work", children: [{ name: "Project1.pdf" }, { name: "Project2.pdf" }] },
        { name: "Personal" },
      ],
    },
    {
      name: "Pictures",
      children: [{ name: "Vacation.jpg" }, { name: "Family.png" }],
    },
  ],
};

const TreeNode = ({ node }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="ml-4">
      <div 
        className="flex items-center py-1 hover:bg-gray-100 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {hasChildren && (
          <span className="mr-1">
            {isExpanded ? <FiChevronDown size={14} /> : <FiChevronRight size={14} />}
          </span>
        )}
        {!hasChildren && <span className="mr-1 opacity-0"><FiChevronRight size={14} /></span>}
        <span className="mr-2">
          {hasChildren ? <FiFolder className="text-blue-500" /> : <FiFile className="text-gray-500" />}
        </span>
        <span>{node.name}</span>
      </div>
      {isExpanded && hasChildren && (
        <div className="border-l-2 border-gray-200 pl-2">
          {node.children.map((child, index) => (
            <TreeNode key={index} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

const TreeView = () => {
  return (
    <div className="p-4 font-mono text-sm">
      <TreeNode node={treeData} />
    </div>
  );
};

export default TreeView;