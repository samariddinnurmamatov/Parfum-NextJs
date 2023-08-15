import { Fragment } from 'react';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { LayoutType } from '@/types';

export default function PublicLayout({ children }: LayoutType) {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
}
