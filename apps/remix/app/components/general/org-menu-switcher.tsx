import { authClient } from '@documenso/auth/client';
import { useOptionalCurrentOrganisation } from '@documenso/lib/client-only/providers/organisation';
import { useSession } from '@documenso/lib/client-only/providers/session';
import { IS_BILLING_ENABLED } from '@documenso/lib/constants/app';
import { EXTENDED_ORGANISATION_MEMBER_ROLE_MAP } from '@documenso/lib/constants/organisations-translations';
import { EXTENDED_TEAM_MEMBER_ROLE_MAP } from '@documenso/lib/constants/teams-translations';
import { formatAvatarUrl } from '@documenso/lib/utils/avatars';
import { isAdmin } from '@documenso/lib/utils/is-admin';
import {
  canAccessOrganisationAnalytics,
  canExecuteOrganisationAction,
  formatOrganisationAnalyticsPath,
} from '@documenso/lib/utils/organisations';
import { extractInitials } from '@documenso/lib/utils/recipient-formatter';
import { canExecuteTeamAction, formatAnalyticsPath } from '@documenso/lib/utils/teams';
import { AnimateGenericFadeInOut } from '@documenso/ui/components/animate/animate-generic-fade-in-out';
import { LanguageSwitcherDialog } from '@documenso/ui/components/common/language-switcher-dialog';
import { cn } from '@documenso/ui/lib/utils';
import { AvatarWithText } from '@documenso/ui/primitives/avatar';
import { Button } from '@documenso/ui/primitives/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@documenso/ui/primitives/dropdown-menu';
import { msg } from '@lingui/core/macro';
import { useLingui } from '@lingui/react';
import { Trans } from '@lingui/react/macro';
import { Building2Icon, ChevronsUpDown, Plus, Settings2Icon, SettingsIcon, UsersIcon } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router';

import { useOptionalCurrentTeam } from '~/providers/team';

