import { useEffect } from 'react';
import type { ResolvedSeoMeta } from './routeRegistry.ts';

function setMetaTag(attr: 'name' | 'property', key: string, content: string): void {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export function SeoHead({ meta }: { meta: ResolvedSeoMeta }) {
  useEffect(() => {
    document.title = meta.title;

    setMetaTag('name', 'description', meta.description);
    setMetaTag('name', 'robots', meta.robots);
    setMetaTag('property', 'og:title', meta.title);
    setMetaTag('property', 'og:description', meta.description);
    setMetaTag('property', 'og:url', meta.canonicalUrl);
    setMetaTag('property', 'og:image', meta.ogImage);
    setMetaTag('name', 'twitter:title', meta.title);
    setMetaTag('name', 'twitter:description', meta.description);
    setMetaTag('name', 'twitter:image', meta.ogImage);

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = meta.canonicalUrl;

    document.head
      .querySelectorAll('script[type="application/ld+json"]')
      .forEach((node) => node.remove());
    meta.jsonLd.forEach((schema) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });
  }, [meta]);

  return null;
}
