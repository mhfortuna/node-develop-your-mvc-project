import * as Yup from "yup";

const shippingSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "The first name is too short!")
    .max(50, "The first name is too long!"),
  lastName: Yup.string()
    .min(2, "The last name is too short!")
    .max(50, "The last name is too long!"),
  phoneNumber: Yup.string()
    .min(9, "The phone number is too short")
    .max(9, "The phone number is too long"),
  email: Yup.string().email("This must be a valid email address"),
  address: Yup.string()
    .required("The address is required")
    .min(2, "The address is too short!")
    .max(50, "The address is too long!"),
  city: Yup.string()
    .required("The city is required")
    .min(2, "The city is too short!")
    .max(50, "The city is too long!"),
  zipCode: Yup.string()
    .required("The code postal is required")
    .matches(/^[0-9]+$/, "Only numbers accepted"),
  country: Yup.string().required("The country is required"),
});

export default shippingSchema;
