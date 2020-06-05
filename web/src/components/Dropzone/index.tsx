import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';

import './styles.css';

interface Props {
   onFileUploaded: (file: File) => void; // void - sem retorno
}

const Dropzone: React.FC<Props> = ({ onFileUploaded }) => {
   const [selectedFileUrl, setSelectedFileUrl] = useState('');

   const onDrop = useCallback(acceptedFiles => {
      const file = acceptedFiles[0]; // só estamos recebendo 1 arquivo
      
      const fileUrl = URL.createObjectURL(file);
      
      setSelectedFileUrl(fileUrl);
      onFileUploaded(file);
  }, [onFileUploaded]);
  const {getRootProps, getInputProps} = useDropzone({
     onDrop,
     accept: 'image/*' // aceitar apenas imagens, de qualquer tipo
   })

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />

      { selectedFileUrl
         ? <img src={selectedFileUrl} alt="Point thumbnail" />
         : ( // () quando quiser retornar mais de uma linha
            <p>
               <FiUpload />
               Imagem do estabelecimento
            </p>
         )
      }
    </div>
  )
}

export default Dropzone;