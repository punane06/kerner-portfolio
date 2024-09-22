import Footer from "./components/Footer"
import Header from "./components/Header"
import "./globals.css";

export const metadata = {
  title: 'Kadi Kerner protfolio',
  description: 'Front-End developer Kadi Kerner Home Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header children={children}/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
