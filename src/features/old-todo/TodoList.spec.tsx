import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import { RecoilRoot, RecoilState } from "recoil";

import LayoutTheme from "../../app/layout.theme";
import { dummyTodos } from "../../util/dummyData";

import { todoState } from "./state/todo.atom";
import TodoList from "./TodoList";
import { Todo } from "./types/todo.type";

const initializeState = ({
  set,
}: {
  set: <T>(recoilState: RecoilState<T>, value: T) => void;
}) => {
  set<Todo[]>(todoState, dummyTodos);
};

describe.skip("V1: TodoList 유닛 테스트", () => {
  it("Todo 상태 영역 렌더링 테스트", () => {
    render(
      <LayoutTheme>
        <RecoilRoot initializeState={initializeState}>
          <TodoList></TodoList>
        </RecoilRoot>
      </LayoutTheme>,
    );

    const status1 = screen.getByTestId("할 일-section");
    expect(status1).toBeVisible();
    const status2 = screen.getByTestId("진행 중-section");
    expect(status2).toBeVisible();
    const status3 = screen.getByTestId("완료-section");
    expect(status3).toBeVisible();
  });

  it("Todo 목록 조회/렌더링 테스트", () => {
    render(
      <LayoutTheme>
        <RecoilRoot initializeState={initializeState}>
          <TodoList></TodoList>
        </RecoilRoot>
      </LayoutTheme>,
    );

    const todo1 = screen.getByText("프로젝트 회의를 위한 자료 준비");
    expect(todo1).toBeVisible();
    const todo2 = screen.getByText("프로젝트 관련 서류를 부서에 제출");
    expect(todo2).toBeVisible();
    const todo3 = screen.getByText("팀원들의 코드를 검토하고 피드백 작성");
    expect(todo3).toBeVisible();
    const todo4 = screen.getByText("주간 프로젝트 진행 상황 보고서 작성");
    expect(todo4).toBeVisible();
    const todo5 = screen.getByText("새로운 프로젝트 개발 환경 구성");
    expect(todo5).toBeVisible();
  });
});

// DnD로 작동하는 테스트는 jsdom으로 불가능, 가능하다고 해도 불안정할 듯 .. playwright 도입 필요
// REF: https://github.com/clauderic/dnd-kit/issues/261#issuecomment-844651307
describe.skip("V1: TodoList Dnd 테스트", () => {
  beforeEach(() => {
    // Define a default screen size before each test
    window.innerWidth = 1440;
    window.innerHeight = 1024;

    // Trigger the resize event after setting the dimensions
    window.dispatchEvent(new Event("resize"));
  });

  it("Todo 상태 변경 테스트", async () => {
    render(
      <LayoutTheme>
        <RecoilRoot initializeState={initializeState}>
          <TodoList></TodoList>
        </RecoilRoot>
      </LayoutTheme>,
    );

    // 드래그하여 진행 중 상태로 드래그 앤 드롭
    const todo1 = screen.getByTestId("todo-item-" + dummyTodos[0].id);
    const todo2 = screen.getByTestId("todo-item-" + dummyTodos[1].id);
    const inProgressSection = screen.getByTestId("진행 중-section");
    expect(todo1).toBeVisible();
    expect(inProgressSection).toBeVisible();

    fireEvent.pointerDown(todo1, {});
    fireEvent.pointerMove(todo2, { clientX: 600, clientY: 400 });
    fireEvent.pointerUp(todo2);

    // UI가 변했는지 확인
    const newTodo1 = screen.getByText("주간 프로젝트 진행 상황 보고서 작성");
    expect(newTodo1).toBeVisible();

    // 진행 중 상태인지 확인
    await waitFor(() => {
      // console.log(prettyDOM(inProgressSection));
      expect(inProgressSection).toContainElement(newTodo1);
    });
  });
});

