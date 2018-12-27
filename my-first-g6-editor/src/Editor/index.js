import React, { Component } from 'react';
import G6Editor from '@antv/g6-editor';
import ToolBar from './ToolBar/ToolBar';
import Detailpannel from './Detailpannel/Detailpannel';

export default class TestEditor extends Component {
  
  constructor(prpos){
    super();
    const editor = new G6Editor();
    this.editor = editor;


  }
  componentDidMount(){
    // console.log('father 。。。');

    // const editor = new G6Editor();
    // const minimap = new G6Editor.Minimap({
    //   container: 'minimap',
    // });
    // const toolbar = new G6Editor.Toolbar({
    //   container: 'toolbar',
    // });
    // const contextmenu = new G6Editor.Contextmenu({
    //   container: 'contextmenu',
    // });
    // const itempannel = new G6Editor.Itempannel({
    //   container: 'itempannel',
    // });
    // const detailpannel = new G6Editor.Detailpannel({
    //   container: 'detailpannel',
    // });
    // const page = new G6Editor.Flow({
    //   graph: {
    //     container: 'page',
    //   },
    // });
    // editor.add(minimap);
    // // editor.add(toolbar);
    // editor.add(contextmenu);
    // editor.add(itempannel);
    // editor.add(detailpannel);
    // editor.add(page);

  }

  render() {
        const labelInput = (
      <div className="p">
        名称：
        {/* <Input
          size="small"
          className="input name-input"
          value = {inputingLabel ? inputingLabel : selectedModel.label}
          onChange = { ev => {
            this.setState({
              inputingLabel: ev.target.value
            });
          }}
          onBlur = { ev => {
            this.updateGraph('label', ev.target.value);
            this.setState({
              inputingLabel: null
            });
          }}
        /> */}
      </div>
    );

    return (
      <div>
        <ToolBar editor={this.editor} />   


        < Detailpannel editor = {
          this.editor
        }
        content = {
          <div>
            <div data-status="node-selected" className="panel" id="node_detailpanel">
              <div className="panel-title">模型详情</div>
              <div className="block-container">
                {labelInput}
              </div>
            </div>
            <div data-status="group-selected" className="panel" id="node_detailpanel">
              <div className="panel-title">群组详情</div>
              <div className="block-container">
                {labelInput}
              </div>
            </div>
            <div data-status="canvas-selected" className="panel" id="canvas_detailpanel">
              <div className="panel-title">画布</div>
              <div className="block-container">
                {/* <Checkbox onChange={ this.toggleGrid.bind(this) } >网格对齐</Checkbox> */}
              </div>
            </div>
          </div>
        }/>
      </div>
    )
  }
}
