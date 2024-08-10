import { useContext } from 'react';
import { ModalsContext } from '.'; 

export function useModals(){
    return useContext(ModalsContext)
}
