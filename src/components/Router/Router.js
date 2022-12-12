import { createBrowserRouter } from "react-router-dom";
import AddressBook from "../AddressBook.js/AddressBook";
import Main from "../Main/Main";
import UpdateData from "../UpdateData/UpdateData";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <AddressBook></AddressBook>
            },
            {
                path:'/updateData/:id',
                element: <UpdateData></UpdateData>,
                loader:({params}) => fetch(`http://localhost:5000/address/${params.id}`)
            }
        ]
    }
])
