import Breadcrumbs from '../../components/Breadcrumbs';

export default function Home() {
  const breadcrumbs = [
    { label: 'Início' }
  ];

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <h1>Home</h1>
    </>
  );
}
