import ContactForm from '../components/contact/contact-form';
import { Fragment } from 'react';
import Head from 'next/head';

function ContentPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me your messages!" />
      </Head>
      <ContactForm />
    </Fragment>
  );
}

export default ContentPage;
