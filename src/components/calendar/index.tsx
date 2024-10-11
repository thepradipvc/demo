"use client";
import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import styles from "./style.module.scss";
import { getSlotsData } from "@/helpers/getData";
import {
  convertSlotsTo12HrFormat,
  formatDate,
} from "@/helpers/format-date-time";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function CalendarComponent() {
  const [value, onChange] = useState<Value>(new Date());
  const [availableSlots, setAvailableSlots] = useState([]);
  const [activeSlot, setActiveSlot] = useState("");

  async function getActiveSlots() {
    if (!value) return;

    let selectedDate = formatDate(value?.toString());

    let slots = await getSlotsData(
      "siddythings",
      selectedDate,
      "670133c6f52412ab18cff200"
    );

    setAvailableSlots(convertSlotsTo12HrFormat(slots?.data?.available_slots));
  }

  useEffect(() => {
    getActiveSlots();
  }, [value]);

  return (
    <div className={styles.calendar_wrapper}>
      <Calendar onChange={onChange} value={value} className="react-calendar" />

      <div className={styles.slots_wrapper}>
        {availableSlots?.map((item, index) => (
          <div
            className={styles.slot}
            key={index}
            style={{
              color: activeSlot === item ? "white" : "#212529",
              borderColor: activeSlot === item ? "#84b7e7" : "#212529",
              backgroundColor: activeSlot === item ? "#1bc58c" : "#fff",
            }}
            onClick={() => setActiveSlot(item)}
          >
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarComponent;
