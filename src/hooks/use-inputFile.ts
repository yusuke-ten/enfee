import { useState, useRef, useCallback } from 'react';
import { getBaseName, createObjectURL } from 'src/utils/file';

const useInputFile = () => {
  const [image, setImage] = useState<{
    src: string;
    raw: File | null;
    fileName: string;
  }>({ src: '', raw: null, fileName: '' });
  const fileRef = useRef<HTMLInputElement>(null);

  const onChangeFile = useCallback(() => {
    if (fileRef.current && fileRef.current.files) {
      const imageUrl = createObjectURL(fileRef.current.files[0]);
      setImage({
        src: imageUrl,
        raw: fileRef.current.files[0],
        fileName: getBaseName(fileRef.current.files[0].name),
      });
    }
  }, [fileRef]);

  return { fileRef, onChangeFile, image };
};

export default useInputFile;
