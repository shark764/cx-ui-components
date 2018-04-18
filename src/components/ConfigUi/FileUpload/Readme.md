```js
function fileSelected(e) {
  console.log(e);
}

<FileUpload onFileSelect={(e) => fileSelected(e)} acceptedFileType='.csv' />
```
