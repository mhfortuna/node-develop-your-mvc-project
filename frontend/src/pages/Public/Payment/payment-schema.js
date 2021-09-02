import * as Yup from "yup";
import valid from "card-validator";

const paymentSchema = Yup.object().shape({
  cardHolder: Yup.string()
    .required("The car holder name is required")
    .min(2, "This name is too short!")
    .max(50, "This name is too long!")
    .matches(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/, "Only letters accepted"),
  cardNumber: Yup.string()
    .required("The card number is required")
    .test(
      "test-number",
      "Credit Card number is invalid",
      (value) => valid.number(value).isValid,
    ),
  validMonth: Yup.string()
    .required("Expiration month is required")
    .test(
      "test-number",
      "Expiration month is invalid",
      (value) => valid.expirationMonth(value).isValid,
    ),
  validYear: Yup.string()
    .required("Expiration year is required")
    .test(
      "test-number",
      "Expiration year is invalid",
      (value) => valid.expirationYear(value).isValid,
    ),
  cvc: Yup.string()
    .required("CVV is required")
    .test("test-number", "CVV is invalid", (value) => valid.cvv(value).isValid),
});

export default paymentSchema;
