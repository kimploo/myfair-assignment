# 프론트앤드 개발자 사전과제

- todolist 만들기
- 과제 제출 이메일: eddy@myfair.co

## 기능 요구사항

- '할 일'은 20글자를 넘길 수 없습니다.
- 처리가 안된 '할 일'은 10개를 넘을 수 없습니다.
  -> '할 일', '진행 중'인 Todo가 10개를 넘을 수 없습니다.

## 개발 시작하기

```bash
# 디펜던시 설치
yarn install

# 개발 서버 시작
yarn dev

# 테스트
yarn test
```

## 과제 진행 내역 설명 (V2)

(피그마 요구사항에 맞게 제작)

- 개발 초기 세팅
  - 상태관리: Recoil
  - 테스트: jest + React Testing Library
  - 그 외 각 기술에 필요한 lint 등

- UI
  - 피그마와 최대한 비슷하게 구현
  - 제공한 아이콘 svg 사용
  
- TODO CRUD 구현
- 기능 요구사항 구현

- 기능 테스트
  - 상태가 없는 컴포넌트는 렌더링이 잘 되는지 간단한 유닛 테스트 작성
  - 상태가 있는 컴포넌트는 React Testing Library로 이벤트에 맞게 잘 작동하는지 통합 테스트 작성
  - 세부 기능 요구사항 테스트 작성 완료

## 과제 진행 내역 설명 (V1)

(피그마가 있는지 모르고 UI를 멋대로 만든 버전 - localhost:3000/old-todo 에서 확인 가능)

- 개발 초기 세팅
  - 상태관리: Recoil
  - 테스트: jest + React Testing Library
  - DnD: Dnd kit
  - 그 외 각 기술에 필요한 lint 등

- 레이아웃
  - Notion, Trello를 참고하여 할 일, 진행 중, 완료 상태에 따라 다른 UI에서 보일 수 있게 작성

- DnD 초기 설정
  - Drag-n-Drop으로 할 일, 진행 중, 완료 상태를 변경할 수 있습니다.

- TODO CRUD
- 기능 요구사항

- 기능 테스트
  - V1 테스트는 모두 skip 처리 되어있습니다. describe.skip()을 describe()로 바꾸면 테스트 돌려볼 수 있습니다.
  - 상태가 없는 컴포넌트는 렌더링이 잘 되는지 간단한 유닛 테스트 작성
  - 상태가 있는 컴포넌트는 React Testing Library로 이벤트에 맞게 잘 작동하는지 통합 테스트 작성
  - 세부 기능 요구사항 테스트 작성 완료

```text
 PASS  src/features/todo/TodoList.spec.tsx
  TodoList 유닛 테스트
    ✓ Todo 상태 영역 렌더링 테스트 (59 ms)
    ✓ Todo 목록 조회/렌더링 테스트 (37 ms)
  TodoList Dnd 테스트
    ○ skipped Todo 상태 변경 테스트
  Todo 기능 테스트
    ✓ Todo 생성 테스트 (22 ms)
    ✓ Todo 생성 후 수정 테스트 (32 ms)
    ✓ Todo 수정 테스트 (25 ms)
    ✓ Todo 삭제 테스트 (10 ms)
  Todo 세부 요구사항 테스트
    ✓ '할 일'은 20글자를 넘길 수 없습니다. (12 ms)
    ✓ '할 일' 혹은 '진행 중'인 Todo가 10개를 넘을 수 없습니다. (68 ms)
```

- 개선하면 좋을 점
  - ○ skipped Todo 상태 변경 테스트를 작성하지 못했음.
  - DnD 기능을 React Testing Library로 테스트하기는 무리가 있었습니다. e2e 테스트 툴인 Playwright, Cypress 등을 적용하면 좋을 것 같습니다.
