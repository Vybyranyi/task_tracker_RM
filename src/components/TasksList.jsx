import React, { useState } from "react";
import { BiCheckbox, BiSolidCheckboxChecked } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import styles from "./TasksList.module.scss";
import { useTasksStore } from "../store/useTasksStore.js";

const TasksList = () => {
  const [openTasksId, setOpenTasksId] = useState([]);
  const { tasks } = useTasksStore();

  const toggleTastks = (id) => {
    if (openTasksId.includes(id)) {
      setOpenTasksId(openTasksId.filter((taskId) => taskId !== id));
    } else {
      setOpenTasksId([...openTasksId, id]);
    }
  };

  return (
    <table className={styles.tasksList}>
      <thead>
        <tr>
          <th className={styles.checkbox}>
            <BiCheckbox />
          </th>
          <th>Task Title</th>
          <th>Task Created</th>
          <th>Task Deadline</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <React.Fragment key={task.id}>
            <tr onClick={() => toggleTastks(task.id)}>
              <td className={styles.checkbox}>
                {task.isDone ? <BiSolidCheckboxChecked /> : <BiCheckbox />}
              </td>
              <td>{task.title}</td>
              <td>{task.createdAt}</td>
              <td>{task.deadline}</td>
              <td>
                <div className={styles.actions}>
                  <FaEdit />
                  <MdDeleteOutline />
                </div>
              </td>
            </tr>

            {openTasksId.includes(task.id) && (
              <tr>
                <td colSpan="5" className={styles.taskDescription}>
                  {task.description}
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default TasksList;
