import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Recurring Date Picker</title>
        <meta name="description" content="Pick recurring dates like TickTick!" />
      </head>
      <body className="min-h-screen bg-white">{children}</body>
    </html>
  );
}