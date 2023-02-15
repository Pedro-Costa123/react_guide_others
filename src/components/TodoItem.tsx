import classes from "./TodoItem.module.css";

type TodoItemProps = {
  text: string;
  onDelete: () => void;
};

const TodoItem = (props: TodoItemProps) => {
  return (
    <li className={classes.item} onClick={props.onDelete}>
      {props.text}
    </li>
  );
};

export default TodoItem;
