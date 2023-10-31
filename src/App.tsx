import * as React from "react";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";
const editorConfiguration = {
  toolbar: {
    items: [
      "heading",
      "|",
      "fontfamily",
      "fontsize",
      "|",
      "alignment",
      "|",
      "fontColor",
      "fontBackgroundColor",
      "|",
      "bold",
      "italic",
      "strikethrough",
      "underline",
      "subscript",
      "superscript",
      "|",
      "link",
      "|",
      "outdent",
      "indent",
      "|",
      "bulletedList",
      "numberedList",
      "todoList",
      "|",
      "code",
      "codeBlock",
      "|",
      "insertTable",
      "|",
      "imageUpload",
      "blockQuote",
      "|",
      "undo",
      "redo"
    ],
    shouldNotGroupWhenFull: true
  }
};
class App extends React.Component {
  editor = null;

  render() {
    return (
      <div className="App">
        <h2>CKEditor 5 using a custom build - decoupled editor</h2>
        <CKEditor
          editor={Editor}
          config={editorConfiguration}
          data="<p>Hello from CKEditor 5!</p>"
        />
      </div>
    );
  }
}

export default App;
