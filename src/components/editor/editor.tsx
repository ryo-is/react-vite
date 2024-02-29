import MonacoEditor, { useMonaco } from '@monaco-editor/react';
import { HTMLHint } from 'htmlhint';
import _ from 'lodash';
import { useEffect } from 'react';

import { container } from './editor.css';
import { FloatButton } from '../common/floatButton';

import {
  useEditorContentValue,
  useEditorModalIsOpen,
} from '@/stores/jotai/editor/atom';

const EditorPath = 'monaco';

export const Editor = () => {
  const monaco = useMonaco();
  const { content, setContent } = useEditorContentValue();
  const { setIsOpen } = useEditorModalIsOpen();

  const onChangeEvent = _.debounce((data: string | undefined): void => {
    const errors = HTMLHint.verify(data || '', {
      'tagname-lowercase': true,
      'attr-lowercase': true,
      'attr-value-double-quotes': true,
      'spec-char-escape': true,
      'id-unique': true,
      'src-not-empty': true,
      'attr-no-duplication': true,
      'title-require': true,
      'tag-pair': true,
    });
    const model = monaco?.editor.getModel(monaco.Uri.parse(EditorPath));
    if (model != null) {
      if (errors.length > 0) {
        const error = errors[0];
        monaco?.editor.setModelMarkers(model, 'owner', [
          {
            severity: monaco?.MarkerSeverity.Error,
            message: error.message,
            startLineNumber: error.line,
            startColumn: error.col,
            endLineNumber: error.line,
            endColumn: error.col + 1,
          },
        ]);
      } else {
        monaco?.editor.setModelMarkers(model, 'owner', []);

        setContent(data || '');
      }
    }
  }, 500);

  useEffect(() => {
    monaco?.languages.registerCompletionItemProvider('html', {
      triggerCharacters: ['>'],
      provideCompletionItems: (model, position) => {
        const codePre: string = model.getValueInRange({
          startLineNumber: position.lineNumber,
          startColumn: 1,
          endLineNumber: position.lineNumber,
          endColumn: position.column,
        });

        const tag = codePre.match(/.*<(\w+)>$/)?.[1];

        if (!tag) {
          return {
            suggestions: [],
          };
        }

        const word = model.getWordUntilPosition(position);

        return {
          suggestions: [
            {
              label: `</${tag}>`,
              kind: monaco.languages.CompletionItemKind.EnumMember,
              insertText: `$1</${tag}>`,
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              range: {
                startLineNumber: position.lineNumber,
                endLineNumber: position.lineNumber,
                startColumn: word.startColumn,
                endColumn: word.endColumn,
              },
            },
          ],
        };
      },
    });
  }, [monaco]);

  return (
    <div className={container}>
      <MonacoEditor
        language="html"
        theme="custom-theme"
        width="100%"
        value={content}
        onChange={(data): void => onChangeEvent(data)}
        options={{
          minimap: {
            enabled: false,
          },
          tabSize: 2,
          wordWrap: 'on',
          scrollBeyondLastLine: false,
        }}
        defaultPath={EditorPath}
        beforeMount={(m): void => {
          m?.editor.defineTheme('custom-theme', {
            base: 'vs-dark',
            inherit: true,
            rules: [],
            colors: {
              'editorError.foreground': '#ff0000',
              'editorError.border': '#ff0000',
            },
          });
        }}
      />
      <FloatButton label="ApplyTemplate" clickandler={() => setIsOpen(true)} />
    </div>
  );
};
