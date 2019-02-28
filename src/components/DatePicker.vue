<template>
    <div class="">
        <div class="el-date-editor el-input el-input--prefix el-input--suffix el-date-editor--date">
            <input type="text" autocomplete="off" name="" placeholder="选择日期" class="el-input__inner">
        </div>
        <div class="date-picker">
            <div class="el-date-picker-panel__body_wrapper">
                <div class="el-picker-panel__body-wrapper">
                    <div class="el-picker-panel__body">
                        <div class="el-date-picker__header">
                            <button type="button" aria-label="前一年" class="el-picker-panel__icon-btn el-date-picker__prev-btn el-icon-d-arrow-left" @click="preYear"></button>
                            <span role="button" class="el-date-picker__header-label" @click="showAllYears">{{hearYearDes}}</span>
                            <span v-show="showTable == 'mouth' || showTable === 'date'" role="button" class="el-date-picker__header-label" @click="showAllMouths">{{hearMouthDes}}</span>
                            <button type="button" aria-label="后一年" class="el-picker-panel__icon-btn el-date-picker__next-btn el-icon-d-arrow-right" @click="nextYear"></button>
                        </div>
                        <div class="el-picker-panel__content">
                            <table v-show="showTable === 'year'" class="el-year-table">
                                <tbody>
                                    <tr v-for="n in trs" :key="n">
                                        <td v-for="k in tds"
                                            :key="3 * n + k + n"
                                            @click="pickYear(3 * n + k + n)"
                                            :class="{ 'current': yearData.pickerYear == yearData.years[3 * n + k + n], 'today': yearData.currentYear == yearData.years[3 * n + k + n]}">
                                            <span href="javascript:;" class="cell">{{yearData.years[3 * n + k + n]}}</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table v-show="showTable === 'mouth'" class="el-month-table">
                                <tbody>
                                    <tr v-for="n in trs" :key="n-1">
                                        <td v-for="k in tds"
                                            :key="3 * n + k + n"
                                            @click="pickMouth(3 * n + k + n)"
                                            :class="{ 'current': mouthData.pickerMouth === 3 * n + k + n, 'today': mouthData.currentMouth === 3 * n + k + n}">
                                            <span href="javascript:;" class="cell">{{mouthData.mouths[3 * n + k + n]}}</span>
                                        </td>
                                    </tr>
                                </tbody>

                            </table>
                            <table v-show="showTable === 'date'" class="el-date-table">
                                <tbody>
                                    <tr></tr>
                                </tbody>
                            </table>
                            <table v-show="showTable === 'time'" class="el-time-table">

                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="el-picker-panel__footer">

            </div>
            <div class="date-picker-panel__arrow">

            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      trs: [0, 1, 2],
      tds: [0, 1, 2, 3],
      showTable: 'year',
      hearYearDes: '',
      hearMouthDes: '',
      hearDateDes: '',
      dateData: {
        weekData: ['日', '一', '二', '三', '四', '五', '六']
      },
      yearData: {
        currentYear: new Date().getFullYear(),
        pickerYear: new Date().getFullYear(),
        years: []
      },
      mouthData: {
        currentMouth: new Date().getMonth(),
        pickerMouth: new Date().getMonth(),
        mouths: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
      }
    }
  },
  methods: {
    /**
    * 选中年份
    */
    pickYear (key) {
      this.yearData.pickerYear = this.yearData.years[key]
      this.hearYearDes = this.yearData.pickerYear + ' 年'
      this.hearMouthDes = ''
      this.showTable = 'mouth'
    },
    /**
    * 选中月份
    */
    pickMouth (key) {
      this.mouthData.pickerMouth = key
      this.showTable = 'date'
      this.hearYearDes = this.yearData.pickerYear + ' 年'
      this.hearMouthDes = 1 + key + ' 月'
    },
    /**
     * 显示所有年
     */
    showAllYears () {
      // if (this.showTable === 'year') return false
      let preYear = this.yearData.pickerYear.toString().substring(0, 3)
      for (let i = 0; i < 10; i++) {
        this.yearData.years[i] = `${preYear}${i}`
      }
      this.hearYearDes = `${preYear}0 年 - ${preYear}9 年`
      this.showTable = 'year'
    },
    /**
     *展示所有月份
     */
    showAllMouths () {
      if (this.showTable === 'date') {
        // this.hearMouthDes = this.mouthData.mouths[this.mouthData.pickerMouth]
      }
      this.hearYearDes = this.yearData.pickerYear + ' 年'
      this.hearMouthDes = ''
      this.showTable = 'mouth'
    },
    selectYear () {

    },
    /**
     * 下一年
     */
    nextYear () {
      if (this.showTable === 'year') {
        let length = this.yearData.years.length
        for (let i = 0; i < length; i++) {
          this.yearData.years[i] = 10 + Number(this.yearData.years[i])
        }
        this.yearData.years.push('')
        this.yearData.years.pop()
        this.hearYearDes = `${this.yearData.years[0]}年 - ${this.yearData.years[9]}年`
      } else {
        this.yearData.pickerYear++
        this.hearYearDes = this.yearData.pickerYear + ' 年'
      }
    },
    /**
     * 上一年
     */
    preYear () {
      if (this.showTable === 'year') {
        let length = this.yearData.years.length
        for (let i = 0; i < length; i++) {
          this.yearData.years[i] = Number(this.yearData.years[i]) - 10
        }
        this.yearData.years.push('')
        this.yearData.years.pop()
        this.hearYearDes = `${this.yearData.years[0]}年 - ${this.yearData.years[9]}年`
      } else {
        this.yearData.pickerYear--
        this.hearYearDes = this.yearData.pickerYear + ' 年'
      }
    },
    init () {
      let date = new Date()
      // this.hearMouthDes = this.mouthData.mouths[date.getMonth()]
      this.hearYearDes = date.getFullYear() + '年'
      this.showAllYears()
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style lang="scss" scoped>
.date-picker{
    color: #606266;
    width:  322px;
    border: 1px solid #e4e7ed;
    -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    background: #fff;
    border-radius: 4px;
    line-height: 30px;
    margin: 5px 0;
    .el-date-picker__header{
        margin: 12px;
        text-align: center;
    }
    .el-picker-panel__content{
        width: 292px;
        position: relative;
        margin: 15px;
        table{
            table-layout: fixed;
            width: 100%;
            .mouth-table{
                font-size: 12px;
                border-collapse: collapse;
            }
        }

    }
}
</style>
