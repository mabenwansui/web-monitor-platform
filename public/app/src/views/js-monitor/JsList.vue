<template>
  <div class="box-space">
    <Breadcrumb :data="path" />
    <SubMenu active="js" />
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
            <router-link to="/js-monitor/fe-h-pc/js-details/1">
              <p>ReferenceError: unknownVariable is not defined</p>
              <p class="text-gray">h.liepin.com/resumemanage/showmytalentlist</p>
            </router-link>
          </td>
          <td>2018-06-22 16:05</td>
          <td>9105</td>
          <td>1100</td>
        </tr>
        <tr>
          <td>
            <router-link to="/js-monitor/fe-h-pc/js-details/1">
              <p>ReferenceError: unknownVariable is not defined</p>
              <p class="text-gray">h.liepin.com/resumemanage/showmytalentlist</p>
            </router-link>
          </td>
          <td>2018-06-22 16:05</td>
          <td>9105</td>
          <td>1100</td>
        </tr>
        <tr>
          <td>
            <router-link to="/js-monitor/fe-h-pc/js-details/1">
              <p>ReferenceError: unknownVariable is not defined</p>
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
  import Loading from '@components/Loading'
  export default {
    name: 'JsList',
    components: {Breadcrumb, SubMenu, SearchBar, Loading},
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
</style>
