<template>
  <div>
    <group>
      <cell title="开始制作" link="/demo"></cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'
export default {
  components: {
    Group,
    Cell
  },
  data () {
    return {
      value: false
    }
  }
}
</script>
