import { ReactFlowProvider } from 'reactflow';

import { Flow } from '@/components/flow/Flow';

export const FlowIndex = () => (
  <ReactFlowProvider>
    <Flow />
  </ReactFlowProvider>
);
