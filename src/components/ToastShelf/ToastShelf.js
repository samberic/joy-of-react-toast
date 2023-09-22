import React, { useContext } from "react";

import Toast from "../Toast";
import { ToastContext } from "../ToastProvider/ToastProvider";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toasts, killToast } = React.useContext(ToastContext);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map((toast) => {
        return (
          <li className={styles.toastWrapper} key={toast.id}>
            <Toast variant={toast.variant} onClose={() => killToast(toast.id)}>
              {toast.message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
