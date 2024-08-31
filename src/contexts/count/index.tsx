import {
  createContext,
  type Dispatch,
  type SetStateAction,
  useState,
  type FC,
  type ReactNode,
  useContext,
} from 'react';

const countContext = createContext<number>(0);
const setCountContext = createContext<Dispatch<SetStateAction<number>>>(
  () => undefined,
);

interface CountProviderProps {
  children: ReactNode;
}

export const CountProvider: FC<CountProviderProps> = ({ children }) => {
  const [countByContext, setCountByContext] = useState(0);

  return (
    <countContext.Provider value={countByContext}>
      <setCountContext.Provider value={setCountByContext}>
        {children}
      </setCountContext.Provider>
    </countContext.Provider>
  );
};

export const useCountValue = () => useContext(countContext);
export const useCountSetValue = () => useContext(setCountContext);
