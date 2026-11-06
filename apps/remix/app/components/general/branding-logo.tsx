import LogoScuro from '@documenso/assets/logo-retoria-scuro.svg';
import LogoChiaro from '@documenso/assets/logo-retoria.svg';
import { cn } from '@documenso/ui/lib/utils';

export type LogoProps = { className?: string };

// Retoria: logo vettoriale di retoria.it, versione per fondo chiaro e per fondo scuro.
export const BrandingLogo = ({ className }: LogoProps) => {
  return (
    <>
      <img src={LogoChiaro} alt="Firma Retoria" className={cn(className, 'dark:hidden')} />
      <img src={LogoScuro} alt="Firma Retoria" className={cn(className, 'hidden dark:inline-block')} />
    </>
  );
};
