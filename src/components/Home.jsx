import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";

const Home = () => {
    const authInfo = useContext(AuthContext);
    console.log(authInfo)

    return (
        <div className="container mx-auto">
            <h2 className="text-3xl">This is Home for: {authInfo.name}</h2>
        </div>
    );
};

export default Home;