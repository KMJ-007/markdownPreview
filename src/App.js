import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import './App.css';

export default class App extends Component {
  constructor(props){
      super(props)
      this.state={
        input:placeholder
      }
  }
  handleChange(e){
    this.setState({
      input:e.target.value
    })
  }
  render() {
    return (
      <div>
        <div id="editorWrap">
        <Toolbar  text="Editor"/>
        <Editor  input={this.state.input} onChange={this.handleChange.bind(this)}/>
        </div>
        <br/>
        <div id='preview-Wrap'>
        <Toolbar  text="Preview"/>
        <Preview id="preview" input={this.state.input}/>
        </div>
      </div>
    )
  }
}

const Toolbar=(props)=>{
  return(
    <div className='toolbar'>
      {props.text}
    </div>
  )
}

const Editor=(props)=>{
  return(
    
      <textarea id="editor" value={props.input} onChange={props.onChange}/>
    
  )
}

const Preview=(props)=>{
  return(
    <div  id="preview">
      <ReactMarkdown>{props.input}</ReactMarkdown>
    </div>
  )
}

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:


`;
