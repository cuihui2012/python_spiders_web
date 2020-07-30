<template>
  <div class="log">
    <el-divider content-position="left" class="line">日志记录</el-divider>
    <el-timeline>
      <el-timeline-item timestamp="2020-07-30 17:55:00">调整了一些生产配置（封版）</el-timeline-item>
      <el-timeline-item timestamp="2020-07-20 17:40:00">后台项目抽离配置文件，并引入日志框架</el-timeline-item>
      <el-timeline-item timestamp="2020-07-16 22:08:00">调度程序新增邮件通知功能</el-timeline-item>
      <el-timeline-item timestamp="2020-06-20 09:13:00">vue前台项目构建，新增爬虫调度程序、邮件通知</el-timeline-item>
      <el-timeline-item timestamp="2020-06-15 13:23:00">python后台项目构建，开发马蜂窝、安居客爬虫</el-timeline-item>
    </el-timeline>
    <el-divider content-position="left" class="line">遗留问题</el-divider>
    <el-timeline>
      <el-timeline-item>1、智联数据始终没能爬取成功，退而求其次爬取了BOSS直聘数据，后边可研究</el-timeline-item>
      <el-timeline-item>2、BOSS直聘数据爬虫易封IP，后期优化IP代理池</el-timeline-item>
      <el-timeline-item>3、练习项目，python后台只引入了轻量级web框架flask，类似于持久性框架、分页等未曾使用</el-timeline-item>
    </el-timeline>
    <el-divider content-position="left" class="line">注意事项</el-divider>
    <el-timeline>
      <el-timeline-item>1、生产部署时，后台项目配置文件config.ini文件SERVER_DEBUG置为0，否则前端无法调用接口</el-timeline-item>
      <el-timeline-item>2、生产环境，招聘爬虫暂不可用，没有安装配置浏览器以及chromedriver</el-timeline-item>
    </el-timeline>
  </div>
</template>

<style lang="less" scope>
.line {
  margin-bottom: 30px !important;
}
</style>