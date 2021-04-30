import React,{useState} from "react";
import classes from './BlogEditor.module.css';
import Editor from "rich-markdown-editor";
import {light as Light,dark as Dark} from '../theme.ts';

const data =  {
  UserName: 'Mohan Kumar',
  UserImage: 'https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  TitleImage: 'https://images.unsplash.com/photo-1619478691745-af923eed4601?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  Title: 'Tim Cook’s 5-Word Response to Facebook Is Brutal and Brilliant at the Same Time',
  Date: '25th Dec 2020',
  // Content: 'Hello World2',
  Content: '---    __Advertisement :)__\n - __[pica](https://nodeca.github.io/pica/demo/)__ - high quality and fast image \n  resize in browser. \n    - __[babelfish](https://github.com/nodeca/babelfish/)__ - developer friendly \n   i18n with plurals support and easy syntax. \n    You will like those projects! \n  --- \n  # h1 Heading 8-) \n ## h2 Heading \n ### h3 Heading  \n   #### h4 Heading \n ##### h5 Heading \n  ###### h6 Heading \n',
  Description:'Apple’s CEO is clear that he isn’t making decisions based on what’s best for Facebook, but for Apple and its customers',
}

function BlogEditor() {
  const [title,setTitle] = useState('');
  const [desc,setDesc] = useState('');
  const [titleImage,setTitleImage] = useState(null);
  const [imagePreview,setImagePreview] = useState('');
  const [MDValue,setMDValue] = useState('');
  const [formValid,setFormValid] = useState(false);

  const fileChangedHandler = (event) => {
    const file = event.target.files[0];
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);
    reader.onloadend = function (e) {
      setImagePreview(reader.result);
    }
    // setImagePreview(url);
    setTitleImage(file);
  }
  
  const uploadHandler = () => {

  }

  const handleSubmit = () => {
    if(title.length >0 && desc.length >0 && titleImage !== null && MDValue.length >0 ){
      setFormValid(true);
    }else{
      setFormValid(false);
      console.log('Form is Invalid');
    }
  }

  return (
    <div className={classes.container}>
            <div className={classes.heading}>Add Blog</div>
            {formValid ? null : <div className={classes.error}>Please Fill All the Field</div>}
            <div className={classes.titlecontainer}>
              <label className={classes.label}>Blog Title*</label>
              <input className={classes.title} value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter Blog Title"/>
            </div>
            <div className={classes.desccontainer}>
              <label className={classes.label}>Blog description*</label>
              <input className={classes.desc} value={desc} onChange={e => setDesc(e.target.value)} placeholder="Enter Blog Description"/>
            </div>
            
            <div className={classes.imageContainer}>
              <label className={classes.label}>Upload Title Image*</label>
                <input className={classes.imageUpload} accept=".png, .jpg, .jpeg .svg"  type="file" onChange={fileChangedHandler}/>
                {/* <button onClick={uploadHandler}>Upload!</button> */}
                <img className={classes.titleimage} src={imagePreview} alt="title-img"/>
            </div>
            <label className={classes.label}>Enter Content*</label>
            <div className={classes.content}>
              <Editor 
                defaultValue=""
                placeholder="Enter your content here"
                uploadImage={async file => {
                  // const result = await s3.upload(file);
                  return "https://image.shutterstock.com/image-photo/gradient-glowing-royal-blue-background-260nw-372859843.jpg";
                }}
                onSave = { done => {console.log(MDValue);}}
                theme = {Light}
                onChange = {value => {setMDValue(value());}}
              />
            </div>
            <button className={classes.submit} onClick={handleSubmit}>Submit Blog</button>
            
        </div>
  );
}

export default BlogEditor;
