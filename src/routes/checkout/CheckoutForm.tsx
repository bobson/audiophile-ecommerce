import { useState, type ReactNode } from "react";
import type { PaymentMethod } from "../../types";
import { useCheckoutForm } from "../../hooks/useCheckoutForm";
import { Field } from "./Field";

interface CheckoutFormProps {
  onSuccess: () => void;
  children: ReactNode; // OrderSummary + submit button rendered inside <form>
}

export function CheckoutForm({ onSuccess, children }: CheckoutFormProps) {
  const [payMethod, setPayMethod] = useState<PaymentMethod>("emoney");
  const { refs, getError, handleChange, validate } = useCheckoutForm(payMethod);

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    if (validate()) onSuccess();
  }

  return (
    <form className="checkout-layout" onSubmit={handleSubmit} noValidate>
      {/* ── LEFT: Form fields ── */}
      <div className="form-panel">
        <h1 className="checkout-title">CHECKOUT</h1>

        {/* BILLING DETAILS */}
        <section>
          <p className="section-label">BILLING DETAILS</p>
          <div className="grid-2">
            <Field
              label="Name"
              id="name"
              placeholder="Alexei Ward"
              required
              inputRef={refs.nameRef}
              error={getError("name")}
              onChange={handleChange("name")}
            />
            <Field
              label="Email Address"
              id="email"
              type="email"
              placeholder="alexei@mail.com"
              required
              inputRef={refs.emailRef}
              error={getError("email")}
              onChange={handleChange("email")}
            />
          </div>
          <Field
            label="Phone Number"
            id="phone"
            type="tel"
            placeholder="+1 202-555-0136"
            required
            inputRef={refs.phoneRef}
            error={getError("phone")}
            onChange={handleChange("phone")}
          />
        </section>

        {/* SHIPPING INFO */}
        <section>
          <p className="section-label">SHIPPING INFO</p>
          <Field
            label="Your Address"
            id="address"
            placeholder="1137 Williams Avenue"
            required
            inputRef={refs.addressRef}
            error={getError("address")}
            onChange={handleChange("address")}
          />
          <div className="grid-2">
            <Field
              label="ZIP Code"
              id="zip"
              placeholder="10001"
              required
              pattern="\d{5}"
              title="5-digit ZIP code"
              inputRef={refs.zipRef}
              error={getError("zip")}
              onChange={handleChange("zip")}
            />
            <Field
              label="City"
              id="city"
              placeholder="New York"
              required
              inputRef={refs.cityRef}
              error={getError("city")}
              onChange={handleChange("city")}
            />
          </div>
          <Field
            label="Country"
            id="country"
            placeholder="United States"
            required
            inputRef={refs.countryRef}
            error={getError("country")}
            onChange={handleChange("country")}
          />
        </section>

        {/* PAYMENT DETAILS */}
        <section>
          <p className="section-label">PAYMENT DETAILS</p>
          <div className="grid-2">
            <label className="field-label">Payment Method</label>
            <div className="pay-options">
              <label
                className={`pay-option${payMethod === "emoney" ? " selected" : ""}`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="emoney"
                  checked={payMethod === "emoney"}
                  onChange={() => setPayMethod("emoney")}
                />
                <span className="radio-dot" />
                e-Money
              </label>
              <label
                className={`pay-option${payMethod === "cod" ? " selected" : ""}`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={payMethod === "cod"}
                  onChange={() => setPayMethod("cod")}
                />
                <span className="radio-dot" />
                Cash on Delivery
              </label>
            </div>
          </div>

          {payMethod === "emoney" && (
            <div className="grid-2 fade-in">
              <Field
                label="e-Money Number"
                id="emnum"
                placeholder="238521993"
                required
                pattern="\d{9}"
                title="9-digit e-Money number"
                inputRef={refs.emnumRef}
                error={getError("emnum")}
                onChange={handleChange("emnum")}
              />
              <Field
                label="e-Money PIN"
                id="empin"
                placeholder="6891"
                required
                pattern="\d{4}"
                title="4-digit PIN"
                inputRef={refs.empinRef}
                error={getError("empin")}
                onChange={handleChange("empin")}
              />
            </div>
          )}

          {payMethod === "cod" && (
            <div className="cod-notice fade-in">
              <span className="cod-icon">💵</span>
              <p>
                The &lsquo;Cash on Delivery&rsquo; option enables you to pay in
                cash when our delivery courier arrives at your residence. Just
                make sure your address is correct.
              </p>
            </div>
          )}
        </section>
      </div>

      {/* ── RIGHT: Injected summary + submit button ── */}
      {children}
    </form>
  );
}
