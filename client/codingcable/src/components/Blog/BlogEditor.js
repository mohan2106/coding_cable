import React,{useState} from "react";
import Editor from "rich-markdown-editor";

function BlogEditor() {
    var [value,setValue] = useState('');


  return (
    <div>
      <Editor 
      
      defaultValue="Hello world!"
      uploadImage={async file => {
        // const result = await s3.upload(file);
        return "https://image.shutterstock.com/image-photo/gradient-glowing-royal-blue-background-260nw-372859843.jpg";
      }}
      onSave = { done => {console.log(value);}}
      onChange = {value => {setValue(value());}}
      />
    </div>
  );
}

export default BlogEditor;
