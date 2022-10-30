import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Main from "./pages/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
  },
]);

function App() {
  return (
    <div className="App">
      <div className='container'>
          <RouterProvider router = {router}/>
      </div>
    </div>
  );
}

export default App;
