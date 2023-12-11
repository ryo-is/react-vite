import { memo } from 'react';
import { EdgeProps, getBezierPath } from 'reactflow';

const CustomEdgeBase = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  markerEnd,
}: EdgeProps) => {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <g>
      <path
        id={id}
        style={{
          stroke: '#d4d4d8',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 2,
        }}
        // eslint-disable-next-line tailwindcss/no-custom-classname
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
      />
    </g>
  );
};

CustomEdgeBase.displayName = 'CustomEdge';

export const CustomEdge = memo(CustomEdgeBase);
