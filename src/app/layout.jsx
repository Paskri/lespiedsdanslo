import './globals.css'

export const metadata = {
  title: "Les pieds dans l'O",
  description: 'Restaurant gastronomique Italien',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
