<template>
  <div class="table-limit-box">
    <table class="table">
      <thead>
        <tr>
          <th :key="index" v-for="(item, index) in title">{{item}}</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="index" v-for="(items, index) in row">
          <td :key="index" v-for="(item, index) in items">{{item}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'Table',
  props: ['data'],
  computed: {
    title(){
      return Object.keys(this.data[0]);
    },
    row(){
      return this.data.map(v=> {
        return Object.keys(v).map(val=> v[val]);
      })
    }
  }
}
/*
  data: [
    {
      item1: 'item1-info',
      item2: 'item2-info',
      item3: 'item3-info',
      item4: 'item4-info',
      item5: 'item5-info',
      item6: 'item6-info',
      item7: 'item7-info'
    },
    {
      item1: 'item1-info',
      item2: 'item2-info',
      item3: 'item3-info',
      item4: 'item4-info',
      item5: 'item5-info',
      item6: 'item6-info',
      item7: 'item7-info'
    },
    {
      item1: 'item1-info',
      item2: 'item2-info',
      item3: 'item3-info',
      item4: 'item4-info',
      item5: 'item5-info',
      item6: 'item6-info',
      item7: 'item7-info'
    }
  ]
*/
</script>
<style scoped lang="less">
  .table-limit-box{
    width: 1083px;
    overflow-x: auto;
    .table{
      min-width: 100%;
      th,
      td{
        vertical-align: top;
        max-width: 200px;
        word-wrap:break-word;
      }
    }
  }

</style>


