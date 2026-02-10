import { ErrorMessage, Field, Form, Formik } from "formik";
import styles from "./TaskForm.module.scss";
import * as Yup from "yup";
import Button from "./Button";

const initialValues = {
  title: "",
  description: "",
  deadline: "",
};

const taskValidationSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Title must contain at least 2 characters")
    .required("Title is required"),
  description: Yup.string().max(
    300,
    "Description must contain up to 300 characters",
  ),
  deadline: Yup.string().required("Deadline is required"),
});

const TaskForm = () => {
  return (
    <div className={styles.formWrapper}>
        <h2 className="type32">Create Task</h2>
        <Formik
        initialValues={initialValues}
        validationSchema={taskValidationSchema}
        onSubmit={values => console.log(values)}
        >
        <Form className={styles.form}>
            <div className={styles.formGroup}>
                <label htmlFor="title">Task Title</label>
                <Field
                    type="text"
                    name="title"
                    placeholder="Enter a title..."
                    className={styles.input}
                />
                <ErrorMessage
                    name="title"
                    component="div"
                    className={styles.error}
                />
            </div>

            <div className={styles.formGroup}>
                <Field
                    as="textarea"
                    name="description"
                    placeholder="Enter a description..."
                    className={styles.textarea}
                />
                <ErrorMessage
                    name="description"
                    component="div"
                    className={styles.error}
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="deadline">Task Deadline</label>
                <Field
                    type="date"
                    name="deadline"
                    className={styles.input}
                />
                <ErrorMessage
                    name="deadline"
                    component="div"
                    className={styles.error}
                />
            </div>

            <Button type="submit">Create Task</Button>
        </Form>
        </Formik>
    </div>
  );
};

export default TaskForm;
