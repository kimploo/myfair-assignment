import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import { RecoilRoot, RecoilState } from "recoil";

import LayoutTheme from "../../app/layout.theme";
import NewPage from "../../components/newPage/NewPage";
import { newDummy } from "../../util/newDummy";

import { newTodoState } from "./state/todo.atom";
import { NewTodo } from "./types/todo.type";

const initializeState = ({
  set,
}: {
  set: <T>(recoilState: RecoilState<T>, value: T) => void;
}) => {
  set<NewTodo[]>(newTodoState, newDummy);
};

describe("V2: To Do List", () => {
  it("Todo Nav 렌더링 테스트", () => {
    render(
      <LayoutTheme>
        <RecoilRoot initializeState={initializeState}>
          <NewPage></NewPage>
        </RecoilRoot>
      </LayoutTheme>,
    );

    expect(screen.getByText("All")).toBeVisible();
    expect(screen.getByText("To Do")).toBeVisible();
    expect(screen.getByText("Done")).toBeVisible();
  });

  it("Todo 목록 조회/렌더링 테스트", () => {
    render(
      <LayoutTheme>
        <RecoilRoot initializeState={initializeState}>
          <NewPage></NewPage>
        </RecoilRoot>
      </LayoutTheme>,
    );

    expect(screen.getByText("출근하고 비타민 먹기")).toBeVisible();
    expect(screen.getByText("Daily Scrum 작성하기")).toBeVisible();
    expect(screen.getByText("주간회의 참여하기")).toBeVisible();
  });
});

describe("V2: Todo 기능 테스트", () => {
  it("할 일 추가 테스트", async () => {
    render(
      <LayoutTheme>
        <RecoilRoot initializeState={initializeState}>
          <NewPage></NewPage>
        </RecoilRoot>
      </LayoutTheme>,
    );

    const todoInput = screen.getByPlaceholderText("할 일을 입력해 주세요");
    const submit = screen.getByTestId("submit-button");
    fireEvent.change(todoInput, { target: { value: "테스트 TODO" } });
    // TODO: keyboard event 점검
    fireEvent.submit(submit);

    await waitFor(() => {
      expect(screen.getByText("테스트 TODO")).toBeVisible();
    });
  });

  it("할 일 완료하기 테스트", async () => {
    render(
      <LayoutTheme>
        <RecoilRoot initializeState={initializeState}>
          <NewPage></NewPage>
        </RecoilRoot>
      </LayoutTheme>,
    );

    // nav: All일 때 모든 할 일에 체크를 해보고 체크를 했을 때 Check 엘리먼트가 생기면 통과
    const checkboxs = screen.getAllByRole("checkbox");
    for (let i = 0; i < checkboxs.length - 1; i++) {
      const checkbox = checkboxs[i];
      fireEvent.click(checkbox);
      expect(checkbox.children).toBeTruthy();
      expect(checkbox.children.length).toBe(1);
    }

    // nav: All일 때 모든 완료한 할 일에 체크를 해보고 체크를 했을 때 Check 엘리먼트가 없으면 통과
    for (let i = 0; i < checkboxs.length - 1; i++) {
      const checkbox = checkboxs[i];
      fireEvent.click(checkbox);
      expect(checkbox.children.length).toBe(0);
    }
  });

  it("할 일 삭제하기 테스트", async () => {
    render(
      <LayoutTheme>
        <RecoilRoot initializeState={initializeState}>
          <NewPage></NewPage>
        </RecoilRoot>
      </LayoutTheme>,
    );

    // todo가 전부 삭제될 때 까지 삭제해보기
    let todoContainers;
    todoContainers = screen.queryAllByTestId("todo-container-", {
      exact: false,
    });
    expect(todoContainers.length).toBe(3);

    let todo0 = todoContainers[0];
    let delete0 = within(todo0).getByRole("button");
    fireEvent.click(delete0);

    todoContainers = screen.queryAllByTestId("todo-container-", {
      exact: false,
    });
    expect(todoContainers.length).toBe(2);
    todo0 = todoContainers[0];
    delete0 = within(todo0).getByRole("button");
    fireEvent.click(delete0);

    todoContainers = screen.queryAllByTestId("todo-container-", {
      exact: false,
    });
    expect(todoContainers.length).toBe(1);
    todo0 = todoContainers[0];
    delete0 = within(todo0).getByRole("button");
    fireEvent.click(delete0);

    todoContainers = screen.queryAllByTestId("todo-container-", {
      exact: false,
    });
    expect(todoContainers.length).toBe(0);
  });
});

