import { render } from "@testing-library/react";
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
  it("Todo 상태 영역 테스트", () => {
    const { getByText } = render(
      <LayoutTheme>
        <RecoilRoot initializeState={initializeState}>
          <TodoList></TodoList>
        </RecoilRoot>
      </LayoutTheme>,
    );

    const status1 = getByText("할 일");
    expect(status1).toBeVisible();
    const status2 = getByText("진행 중");
    expect(status2).toBeVisible();
    const status3 = getByText("완료");
    expect(status3).toBeVisible();
  });

  it("Todo 목록 조회 테스트", () => {
    const { getByText } = render(
      <LayoutTheme>
        <RecoilRoot initializeState={initializeState}>
          <TodoList></TodoList>
        </RecoilRoot>
      </LayoutTheme>,
    );

    const todo1 = getByText("프로젝트 회의를 위한 자료 준비");
    expect(todo1).toBeVisible();
    const todo2 = getByText("프로젝트 관련 서류를 부서에 제출");
    expect(todo2).toBeVisible();
    const todo3 = getByText("팀원들의 코드를 검토하고 피드백 작성");
    expect(todo3).toBeVisible();
    const todo4 = getByText("주간 프로젝트 진행 상황 보고서 작성");
    expect(todo4).toBeVisible();
    const todo5 = getByText("새로운 프로젝트 개발 환경 구성");
    expect(todo5).toBeVisible();
  });
});

describe("TodoList Dnd 테스트", () => {});

describe("Todo 기능 테스트", () => {
  it.todo("Todo 생성 테스트");
  it.todo("Todo 갱신 테스트");
  it.todo("Todo 수정 테스트");
});
