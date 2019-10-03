import AceDiffy from 'ace-diffy'

export default {
  render: function (createElement) {
    return createElement(
      'div', {
        class: 'acediffy__container',
        attrs: {
          id: this.editorId
        },
        ref: 'editor'
      }
    )
  },
  data () {
    return {
      theme: '',
      mode: '',
      editor: null,
      editorId: 'ace-diffy'
    }
  },
  watch: {
    leftContent () {
      if (!this.editor) {
        return
      }

      const { left } = this.editor.getEditors()

      left.setValue(this.leftContent)
      left.selection.clearSelection()
    },
    rightContent () {
      if (!this.editor) {
        return
      }

      const { right } = this.editor.getEditors()

      right.setValue(this.rightContent)
      right.selection.clearSelection()
    }
  },
  methods: {
    setTheme (theme) {
      if (!this.editor) {
        return
      }

      this.theme = theme

      const { left, right } = this.editor.getEditors()

      left.setTheme(theme)
      right.setTheme(theme)
    },
    setMode (mode) {
      if (!this.editor) {
        return
      }

      this.mode = mode

      const { left, right } = this.editor.getEditors()

      left.session.setMode(mode)
      right.session.setMode(mode)
    },
    createEditor (options) {
      const editor = new AceDiffy({
        element: `#${this.editorId}`,
        left: {
          content: this.leftContent || ''
        },
        right: {
          content: this.rightContent || ''
        }
      })
      editor.create().then(function () {
        editor.setOptions(options || {})
      })
      this.editor = editor
    }
  },
  beforeDestroy () {
    if (!this.editor) {
      return
    }

    const { left, right } = this.editor.getEditors()

    left.destroy()
    right.destroy()
  }
}
