import { container } from './editorIndex.css';

import { Editor } from '@/components/editor/editor';
import { Modal } from '@/components/editor/modal';
import { Preview } from '@/components/editor/preview';

export const EditorIndex = () => (
  <>
    <div className={container}>
      <Editor />
      <Preview />
    </div>
    <Modal />
  </>
);

/**
 * 追加したい機能
 * - テンプレート選択
 *  - ios
 *  - android
 * - テンプレート保存
 * - LocalStorageに編集中のデータを保存
 */
