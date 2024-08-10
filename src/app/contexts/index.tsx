import { createContext, useCallback, useState } from "react";
interface DashboardContextValue {
  //   areValuesVisible: boolean;
  isNewChannelModalOpen: boolean;
  isDeleteChannelModalOpen: boolean;
  isUpdateChannelModalOpen: boolean;

  //   isNewTransactionOpen: boolean;
  //   newTransactionType: "INCOME" | "EXPENSE" | null;
  //   toggleVisibility(): void;
  closeNewChannelModal(): void;
  openNewChannelModal(): void;
  openDeleteChannelModal(): void;
  closeDeleteChannelModal(): void;
  openUpdateChannelModal(): void;
  closeUpdateChannelModal(): void;

  //   openNewTransactionModal(type: "INCOME" | "EXPENSE"): void;
  //   closeNewTransactionModal(): void;
}

export const ModalsContext = createContext({} as DashboardContextValue);

export function ModalsProvider({ children }: { children: React.ReactNode }) {
    // const [areValuesVisible, setAreValuesVisible] = useState(false);
    const [isNewChannelModalOpen, setIsNewChannelModalOpen] = useState(false);
    const [isDeleteChannelModalOpen, setIsDeleteChannelModalOpen] = useState(false);
    const [isUpdateChannelModalOpen, setIsUpdateChannelModalOpen] =
      useState(false);


    // const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
    // const [newTransactionType, setNewTransactionType] = useState<
    //     "INCOME" | "EXPENSE" | null
    // >(null);

    
    const openNewChannelModal = useCallback(() => {
        setIsNewChannelModalOpen(true);
    }, []);

    const closeNewChannelModal = useCallback(() => {
        setIsNewChannelModalOpen(false);
    }, []);

    const openDeleteChannelModal = useCallback(() => {
      setIsDeleteChannelModalOpen(true);
    }, []);

    const closeDeleteChannelModal = useCallback(() => {
      setIsDeleteChannelModalOpen(false);
    }, []);

       const openUpdateChannelModal = useCallback(() => {
         setIsUpdateChannelModalOpen(true);
       }, []);

       const closeUpdateChannelModal = useCallback(() => {
         setIsUpdateChannelModalOpen(false);
       }, []);

    // const openNewTransactionModal = useCallback(
    //     (type: "INCOME" | "EXPENSE") => {
    //     console.log("passou aq,", type);

    //         setNewTransactionType(type);
    //         setIsNewTransactionModalOpen(true);
    //     },
    //     []
    // );

    // const closeNewTransactionModal = useCallback(() => {
    //     setNewTransactionType(null);
    //     setIsNewTransactionModalOpen(false);
    // }, []);

    return (
      <ModalsContext.Provider
        value={{
          isNewChannelModalOpen,
          isDeleteChannelModalOpen,
          isUpdateChannelModalOpen,
          openNewChannelModal,
          closeNewChannelModal,
          openDeleteChannelModal,
          closeDeleteChannelModal,
          openUpdateChannelModal,
          closeUpdateChannelModal,
        }}
      >
        {children}
      </ModalsContext.Provider>
    );
}
