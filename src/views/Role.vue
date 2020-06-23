<template>
  <div class="role">
    <el-table :data="tableData" border="" style="width: 100%">
      <el-table-column prop="date" label="机构名称"></el-table-column>
      <el-table-column prop="name" label="机构等级"></el-table-column>
      <el-table-column prop="address" label="上级机构"></el-table-column>
      <el-table-column prop="date" label="联系电话"></el-table-column>
      <el-table-column prop="name" label="邮箱"></el-table-column>
      <el-table-column prop="address" label="网址"></el-table-column>
      <el-table-column prop="date" label="地址"></el-table-column>
      <el-table-column prop="name" label="创建时间"></el-table-column>
      <el-table-column prop="address" label="更新时间"></el-table-column>
      <el-table-column prop="date" label="备注"></el-table-column>
      <el-table-column label="操作" class="oper">
        <p>分配权限</p>
        <p>
          <i class="el-icon-plus"></i>添加
        </p>
        <p>
          <i class="el-icon-edit"></i>修改
        </p>
        <p>
          <i class="el-icon-delete"></i>删除
        </p>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.el-table-column  {
  p {
    display: inline-block;
  }
}
</style>
