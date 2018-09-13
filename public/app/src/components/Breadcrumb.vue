<template>
  <section class="path">
    <dl v-for="(item, key) in data" :key="key">
      <template v-if="item.comp === 'port'">
        <dl class="select" @mouseover="showHandle" @mouseout="hideHandle">
          <dt><i class="iconfont icon-xiala"></i>{{$route.params.port.toUpperCase()}}</dt>
          <dd v-if="portDrop" @click="hideHandle">
            <router-link
              v-for="(item, key) in portData"
              :key="key"
              :to="`/js-monitor/js-list/${item}`"
            >
              {{item.toUpperCase()}}
            </router-link>
          </dd>
        </dl>
      </template>
      <template v-else-if="item.comp === 'static-domain'">
        <dl class="select" @mouseover="showHandle" @mouseout="hideHandle">
          <dt><i class="iconfont icon-xiala"></i>{{staticDomainData[0]}}</dt>
          <dd v-if="portDrop" @click="hideHandle">
            <router-link
              v-for="(item, key) in staticDomainData"
              :key="key"
              :to="``"
            >
              {{item.toUpperCase()}}
            </router-link>
          </dd>
        </dl>
      </template>
      <template v-else>
        <dt>
          <template v-if="item.url">
            <router-link :to="item.url">{{item.title}}</router-link>
          </template>
          <template v-else>
            {{item.title}}
          </template>
        </dt>
      </template>
    </dl>

  </section>
</template>

<script>
export default {
  name: 'Breadcrumb',
  props: ['data'],
  data(){
    return {
      portDrop: false,
      portData: ['fe-h-pc', 'fe-msk-pc', 'fe-mskh-pc', 'fe-clt'],
      staticDomainData: ['concat.lietou-static.com']
    }
  },
  methods: {
    hideHandle(){
      this.portDrop = false;
    },
    showHandle(){
      this.portDrop = true;
    }
  }
}
</script>

<style scoped lang="less">
  .path{
    font-size: 18px;
    line-height: 22px;
    height: 22px;
    color: #2D2F3C;
    margin-bottom: 30px;
    a{
      color: #2D2F3C;
      &:hover{ color: #4A90E2; }
    }
    dl{
      display: inline-block;
      margin-right: 5px;
      dt{
        display: inline-block;
        border: 1px solid #fff;
        border-radius: 5px;
      }
      &.select dt{
        cursor: pointer;
        i{color: #2D2F3C; margin-right: 5px;}
      }
      dd{
        position: absolute;
        z-index: 10;
        background: #fff;
        padding: 5px 0;
        border: 1px solid #eee;
        border-radius: 5px;
        line-height: 24px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        a{
          font-size: 14px;
          display: block;
          padding: 5px 16px;
          &:hover{
            //background: rgba(74, 144, 226, .1);
          }
        }
      }
      &:before{
        display: inline-block;
        content: '/';
        margin-right: 5px;
      }
      &:first-child{
        &:before{
          content: '';
          margin-right: 0;
        }
      }
    }
  }
</style>
