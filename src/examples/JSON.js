import AceDiffy from '../'
import 'brace/mode/json'

export default {
  extends: AceDiffy,
  mounted () {
    require('brace/ext/language_tools')
    require('brace/mode/json')
    require('brace/theme/github')
    this.createEditor({
      mode: 'ace/mode/json',
      theme: 'ace/theme/github'
    })
  }
}
