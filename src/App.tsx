import React, { useState } from 'react';
import Editor from './components/Editor';
import Result from './components/Result';
import Toolbar from './components/Toolbar';

export interface AppProps {

}

const App: React.FunctionComponent<AppProps> = () => {
  const [code, setCode] = useState<string>('');
  const [result, setResult] = useState<string[][]>([]);
  return (
    <div className="container">
      <Toolbar setResult={setResult} code={code} />
      <div className="editor-container">
        <Editor setCode={setCode} />
        <Result outputs={result || []} />
      </div>
    </div>
  );
};
export default App;
