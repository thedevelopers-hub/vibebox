/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useMemo } from 'react';
import { PlayerProvider } from './audio/PlayerContext.tsx';
import { NavigationProvider, useNavigation } from './components/NavigationContext.tsx';
import { PersistentPlayerBar } from './components/PersistentPlayerBar.tsx';
import { SiteFooter } from './components/SiteFooter.tsx';
import { SiteHeader } from './components/SiteHeader.tsx';
import { findCollectionByPath } from './data/collections.ts';
import { BloggerThemePage } from './pages/BloggerThemePage.tsx';
import { DirectoryPage } from './pages/DirectoryPage.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { NotFoundPage } from './pages/NotFoundPage.tsx';
import { PartyPage } from './pages/PartyPage.tsx';
import { PlaylistPage } from './pages/PlaylistPage.tsx';
import { SavedPage } from './pages/SavedPage.tsx';
import { SearchPage } from './pages/SearchPage.tsx';
import { normalizePath, resolveRouteMeta } from './seo/routeRegistry.ts';
import { SeoHead } from './seo/SeoHead.tsx';

function AppShell() {
  const { pathname } = useNavigation();
  const normalized = normalizePath(pathname);
  const origin =
    typeof window !== 'undefined' ? window.location.origin : 'https://vibebox.example';

  const meta = useMemo(() => resolveRouteMeta(normalized, origin), [normalized, origin]);

  const renderPage = () => {
    if (normalized === '/') {
      return <HomePage />;
    }
    if (normalized === '/party') {
      return <PartyPage breadcrumbs={meta.breadcrumbs} />;
    }
    if (normalized === '/discover' || normalized === '/mood') {
      return <DirectoryPage type={normalized.slice(1) as 'discover' | 'mood'} breadcrumbs={meta.breadcrumbs} />;
    }
    if (normalized === '/search') {
      return <SearchPage breadcrumbs={meta.breadcrumbs} />;
    }
    if (normalized === '/saved') {
      return <SavedPage breadcrumbs={meta.breadcrumbs} />;
    }
    if (normalized === '/blogger-theme') {
      return <BloggerThemePage breadcrumbs={meta.breadcrumbs} />;
    }

    const collection = findCollectionByPath(normalized);
    if (collection) {
      return <PlaylistPage collection={collection} breadcrumbs={meta.breadcrumbs} />;
    }

    return <NotFoundPage requestedPath={normalized} />;
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#07080D] text-[#F8FAFC]">
      <SeoHead meta={meta} />
      <SiteHeader />
      <main className="flex-1">{renderPage()}</main>
      <SiteFooter />
      <PersistentPlayerBar />
    </div>
  );
}

export default function App() {
  return (
    <PlayerProvider>
      <NavigationProvider>
        <AppShell />
      </NavigationProvider>
    </PlayerProvider>
  );
}
