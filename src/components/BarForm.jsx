import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

import SelectField from './SelectField';
import { SButtonGroup } from '@styles';
import { residuesData } from '@mocks/residues';

const BarForm = ({ onCancel, id }) => {
  const [residue, setResidue] = useState('');
  const handleChange = useCallback(({target: {value }}) => {
    setResidue(value);
  },[]);
  const {residuesL, residuesV } = residuesData;
  return (
    <Typography component='div'>
      <STypography component='span'>
        <SelectField residue={residue} residues={residuesL} handleChange={handleChange} />
        <SelectField residue={residue} residues={residuesV} handleChange={handleChange} />
      </STypography>
      
      <SButtonGroup>
        <SButton variant='contained' onClick={onCancel}>Отменить</SButton>
        <SButton variant='contained' component={Link} to={`/barcard/list/${id}/result`}>Сохранить</SButton>
      </SButtonGroup>
    </Typography>
  );
};

const STypography = styled(Typography)`
  &&{ padding-bottom: 10px;}
  display: flex;
  justify-content: space-between;
`;

const SButton = styled(Button)`
  && {
    margin-bottom: 10px;
  }
`;

export default BarForm;