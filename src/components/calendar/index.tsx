"use client";
import { useState } from "react";
import Calendar from "react-calendar";
import styles from "./style.module.scss";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function CalendarComponent() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className={styles.calendar_wrapper}>
      <Calendar onChange={onChange} value={value} className="react-calendar"  />
    </div>
  );
}

export default CalendarComponent;
