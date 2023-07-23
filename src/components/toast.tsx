import { useState, useEffect } from "react";

interface ToastProps {
  message: string;
  showToast: boolean;
}

export default function Toast({ message, showToast }: ToastProps) {
  const [show, setShow] = useState(showToast);

  useEffect(() => {
    setShow(showToast);

    if (showToast) {
      const timeout = setTimeout(() => {
        setShow(false);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [showToast]);
  return (
    <>
      {show && (
        <div className={`toast ${showToast ? "show" : ""}`}>{message}</div>
      )}
    </>
  );
}
