import Header from "@/components/header/Header";
import ThemeProvider from "@/components/theme/Theme-provider";
import { RootLayoutType } from "@/lib/types";
import { Toaster } from "react-hot-toast";
import "./globals.css";

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
                    <Toaster
                        position="top-center"
                        reverseOrder={false}
                    />

                    <Header />
                    <main className="relative mx-auto max-w-5xl">
                        {children}
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
};
export default RootLayout;
