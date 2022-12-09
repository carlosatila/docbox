import { Breadcrumbs as Breads } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import { LinkStyled } from './styles';

type BreadcrumbsItemProps = {
  path?: string,
  label: string,
}

type BreadcrumbsProps = {
  breadcrumbs: BreadcrumbsItemProps[]
}

export default function Breadcrumbs({ breadcrumbs }: BreadcrumbsProps) {
  return (
    <Breads
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
      sx={{ mb: 3 }}
    >
      {breadcrumbs.map((b, index) => (
        <LinkStyled
          key={index}
          to={b?.path || '/'}
        >
          {b.label}
        </LinkStyled>
      ))}
    </Breads>
  );
}
