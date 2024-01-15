import { useCallback, useState } from 'react';

import {
  button,
  container,
  input,
  inputWrapper,
  joinTextInputWrapper,
  resultNumber,
  title,
} from './assembly.css';

import { add, joinText } from '@/build/release';

export const AssemblyIndex = () => {
  const [addNumbers, setAddNumbers] = useState<{
    first: number;
    second: number;
  }>({ first: 0, second: 0 });
  const [addResult, setAddResult] = useState(0);
  const [joinTexts, setJoinTexts] = useState({
    str1: 'Hello',
    str2: 'World!!!',
    separator: '',
  });
  const [joinTextResult, setJoinTextResult] = useState('');

  const onHandleAddButton = useCallback(() => {
    setAddResult(add(addNumbers.first, addNumbers.second));
  }, [addNumbers]);

  const onHandleJoinTextButton = useCallback(() => {
    if (!joinTexts.separator) {
      joinTexts.separator = ' ';
    }
    setJoinTextResult(joinText(joinTexts));
  }, [joinTexts]);

  return (
    <>
      <div className={container}>
        <div className={title}>Add number</div>
        <div className={inputWrapper}>
          <input
            className={input}
            type="number"
            defaultValue={addNumbers.first}
            onChange={(e) =>
              setAddNumbers((p) => ({ ...p, first: Number(e.target.value) }))
            }
          />
          <span>+</span>
          <input
            className={input}
            type="number"
            defaultValue={addNumbers.first}
            onChange={(e) =>
              setAddNumbers((p) => ({ ...p, second: Number(e.target.value) }))
            }
          />
          <span>=</span>
          <div className={resultNumber}>{addResult}</div>
        </div>
        <button type="button" onClick={onHandleAddButton} className={button}>
          Add
        </button>
      </div>

      <div className={container}>
        <div className={title}>Join text</div>
        <div className={joinTextInputWrapper}>
          <div>string1:</div>
          <input
            className={input}
            defaultValue={joinTexts.str1}
            onChange={(e) =>
              setJoinTexts((p) => ({ ...p, str1: e.target.value }))
            }
          />
        </div>
        <div className={joinTextInputWrapper}>
          <div>string2:</div>
          <input
            className={input}
            defaultValue={joinTexts.str2}
            onChange={(e) =>
              setJoinTexts((p) => ({ ...p, str2: e.target.value }))
            }
          />
        </div>
        <div className={joinTextInputWrapper}>
          <div>separator:</div>
          <input
            className={input}
            defaultValue={joinTexts.separator}
            onChange={(e) =>
              setJoinTexts((p) => ({ ...p, separator: e.target.value }))
            }
          />
        </div>
        <div className={joinTextInputWrapper}>
          <button
            type="button"
            onClick={onHandleJoinTextButton}
            className={button}
          >
            Join
          </button>
        </div>
        <div className={joinTextInputWrapper}>
          <div>result:</div>
          <div>{joinTextResult}</div>
        </div>
      </div>
    </>
  );
};
