import { Toast } from '../components/Toast/Toast';

export default {
  title: 'Components/Toast',
  component: Toast,
};

export const Success = {
  args: {
    message: 'Operation completed successfully!',
    type: 'success',
  },
};

export const Error = {
  args: {
    message: 'Something went wrong. Please try again.',
    type: 'error',
  },
};

export const Warning = {
  args: {
    message: 'Please review your changes before submitting.',
    type: 'warning',
  },
};

export const Info = {
  args: {
    message: 'New update available. Check it out!',
    type: 'info',
  },
};

export const WithCloseButton = {
  args: {
    message: 'This toast can be closed',
    type: 'info',
    onClose: () => console.log('Toast closed'),
  },
};

