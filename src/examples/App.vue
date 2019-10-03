<template>
  <div>
    <JSON :leftContent="leftContent" :rightContent="rightContent" />
  </div>
</template>

<script>
import JSON from './JSON.js'

export default {
  name: 'app',
  components: {
    JSON
  },
  data () {
    return {
      leftContent: `{
  "type": "record",
  "name": "events",
  "namespace": "com.sysco",
  "doc": "This is a sample Avro schema to get you started. Please edit",
  "fields": [
    {
      "name": "name",
      "type": "string"
    },
    {
      "name": "number1",
      "type": "int"
    },
    {
      "name": "number2",
      "type": "float"
    }
  ]
}`,
      rightContent: `{
  "type": "record",
  "name": "events",
  "namespace": "com.sysco.v2",
  "doc": "Some usefull documentation",
  "fields": [
    {
      "name": "name",
      "type": "string"
    },
    {
      "name": "number1",
      "type": "int"
    },
    {
      "name": "number2",
      "type": "string"
    }
  ]
}`
    }
  }
}
</script>

<style lang="scss">
@import '~ace-diffy/dist/ace-diffy-light.css';

.acediffy__container {
  width: 700px;
  height: 200px;
  margin: 2rem auto;
  position: relative;
}
</style>
