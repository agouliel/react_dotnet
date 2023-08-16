import Counter from "./components/Counter";
import FetchData from "./components/FetchData";
import Home from "./components/Home";

import TodoPriority from "./components/TodoPriority";
import Reducer from "./components/Reducer";
import NewPost, { action as newPostAction } from './components/new-post.js'
import Alex from "./components/Alex";

const AppRoutes = [
  { index: true, element: <Home /> },
  { path: '/counter', element: <Counter /> },
  { path: '/fetch-data', element: <FetchData /> },

  { path: '/todo', element: <TodoPriority /> },
  { path: '/reducer', element: <Reducer /> },
  { path: '/newpost', element: <NewPost />, action: newPostAction },
  { path: '/alex', element: <Alex /> },
];

export default AppRoutes;
