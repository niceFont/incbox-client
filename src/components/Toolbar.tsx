import * as React from 'react';

export interface ToolbarProps {
   code: string
   setResult: (result : string[][]) => void
}

const Toolbar: React.FunctionComponent<ToolbarProps> = ({ setResult, code }) => {
  const compileCode = () => {
    try {
      fetch('http://localhost:3000/compile', {
        method: 'POST',
        body: JSON.stringify({ code }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((json) => setResult(json.logs));
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="toolbar">
      <button type="button" className="compile-button" onClick={compileCode}>RUN</button>
    </div>
  );
};

export default Toolbar;