export const OrgMenuSwitcher = () => {
  const { _ } = useLingui();

  const { user, organisations } = useSession();

  const { pathname } = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [languageSwitcherOpen, setLanguageSwitcherOpen] = useState(false);
  const [hoveredOrgId, setHoveredOrgId] = useState<string | null>(null);

  const isUserAdmin = isAdmin(user);

  const isPathOrgUrl = (orgUrl: string) => {
    if (!pathname || !pathname.startsWith(`/o/`)) {
      return false;
    }

    return pathname.split('/')[2] === orgUrl;
  };

  const selectedOrg = organisations.find((org) => isPathOrgUrl(org.url));
  const hoveredOrg = organisations.find((org) => org.id === hoveredOrgId || organisations.length === 1);

  const currentOrganisation = useOptionalCurrentOrganisation();
  const currentTeam = useOptionalCurrentTeam();

  const canAccessOrganisationSettings =
    currentOrganisation &&
    canExecuteOrganisationAction('MANAGE_ORGANISATION', currentOrganisation.currentOrganisationRole);

  const canAccessTeamSettings = currentTeam && canExecuteTeamAction('MANAGE_TEAM', currentTeam.currentTeamRole);

  // Team analytics take precedence when in a team context, the team page links to organisation analytics.
  const analyticsPath = canAccessTeamSettings
    ? formatAnalyticsPath(currentTeam.url)
    : currentOrganisation && canAccessOrganisationAnalytics(currentOrganisation.currentOrganisationRole)
      ? formatOrganisationAnalyticsPath(currentOrganisation.url)
      : null;

  // Use hovered org for teams display if available,
  // otherwise use current team's org if in a team,
  // finally fallback to selected org
  const displayedOrg = hoveredOrg || currentOrganisation || selectedOrg;

  const formatAvatarFallback = (name?: string) => {
    if (name !== undefined) {
      return name.slice(0, 1).toUpperCase();
    }

    return user.name ? extractInitials(user.name) : user.email.slice(0, 1).toUpperCase();
  };

  // Retoria: in alto a destra si vede sempre chi è collegato (nome ed email), non team o organizzazione.
  const dropdownMenuAvatarText = {
    avatarSrc: formatAvatarUrl(user.avatarImageId),
    avatarFallback: formatAvatarFallback(user.name ?? user.email),
    primaryText: user.name || user.email,
    secondaryText: user.email,
  };

  const handleOpenChange = (open: boolean) => {
    if (open) {
      setHoveredOrgId(currentOrganisation?.id || null);
    }

    setIsOpen(open);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={handleOpenChange}>
      <DropdownMenuTrigger asChild>
        <Button
          data-testid="menu-switcher"
          variant="none"
          className="relative flex h-12 flex-row items-center px-0 py-2 ring-0 focus:outline-none focus-visible:border-0 focus-visible:ring-0 focus-visible:ring-transparent md:px-2"
        >
          <AvatarWithText
            avatarSrc={dropdownMenuAvatarText.avatarSrc}
            avatarFallback={dropdownMenuAvatarText.avatarFallback}
            primaryText={dropdownMenuAvatarText.primaryText}
            secondaryText={dropdownMenuAvatarText.secondaryText}
            rightSideComponent={<ChevronsUpDown className="ml-auto h-4 w-4 text-muted-foreground" />}
            textSectionClassName="hidden lg:flex"
          />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className={cn('z-[60] ml-6 flex w-full divide-x divide-border p-0 md:ml-0 md:min-w-[16rem]')}
        align="end"
        forceMount
      >
        <div className="flex w-full">
          {/* Settings column */}
          <div className="flex w-full flex-col">
            <div className="flex h-12 items-center border-b p-2">
              <h3 className="flex items-center px-2 font-medium text-muted-foreground text-sm">
                <SettingsIcon className="mr-2 h-3.5 w-3.5" />
                <Trans>Settings</Trans>
              </h3>
            </div>
            <div className="flex-1 overflow-y-auto p-1.5">
              {isUserAdmin && (
                <DropdownMenuItem className="px-4 py-2 text-muted-foreground" asChild>
                  <Link to="/admin">
                    <Trans>Admin panel</Trans>
                  </Link>
                </DropdownMenuItem>
              )}

              <DropdownMenuItem className="px-4 py-2 text-muted-foreground" asChild>
                <Link to="/inbox">
                  <Trans>Inbox</Trans>
                </Link>
              </DropdownMenuItem>


              <DropdownMenuItem className="px-4 py-2 text-muted-foreground" asChild>
                <Link
                  to={
                    canAccessOrganisationSettings
                      ? `/o/${currentOrganisation?.url}/settings/document`
                      : canAccessTeamSettings
                        ? `/t/${currentTeam?.url}/settings/document`
                        : '/settings/profile'
                  }
                >
                  <Trans>Settings</Trans>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem className="px-4 py-2 text-muted-foreground" asChild>
                <Link to="/settings/profile">
                  <Trans>Account</Trans>
                </Link>
              </DropdownMenuItem>

              {IS_BILLING_ENABLED() && (
                <DropdownMenuItem className="px-4 py-2 text-muted-foreground" asChild>
                  <Link to="/settings/billing">
                    <Trans>Billing</Trans>
                  </Link>
                </DropdownMenuItem>
              )}

              <DropdownMenuItem
                className="px-4 py-2 text-muted-foreground"
                onClick={() => setLanguageSwitcherOpen(true)}
              >
                <Trans>Language</Trans>
              </DropdownMenuItem>

              {currentOrganisation && (
                <DropdownMenuItem className="px-4 py-2 text-muted-foreground" asChild>
                  <Link
                    to={{
                      pathname: `/o/${currentOrganisation.url}/support`,
                      search: currentTeam ? `?team=${currentTeam.id}` : '',
                    }}
                  >
                    <Trans>Support</Trans>
                  </Link>
                </DropdownMenuItem>
              )}

              <DropdownMenuItem
                className="hover:!text-muted-foreground px-4 py-2 text-muted-foreground"
                onSelect={async () => authClient.signOut()}
              >
                <Trans>Sign Out</Trans>
              </DropdownMenuItem>
            </div>
          </div>
        </div>
      </DropdownMenuContent>

      <LanguageSwitcherDialog open={languageSwitcherOpen} setOpen={setLanguageSwitcherOpen} />
    </DropdownMenu>
  );
};
