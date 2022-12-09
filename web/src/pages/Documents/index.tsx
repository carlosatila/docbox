import { Box, Button, IconButton, Link, TableCell, TableRow, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs';
import DocTable from '../../components/DocTable';
import Modal from '../../components/Modal';
import { DocumentProps, DocumentRequestProps } from '../../interfaces/Document';
import {
  Delete as DeleteIcon,
  Add as AddIcon,
  Addchart as AddchartIcon
} from '@mui/icons-material';

import config from '../../config';
import api from '../../services/api';

import EmptyImage from '../../assets/empty-box.gif';

export default function Documents() {
  const breadcrumbs = [
    { label: 'Início', path: '/' },
    { label: 'Meus Documento' },
  ];

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [documentFields, setDocumentFields] = useState<DocumentRequestProps>({
    title: '',
    description: '',
    document: ''
  });
  const [openModal, setOpenModal] = useState<boolean>(false);
  const {
    status,
    data,
    addDocument,
    deleteDocument
  } = useDocuments();

  const headers = ['Título', 'Descrição', 'Documento', 'Ações'];

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      {
        ['error', 'loading'].includes(status)
          ? (
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img src={EmptyImage} alt="Caixa Vazia" title="Nenhum documento encontrado" />
            </Box>
          )
          : (
            <>
              <Box sx={{ mb: 2, textAlign: 'right' }}>
                <Button
                  variant="contained"
                  color='success'
                  startIcon={<AddIcon />}
                  onClick={() => setOpenModal(true)}
                >
                  Cadastrar Documento
                </Button>
              </Box>
              <DocTable headers={headers} rows={data}>
                {row => (
                  <TableRow key={row._id}>
                    <TableCell>
                      <Typography color="textPrimary">
                        {row.title}
                      </Typography>
                    </TableCell>

                    <TableCell>
                      <Typography color="textPrimary">
                        {row.description}
                      </Typography>
                    </TableCell>

                    <TableCell>
                      <Link href={`${config.baseUrl}/uploads/${row.fileSrc}`} target='_blank'>
                        {row.fileSrc}
                      </Link>
                    </TableCell>

                    <TableCell>
                      <IconButton
                        aria-label="delete"
                        color='error'
                        onClick={() => deleteDocument(row._id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                )}
              </DocTable>
              <Modal
                title="Novo Documento"
                open={openModal}
                onClose={() => console.log('')}
                actions={
                  <>
                    <Button variant='contained' color='success' onClick={() => addDocument(documentFields)}>Cadastrar</Button>
                    <Button variant='outlined' color='error' onClick={() => setOpenModal(false)}>Cancelar</Button>
                  </>
                }
              >
                <Box>
                  <TextField
                    autoFocus
                    margin="dense"
                    variant="standard"
                    label="Título"
                    fullWidth
                    required
                    onChange={e => setDocumentFields({ ...documentFields, title: e.target.value })}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    variant="standard"
                    label="Descrição"
                    fullWidth
                    required
                    onChange={e => setDocumentFields({ ...documentFields, description: e.target.value })}
                  />
                  <Box display='flex' alignItems='center'>
                    <Button
                      variant="contained"
                      component="label"
                      startIcon={<AddchartIcon />}
                      sx={{ mt: 3, mr: 3 }}
                    >
                      Carregar Documento
                      <input
                        hidden
                        accept="*"
                        type="file"
                        onChange={e => setDocumentFields({
                          ...documentFields, document: e.target.files && e.target.files[0]
                        })}
                      />
                    </Button>
                    <Typography variant='body1' sx={{ mt: 3 }}>{selectedFile?.name}</Typography>
                  </Box>
                </Box>
              </Modal>
            </>
          )
      }
    </>
  );
}

function useDocuments() {
  const [status, setStatus] = useState<string>('loading');
  const [data, setData] = useState<DocumentProps[]>([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      setStatus('loading');
      const { data } = await api.get('/documents');
      setData(data);
      setStatus('done');
    } catch (err) {
      setStatus('error');
    }
  }

  async function addDocument({
    title,
    description,
    document,
  }: DocumentRequestProps) {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('document', document);

    try {
      setStatus('loading');

      await api.post(
        '/documents',
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' }
        }
      );
      await getData();
      setStatus('done');
    } catch (err) {
      setStatus('error');
    }
  }

  async function deleteDocument(id: string) {
    try {
      setStatus('loading');
      await api.delete(`/documents/${id}`);
      await getData();
      setStatus('done');
    } catch (err) {
      setStatus('error');
    }
  }

  return {
    status,
    data,
    getData,
    addDocument,
    deleteDocument,
  };
}
