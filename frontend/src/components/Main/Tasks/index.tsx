import React from "react";
import { Props, State } from "./index.types";
import "./index.scss";
import LazyFetch from "../../../common/LazyFetch";
import { Task, TasksEndpoint } from "../../../types";
import TaskComponent from "./Task";

const tasks: Task.Lean[] = [
  {
    id: "1",
    name: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos labore atque magni cumque nostrum? Est reiciendis nihil sint vitae, ipsa consectetur ut asperiores libero at sunt dolorum quo voluptatum nisi.",
    language: "python",
    unitTests: [{ stdin: "1", stdout: "1" }],
  },
  {
    id: "2",
    name: "Lorem ipsum",
    description: "",
    language: "python",
    unitTests: [],
  },
  {
    id: "3",
    name: "Lorem ipsum",
    description: "",
    language: "python",
    unitTests: [],
  },
  {
    id: "4",
    name: "Lorem ipsum",
    description: "",
    language: "python",
    unitTests: [],
  },
];
class Tasks extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  public render = () => {
    return (
      <LazyFetch<TasksEndpoint.Get>
        onComponentDidMount={({ fetch }) => fetch({})}
        rawUrl={`/v1/tasks/`}
        method={"GET"}
        render={({ isLoading, data, error }) => (
          <div className={`${this.constructor.name}`}>
            <div>
              <h2>Tasks</h2>
            </div>
            {tasks.map((task) => (
              <TaskComponent task={task} />
            ))}
          </div>
        )}
      />
    );
  };
}

export default Tasks;
