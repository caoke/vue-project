const listMixins = {
  data () {
    return {
      pageNum: 1,
      pageSize: 10,
      pageSizes: [10, 20, 30, 40, 50],
      totalCount: 0,
      pageLayout: 'total, sizes, prev, pager, next, jumper' // 分页布局
    }
  },
  methods: {
    // 页码改变
    handleCurrentPage (val) {
      this.pageNum = val
      this.query()
    },
    // 页长改变
    handleSizeChange (val) {
      this.pageSize = val
      this.query()
    },
    /**
     * 列表数据请求成功的回调
     */
    listSuccessCb () {

    }
  }
}
export default listMixins
