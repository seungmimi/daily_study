import { createContext } from "react";

const UserInfo = createContext({ name: "gary", id: "garyIsFree" });

const App3 = () => {
    return (
        <UserInfo.Provider value={{name: "licat", id: "licat is not free"}}>
            <HelloLicat />
        </UserInfo.Provider>
    );
};

const HelloLicat = () => {
    return (
        <UserInfo.Consumer>
            {(value) => {
                return(
                    <div>
                        <h2>{value.id}</h2>
                        <strong>{value.name}</strong>
                        <HelloLicatTwo />
                    </div>
                )
            }}
        </UserInfo.Consumer>

    );
};

const HelloLicatTwo = () => {
    return (
        <UserInfo.Consumer>
            {(value) => {
                return (
                    <div>
                        <h2>Two : {value.id}</h2>
                        <strong>Two : {value.name}</strong>
                    </div>
                )
            }}

        </UserInfo.Consumer>

    );
};

export default App3;