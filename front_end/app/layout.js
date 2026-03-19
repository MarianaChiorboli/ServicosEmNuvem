import './globals.css';

export const metadata = {
  title: 'Foto Surpresa',
  description: 'Clique para ver uma foto surpresa!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}