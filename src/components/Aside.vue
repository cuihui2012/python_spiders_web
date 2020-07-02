<template>
  <el-aside width="226px" class="aside">
    <p class="logo">
      <i class="el-icon-platform-eleme" style="color: rgb(48, 64, 149);margin-right: 5px;"></i>爬虫数据一览
    </p>
    <el-menu
      router
      default-active="/hotSpots"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#202020"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item
        v-for="menu in navTab"
        :key="menu.id"
        :index="menu.url"
        :title="menu.title"
        @click="checked"
      >
        <i :class="menu.icon"></i>
        <span slot="title">{{$t(menu.title)}}</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>
<script>
import common from "../assets/common.js";
export default {
  name: "Aside",
  data() {
    return {
      navTab: [
        {
          id: 1,
          url: "/hotSpots",
          icon: "el-icon-odometer",
          title: "common.hotSpotsName"
        },
        {
          id: 2,
          url: "/xianHome",
          icon: "el-icon-share",
          title: "common.xianHomeName"
        },
        {
          id: 3,
          url: "/role",
          icon: "el-icon-pie-chart",
          title: "common.roleManageName"
        },
        {
          id: 4,
          url: "/user",
          icon: "el-icon-user",
          title: "common.operatorManageName"
        },
        {
          id: 5,
          url: "/tag",
          icon: "el-icon-s-platform",
          title: "common.deviceManageName"
        },
        {
          id: 6,
          url: "/use",
          icon: "el-icon-menu",
          title: "common.AppManegeName"
        },
        {
          id: 7,
          url: "/task",
          icon: "el-icon-tickets",
          title: "common.TaskManageName"
        }
      ],
      navTitle: ""
    };
  },
  methods: {
    checked: function(e) {
      let _this = this;
      _this.navTitle = e.$attrs.title
      //$emit这个方法会触发一个事件
      common.$emit("myFun", _this.navTitle);
    }
  }
};
</script>

<style lang="less" scoped>
.el-menu {
  border: none;
}
.el-menu-item,
.el-submenu__title {
  height: 44px;
  line-height: 44px;
}
.el-menu-item {
  i {
    color: #7b87d1;
  }
}
.aside {
  background: #202020;
  .logo {
    font-size: 24px;
    line-height: 105px;
    text-align: center;
    color: #fff;
  }
}
</style>
