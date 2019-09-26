import AceDiff from 'ace-diff'

export default {
  render: function (createElement) {
    return createElement(
      'div', {
        class: 'acediff__container',
        attrs: {
          id: this.editorId
        },
        ref: 'editor'
      }
    )
  },
  props: {
    editorId: {
      default: 'ace-diff',
      type: String
    },
    leftContent: {
      type: String,
      default: ''
    },
    rightContent: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      theme: '',
      mode: '',
      editor: null
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
      this.editor = new AceDiff({
        element: `#${this.editorId}`,
        left: {
          content: this.leftContent || ''
        },
        right: {
          content: this.rightContent || ''
        }
      })

      this.editor.setOptions(options || {})
      // TODO: listen to all events
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
