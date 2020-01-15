import { useState, useCallback } from 'react';

const useOpen = (defaultBool: boolean = false) => {
  const [isOpen, setOpen] = useState(defaultBool);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  return { isOpen, handleOpen, handleClose };
};

export default useOpen;
