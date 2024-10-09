import 'fitspot/styles/globals.scss';
import 'fitspot/styles/layout.scss';
import { Metadata } from 'next/types';

type RootLayoutProps = {
  children: React.ReactNode;
};

 const RootLayout = (props: RootLayoutProps) => {
  const { children } = props;

  return (
      <html lang="en">
          <body className='layout'>
              <main>{children}</main>
          </body>
      </html>
  );
};

export default RootLayout;

export const metadata: Metadata = {
  title: 'Fitspot',
  description: 'Helping you find a perfect workout spot and buddies',
};
