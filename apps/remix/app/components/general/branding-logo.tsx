import LogoImage from '@documenso/assets/logo.png';
import { cn } from '@documenso/ui/lib/utils';

export type LogoProps = { className?: string };

// Retoria: logo di Firma Retoria al posto di quello di Documenso; nel tema scuro sta su una piastrina carta.
export const BrandingLogo = ({ className }: LogoProps) => {
  return (
    <img
      src={LogoImage}
      alt="Firma Retoria"
      className={cn('dark:rounded-lg dark:bg-[#F4F1E8] dark:px-2 dark:py-1', className)}
    />
  );
};
