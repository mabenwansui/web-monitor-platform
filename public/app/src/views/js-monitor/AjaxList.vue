<template>
  <div class="box-space">
    <Breadcrumb :data="path" />
    <SubMenu active="ajax" />
    <SearchBar />
    <table class="table">
      <thead>
        <tr>
          <th>错误信息</th>
          <th>时间</th>
          <th>出现次数</th>
          <th>用户数</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <router-link to="/js-monitor/fe-h-pc/ajax-details/2">
              <p>status: 200 | flag: 0 | 传入参数不正确</p>
              <p class="text-gray">h.liepin.com/resumemanage/showmytalentlist</p>
            </router-link>
          </td>
          <td>2018-06-22 16:05</td>
          <td>9105</td>
          <td>1100</td>
        </tr>
        <tr>
          <td>
            <router-link to="/js-monitor/fe-h-pc/ajax-details/2">
              <p>status: 200 | Uncaught SyntaxError: Unexpected token o in JSON at position 1</p>
              <p class="text-gray">h.liepin.com/resumemanage/showmytalentlist</p>
            </router-link>
          </td>
          <td>2018-06-22 16:05</td>
          <td>9105</td>
          <td>1100</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import Breadcrumb from '@components/Breadcrumb'
  import SubMenu from '@components/SubMenu'
  import SearchBar from '@components/SearchBar'
  export default {
    name: 'AjaxList',
    components: {Breadcrumb, SubMenu, SearchBar},
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
            title: 'ajax-list'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="less">

</style>
