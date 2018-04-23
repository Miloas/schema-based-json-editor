import * as React from 'react'
import * as common from 'json-editor-color-label'

export class Optional extends React.Component<{
  required: boolean | undefined;
  value: common.ValueType | undefined;
  isReadOnly: boolean | undefined;
  theme: common.Theme;
  locale: common.Locale;
  toggleOptional: () => void;
}, {}> {
  render () {
    if (!this.props.required && (this.props.value === undefined || !this.props.isReadOnly)) {
      return (
        <div className={this.props.theme.checkbox}>
          <label>
            <input type='checkbox'
              onChange={this.props.toggleOptional}
              checked={this.props.value === undefined}
              disabled={this.props.isReadOnly} />
            {this.props.locale.info.notExists}
          </label>
        </div>
      )
    }
    return null
  }
}
