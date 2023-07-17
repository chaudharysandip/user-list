import { lazy } from "react";
const UserForm = lazy(() => import("../../Components/User-form"));
const UserList = lazy(() => import("../../Components/User-list"));

const Home = () => {
    return (
        <main>
            <UserForm />
            <UserList />
        </main>
    )
}


export default Home;