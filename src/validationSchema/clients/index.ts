import * as yup from 'yup';

export const clientValidationSchema = yup.object().shape({
  information: yup.string().required(),
  user_id: yup.string().nullable(),
});
