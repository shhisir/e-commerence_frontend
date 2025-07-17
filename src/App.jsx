
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { store} from "./redux/store"
const App = () => {
  return (
  
   
    <Provider store = {store}>
    <RouterProvider router={router}/>
    <ToastContainer/>
    </Provider>
  
    
  );
};

export default App;
 