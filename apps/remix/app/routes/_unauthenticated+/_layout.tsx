import { Outlet } from 'react-router';

import { BrandingLogo } from '~/components/general/branding-logo';
import { PublicLegalLinks } from '~/components/general/public-legal-links';

export default function Layout() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden px-4 py-12 md:p-12 lg:p-24">
      <div className="flex w-full flex-1 flex-col items-center justify-center">
        {/* Retoria: logo sopra il riquadro, fondo carta senza il motivo di Documenso */}
        <BrandingLogo className="mb-10 h-12 w-auto" />

        <div className="relative w-full flex items-center justify-center">
          <Outlet />
        </div>
      </div>

      <footer className="z-10 mt-8 w-full">
        <PublicLegalLinks />
      </footer>
    </main>
  );
}
