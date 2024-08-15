import React, { PropsWithChildren } from "react";

export const createGenericContext = <T,>(name?: string) => {
  // Create a context with a generic parameter or undefined
  const genericContext = React.createContext<T | undefined>(undefined);

  // Check if the value provided to the context is defined or throw an error
  const useGenericContext = () => {
    const contextIsDefined = React.useContext(genericContext);
    if (!contextIsDefined) {
      throw new Error(
        `${name}:: useGenericContext must be used within a Provider`
      );
    }
    return contextIsDefined;
  };

  return [useGenericContext, genericContext.Provider] as const;
};

type SetPathNameType = (pathname: string) => void;
type RouterContextProps = {
  isApp: boolean;
  pathname?: string;
  setPathName: SetPathNameType;
};

const [useRouterContext, RouterContextProvider] =
  createGenericContext<RouterContextProps>();

function RouterProvider({
  isApp,
  children,
}: PropsWithChildren<{ isApp?: boolean }>) {
  const [pathname, setPathName] = React.useState<string>();
  return (
    <RouterContextProvider
      value={{
        isApp: typeof isApp === "undefined" ? false : isApp,
        pathname,
        setPathName,
      }}
    >
      {children}
    </RouterContextProvider>
  );
}

export { RouterProvider };