describe("V2: TodoNav 기능 테스트", () => {
  it("Nav 전환 테스트", async () => {
    render(
      <LayoutTheme>
        <RecoilRoot initializeState={initializeState}>
          <NewPage></NewPage>
        </RecoilRoot>
      </LayoutTheme>,
    );

    const nav = screen.getByRole("navigation");
    const allBtn = within(nav).getByText("All");
    const doneBtn = within(nav).getByText("Done");

    let todoContainers;
    todoContainers = screen.queryAllByTestId("todo-container-", {
      exact: false,
    });
    expect(todoContainers.length).toBe(3);

    fireEvent.click(doneBtn);
    todoContainers = screen.queryAllByTestId("todo-container-", {
      exact: false,
    });
    expect(todoContainers.length).toBe(0);

    fireEvent.click(allBtn);
    todoContainers = screen.queryAllByTestId("todo-container-", {
      exact: false,
    });
    expect(todoContainers.length).toBe(3);
  });
});

describe("V2: Todo 세부 요구사항 테스트", () => {
  it("'할 일'은 20글자를 넘길 수 없습니다.", async () => {
    render(
      <LayoutTheme>
        <RecoilRoot initializeState={initializeState}>
          <NewPage></NewPage>
        </RecoilRoot>
      </LayoutTheme>,
    );
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});

    // Todo 변경 사항 입력
    const todoInput = screen.getByPlaceholderText("할 일을 입력해 주세요");
    const submit = screen.getByTestId("submit-button");
    const toUpdateValue =
      "'할 일'은 20글자를 넘길 수 없습니다.'할 일'은 20글자를 넘길 수 없습니다.";

    fireEvent.change(todoInput, {
      target: {
        value: toUpdateValue,
      },
    });
    // TODO: keyboard event 점검
    fireEvent.submit(submit);

    // Todo 글자가 20개가 넘으면 alert
    expect(alertMock).toHaveBeenCalledTimes(1);
    alertMock.mockRestore();
    const newTodoText = screen.queryByText(
      "'할 일'은 20글자를 넘길 수 없습니다. '할 일'은 20글자를 넘길 수 없습니다.",
    );
    expect(newTodoText).toBeFalsy();

    // todo가 생성되지 않았는지 확인
    const todoContainers = screen.queryAllByTestId("todo-container-", {
      exact: false,
    });
    expect(todoContainers.length).toBe(3);
  });

  it("'할 일' 혹은 '진행 중'인 Todo가 10개를 넘을 수 없습니다.", async () => {
    render(
      <LayoutTheme>
        <RecoilRoot initializeState={initializeState}>
          <NewPage></NewPage>
        </RecoilRoot>
      </LayoutTheme>,
    );
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});

    // '할 일'인 Todo를 7개 생성
    const todoInput = screen.getByPlaceholderText("할 일을 입력해 주세요");
    const submit = screen.getByTestId("submit-button");
    const newTodoValue = "New Todo";

    for (let i = 0; i < 7; i++) {
      fireEvent.change(todoInput, {
        target: {
          value: newTodoValue,
        },
      });
      // TODO: 향후 keyboard event로 변경
      fireEvent.submit(submit);

      const todoContainers = screen.queryAllByTestId("todo-container-", {
        exact: false,
      });
      expect(screen.queryAllByText("New Todo").length).toBe(i + 1);
      expect(todoContainers.length).toBe(3 + i + 1);
    }

    // 추가 생성 시도
    fireEvent.change(todoInput, {
      target: {
        value: newTodoValue,
      },
    });
    fireEvent.submit(submit);

    // alert 호출
    expect(alertMock).toHaveBeenCalledTimes(1);
    alertMock.mockRestore();

    // todo가 생성되지 않았는지 확인 (할 일 10개)
    const todoContainers = screen.queryAllByTestId("todo-container-", {
      exact: false,
    });
    expect(todoContainers.length).toBe(10);
  });
});
