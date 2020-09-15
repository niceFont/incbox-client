import React, { useRef, useEffect } from 'react';
import * as monaco from 'monaco-editor';

// @ts-ignore
// eslint-disable-next-line no-restricted-globals
self.MonacoEnvironment = {
  getWorkerUrl(_moduleId: any, label: string) {
    if (label === 'json') {
      return './json.worker.bundle.js';
    }
    if (label === 'css') {
      return './css.worker.bundle.js';
    }
    if (label === 'html') {
      return './html.worker.bundle.js';
    }
    if (label === 'typescript' || label === 'javascript') {
      return './ts.worker.bundle.js';
    }
    return './editor.worker.bundle.js';
  },
};

interface EditorProps {
setCode: (code : string) => void
}

const Editor: React.FC<EditorProps> = ({ setCode }) => {
  const divEl = useRef<HTMLDivElement>(null);
  let editor: monaco.editor.IStandaloneCodeEditor;

  useEffect(() => {
    if (divEl.current) {
      editor = monaco.editor.create(divEl.current, {
        value: [].join(
          '\n',
        ),
        language: 'javascript',
      });
      editor.onDidChangeModelContent(() => setCode(editor.getValue()));
    }
    return () => {
      editor?.dispose();
    };
  }, []);

  return (
    <div className="Editor" ref={divEl} />
  );
};

export default Editor;
