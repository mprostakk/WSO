import { Task } from "../../../../types";

export type StateProps = {};

export type DispatchProps = {};

export type OwnProps = {
  task: Task;
};

export type Props = StateProps & OwnProps & DispatchProps;

export type State = {
  isShowDetails: boolean;
};
