import { createContext, useContext, useEffect, useState } from "react";

const ApiContext = createContext()

const AuthDataProvider = ({children}) => {
    const [chefs, setChefs] = useState([])
    const getChefs = async () => {
        const res = await fetch("https://b7a10-chef-recipe-hunter-server-side-ashfak-rahad.vercel.app/chef")
        const data = await res.json()
        setChefs(data)
    }
    useEffect(() => {
        getChefs()
    },[])

    const apiDatas = {
        chefs,

    }
    return (
        <ApiContext.Provider value={apiDatas}>
            {children}
        </ApiContext.Provider>
    )
}

const useApiData = () => {
    return useContext(ApiContext)
}

export {
    AuthDataProvider,
    useApiData
}