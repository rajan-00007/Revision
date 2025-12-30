import './globals.css'
import Header from '../components/Header'
import StyledComponentsRegistry from '../lib/registry'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 font-sans">
        <StyledComponentsRegistry>
          <Header />
          <main className="container">{children}</main>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
