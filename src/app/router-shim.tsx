import React from 'react';

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  to?: string | { pathname?: string; search?: string; hash?: string };
  replace?: boolean;
  state?: unknown;
  reloadDocument?: boolean;
  preventScrollReset?: boolean;
  relative?: string;
};

function toNamedHtmlUrl(url: string): string {
  // Keep external links, anchors, mailto/tel, assets, and already-named files unchanged.
  if (!url || url === '/' || url.startsWith('#')) return url || '#';
  if (/^(https?:|mailto:|tel:)/.test(url)) return url;

  const [pathAndSearch, hash = ''] = url.split('#');
  const [pathname, search = ''] = pathAndSearch.split('?');

  if (!pathname.startsWith('/')) return url;
  if (/\.[a-z0-9]+$/i.test(pathname)) return url;

  const nextPath = `${pathname}.html`;
  return `${nextPath}${search ? `?${search}` : ''}${hash ? `#${hash}` : ''}`;
}

function toHref(to: LinkProps['to']): string {
  if (!to) return '#';
  if (typeof to === 'string') return toNamedHtmlUrl(to);
  return toNamedHtmlUrl(`${to.pathname ?? ''}${to.search ?? ''}${to.hash ?? ''}` || '#');
}

export function Link({ to, href, children, ...props }: LinkProps) {
  return (
    <a href={href ?? toHref(to)} {...props}>
      {children}
    </a>
  );
}

export const NavLink = Link;

export function BrowserRouter({ children }: { children?: React.ReactNode }) {
  return <>{children}</>;
}

export function StaticRouter({ children }: { children?: React.ReactNode; location?: string }) {
  return <>{children}</>;
}

export function Routes({ children }: { children?: React.ReactNode }) {
  return <>{children}</>;
}

export function Route(): null {
  return null;
}

export function useLocation() {
  if (typeof window === 'undefined') {
    return { pathname: '/', search: '', hash: '', state: null, key: 'default' };
  }
  return {
    pathname: window.location.pathname,
    search: window.location.search,
    hash: window.location.hash,
    state: null,
    key: 'default',
  };
}

export function useNavigate() {
  return (to: string | number) => {
    if (typeof window === 'undefined') return;
    if (typeof to === 'number') window.history.go(to);
    else window.location.href = to;
  };
}

export function useParams() {
  return {};
}

export function Navigate({ to }: { to: string }) {
  if (typeof window !== 'undefined') window.location.href = to;
  return null;
}
