<template>
  <div class="box-space">
    <Breadcrumb :data="path" />
    <SubMenu type="jsMonitor" active="js" />
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
            <router-link to="/js-monitor/fe-h-pc/js-details/1">
              <p class="title">ReferenceError: unknownVariable is not defined</p>
              <div class="sub-info">
                <p class="text-gray sub-bar">
                  <span>url: h.liepin.com/resumemanage/showmytalentlist</span>
                </p>
                <p class="text-gray sub-bar">
                  <span>file: https://concat.lietou-static.com/fe-msk-pc/v5/static/js/loader.js</span>
                </p>
                <p class="text-gray sub-bar">
                  <span class="mr">row:1 </span>
                  <span class="mr">col:1032131</span>
                </p>
              </div>
            </router-link>
          </td>
          <td class="text-center">2018-06-22 16:05</td>
          <td class="text-center">9105</td>
          <td class="text-center">1100</td>
        </tr>
        <tr>
          <td>
            <router-link to="/js-monitor/fe-h-pc/js-details/1">
              <p class="title">ReferenceError: unknownVariable is not defined</p>
              <div class="sub-info">
                <p class="text-gray sub-bar">
                  <span>url: h.liepin.com/resumemanage/showmytalentlist</span>
                </p>
                <p class="text-gray sub-bar">
                  <span>file: https://concat.lietou-static.com/fe-msk-pc/v5/static/js/loader.js</span>
                </p>
                <p class="text-gray sub-bar">
                  <span class="mr">row:1 </span>
                  <span class="mr">col:1032131</span>
                </p>
              </div>
            </router-link>
          </td>
          <td class="text-center">2018-06-22 16:05</td>
          <td class="text-center">9105</td>
          <td class="text-center">1100</td>
        </tr>
        <tr>
          <td>
            <router-link to="/js-monitor/fe-h-pc/js-details/1">
              <p class="title">ReferenceError: unknownVariable is not defined</p>
              <div class="sub-info">
                <p class="text-gray sub-bar">
                  <span>url: h.liepin.com/resumemanage/showmytalentlist</span>
                </p>
                <p class="text-gray sub-bar">
                  <span>file: https://concat.lietou-static.com/fe-msk-pc/v5/static/js/loader.js</span>
                </p>
                <p class="text-gray sub-bar">
                  <span class="mr">row:1 </span>
                  <span class="mr">col:1032131</span>
                </p>
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
    line-height: 24px;
  }

</style>
