import { createContext, useEffect, useState } from "react";
export const ModalContext = createContext(null);
const ModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      fetch("https://kep.uz/api/problems")
        .then((response) => response.json())
        .then((result) => setState(result.data));
    };
    fetchPosts();
  }, []);

  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        openModal,
        open,
        closeModal,
        state,
        setState,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
