import LogoScuro from '@documenso/assets/logo-retoria-scuro.svg';
import LogoChiaro from '@documenso/assets/logo-retoria.svg';
import { cn } from '@documenso/ui/lib/utils';

export type LogoProps = { className?: string };

// Retoria: logo vettoriale di retoria.it. Le classi (anche responsive) vanno sul contenitore,
// le due immagini scelgono solo tra versione chiara e scura.
export const BrandingLogo = ({ className }: LogoProps) => {
  return (
    <span className={cn('inline-flex', className)}>
      <img src={LogoChiaro} alt="Firma Retoria" className="h-full max-h-[inherit] w-auto dark:hidden" />
      <img src={LogoScuro} alt="Firma Retoria" className="hidden h-full max-h-[inherit] w-auto dark:block" />
    </span>
  );
};
