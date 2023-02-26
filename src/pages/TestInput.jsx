import React, { useState } from 'react'

function TestInput() {

    const [file, setFile] = useState(null)
    const [selectedFile, setSelectedFile] = useState()

    const handleChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedFile(e.target.files[0]);
            setFile(e.target.files[0]);
        }
    }

    const getLink = () => {
        const url = URL.createObjectURL(selectedFile)

        console.log(url);

    }


    return (
        <>
            <input type="file" accept='.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document' onChange={handleChange} />
            <button onClick={getLink}>Get Link</button>
        </>
    )
}

export default TestInput