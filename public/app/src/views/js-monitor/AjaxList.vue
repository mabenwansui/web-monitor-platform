<template>
  <div class="box-space">
    <Breadcrumb :data="path" />
    <SubMenu type="jsMonitor" active="ajax" />
    <SearchBar />
    <table class="table">
      <thead>
        <tr>
          <th>错误信息</th>
          <th class="text-center">时间</th>
          <th class="text-center">出现次数</th>
          <th class="text-center">用户数</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <router-link to="/js-monitor/fe-h-pc/ajax-details/2">
              <p>status: 200 | flag: 0 | 传入参数不正确</p>
              <div class="sub-info">
                <p class="text-gray">url: h.liepin.com/resumemanage/showmytalentlist</p>
                <p class="text-gray">page: msk.liepin.com/mskjob/addmskjob/</p>
              </div>
            </router-link>
          </td>
          <td class="text-center">2018-06-22 16:05</td>
          <td class="text-center">9105</td>
          <td class="text-center">1100</td>
        </tr>
        <tr>
          <td>
            <router-link to="/js-monitor/fe-h-pc/ajax-details/2">
              <p>status: 200 | Uncaught SyntaxError: Unexpected token o in JSON at position 1</p>
              <div class="sub-info">
                <p class="text-gray">url: h.liepin.com/resumemanage/showmytalentlist</p>
                <p class="text-gray">page: msk.liepin.com/mskjob/addmskjob/</p>
              </div>
            </router-link>
          </td>
          <td class="text-center">2018-06-22 16:05</td>
          <td class="text-center">9105</td>
          <td class="text-center">1100</td>
        </tr>
        <tr>
          <td>
            <router-link to="/js-monitor/fe-h-pc/ajax-details/2">
              <p>status: 200 | Uncaught SyntaxError: Unexpected token o in JSON at position 1</p>
              <div class="sub-info">
                <p class="text-gray">url: h.liepin.com/resumemanage/showmytalentlist</p>
                <p class="text-gray">page: msk.liepin.com/mskjob/addmskjob/</p>
              </div>
            </router-link>
          </td>
          <td class="text-center">2018-06-22 16:05</td>
          <td class="text-center">9105</td>
          <td class="text-center">1100</td>
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
  import PagerBar from '@components/PagerBar'

  export default {
    name: 'AjaxList',
    components: {Breadcrumb, SubMenu, SearchBar, PagerBar},
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
