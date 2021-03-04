import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styled from 'styled-components';

const SelectField = ({residue, residues = [], handleChange}) => {
  return (
    <SFormControl variant="filled">
      <InputLabel id="filled-label">Остаток</InputLabel>
      <Select
        labelId="filled-label"
        id="filled"
        value={residue}
        onChange={handleChange}
      >
        
        {residues.map(({label, value}, idx) => 
          <MenuItem
            key={idx}
            value={value}
          >
            {label}
          </MenuItem>)
        }
      </Select>
    </SFormControl>
  );
};

const SFormControl = styled(FormControl)`
  && {width: 45%;}
`;

export default SelectField;