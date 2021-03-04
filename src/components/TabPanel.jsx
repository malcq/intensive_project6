import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import styled from 'styled-components';


const AppPanel = ({tabs, isHeader = false}) =>  {
  const [value, setValue] = useState(0);
  const handleChange = (event, value) => setValue(value);
  const STab = isHeader ? HeaderTab : SubTab;

  return (
    <STab color={isHeader ? 'primary' : 'default'}
      
    >
      <STabs
        value={value}
        onChange={handleChange}
        variant={isHeader ? 'fullWidth' : 'standard'}
        indicatorColor={isHeader ? 'secondary' : 'primary'}
        textColor={isHeader ? 'inherit' : 'secondary'}
      >
        {tabs.map(({label, to}, idx) => 
          <Tab key={idx} label={label} component={Link} to={to} />)
        }
      </STabs>
    </STab>
  );
};
const HeaderTab = styled(AppBar)`
  && {
    position: static;
    color: #ffffff;
  }
`;

const STabs = styled(Tabs)`
  && { display: flex};

  &.MuiTabs-root .MuiTabs-flexContainer {
    justify-content: center;
  }
  
`;
const SubTab = styled(AppBar)`
  && {
    position: static;
    margin: 10px auto;
    max-width: 640px;
  };
`;

export default AppPanel;