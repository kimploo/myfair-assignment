// import { render } from "@testing-library/react";
// import { RecoilRoot, RecoilState } from "recoil";

// import { todoState } from "../../features/todo/state/todo.atom";
// import { dummyTodos } from "../../util/dummyData";

// import TodoUserListPage from "./TodoUserListPage";

// // Define the initial state type, replace `YourAtomType` with the actual type of your atom.
// const initializeState = ({
//   set,
// }: {
//   set: <T>(recoilState: RecoilState<T>, value: T) => void;
// }) => {
//   set(todoState, dummyTodos);
// };

// describe("TodoUserListPage 테스트", () => {
//   it("제목 렌더링", () => {
//     const page = render(
//       <RecoilRoot initializeState={initializeState}>
//         <TodoUserListPage />
//       </RecoilRoot>,
//     );

//     const h1 = page.getByText("TODO App");
//     expect(h1).toBeVisible();
//   });
// });
