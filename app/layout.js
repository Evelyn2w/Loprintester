import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lunchtime Predictions and Teatime Predictions',
  description: 'Get all the information about the uk49s lunchtime and teatime predcition
    on daily basis. We are ready to provide information that you needed. Best of luck!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
