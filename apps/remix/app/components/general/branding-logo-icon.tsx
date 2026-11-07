import LogoIcona from '@documenso/assets/logo-retoria-icona.svg';

export type LogoProps = { className?: string };

// Retoria: icona compatta di retoria.it al posto di quella di Documenso.
export const BrandingLogoIcon = ({ className }: LogoProps) => {
  return <img src={LogoIcona} alt="Firma Retoria" className={className} />;
};
