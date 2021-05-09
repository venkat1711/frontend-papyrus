import React, { Component } from 'react';
import {Editor, EditorState } from 'draft-js';
//import {  } from 'react-draft-wysiwyg';
import { convertToRaw,draftToHtml } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { isAuthenticated } from '../../api/auth';
import { postContentToDB, getPageContent } from '../../api/AllCategories/postcontent';
import { toast } from 'react-toastify';



export default class PageEditor extends Component {

  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = this.onChange.bind(this);
    this.setEditor = this.setEditor.bind(this);
    this.clickhere=this.clickhere.bind(this);
    this.contentRaw=null;
   // this.focusEditor = this.focusEditor.bind(this);
  };

  onChange (editorState) {
    this.setState({editorState});
    this.contentRaw = convertToRaw(editorState.getCurrentContent());

  };

  setEditor (editor) {
    this.editor = editor;
  };

  clickhere () {
   alert(this.contentRaw.blocks[0].text);
   //e.preventDefault();
   const { user, token } = isAuthenticated();
   var obj = {};
   getPageContent("homepage").then((res) => {
    if (res.error) {
      toast.error(`get pagecontent error`);
    } else {
       
       obj=res.pagecontent[0];
          console.log(res.error);
   
obj.name="homepage";
obj.content=this.contentRaw.blocks[0].text;
   alert(JSON.stringify(obj));
   postContentToDB("homepage", token, obj).then((res) => {
       if (res.error) {
           toast.error(res.error);
           console.log(res.error);
       } else {

           toast.success(`post is create!!!`);
           window.location.reload();
       }
   })
       .catch((err) => console.log(err, 'error in create post'));
  
} 
})
 .catch((err) => console.log(err, 'error in create post'));
};

  render(){
    const {editorState} =this.state;
  return (
    <div className="App">
      <header className="App-header">
        Add your content here for page
      </header>
      <Editor
            ref={this.setEditor}
            editorState={this.state.editorState}
            onChange={this.onChange}
            wrapperClassName="wrapper-class"
  editorClassName="editor-class"
  toolbarClassName="toolbar-class"
          />
          <button name="submit" onClick={this.clickhere}>Submit</button>
    </div>
  )
}
}
