import React, { useState } from 'react';
import styled from 'styled-components';


const Label = styled.label`
    display: inline-block;
    width: 282px;
    height: 282px;
    background: url('../assets/images/fileinput.png') no-repeat;
    background-position: center;
    border-radius: 10px;
    cursor: pointer;
`;


const Input = styled.input`
    display: none;
`;

function UploadImage() {
    const [previewImg, setPreviewImg] = useState(null);

    function handleFileUpload(e) {
        let file = e.target.files[0];
        let fileReader = new FileReader();
        fileReader.onload = function() {
            setPreviewImg(fileReader.result);
        };
        
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    return (
        <div>
            <Label>
                <Input accept=".png, .jpeg, .jpg" type="file" onChange={handleFileUpload} />
            </Label>
            {previewImg && <img alt="Preview" src={previewImg} />}
        </div>
    );
}

export default UploadImage;

