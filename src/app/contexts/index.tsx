import { createContext, useCallback, useState } from "react";
interface DashboardContextValue {
  isNewChannelModalOpen: boolean;
  isDeleteChannelModalOpen: boolean;
  isUpdateChannelModalOpen: boolean;
  isNewQuestionModalOpen: boolean;
  isDeleteQuestionModalOpen: boolean;
  isFeedBackQuestionModalOpen: boolean;
  isNewAnswerModalOpen: boolean;
  isDeleteAnswerModalOpen: boolean;
  isUpdateAnswerModalOpen: boolean;
  isUpdateQuestionModalOpen: boolean;

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
  openNewAnswersModal(): void;
  closeNewAnswersModal(): void;
  closeDeleteAnswersModal(): void;
  openDeleteAnswersModal(): void;
  closeUpdateAnswersModal(): void;
  openUpdateAnswersModal(): void;
  closeUpdateQuestionModal(): void;
  openUpdateQuestionModal(): void;
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
  const [isUpdateQuestionModalOpen, setIsUpdateQuestionModalOpen] = useState(false);


  const [isNewQuestionModalOpen, setIsNewQuestionModalOpen] = useState(false);
  const [isFeedBackQuestionModalOpen, setIsFeedBackQuestionModalOpen] =
    useState(false);

  const [isNewAnswerModalOpen, setIsNewAnswerModalOpen] = useState(false);

  const [isDeleteAnswerModalOpen, setIsDeleteAnswerModalOpen] = useState(false);
  const [isUpdateAnswerModalOpen, setIsUpdateAnswerModalOpen] = useState(false);

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

  const openUpdateQuestionModal = useCallback(() => {
    setIsUpdateQuestionModalOpen(true);
  }, []);

  const closeUpdateQuestionModal = useCallback(() => {
    setIsUpdateQuestionModalOpen(false);
  }, []);

  const openFeedbackQuestionModal = useCallback(() => {
    setIsFeedBackQuestionModalOpen(true);
  }, []);

  const closeFeedbackQuestionModal = useCallback(() => {
    setIsFeedBackQuestionModalOpen(false);
  }, []);

  const openNewAnswersModal = useCallback(() => {
    setIsNewAnswerModalOpen(true);
  }, []);

  const closeNewAnswersModal = useCallback(() => {
    setIsNewAnswerModalOpen(false);
  }, []);
  const openUpdateAnswersModal = useCallback(() => {
    setIsUpdateAnswerModalOpen(true);
  }, []);

  const closeUpdateAnswersModal = useCallback(() => {
    setIsUpdateAnswerModalOpen(false);
  }, []);
  const openDeleteAnswersModal = useCallback(() => {
    setIsDeleteAnswerModalOpen(true);
  }, []);

  const closeDeleteAnswersModal = useCallback(() => {
    setIsDeleteAnswerModalOpen(false);
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
        isNewAnswerModalOpen,
        isUpdateAnswerModalOpen,
        isDeleteAnswerModalOpen,
        isUpdateQuestionModalOpen,
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
        openNewAnswersModal,
        closeNewAnswersModal,
        openDeleteAnswersModal,
        closeDeleteAnswersModal,
        openUpdateAnswersModal,
        closeUpdateAnswersModal,
        closeUpdateQuestionModal,
        openUpdateQuestionModal,
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
}
