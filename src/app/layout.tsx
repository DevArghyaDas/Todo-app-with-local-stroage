import ThemeProvider from "@/components/theme/Theme-provider";
import { RootLayoutType } from "@/lib/types";
import "./globals.css";
import Header from "@/components/header/Header";

const RootLayout = ({ children }: RootLayoutType) => {
    return (
        <html
            lang="en"
            suppressHydrationWarning>
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem={false}>
                    <Header />
                    <main className="mx-auto max-w-5xl">{children}</main>
                </ThemeProvider>
            </body>
        </html>
    );
};
export default RootLayout;
