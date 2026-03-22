import { useRef, useState, type ChangeEvent } from "react";
import type { FieldErrors, PaymentMethod } from "../types";

export function useCheckoutForm(payMethod: PaymentMethod) {
  const [errors, setErrors] = useState<FieldErrors>({});

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const zipRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);
  const emnumRef = useRef<HTMLInputElement>(null);
  const empinRef = useRef<HTMLInputElement>(null);

  function getError(id: string): string {
    return errors[id] ?? "";
  }

  function handleChange(id: string) {
    return (e: ChangeEvent<HTMLInputElement>) => {
      if (errors[id] !== undefined) {
        setErrors((prev) => ({
          ...prev,
          [id]: e.target.validity.valid ? "" : e.target.validationMessage,
        }));
      }
    };
  }

  function validate(): boolean {
    const allRefs = [
      { id: "name", ref: nameRef },
      { id: "email", ref: emailRef },
      { id: "phone", ref: phoneRef },
      { id: "address", ref: addressRef },
      { id: "zip", ref: zipRef },
      { id: "city", ref: cityRef },
      { id: "country", ref: countryRef },
      ...(payMethod === "emoney"
        ? [
            { id: "emnum", ref: emnumRef },
            { id: "empin", ref: empinRef },
          ]
        : []),
    ];

    const newErrors: FieldErrors = {};
    for (const { id, ref } of allRefs) {
      if (ref.current && !ref.current.validity.valid) {
        newErrors[id] = ref.current.validationMessage;
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return false;
    }

    return true;
  }

  return {
    refs: {
      nameRef,
      emailRef,
      phoneRef,
      addressRef,
      zipRef,
      cityRef,
      countryRef,
      emnumRef,
      empinRef,
    },
    getError,
    handleChange,
    validate,
  };
}
