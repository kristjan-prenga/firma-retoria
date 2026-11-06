import { cn } from '@documenso/ui/lib/utils';
import { ChevronRightIcon } from 'lucide-react';

export type SettingsScopeBreadcrumbProps = {
  scope: 'organisation' | 'team' | 'account';
  scopeName: string;
  crumbs: string[];
};

export const SettingsScopeBreadcrumb = ({ scope, scopeName, crumbs }: SettingsScopeBreadcrumbProps) => {
  return (
    <nav
      aria-label="settings-scope-breadcrumb"
      className="mb-4 flex flex-wrap items-center gap-2 text-muted-foreground text-sm"
      data-testid="settings-scope-breadcrumb"
    >
      {/* Retoria: niente nome di organizzazione/team né etichetta dell'ambito, solo il percorso. */}
      {crumbs.map((crumb, idx) => {
        const isLeaf = idx === crumbs.length - 1;

        return (
          <span key={`${crumb}-${idx}`} className="flex items-center gap-2">
            {idx > 0 && <ChevronRightIcon className="h-3.5 w-3.5 opacity-50" />}
            <span className={cn(isLeaf && 'font-semibold text-foreground')}>{crumb}</span>
          </span>
        );
      })}
    </nav>
  );
};
