import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CourseLibery from "./components/CourseLibery";
import Combo from "./components/Combo";
import FreeLibery from "./components/FreeLibery";
import MyCourse from "./components/MyCourse";
import Body from "./components/Body";
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <CourseLibery />,
        },
        {
          path: "/combo",
          element: <Combo />,
        },
        {
          path: "/freelibrary",
          element: <FreeLibery />,
        },
        {
          path: "/mycourse",
          element: <MyCourse />,
        },
      ],
    },
  ]);
  return (
    <>
      <div>
        <RouterProvider router={appRouter}></RouterProvider>
      </div>
    </>
  );
}

export default App;
