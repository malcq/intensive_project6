import React from 'react';
import Button from '@material-ui/core/Button';
import useStyles from './calendarStyle';

const Calendar = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.calendarContainer}>
        <Button className={classes.searchButton}>Поиск</Button>
        <div className={classes.calendarMenu}>
          <Button className={classes.menuButton}>Ближайшее</Button>
          <Button className={classes.menuButton}>Заметки</Button>
          <Button className={classes.menuButton}>Создать</Button>
        </div>
        <div>here is calendar</div>
        <p>23.02.2021 - defenders day</p>
        <p>1)Cogniac - Averst - "Full" - 100%</p>
        <Button className={classes.navButton}>Заметки</Button>
        <Button className={classes.navButton}>Назад</Button>
      </div>
    </>
  );
};

export default Calendar;
