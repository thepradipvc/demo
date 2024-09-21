"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

function Faq() {
  const [active, setActive] = useState<null | number>(null);

  const data = [
    {
      id: 1,
      question: "Question 1",
      answer:
        "lorem20If you use this site regularly and would like to help keep the site on the Internet, please consider donating a small sum to help pay for the hosting and bandwidth bill. There is no minimum donation, any sum is appreciated ",
    },
    {
      id: 2,
      question: "Question 1",
      answer:
        "lorem20If you use this site regularly and would like to help keep the site on the Internet, please consider donating a small sum to help pay for the hosting and bandwidth bill. There is no minimum donation, any sum is appreciated ",
    },
    {
      id: 3,
      question: "Question 1",
      answer:
        "lorem20If you use this site regularly and would like to help keep the site on the Internet, please consider donating a small sum to help pay for the hosting and bandwidth bill. There is no minimum donation, any sum is appreciated ",
    },
  ];

  return (
    <div className={styles.faq__wrapper}>
      <h4>Frequently Asked Questions</h4>

      <div>
        {data?.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              if (active === item.id) {
                setActive(null);
              } else {
                setActive(item?.id);
              }
            }}
            className={styles.mono_faq}
          >
            <p>
              {item?.question}{" "}
              <span>
                {active === item?.id ? <IconChevronUp /> : <IconChevronDown />}
              </span>
            </p>
            {active === item?.id && <p>{item?.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
