export function getExtraTitleStyleName (title: string | undefined, styleMap: { [name: string]: string } | undefined) {
  if (!title || !styleMap) {
    return ''
  }
  const greens = ['startDesignButtonTitle', 'hasFilter', 'showChangeButton', 'showEditButton', 'showCollectionButton', 'contentEditorTitle']
  const yellows = ['showSelectContent', 'defaultAutoFillContent', 'useKeywords']
  const grays = ['showAutoFillContent', 'canEditChannelInput', 'useBrand', 'showBrandInput']
  let ret = greens.some(name => title.indexOf(name) > -1)
  if (ret) {
    return styleMap.green
  }
  ret = yellows.some(name => title.indexOf(name) > -1)
  if (ret) {
    return styleMap.yellow
  }
  ret = grays.some(name => title.indexOf(name) > -1)
  if (ret) {
    return styleMap.gray
  }
  return ''
}
