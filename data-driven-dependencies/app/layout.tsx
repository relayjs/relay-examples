import '../styles/globals.css';

import Nav from '../components/Nav';
import {RelayProvider} from './providers';

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-full">
          <RelayProvider>
            <Nav />
            <main>
              <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                {children}
              </div>
            </main>
          </RelayProvider>
        </div>
      </body>
    </html>
  );
}
