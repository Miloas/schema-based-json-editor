import * as React from 'react'
import * as common from 'json-editor-color-label'

export class Description extends React.Component<{
  theme: common.Theme;
  message: string | undefined;
}, {}> {
  render () {
    if (this.props.message) {
      return <p className={this.props.theme.description}>{this.props.message}</p>
    }
    return null
  }
}
