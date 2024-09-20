"use client";
import { useState } from "react";
import Calendar from "react-calendar";
import styles from "./style.module.scss";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function CalendarComponent() {
  const [value, onChange] = useState<Value>(new Date());
  const [activeSlot, setActiveSlot] = useState("");

  let slots = [
    {
      id: 1,
      slot: "8-9 AM",
    },
    {
      id: 2,
      slot: "9-10 AM",
    },
    {
      id: 3,
      slot: "10-11 AM",
    },
    {
      id: 4,
      slot: "11-12 AM",
    },
    {
      id: 5,
      slot: "12-1 PM",
    },
  ];

  return (
    <div className={styles.calendar_wrapper}>
      <Calendar onChange={onChange} value={value} className="react-calendar" />

      <div className={styles.slots_wrapper}>
        {slots?.map((item) => (
          <div
            className={styles.slot}
            key={item?.id}
            style={{
              color: activeSlot === item?.slot ? "white" : "#212529",
              borderColor: activeSlot === item?.slot ? "#84b7e7" : "#212529",
              backgroundColor:
                activeSlot === item?.slot ? "#84b7e7" : "#fff",
            }}
            onClick={() => setActiveSlot(item?.slot)}
          >
            <p>{item?.slot}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarComponent;
