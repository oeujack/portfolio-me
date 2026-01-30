import { Slide, ToastOptions } from 'react-toastify';

export function toastConfig(): ToastOptions {
  return {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
    transition: Slide,
  };
}
