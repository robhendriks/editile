function Tool () {
}

Tool.prototype.id = undefined
Tool.prototype.label = undefined

Tool.prototype.activate = function (editor) {
  throw new Error('Tool::activate not yet implemented')
}

Tool.prototype.deactivate = function (editor) {
  throw new Error('Tool::deactivate not yet implemented')
}

Tool.prototype.mouseDown = function () {
  throw new Error('Tool::mouseDown not yet implemented')
}

Tool.prototype.mouseUp = function () {
  throw new Error('Tool::mouseUp not yet implemented')
}

exports.Tool = Tool
