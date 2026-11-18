import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { normalizePath } from '../seo/routeRegistry.ts';

interface NavigationContextValue {
  pathname: string;
  navigate: (to: string) => void;
}

const NavigationContext = createContext<NavigationContextValue>({
  pathname: '/',
  navigate: () => {},
});

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [pathname, setPathname] = useState<string>(() =>
    typeof window !== 'undefined' ? normalizePath(window.location.pathname) : '/',
  );

  useEffect(() => {
    const onPopState = () => {
      setPathname(normalizePath(window.location.pathname));
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = useCallback((to: string) => {
    const [rawPath, hashPart] = to.split('#');
    const targetPath = normalizePath(rawPath || '/');
    const currentPath = normalizePath(window.location.pathname);

    if (targetPath !== currentPath) {
      window.history.pushState({}, '', to);
      setPathname(targetPath);
    }

    if (hashPart) {
      window.setTimeout(() => {
        const el = document.getElementById(hashPart);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return (
    <NavigationContext.Provider value={{ pathname, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  return useContext(NavigationContext);
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: React.ReactNode;
}

export function Link({ to, children, onClick, ...rest }: LinkProps) {
  const { navigate } = useNavigation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey
    ) {
      return;
    }
    e.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
