import React from "react";

import Button from "../Button";
import { useEscapeKey } from "../../hooks/useEscapeKey";
import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf/ToastShelf";
import { ToastContext } from "../ToastProvider/ToastProvider";
const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState("notice");
  const { toasts, addToast, clearToasts } = React.useContext(ToastContext);

  useEscapeKey(() => clearToasts());
  React.useEffect(() => {});
  const addNewToast = (e) => {
    e.preventDefault();
    addToast({ message: message, variant: variant });
    setMessage("");
    setVariant(VARIANT_OPTIONS[0]);
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf></ToastShelf>
      <div className={styles.controlsWrapper}>
        <form onSubmit={(e) => addNewToast(e)}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                className={styles.messageInput}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((it) => {
                return (
                  <label htmlFor={`variant-${it}`} key={it}>
                    <input
                      id={`variant-${it}`}
                      type="radio"
                      name="variant"
                      value={it}
                      onChange={(e) => setVariant(it)}
                      checked={variant === it}
                    />
                    {it}
                  </label>
                );
              })}

              {/* TODO Other Variant radio buttons here */}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button type="submit">Pop Toast!</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ToastPlayground;
