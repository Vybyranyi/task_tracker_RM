import styles from "./TasksList.module.scss";
import tasks from "../lib/tasks.jsx";
import { IoEllipsisVertical } from "react-icons/io5";

const TasksList = () => {
  return (
    <table className={styles.tasksList}>
      <thead>
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <th>Task Title</th>
          <th>Task Created</th>
          <th>Task Deadline</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
            {tasks.map(task => (
          <tr key={task.id}>
            <td>
              <input type="checkbox" checked={task.isDone} />
            </td>
            <td>{task.title}</td>
            <td>{task.createdAt}</td>
            <td>{task.deadline}</td>
            <td>
              <IoEllipsisVertical />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TasksList;
