import Breadcrumbs from '../../components/Breadcrumbs';

export default function About() {
  const breadcrumbs = [
    { label: 'Início', path: '/' },
    { label: 'O Que Fazemos' },
  ];

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <h1>About</h1>
    </>
  );
}
