import LogoImage from '@documenso/assets/logo.png';

export type LogoProps = { className?: string };

// Retoria: logo di Firma Retoria al posto di quello di Documenso.
export const BrandingLogo = ({ className }: LogoProps) => {
  return <img src={LogoImage} alt="Firma Retoria" className={className} />;
};
