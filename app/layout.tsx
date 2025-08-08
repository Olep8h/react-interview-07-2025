import Layout from "@/components/Layout/Layout";
import type { Metadata } from "next";
import StoreProvider from "@/modules/course/storeProvider";

export const metadata: Metadata = {
  title: "SiteOne interview app",
  description: "Simple interview app for SiteOne",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <StoreProvider>
          <Layout>{children}</Layout>
        </StoreProvider>
      </body>
    </html>
  );
}
