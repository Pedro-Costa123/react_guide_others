type TodosProps = {
  items: string[];
};

const Todos = (props: TodosProps) => (
  <ul>
    {props.items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

export default Todos;
