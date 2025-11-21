import React, { useState } from "react";
import { Input } from "../components/Input/Input";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    type: {
      control: "select",
      options: ["text", "password", "number"],
      description: "Input field type",
    },
    value: {
      control: "text",
      description: "Field value",
    },
    onChange: {
      action: "changed",
      description: "Value change handler",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text",
    },
    label: {
      control: "text",
      description: "Field label",
    },
    clearable: {
      control: "boolean",
      description: "Whether to show clear button",
    },
    errorMessage: {
      control: "text",
      description: "Error message",
    },
    disabled: {
      control: "boolean",
      description: "Whether the field is disabled",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
  decorators: [
    (Story, context) => {
      const [value, setValue] = useState(context.args.value || "");

      return (
        <Story
          args={{
            ...context.args,
            value,
            onChange: (newValue: string) => {
              setValue(newValue);
              if (context.args.onChange) {
                context.args.onChange(newValue);
              }
            },
          }}
        />
      );
    },
  ],
};

export const Default = {
  args: {
    type: "text",
    placeholder: "Enter text...",
  },
};

export const Password = {
  args: {
    type: "password",
    label: "Password",
    placeholder: "Enter your password",
  },
};

export const Number = {
  args: {
    type: "number",
    label: "Age",
    placeholder: "Enter your age",
  },
};

export const Clearable = {
  args: {
    type: "text",
    label: "Search",
    placeholder: "Type to search...",
    clearable: true,
  },
};

export const PasswordWithClearable = {
  args: {
    type: "password",
    label: "Password",
    placeholder: "Enter your password",
    clearable: true,
  },
};
