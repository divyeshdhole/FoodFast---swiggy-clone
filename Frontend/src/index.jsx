import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import ResMenu from "./components/ResMenu";
import Footer from "./components/Footer";


const AppLayout = () => {
    return (
        <div className="App">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: '/', element: <AppLayout />, errorElement: <Error />, children: [{ path: '/', element: <Body /> }, { path: '/about', element: <About /> }, { path: '/contact', element: <Contact /> }, { path: '/restaurants/:resId', element: <ResMenu /> }],
    }

]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
