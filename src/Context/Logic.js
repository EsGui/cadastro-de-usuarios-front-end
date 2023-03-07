import myContext from "./myContext";

function Logic({ children }) {
    const obj = {}

    return(
        <myContext.Provider value={ obj }>
            { children }
        </myContext.Provider>
    )
}

export default Logic;
