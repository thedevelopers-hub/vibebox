import { Link } from './NavigationContext.tsx';
import type { BreadcrumbItem } from '../seo/routeRegistry.ts';

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  if (items.length <= 1) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-2 text-xs text-[#94A3B8]">
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <span key={item.path} className="inline-flex items-center gap-2">
            {idx > 0 && (
              <span aria-hidden="true" className="text-[#475569]">
                /
              </span>
            )}
            {isLast ? (
              <span aria-current="page" className="font-medium text-white">
                {item.name}
              </span>
            ) : (
              <Link to={item.path} className="hover:text-white hover:underline underline-offset-4">
                {item.name}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
