import React, { useState } from "react";
import { useForm } from "react-hook-form";
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

export const WithReactHookForm = {
  render: () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
      watch,
      setValue,
    } = useForm({
      defaultValues: {
        email: "",
        password: "",
        age: "",
      },
    });

    const onSubmit = (data: any) => {
      console.log("Form submitted:", data);
      alert(
        `Form submitted!\nEmail: ${data.email}\nPassword: ${data.password}\nAge: ${data.age}`
      );
    };

    const emailValue = watch("email");
    const passwordValue = watch("password");
    const ageValue = watch("age");

    return (
      <div style={{ maxWidth: "400px", padding: "2rem" }}>
        <h2 style={{ marginBottom: "1.5rem" }}>Form with React Hook Form</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <Input
            type="text"
            label="Email"
            placeholder="Enter your email"
            value={emailValue}
            onChange={(value) => setValue("email", value)}
            errorMessage={errors.email?.message}
            clearable={true}
          />
          <Input
            type="password"
            label="Password"
            placeholder="Enter your password"
            value={passwordValue}
            onChange={(value) => setValue("password", value)}
            errorMessage={
              errors.password?.message ||
              (passwordValue &&
              passwordValue.length > 0 &&
              passwordValue.length < 8
                ? "Password must be at least 8 characters"
                : undefined)
            }
          />
          <Input
            type="number"
            label="Age"
            placeholder="Enter your age"
            value={ageValue}
            onChange={(value) => setValue("age", value)}
            errorMessage={errors.age?.message}
          />
          <button
            type="submit"
            style={{
              padding: "0.625rem 1.25rem",
              fontSize: "1rem",
              fontWeight: 500,
              fontFamily: "inherit",
              backgroundColor: "#646cff",
              color: "white",
              border: "none",
              borderRadius: "0.5rem",
              cursor: "pointer",
              marginTop: "0.5rem",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  },
};
