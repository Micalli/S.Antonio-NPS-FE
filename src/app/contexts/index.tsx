import { createContext, useCallback, useState } from "react";
interface DashboardContextValue {
  //   areValuesVisible: boolean;
  isNewChannelModalOpen: boolean;
  isDeleteChannelModalOpen: boolean;
  isUpdateChannelModalOpen: boolean;
  isNewQuestionModalOpen: boolean;
  isDeleteQuestionModalOpen: boolean;
  isFeedBackQuestionModalOpen: boolean;

  closeNewChannelModal(): void;
  openNewChannelModal(): void;
  openDeleteChannelModal(): void;
  closeDeleteChannelModal(): void;
  openUpdateChannelModal(): void;
  closeUpdateChannelModal(): void;
  closeNewQuestionModal(): void;
  openNewQuestionModal(): void;
  openDeleteQuestionModal(): void;
  closeDeleteQuestionModal(): void;
  openFeedbackQuestionModal(): void;
  closeFeedbackQuestionModal(): void;
}

export const ModalsContext = createContext({} as DashboardContextValue);

export function ModalsProvider({ children }: { children: React.ReactNode }) {
  const [isNewChannelModalOpen, setIsNewChannelModalOpen] = useState(false);
  const [isDeleteChannelModalOpen, setIsDeleteChannelModalOpen] =
    useState(false);
  const [isUpdateChannelModalOpen, setIsUpdateChannelModalOpen] =
    useState(false);
  const [isDeleteQuestionModalOpen, setIsDeleteQuestionModalOpen] =
    useState(false);

  const [isNewQuestionModalOpen, setIsNewQuestionModalOpen] = useState(false);
  const [isFeedBackQuestionModalOpen, setIsFeedBackQuestionModalOpen] =
    useState(false);

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

  const openNewQuestionModal = useCallback(() => {
    setIsNewQuestionModalOpen(true);
  }, []);

  const closeNewQuestionModal = useCallback(() => {
    setIsNewQuestionModalOpen(false);
  }, []);
  const openDeleteQuestionModal = useCallback(() => {
    setIsDeleteQuestionModalOpen(true);
  }, []);

  const closeDeleteQuestionModal = useCallback(() => {
    setIsDeleteQuestionModalOpen(false);
  }, []);

  const openFeedbackQuestionModal = useCallback(() => {
    setIsFeedBackQuestionModalOpen(true);
  }, []);

  const closeFeedbackQuestionModal = useCallback(() => {
    setIsFeedBackQuestionModalOpen(false);
  }, []);

  return (
    <ModalsContext.Provider
      value={{
        isNewChannelModalOpen,
        isDeleteChannelModalOpen,
        isUpdateChannelModalOpen,
        isNewQuestionModalOpen,
        isDeleteQuestionModalOpen,
        isFeedBackQuestionModalOpen,
        openNewChannelModal,
        closeNewChannelModal,
        openDeleteChannelModal,
        closeDeleteChannelModal,
        openUpdateChannelModal,
        closeUpdateChannelModal,
        openNewQuestionModal,
        closeNewQuestionModal,
        openDeleteQuestionModal,
        closeDeleteQuestionModal,
        openFeedbackQuestionModal,
        closeFeedbackQuestionModal,
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
}
