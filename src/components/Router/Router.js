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
                loader:({params}) => fetch(`https://address-book-server-eta.vercel.app/address/${params.id}`)
            }
        ]
    }
])
