import styles from "./styles.module.scss";

function Description() {
  return (
    <div className={styles.description_wrapper}>
      <h1>Level Up Photo Session</h1>
      <h4>$999 </h4>
      <div className={styles.description_content}>
        <p>
          Let's level up your brand with amazing photos to share across your
          social platforms.
        </p>
        <p>During this private photoshoot session you will receive:</p>
        <ul>
          <li>
            <p>30 Minute 1:1 call to discuss brand and plan photoshoot</p>
          </li>
          <li>
            <p>Mood board highlighting vision for content creation</p>
          </li>
          <li>
            <p>Two hour photoshoot at Realm Studio in Denver, Colorado</p>
          </li>
          <li>
            <p>
              Full gallery of 50 edited photographs delivered via email with two
              week turnaround time
            </p>
          </li>
          <li>
            <p>
              Five (15 seconds) professional video clips captured for social
              media{" "}
            </p>
          </li>
          <li>
            <p>
              Professional hair and makeup services offered *with an additional
              charge
            </p>
          </li>
        </ul>
        <p>
          *Please note this service is non refundable. By scheduling your
          consultation call below you agree to the terms and conditions.
        </p>
      </div>
    </div>
  );
}

export default Description;
