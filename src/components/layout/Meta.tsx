import Head from 'next/head';

type MetaProps = { title?: string };

const Meta = ({ title }: MetaProps) => {
  return (
    <Head>
      <title>{title && `${title} | `}RikuMovies</title>
    </Head>
  );
};

export default Meta;
