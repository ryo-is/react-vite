import { container } from './editorIndex.css';

import { Editor } from '@/components/editor/editor';
import { Preview } from '@/components/editor/preview';

export const EditorIndex = () => (
  <div className={container}>
    <Editor />
    <Preview />
  </div>
);
