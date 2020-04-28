/* eslint-disable import/prefer-default-export */
/* eslint-disable func-names */
import { useState, useEffect } from 'react';

export function usePushArray(initialState) {
  const [finishedArray, setFinishedArray] = useState([]);
  const [pushToArrayContent, setPushToArrayContent] = useState(() => {
    let Arr = [];
    Arr.push(initialState);
    setFinishedArray(Arr);
  });

  return [finishedArray, setPushToArrayContent];
}
