import AceDiff from '../'
import 'brace/mode/json'

export default {
  extends: AceDiff,
  mounted () {
    this.createEditor()
    this.setMode('ace/mode/json')
  }
}
