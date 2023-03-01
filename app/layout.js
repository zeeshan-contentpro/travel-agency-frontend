import "./globals.css";
import Footer from "./NavFooter/footer";
import Nav from "./NavFooter/nav";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head />
            <body>
                <Nav />
                {children}
                <Footer/>
            </body>
        </html>
    );
}
