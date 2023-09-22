import React from "react";
export const ToastContext = React.createContext();
function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);
  const killToast = (id) => {
    setToasts([...toasts.filter((it) => it.id !== id)]);
  };
  const addToast = (toast) => {
    setToasts([
      ...toasts,
      {
        message: toast.message,
        variant: toast.variant,
        id: crypto.randomUUID(),
      },
    ]);
  };
  const clearToasts = () => {
    setToasts([]);
  };
  return (
    <ToastContext.Provider value={{ toasts, killToast, addToast, clearToasts }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
