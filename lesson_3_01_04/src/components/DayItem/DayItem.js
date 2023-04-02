import React from "react";
import { Task } from "../Task/Task";

export const DayItem = ({ day, tasks }) => {
  return (
    <div>
      <p>{day}</p>
      <div>
        {tasks.map((elem, index) => {
          if (elem.day === day) {
            return (
              <Task
                importance={elem.importance}
                description={elem.description}
                key={index}
              />
            );
          }
        })}
      </div>
    </div>
  );
};
