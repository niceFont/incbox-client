/* eslint-disable react/no-array-index-key */
import * as React from 'react';

export interface ResultProps {
    outputs: unknown[][]
}
const Result: React.FunctionComponent<ResultProps> = ({ outputs }) => {
  const sanitized = outputs.map((output) => output.map((item) => {
    if (!['string', 'number'].includes(typeof item)) {
      return JSON.stringify(item);
    }
    return item;
  }));
  return (
    <div className="result">
      {sanitized.map((output, index) => <span key={index}>{`> ${output.join(' ')}`}</span>)}
    </div>
  );
};
export default Result;
