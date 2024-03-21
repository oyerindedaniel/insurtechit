import { MENU_ITEMS } from '@/components/layout/constants';
import SiteFooter from '@/components/layout/footer';
import SiteSidebar from '@/components/layout/sidebar';
import SiteHeader from '@/components/layout/topbar';

interface LayoutProps extends React.PropsWithChildren {}

export default async function Layout({ children }: LayoutProps) {
  return (
    <main className="min-h-screen overflow-hidden relative max-w-[1500px] mx-auto w-full h-full">
      <SiteHeader items={MENU_ITEMS} />
      <SiteSidebar items={MENU_ITEMS} />
      {children}
      <SiteFooter />
    </main>
  );
}
