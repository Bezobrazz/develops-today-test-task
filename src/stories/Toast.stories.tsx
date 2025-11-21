import React, { useState } from "react";
import { Toast } from "../components/Toast/Toast";
import "./Toast.stories.css";

export default {
  title: "Feedback/Toast",
  component: Toast,
  argTypes: {
    type: {
      control: "select",
      options: ["success", "error", "info"],
      description: "Toast type",
    },
    message: {
      control: "text",
      description: "Toast message",
    },
    show: {
      control: "boolean",
      description: "Whether toast is visible",
    },
    duration: {
      control: "number",
      description: "Auto-dismiss duration in milliseconds",
    },
    onClose: {
      action: "closed",
      description: "Close handler",
    },
  },
};

export const Success = {
  render: () => {
    const [show, setShow] = useState(true);
    return (
      <div className="toast-story-container">
        <button className="toast-story-button" onClick={() => setShow(true)}>
          Show Success Toast
        </button>
        <Toast
          type="success"
          message="Operation completed successfully!"
          show={show}
          onClose={() => setShow(false)}
        />
      </div>
    );
  },
};

export const Error = {
  render: () => {
    const [show, setShow] = useState(true);
    return (
      <div className="toast-story-container">
        <button className="toast-story-button" onClick={() => setShow(true)}>
          Show Error Toast
        </button>
        <Toast
          type="error"
          message="Something went wrong. Please try again."
          show={show}
          onClose={() => setShow(false)}
        />
      </div>
    );
  },
};

export const Info = {
  render: () => {
    const [show, setShow] = useState(true);
    return (
      <div className="toast-story-container">
        <button className="toast-story-button" onClick={() => setShow(true)}>
          Show Info Toast
        </button>
        <Toast
          type="info"
          message="New update available. Check it out!"
          show={show}
          onClose={() => setShow(false)}
        />
      </div>
    );
  },
};

export const ShortDuration = {
  render: () => {
    const [show, setShow] = useState(true);
    return (
      <div className="toast-story-container">
        <button className="toast-story-button" onClick={() => setShow(true)}>
          Show Toast (1s duration)
        </button>
        <Toast
          type="info"
          message="This toast will auto-dismiss in 1 second"
          show={show}
          duration={1000}
          onClose={() => setShow(false)}
        />
      </div>
    );
  },
};

export const LongDuration = {
  render: () => {
    const [show, setShow] = useState(true);
    return (
      <div className="toast-story-container">
        <button className="toast-story-button" onClick={() => setShow(true)}>
          Show Toast (5s duration)
        </button>
        <Toast
          type="info"
          message="This toast will auto-dismiss in 5 seconds"
          show={show}
          duration={5000}
          onClose={() => setShow(false)}
        />
      </div>
    );
  },
};

export const WithManualClose = {
  render: () => {
    const [show, setShow] = useState(true);
    return (
      <div className="toast-story-container">
        <button className="toast-story-button" onClick={() => setShow(true)}>
          Show Toast with Close Button
        </button>
        <Toast
          type="info"
          message="This toast has a manual close button"
          show={show}
          onClose={() => setShow(false)}
          duration={0}
        />
      </div>
    );
  },
};
