import React, { lazy } from 'react';
import Button from '@material-ui/core/Button';
import useStyles from './calendarStyle';
import { DAYS } from '../../mocks/calendarDays';
import { MONTH } from '../../mocks/month';
const CalendarCell = lazy(() => import('../../components/CalendarCell/CalendarCell'));

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
        <div>
          <div className={classes.days}>
            {DAYS.map((dayOfWeek) => (
              <CalendarCell data={dayOfWeek} />
            ))}
          </div>
          <div className={classes.days}>
            {MONTH.map((dayOfMonth) => (
              <CalendarCell data={dayOfMonth} />
            ))}
          </div>
        </div>
        <p>23.02.2021 - defenders day</p>
        <p>1)Cogniac - Averst - "Full" - 100%</p>
        <Button className={classes.navButton}>Заметки</Button>
        <Button className={classes.navButton}>Назад</Button>
      </div>
    </>
  );
};

export default Calendar;
