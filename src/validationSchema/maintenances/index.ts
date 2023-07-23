import * as yup from 'yup';

export const maintenanceValidationSchema = yup.object().shape({
  record: yup.string().required(),
  status: yup.string().required(),
  user_id: yup.string().nullable(),
});
