<template>
  <div class="box-space">
    <Breadcrumb :data="path" />
    <SubMenu type="jsMonitor" active="custom" />
    <SearchBar placeholderInfo="追踪码" />
    <table class="table">
      <thead>
        <tr>
          <th>用户id</th>
          <th width="70%">数据</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>fac9ecfb615530881a667e00ad0d9493</td>
          <td>{a1: 1, a2: 2, a3: 3, a4: 4}</td>
        </tr>
      </tbody>
    </table>
    <PagerBar />
  </div>
</template>

<script>
  import Breadcrumb from '@components/Breadcrumb'
  import SubMenu from '@components/SubMenu'
  import SearchBar from '@components/SearchBar'
  import Loading from '@components/Loading'
  import PagerBar from '@components/PagerBar'
  export default {
    name: 'JsList',
    components: {Breadcrumb, SubMenu, SearchBar, Loading, PagerBar},
    data(){
      return {
        path: [
          {
            title: '错误监控',
            url: '/'
          },
          {
            comp: 'port'
          },
          {
            title: 'js-list'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="less">
  .title{
    font-size: 14px;
    line-height: 26px;
  }
  .sub-bar{
    margin-bottom: 5px;
    span{
      display: inline-block;
      border-radius: 5px;
      padding: 0 4px 1px;
      background: #EEEEEE;
    }
  }
</style>
