import { ShoppingCartProvider } from "@/context/ShoppingCartContext";
import SiteHeader from '@/components/SiteHeader';

function Layout({ children }) {
  return (
    <ShoppingCartProvider>
      <SiteHeader />
      {children}
    </ShoppingCartProvider>
  )
}

export default Layout