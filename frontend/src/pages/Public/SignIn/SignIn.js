import React from "react";
import FloatInput from "../../../components/FloatInput";

export default function SignIn() {
  return (
    <div className="m-3">
      <FloatInput
        id="FirstInput"
        type="email"
        label="Email address"
        placeholder="example@example.com"
      />
    </div>
  );
}
