import "./globals.css"

export const metadata = {
  title: "Temida Typescript",
  description: "Recursive function example",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
