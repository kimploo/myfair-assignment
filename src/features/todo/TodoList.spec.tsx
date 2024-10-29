import {
  fireEvent,
  prettyDOM,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

describe("TodoList 유닛 테스트", () => {
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
describe.skip("TodoList Dnd 테스트", () => {
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
    const todo1 = screen.getByTestId("todo-" + dummyTodos[0].id);
    const todo2 = screen.getByTestId("todo-" + dummyTodos[1].id);
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
      console.log(prettyDOM(inProgressSection));
      expect(inProgressSection).toContainElement(newTodo1);
    });
  });
});

describe("Todo 기능 테스트", () => {
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

    expect(screen.getByTestId("edit-todo-", { exact: false })).toBeVisible();
  });

  it("Todo 생성 후 수정 테스트", async () => {
    render(
      <LayoutTheme>
        <RecoilRoot initializeState={initializeState}>
          <TodoList></TodoList>
        </RecoilRoot>
      </LayoutTheme>,
    );

    const todoArea = screen.getByTestId("create-button-할 일");
    fireEvent.click(todoArea);

    expect(screen.getByTestId("edit-todo-", { exact: false })).toBeVisible();
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
    const todo0Edit = screen.getByTestId("edit-button-" + dummyTodos[0].id);
    fireEvent.click(todo0Edit);

    // 수정 버튼을 누르면 일반 Todo 엘리먼트는 사라진다.
    expect(screen.queryByText(dummyTodos[0].description)).toBeFalsy();

    // 사라진 것 확인
    // const inProgressSection = screen.getByTestId("할 일-section");
    // console.log(prettyDOM(inProgressSection));

    // 새로 생긴 Todo input을 찾고

    // 내용 수정하고 submit

    // 새로 생긴 todo 확인
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
    // console.log(prettyDOM(inProgressSection));

    expect(inProgressSection).not.toContainElement(todo0Delete);
  });
});
