import { useState } from 'react';
import validator from 'validator';

export default function useHandleFormData() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
  });
  const [emailError, setEmailError] = useState('');

  const handleFormData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === 'email') {
      if (validator.isEmail(value)) {
        setEmailError('Email adresi geçerli');
      } else {
        setEmailError('Email adresi geçersiz');
      }
    }
  };

  return { formData, emailError, handleFormData };
}
