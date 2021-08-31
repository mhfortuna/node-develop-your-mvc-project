import React from "react";
import FloatInput from "../../../components/FloatInput";
import Button from "../../../components/Button";

export default function SignIn() {
  return (
    <div className="m-3">
      <FloatInput
        id="FirstInput"
        type="email"
        label="Email address"
        placeholder="example@example.com"
      />
      <Button submitButton black>
        Button test
      </Button>
    </div>
  );
}
