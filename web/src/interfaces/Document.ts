export interface DocumentProps {
  '_id': string;
  title: string;
  description: string;
  fileSrc: string;
}

export interface DocumentRequestProps {
  title: string;
  description: string;
  document: string;
}
