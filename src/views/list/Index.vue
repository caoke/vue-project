<template>
    <box-content>
        <el-table size="mini" :data="list">
            <el-table-column v-for="(item,index) in headers" :label="item.label" :key="index" :prop="item.prop"></el-table-column>
        </el-table>
        <el-pagination class="float-right"
            @size-change="handleSizeChange"
            @current-change="handleCurrentPage"
            :current-page="pageNum"
            :page-sizes="pageSizes"
            :page-size="pageSize"
            :layout="pageLayout"
            :total="totalCount">
        </el-pagination>
    </box-content>
</template>

<script>
import listMixins from '@/mixins/list'
export default {
  name: 'list',
  mixins: [listMixins],
  data () {
    return {
      loading: false,
      headers: [
        {
          label: 'id',
          prop: 'id'
        },
        {
          label: '负责人',
          prop: 'authors'
        }
      ],
      list: [] // 列表数据
    }
  },
  methods: {
    /**
     * 获取数据
     */
    query () {
      let option = {
        pageSize: this.pageSize,
        startPage: this.pageNum
      }
      this.$util.postRequest(this, this.apiPath.list, option, (res) => {
        this.list = res.data.list
        this.totalCount = res.data.totalNum
      })
    },
    axiosQuery () {
      let option = {
        pageSize: this.pageSize,
        startPage: this.pageNum
      }
      this.axios.post(this.apiPath.list, option)
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  },
  mounted () {
    // this.query()
    // this.axiosQuery()
  }
}
</script>

<style>

</style>
