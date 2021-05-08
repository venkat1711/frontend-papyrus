import React, { Component, Fragment,Function } from 'react';
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";



export default class PageEditor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  onEditorStateChange= (editorState) => {
    this.setState({
      editorState,
    });
  };

  handleEditorChange = (state) => {
    //setEditorState(state);
    this.editorState=state;
    //alert(state.getCurrentContent());
   //alert("text"+JSON.stringify(state));
  }
  
  render(){
    const {editorState} =this.state;
  return (
    <div className="App">
      <header className="App-header">
        Rich Text Editor Example
      </header>
      <Editor
        editorState={editorState}
        onEditorStateChange={this.handleEditorChange}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
    </div>
  )
}
}
