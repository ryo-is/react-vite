import { memo } from 'react';
import { Handle, NodeProps, Position } from 'reactflow';

const CustomNodeBase = ({ data }: NodeProps<{ label: string }>) => (
  <div className="rounded-lg border-[3px] border-zinc-300 bg-base-100 px-12 py-4">
    <div>{data.label}</div>

    {/* target handle */}
    <Handle
      type="target"
      position={Position.Left}
      className="left-[-8px] h-4 w-4 border-[3px] border-zinc-300"
    >
      <div className="pointer-events-none h-full w-full rounded-full bg-base-100 p-[3px]">
        <div className="h-full w-full rounded-full bg-zinc-300" />
      </div>
    </Handle>

    {/* source handle */}
    <Handle
      type="source"
      position={Position.Right}
      className="right-[-8px] h-4 w-4 border-[3px] border-zinc-300"
    >
      <div className="pointer-events-none h-full w-full rounded-full bg-base-100 p-[3px]">
        <div className="h-full w-full rounded-full bg-zinc-300" />
      </div>
    </Handle>
  </div>
);

export const CustomNode = memo(CustomNodeBase);
