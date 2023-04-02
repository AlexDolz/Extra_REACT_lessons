import React from "react";
import { DayItem } from "../DayItem/DayItem";

export const DayList = ({ days, tasks }) => {
  const week = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];

  return (
    <div>
      {days.map((elem, index) => (
        <DayItem day={week[elem]} key={index} tasks={tasks} />
      ))}
    </div>
  );
};
