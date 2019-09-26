# vue-ace-diffy
vue-ace-diffy is a Vue wrapper for [Ace-diff](https://github.com/ace-diff/ace-diff).

initial code extracted & modified from NPM package: `@sysco-middleware/vue-ace-diff`, due to source absence on github.

# Install

- `npm i --save git+https://git@github.com/svilenkov/vue-ace-diffy.git`

# Getting started

Include the Ace Diff stylesheet, or use your own.

`.acediff__container` CSS class wraps the AceDiff editor. You need to set an explicit width and height, as well as the `position: relative`

Create a new component and extend it with the vue-ace module.

```vue
<template>
  <div>
  </div>
</template>

<script>
  import AceDiff from 'vue-ace-diffy'

  export default {
    extends: AceDiff,
    data() {
      // Default options
      // Can also be passed as props to <AceDiff/>
      return {
        leftContent: '', // Left pane diff text content
        rightContent: '' // Right pane diff text content
        editorId: 'ace-diff' // AceDiff element ID
      }
    },
    mounted () {
      // Initialize a new Ace Diff editor
      this.createEditor({
        // Options
      })
    }
  }
</script>

<style lang="scss">
@import '~ace-diff/dist/ace-diff.min.css';

/* Don't forget the AceDiff needs a relative container with specific width and height */
.acediff__container {
	width: 800px;
  height: 200px;
  margin: 2rem auto;
  position: relative;
}
</style>
```

# Development

To manually test the diff editor in a browser at run the following:

```bash
npm run serve
```