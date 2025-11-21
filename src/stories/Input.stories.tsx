import React, { useState } from "react";
import { Input } from "../components/Input/Input";

export default {
  title: "Components/Input",
  component: Input,
};

export const Default = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <Input
        type="text"
        value={value}
        onChange={setValue}
        placeholder="Enter text..."
      />
    );
  },
};

export const WithLabel = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <Input
        type="text"
        value={value}
        onChange={setValue}
        label="Email"
        placeholder="Enter your email"
      />
    );
  },
};

export const WithError = {
  render: () => {
    const [value, setValue] = useState("");
    const errorMessage =
      value.length > 0 && value.length < 8
        ? "Password must be at least 8 characters"
        : undefined;

    return (
      <Input
        type="password"
        value={value}
        onChange={setValue}
        label="Password"
        errorMessage={errorMessage}
        placeholder="Enter your password"
      />
    );
  },
};

export const Disabled = {
  render: () => {
    return (
      <Input
        type="text"
        value="Cannot edit this"
        onChange={() => {}}
        label="Disabled Input"
        disabled={true}
      />
    );
  },
};

export const PasswordWithToggle = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <Input
        type="password"
        value={value}
        onChange={setValue}
        label="Password"
        placeholder="Enter your password"
      />
    );
  },
};

export const Clearable = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <Input
        type="text"
        value={value}
        onChange={setValue}
        label="Search"
        placeholder="Type to search..."
        clearable={true}
      />
    );
  },
};

export const NumberInput = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <Input
        type="number"
        value={value}
        onChange={setValue}
        label="Age"
        placeholder="Enter your age"
      />
    );
  },
};
