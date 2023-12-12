import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid';
import { useCallback, useRef } from 'react';
import ReactFlow, {
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Edge,
  Connection,
  BackgroundVariant,
  EdgeTypes,
  updateEdge,
  useReactFlow,
} from 'reactflow';

import { CustomEdge } from '@/components/flow/CustomEdge';
import { CustomNode } from '@/components/flow/CustomNode';

import 'reactflow/dist/style.css';

const panOnDrag = [1, 2];

const nodeTypes = {
  custom: CustomNode,
};

const edgeTypes: EdgeTypes = {
  custom: CustomEdge,
};

const initialNodes = [
  {
    id: 'custom1',
    type: 'custom',
    position: { x: 300, y: 300 },
    data: { label: 'CustomNode1' },
  },
  {
    id: 'custom2',
    type: 'custom',
    position: { x: 800, y: 100 },
    data: { label: 'CustomNode2' },
  },
  {
    id: 'custom3',
    type: 'custom',
    position: { x: 800, y: 500 },
    data: { label: 'CustomNode3' },
  },
];
const initialEdges = [
  { id: 'ec1-c2', type: 'custom', source: 'custom1', target: 'custom2' },
];

export const Flow = () => {
  const edgeUpdateSuccessful = useRef(true);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const { zoomIn, zoomOut } = useReactFlow();

  const onConnect = useCallback(
    (params: Edge | Connection) =>
      setEdges((els) =>
        addEdge(
          {
            ...params,
            type: 'custom',
          },
          els,
        ),
      ),
    [setEdges],
  );

  const onEdgeUpdate = useCallback(
    (oldEdge: Edge, newConnection: Connection) => {
      edgeUpdateSuccessful.current = true;
      setEdges((els) => updateEdge(oldEdge, newConnection, els));
    },
    [setEdges],
  );

  const onEdgeUpdateStart = useCallback(() => {
    edgeUpdateSuccessful.current = false;
  }, []);

  const onEdgeUpdateEnd = useCallback(
    (_: MouseEvent | TouchEvent, edge: Edge) => {
      if (!edgeUpdateSuccessful.current) {
        setEdges((eds) => eds.filter((e) => e.id !== edge.id));
      }
      edgeUpdateSuccessful.current = true;
    },
    [setEdges],
  );

  return (
    <div className="h-[calc(100vh-4rem)]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        panOnScroll
        selectionOnDrag
        panOnDrag={panOnDrag}
        onEdgeUpdate={onEdgeUpdate}
        onEdgeUpdateStart={onEdgeUpdateStart}
        onEdgeUpdateEnd={onEdgeUpdateEnd}
      >
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />

        <div className="absolute bottom-4 left-4 z-50 flex gap-x-2">
          <button
            className="flex items-center rounded-lg p-2 hover:bg-zinc-300 hover:font-bold hover:text-base-100"
            type="button"
            onClick={() => zoomIn({ duration: 500 })}
          >
            <PlusIcon className="h-5 w-5" />
          </button>
          <button
            className="flex items-center rounded-lg p-2 hover:bg-zinc-300 hover:font-bold hover:text-base-100"
            type="button"
            onClick={() => zoomOut({ duration: 500 })}
          >
            <MinusIcon className="h-5 w-5" />
          </button>
        </div>
      </ReactFlow>
    </div>
  );
};
