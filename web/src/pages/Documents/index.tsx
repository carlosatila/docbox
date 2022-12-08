import Breadcrumbs from '../../components/Breadcrumbs';

export default function Documents() {
  const breadcrumbs = [
    { label: 'Início', path: '/' },
    { label: 'Meus Documento' },
  ];

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <h1>Docs</h1>
    </>
  );
}
