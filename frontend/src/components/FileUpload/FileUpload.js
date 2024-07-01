import { useState } from 'react'

const FileUpload = (props) => {
    const [file, setFile] = useState(null)

    const handleFile = (e) => {
        setFile(e.target.files[0])
    }

    const handleUpload = () => {
      
    }

    return (
        <div>
            <input type="file" onChange={handleFile}/>
            <button onClick={handleUpload}>Upload</button>
        </div>
    )
}