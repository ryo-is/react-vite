import { container, iframeContainer } from './preview.css';

import { useEditorContentValue } from '@/stores/jotai/editor/atom';

export const Preview = () => {
  const { content } = useEditorContentValue();

  return (
    <div className={container}>
      <iframe title="preview" srcDoc={content} className={iframeContainer} />
    </div>
  );
};
