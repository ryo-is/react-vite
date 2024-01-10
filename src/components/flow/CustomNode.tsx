import { memo } from 'react';
import { Handle, NodeProps, Position } from 'reactflow';

import {
  customNode,
  nodeTargetHundler,
  nodeSourceHundler,
  innerHandlerWrapper,
  innerHandler,
} from './CustomNode.css';

const CustomNodeBase = ({ data }: NodeProps<{ label: string }>) => (
  <div className={customNode}>
    <div>{data.label}</div>

    {/* target handle */}
    <Handle
      type="target"
      position={Position.Left}
      className={nodeTargetHundler}
    >
      <div className={innerHandlerWrapper}>
        <div className={innerHandler} />
      </div>
    </Handle>

    {/* source handle */}
    <Handle
      type="source"
      position={Position.Right}
      className={nodeSourceHundler}
    >
      <div className={innerHandlerWrapper}>
        <div className={innerHandler} />
      </div>
    </Handle>
  </div>
);

export const CustomNode = memo(CustomNodeBase);
