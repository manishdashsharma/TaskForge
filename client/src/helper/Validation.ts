import * as Yup from 'yup'

export const signupSchema = Yup.object().shape({
    firstName: Yup.string()
    .required('First name is required')
    .min(6, 'First name must be at least 6 characters'),
    lastName: Yup.string()
    .required('Last name is required')
    .min(6, 'Last name must be at least 6 characters'),
    email: Yup.string()
    .required('Email is required')
    .email('Invalid email format'),
phoneNumber: Yup.string()
    .required('Phone Number is required')
    .min(10, 'Phone Number is too short'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
  confirmPassword: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password'), " "], 'Passwords must match'),
})