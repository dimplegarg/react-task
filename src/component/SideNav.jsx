import React from 'react';
import { Tree, Icon } from 'antd';

const { TreeNode } = Tree;

export default function SideNav(props) {
  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };
    return (
        <div className="col-2 sideNav">
            <div className="userDetails">
                <span>John Applessed</span>
                <span className="signOut">Sign out</span>
            </div>

            <div className="menuList">
              <span>PROGRESS</span>
              <Tree
                showLine={true}
                switcherIcon={<Icon type="right" />}
                defaultExpandedKeys={['0-0-0']}
                onSelect={onSelect}
              >
                <TreeNode title="Practice" key="0-0" />
                <TreeNode title="Payment" key="0-1" />
                <TreeNode title="Contract" key="0-2" />
                <TreeNode title="Details" key="0-3" />
                <TreeNode title="Assign providers to" key="0-4">
                  <TreeNode title="HexaHealth Sydeny" key="0-4-0" />
                  <TreeNode title="Overseas Branco" key="0-4-1" />
                  <TreeNode title="Wonderwise Health" key="0-4-2" />
                  <TreeNode title="Sydney Hospital" key="0-4-3" />
                </TreeNode>
              </Tree>
            </div>
        </div>
    )
}