import { createContext, useState, useContext } from 'react';

const ListContext = createContext();

function ListProvider({children}) {
    const [isOpenMap, setIsOpenMap] = useState(new Map());

    function toggleOpen(label) {
        setIsOpenMap(prevIsOpenMap => {
            const newMap = new Map(prevIsOpenMap);
            newMap.set(label, !newMap.get(label));
            return newMap;
        });
    }

    function isOpen(label) {
        return isOpenMap.get(label) || false;
    }

    return (
        <ListContext.Provider value={{toggleOpen, isOpen}}>
            {children}
        </ListContext.Provider>
    );
}

function useListContext() {
    return useContext(ListContext);
}

export {ListProvider, useListContext}