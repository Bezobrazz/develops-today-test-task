import React, { useEffect, useState } from "react";
import "./Toast.css";

interface ToastProps {
  type: "success" | "error" | "info";
  message: string;
  show: boolean;
  duration?: number;
  onClose?: () => void;
}

export const Toast = ({
  type,
  message,
  show,
  duration = 3000,
  onClose,
}: ToastProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (show) {
      setIsMounted(true);
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
      const timer = setTimeout(() => setIsMounted(false), 300);
      return () => clearTimeout(timer);
    }
  }, [show]);

  useEffect(() => {
    if (show && duration > 0) {
      const timer = setTimeout(() => {
        if (onClose) {
          onClose();
        }
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className={`toast toast-${type} ${isVisible ? "toast-visible" : ""}`}>
      <div className="toast-content">
        <span className="toast-message">{message}</span>
      </div>
      {onClose && (
        <button
          className="toast-close"
          onClick={onClose}
          aria-label="Close"
          type="button"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4L4 12M4 4L12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
};
