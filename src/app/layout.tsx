import ThemeProvider from "@/components/theme/Theme-provider";
import { RootLayoutType } from "@/lib/types";
import "./globals.css";

const RootLayout = ({ children }: RootLayoutType) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <main className="max-w-5xl mx-auto">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
};
export default RootLayout;
