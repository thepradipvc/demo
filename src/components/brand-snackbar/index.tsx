import React from "react";
import Logo from "../../assets/home-page/lnkr.svg";
import styles from "./styles.module.scss";
import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react/";

function index() {
  return (
    <a href="https://app.lnkr.store/auth/register" className={styles.snack_container}>
      <div>
        <div>
          <Image src={Logo} width={35} height={35} alt="Lnkr" />
        </div>

        <p>Create your own free link on Linkr </p>
      </div>
      <span>
        <IconArrowRight />
      </span>{" "}
    </a>
  );
}

export default index;
