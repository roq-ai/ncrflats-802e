import * as yup from 'yup';

export const propertyValidationSchema = yup.object().shape({
  listing: yup.string().required(),
  status: yup.string().required(),
  user_id: yup.string().nullable(),
});
