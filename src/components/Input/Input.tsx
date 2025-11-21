import React, { useState } from "react";
import "./Input.css";

interface InputProps {
  type?: "text" | "password" | "number";
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  clearable?: boolean;
  errorMessage?: string;
  className?: string;
  disabled?: boolean;
}

export const Input = ({
  type = "text",
  value,
  onChange,
  placeholder,
  label,
  clearable = false,
  errorMessage,
  className = "",
  disabled = false,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const isNumber = type === "number";
  const inputType = isPassword && showPassword ? "text" : type;

  const handleClear = () => {
    onChange("");
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (isNumber && newValue !== "" && !/^\d+$/.test(newValue)) {
      return;
    }
    onChange(newValue);
  };

  const isMinLengthError =
    errorMessage &&
    errorMessage.toLowerCase().includes("8") &&
    (errorMessage.toLowerCase().includes("character") ||
      errorMessage.toLowerCase().includes("символ") ||
      errorMessage.toLowerCase().includes("at least"));

  const numberValidationError =
    isNumber && value !== "" && !/^\d+$/.test(value)
      ? "Please enter only numbers"
      : undefined;

  const displayErrorMessage = numberValidationError || errorMessage;

  const shouldShowError =
    displayErrorMessage &&
    !(isMinLengthError && value.length >= 8 && !numberValidationError);

  return (
    <div className={`input-wrapper ${className}`}>
      {label && <label className="input-label">{label}</label>}
      <div className="input-container">
        <input
          type={inputType}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`input ${shouldShowError ? "input-error" : ""}`}
        />
        {(isPassword || clearable) && (
          <div className="input-actions">
            {clearable && value && (
              <button
                type="button"
                onClick={handleClear}
                className="input-action-button input-clear-button"
                aria-label="Clear input"
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
            {isPassword && (
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="input-action-button input-eye-button"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 8C1 8 3.5 3 8 3C12.5 3 15 8 15 8C15 8 12.5 13 8 13C3.5 13 1 8 1 8Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="8"
                      cy="8"
                      r="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.5 2.5L13.5 13.5M9.5 9.5C9.2 9.8 8.8 10 8.4 10C7.6 10 7 9.4 7 8.6C7 8.2 7.2 7.8 7.5 7.5M13.2 10.8C13.7 10.3 14.1 9.7 14.5 9C14.5 9 12 4 7.5 4C6.8 4 6.2 4.1 5.6 4.3M5.2 4.8C4.7 5.3 4.3 5.9 3.9 6.6C3.9 6.6 6.4 11.6 11 11.6C11.7 11.6 12.3 11.5 12.9 11.3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 8C1 8 3.5 3 8 3C8.7 3 9.3 3.1 9.9 3.3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            )}
          </div>
        )}
      </div>
      {shouldShowError && (
        <span className="input-error-message">{displayErrorMessage}</span>
      )}
    </div>
  );
};
