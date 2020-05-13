```js
const Store = require('../../../../utils/store');
const Form = require('../../../../utils/reduxForm');

<Store>
  <Form>
    <FileUploadField 
      name="logo"
      label="Logo/Header"
      fileType="image"
      maxFileSize="1000000"
      uploadFile={()=> ""}
      acceptedFileType= "image/png, image/jpg, image/jpeg, image/gif"
      toastError="Logo must be a PNG, JPG, or GIF under 1MB!"
    />
    <FileUploadField
      name="favicon"
      label="Favicon/Header"
      fileType="image"
      maxFileSize="1000000"
      uploadFile={()=> ""}
      toastError="Favicon must be a PNG, JPG, GIF or ICO under 1MB!"
      acceptedFileType= "image/png, image/jpg, image/jpeg, image/gif, image/vnd.microsoft.icon, image/x-icon"
    />
  </Form>
</Store>
```