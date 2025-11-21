import { Input } from '../components/Input/Input';

export default {
  title: 'Components/Input',
  component: Input,
};

export const Default = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithLabel = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
  },
};

export const WithError = {
  args: {
    label: 'Password',
    type: 'password',
    error: 'Password must be at least 8 characters',
  },
};

export const Disabled = {
  args: {
    label: 'Disabled Input',
    value: 'Cannot edit this',
    disabled: true,
  },
};

