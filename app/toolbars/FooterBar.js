import React from 'react';
import { ExportJSON, ImportJSON } from '../utils';

export default class extends React.Component {
  render() {
    return (
      <div className="toolBar toolBar--footer">
        <button className="btn btn-success pull-right startNew" onClick={this.props.emptyDiagram}>New Diagram</button>
        <ExportJSON 
          nodes={this.props.nodes}
          links={this.props.links}
        />
        <ImportJSON readFile={this.readFile}/>
        <div className="clearFix"></div>
      </div>
    );
  }
};

