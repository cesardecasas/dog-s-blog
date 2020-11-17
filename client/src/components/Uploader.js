import React from 'react'
const CLOUD_NAME = process.env.REACT_APP_CLOUD_NAME
const UPLOAD_PRESET = process.env.REACT_APP_UPLOAD_PRESET


const widget = window.cloudinary.createUploadWidget(
    {
        cloudName: CLOUD_NAME,
        uploadPreset: UPLOAD_PRESET,
        multiple: false,
    resourceType: "image", 
    maxFileSize: 15000000
    },
    (error, result) => {checkUpload(result)})


    const checkUpload = async (resultEvent) => {
        if (resultEvent.event === 'success') {
            try {
                const url = await resultEvent.info.secure_url
                if (url) {
                  await __UploadFile(url)
                  await updateRender()
                } 
             } 
             catch(err) {throw err}
        }
     }