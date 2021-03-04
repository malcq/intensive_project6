import React from 'react';
import useStyles from './CalendarCellStyle';

const CalendarCell = ({ data }) => {
  const classes = useStyles();
  return (
    <div className={classes.cell}>
      <span>{data}</span>
    </div>
  );
};

export default CalendarCell;