describe.skip("V1: Todo 기능 테스트", () => {
  it("Todo 생성 테스트", async () => {
    render(
      <LayoutTheme>
        <RecoilRoot initializeState={initializeState}>
          <TodoList></TodoList>
        </RecoilRoot>
      </LayoutTheme>,
    );

    const todoArea = screen.getByTestId("create-button-할 일");
    fireEvent.click(todoArea);

    expect(screen.getByTestId("update-todo-", { exact: false })).toBeVisible();
  });

  it("Todo 생성 후 수정 테스트", async () => {
    render(
      <LayoutTheme>
        <RecoilRoot initializeState={initializeState}>
          <TodoList></TodoList>
        </RecoilRoot>
      </LayoutTheme>,
    );

    // 생성 버튼 클릭
    const createButton = screen.getByTestId("create-button-할 일");
    fireEvent.click(createButton);

    // 생성한 Todo Input 확인
    const updateTodo = screen.getByTestId("update-todo-", { exact: false });
    expect(updateTodo).toBeVisible();

    const textInput = updateTodo.querySelector("input[type=text]")!;
    const dateInput = updateTodo.querySelector("input[type=date]")!;
    const submitButton = updateTodo.querySelector("button[type=submit]")!;

    // Todo 변경 사항 입력
    fireEvent.change(textInput, { target: { value: "테스트 TODO" } });
    fireEvent.change(dateInput, { target: { value: "1970-01-01" } });
    fireEvent.click(submitButton);

    const newTodoText = screen.getByText("테스트 TODO");
    const newTodoDate = screen.getByText("1970-01-01");
    expect(newTodoText).toBeVisible();
    expect(newTodoDate).toBeVisible();

    // todo 실제로 생성되었는지 확인
    const todos = screen.getAllByTestId("todo-item-", { exact: false });
    // todos.forEach((todo) => console.log(prettyDOM(todo)));
    expect(todos.length).toBe(6);
  });

  it("Todo 수정 테스트", async () => {
    render(
      <LayoutTheme>
        <RecoilRoot initializeState={initializeState}>
          <TodoList></TodoList>
        </RecoilRoot>
      </LayoutTheme>,
    );

    // 수정 버튼 클릭
    const todo0Update = screen.getByTestId("update-button-" + dummyTodos[0].id);
    fireEvent.click(todo0Update);

    // 생성한 Todo Input 확인
    const updateTodo = screen.getByTestId("update-todo-" + dummyTodos[0].id, {
      exact: false,
    });
    expect(updateTodo).toBeVisible();

    const textInput = updateTodo.querySelector("input[type=text]")!;
    const dateInput = updateTodo.querySelector("input[type=date]")!;
    const submitButton = updateTodo.querySelector("button[type=submit]")!;

    // Todo 변경 사항 입력
    fireEvent.change(textInput, { target: { value: "테스트 TODO" } });
    fireEvent.change(dateInput, { target: { value: "1970-01-01" } });
    fireEvent.click(submitButton);

    const newTodoText = screen.getByText("테스트 TODO");
    const newTodoDate = screen.getByText("1970-01-01");
    expect(newTodoText).toBeVisible();
    expect(newTodoDate).toBeVisible();

    // todo 실제로 생성되었는지 확인
    const todos = screen.getAllByTestId("todo-item-", { exact: false });
    // todos.forEach((todo) => console.log(prettyDOM(todo)));
    expect(todos.length).toBe(5);
  });

  it("Todo 삭제 테스트", async () => {
    render(
      <LayoutTheme>
        <RecoilRoot initializeState={initializeState}>
          <TodoList></TodoList>
        </RecoilRoot>
      </LayoutTheme>,
    );

    // 삭제 버튼 클릭
    const todo0Delete = screen.getByTestId("delete-button-" + dummyTodos[0].id);
    fireEvent.click(todo0Delete);

    expect(screen.queryByText(dummyTodos[0].description)).toBeFalsy();
    const inProgressSection = screen.getByTestId("할 일-section");
    expect(inProgressSection).not.toContainElement(todo0Delete);

    // todo 실제로 삭제되었는지 확인
    const todos = screen.getAllByTestId("todo-item-", { exact: false });
    // todos.forEach((todo) => console.log(prettyDOM(todo)));
    expect(todos.length).toBe(4);
  });
});

