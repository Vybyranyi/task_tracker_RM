import { ErrorMessage, Field, Form, Formik } from "formik";
import styles from "./TaskForm.module.scss";
import * as Yup from "yup";
import Button from "./Button";
import developers from "../lib/developers.jsx";
import { useTasksStore } from "../store/useTasksStore.js";
import { useSearchParams } from "react-router";

const taskValidationSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Title must contain at least 2 characters")
    .required("Title is required"),
  description: Yup.string().max(
    300,
    "Description must contain up to 300 characters",
  ),
  deadline: Yup.string().required("Deadline is required"),
  developerId: Yup.string().required("Developer is required"),
});

const TaskForm = () => {
  const { addTask, getTaskById } = useTasksStore();

  const [searchParams] = useSearchParams();
  const taskId = searchParams.get("taskid");
  const task = getTaskById(Number(taskId));

  const initialValues = {
    title: task?.title || "",
    description: task?.description || "",
    deadline: task?.deadline || "",
    developerId: task?.developerId || "",
  };

  return (
    <div className={styles.formWrapper}>
      <h2 className="type32">{task ? "Edit Task" : "Create Task"}</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={taskValidationSchema}
        onSubmit={(values, { resetForm }) => {
          if (task) {
              // Implement edit functionality here
          } else {
            addTask(values);
          }
          resetForm();
        }}
      >
        {({ isValid, dirty }) => (
          <Form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="title" className="type14">
                Task Title
              </label>
              <Field type="text" name="title" placeholder="Enter a title..." />
              <ErrorMessage
                name="title"
                component="div"
                className={styles.error}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="description" className="type14">
                Task Description
              </label>
              <Field
                as="textarea"
                name="description"
                placeholder="Enter a description..."
              />
              <ErrorMessage
                name="description"
                component="div"
                className={styles.error}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="deadline" className="type14">
                Task Deadline
              </label>
              <Field type="date" name="deadline" />
              <ErrorMessage
                name="deadline"
                component="div"
                className={styles.error}
              />
            </div>

            <div className={styles.formGroup}>
              <Field as="select" name="developerId">
                <option value="">Select a developer</option>
                {developers.map((developer) => (
                  <option key={developer.id} value={developer.id}>
                    {developer.name} {developer.surname}
                  </option>
                ))}
              </Field>
            </div>

            <Button disabled={!(isValid && dirty)} type="submit">
              {task ? "Edit Task" : "Create Task"}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TaskForm;
