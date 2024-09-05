import './globals.css'

export const metadata = {
  title: 'Audio Organizer',
  description: 'An app to organize and play audio files',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}