describe.skip("V1: Todo 세부 요구사항 테스트", () => {
  it("'할 일'은 20글자를 넘길 수 없습니다.", async () => {
    render(
      <LayoutTheme>
        <RecoilRoot initializeState={initializeState}>
          <TodoList></TodoList>
        </RecoilRoot>
      </LayoutTheme>,
    );
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});

    // 생성 버튼 클릭
    const createButton = screen.getByTestId("create-button-할 일");
    fireEvent.click(createButton);

    // 생성한 Todo Input 확인
    const updateTodo = screen.getByTestId("update-todo-", { exact: false });
    expect(updateTodo).toBeVisible();

    const textInput = updateTodo.querySelector("input[type=text]")!;

    // Todo 변경 사항 입력
    fireEvent.change(textInput, {
      target: {
        value:
          "'할 일'은 20글자를 넘길 수 없습니다. '할 일'은 20글자를 넘길 수 없습니다.",
      },
    });

    // Todo 글자가 20개가 넘으면 alert
    expect(alertMock).toHaveBeenCalledTimes(1);
    alertMock.mockRestore();

    const newTodoText = screen.queryByText(
      "'할 일'은 20글자를 넘길 수 없습니다. '할 일'은 20글자를 넘길 수 없습니다.",
    );
    expect(newTodoText).toBeFalsy();

    // todo가 생성되지 않았는지 확인
    const todos = screen.getAllByTestId("todo-item-", { exact: false });
    expect(todos.length).toBe(5);
    // todos.forEach((todo) => console.log(prettyDOM(todo)));
  });

  it("'할 일' 혹은 '진행 중'인 Todo가 10개를 넘을 수 없습니다.", async () => {
    render(
      <LayoutTheme>
        <RecoilRoot initializeState={initializeState}>
          <TodoList></TodoList>
        </RecoilRoot>
      </LayoutTheme>,
    );
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});

    // '할 일'인 Todo를 6개 생성
    for (let i = 0; i < 6; i++) {
      const createButton = screen.getByTestId("create-button-할 일");
      fireEvent.click(createButton);

      // 생성한 Todo Input 확인
      const updateTodo = screen.getByTestId("update-todo-", { exact: false });
      expect(updateTodo).toBeVisible();

      const textInput = updateTodo.querySelector("input[type=text]")!;
      const dateInput = updateTodo.querySelector("input[type=date]")!;
      const submitButton = updateTodo.querySelector("button[type=submit]")!;

      // Todo 변경 사항 입력
      fireEvent.change(textInput, { target: { value: "테스트 TODO" } });
      fireEvent.change(dateInput, { target: { value: "1970-01-01" } });
      fireEvent.click(submitButton);
    }

    // 더미 데이터의 할 일 3개 + 새로 생성한 할 일 6개 = 총 9개
    const inProgressSection = screen.getByTestId("할 일-section");
    const inProgressTodos = within(inProgressSection).getAllByTestId(
      "todo-item-",
      { exact: false },
    );
    expect(inProgressTodos.length).toBe(9);

    // 추가 생성 시도
    const createButton = screen.getByTestId("create-button-할 일");
    fireEvent.click(createButton);

    // alert 호출
    expect(alertMock).toHaveBeenCalledTimes(1);
    alertMock.mockRestore();

    // update ui는 나오지 않아야 함
    const updateTodo = screen.queryByTestId("update-todo-", { exact: false });
    expect(updateTodo).toBeFalsy();

    // todo가 생성되지 않았는지 확인 (할 일 9, 진행 중 1, 완료 1 총 11개)
    const todos = screen.getAllByTestId("todo-item-", { exact: false });
    expect(todos.length).toBe(11);
    // todos.forEach((todo) => console.log(prettyDOM(todo)));
  });
});
