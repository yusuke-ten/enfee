// import React, { FC } from 'react';
// import { withFormik, FormikProps } from 'formik';
// import * as yup from 'yup';

// interface Props {
//   values: {
//     title: string;
//     body: string;
//   };
// }

// interface FormValues {
//   title: string;
//   body: string;
// }

// interface OtherProps {
//   message: string;
// }

// const Post = (props: OtherProps & FormikProps<FormValues>) => {
//   const { touched, errors, isSubmitting, message } = props;

//   return (
//     <>
//       <div>post: </div>
//       <div>
//         <h5>記事を投稿</h5>
//         <p>{message}</p>
//         <form>
//           <div>
//             <label htmlFor="title">記事タイトル</label>
//             <input value={values.title} type="text" name="title" />
//           </div>
//           <div>
//             <label htmlFor="body">本文</label>
//             <textarea value={values.body} name="body" rows={5} />
//           </div>
//           <button type="submit">投稿する</button>
//         </form>
//       </div>
//     </>
//   );
// };

// interface MyFormProps {
//   initialTitle?: string;
//   message: string;
// }

// const WrappedFormik = withFormik<MyFormProps, FormValues>({
//   mapPropsToValues: props => {
//     return {
//       title: props.initialTitle || '',
//       body: '',
//     };
//   },
// })(Post);

// export default WrappedFormik;
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Basic = () => (
  <div>
    <h1>Any place in your app!</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors: { email?: string } = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Basic;
