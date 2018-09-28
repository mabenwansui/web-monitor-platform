<template>
  <div class="box-space">
    <Breadcrumb :data="path" />
    <div class="header-btn-bar">
      <a href="javascript:;" class="btn btn-warning">申请追踪码</a>
    </div>
    <div class="header-info">
      <table>
        <tr>
          <td>
            <aside class="aside text-gray">创建时间 : 2018-08-31 18:23</aside>
            <p>追踪码 : fe12930218</p>
            <p>名称: IM长链接统计</p>
            <p class="text-gray">描述 : IM长链接统计IM长链接统计IM长链接统计IM长链接统计IM长链接统计</p>
          </td>
        </tr>
      </table>
    </div>
    <SearchBar />
    <Table :data="tableData" />
    <PagerBar />
  </div>
</template>
<script>
  import Breadcrumb from '@components/Breadcrumb'
  import SubMenu from '@components/SubMenu'
  import SearchBar from '@components/SearchBar'
  import Loading from '@components/Loading'
  import PagerBar from '@components/PagerBar'
  import Table from '@components/Table'
  export default {
    name: 'EventTrackingList',
    components: {Breadcrumb, SubMenu, SearchBar, Loading, PagerBar, Table},
    data(){
      return {
        tableData: [
          {
            url: 'h.liepin.com/resume/h.liepin.com/resume/h.liepin.com/resume/h.liepin.com/resume/  ',
            item2: 'item2-info',
            item3: 'item3-info',
            item4: 'item4-info',
            item5: 'item5-info',
            item6: 'item6-info',
            item7: 'item7-info'
          },
          {
            url: 'h.liepin.com/resume/',
            item2: 'item2-info',
            item3: 'item3-info',
            item4: 'item4-info',
            item5: 'item5-info',
            item6: 'item6-info',
            item7: 'item7-info'
          },
          {
            url: 'h.liepin.com/resume/',
            item2: 'item2-info',
            item3: 'item3-info',
            item4: 'item4-info',
            item5: 'item5-info',
            item6: 'item6-info',
            item7: 'item7-info'
          }
        ],
        path: [
          {
            title: '埋点监控',
            url: '/event-tracking/'
          },
          {
            title: 'fe12930218'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="less">
  .header-info{
    border: 1px solid #eee;
    border-top: 4px solid #F86C52;
    padding: 18px 25px;
    border-radius: 6px;
    //background: #E4E8FB;
    margin-bottom: 20px;
    table{
      width: 100%;
      td{
        line-height: 24px;
      }
      .aside{
        float: right;
      }
      .photo{
        width: 80px;
        height: 80px;
        overflow: hidden;
        border: 2px solid #4F5364;
        border-radius: 50%;
        vertical-align: middle;
      }
    }
  }
  .box-space{
    width: 100%; overflow: hidden; position: relative;
    .header-btn-bar{
      position: absolute;
      top: 19px;
      right: 30px;
      .btn{
        padding: 6px 15px;
      }
    }
  }
</style>
