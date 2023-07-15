import * as yup from 'yup';

let userListSchema = yup.object().shape({
    name: yup.string().required('Please enter your name'),
    position: yup.string().required('Please enter your position'),
    message: yup.string().required('Please enter your message'),
    image: yup.mixed().required('Image is required').test("is-valid-size", "Max allowed size is 100KB", value => value && value.size <= 102400),
});

export { userListSchema };