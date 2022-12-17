import React from "react";
import { Props, State } from "./index.types";
import { AiFillFire } from "react-icons/ai";
import "./index.scss";
import MonacoEditor from "react-monaco-editor";
import LazyFetch from "../../../../common/LazyFetch";
import { Solution, SolutionsEndpoint } from "../../../../types";
import { ImSpinner2 } from "react-icons/im";
import Icon from "../../../../assets/t1.png";

class Task extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isShowDetails: false,
      code: "",
    };
  }

  private handleShowDetailsButton = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { checked } = event.target;
    this.setState({ isShowDetails: checked });
  };

  private handleEditorChange = (code: string) => {
    this.setState({ code });
  };

  private getIsSolved = (solution: Solution | undefined) => {
    if (!solution) return false;
    const isSomeNotPassed = solution?.unitTestsResults.some(
      ({ isPassed }) => !isPassed
    );
    return !isSomeNotPassed;
  };

  public render = () => {
    const { task } = this.props;
    const { isShowDetails, code } = this.state;

    return (
      <div className={`${this.constructor.name} box`}>
        <div className="brief">
          <div className="icon">
            <img src={Icon} />
          </div>
          <div className="name">
            <h4>{task.name}</h4>
          </div>
          <div className="rate">
            <AiFillFire />
            <span>8.9</span>
          </div>
          <div className="action">
            <label className="show-details">
              <input
                type="checkbox"
                checked={isShowDetails}
                onChange={this.handleShowDetailsButton}
              />
            </label>
          </div>
          <div className="options">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        {isShowDetails && (
          <div className="details">
            <div>
              <div className="properties">
                <div className="property description">
                  <h4>Opis zadania</h4>
                  <p>{task.description}</p>
                </div>
                {task.unitTests[0] && (
                  <div className="property data-input">
                    <h4>Przykładowe wejście</h4>
                    <code>{task.unitTests[0].stdin}</code>
                  </div>
                )}
                {task.unitTests[0] && (
                  <div className="property data-output">
                    <h4>Przykładowe wyjście</h4>
                    <code>{task.unitTests[0].stdout}</code>
                  </div>
                )}
              </div>
              <div className="solution">
                <MonacoEditor
                  language={task.language}
                  theme="vs-dark"
                  value={code}
                  onChange={this.handleEditorChange}
                  options={{}}
                />
                <LazyFetch<SolutionsEndpoint.Post>
                  method={"POST"}
                  rawUrl={`/v1/tasks/id/:taskId/solutions/`}
                  render={({ fetch, isLoading, data, error }) => (
                    <div className="result">
                      <div>
                        <button
                          onClick={() =>
                            fetch({
                              params: { taskId: task.id },
                              body: { code },
                              headers: { Authorization: "123456" },
                            })
                          }
                          disabled={
                            isLoading ||
                            !code.length ||
                            this.getIsSolved(data?.payload?.solution)
                          }
                        >
                          {isLoading && <ImSpinner2 className="spinner" />}
                          Solve!
                        </button>

                        <div className="unit-tests-results">
                          {task.unitTests.map((unitTest, idx) => (
                            <div
                              className={`unit-test-result ${
                                data?.payload?.solution.unitTestsResults &&
                                data?.payload?.solution.unitTestsResults[idx]
                                  ? data?.payload?.solution.unitTestsResults[
                                      idx
                                    ].isPassed
                                    ? "passed"
                                    : "not-passed"
                                  : ""
                              }`}
                            ></div>
                          ))}
                        </div>
                      </div>
                      <div>{error?.response?.data.error || error?.message}</div>
                    </div>
                  )}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
}

export default Task;
