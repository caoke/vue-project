<template>
    <div id="datePicker" class="date-picker">
        <div data-v-d05e5472="" class="el-date-editor el-range-editor el-input__inner el-date-editor--daterange is-active">
            <i class="el-input__icon el-range__icon el-icon-date"></i>
            <input autocomplete="off" v-model="startDate" placeholder="开始日期" name="" class="el-range-input" @focus="switchShowPicker(true)">
            <span class="el-range-separator">至</span>
            <input autocomplete="off" v-model="endDate" placeholder="结束日期" name="" class="el-range-input" @focus="switchShowPicker(true)">
            <span class="el-range-separator">共</span>
            <input autocomplete="off" v-model="dateData.pickerDate.length" placeholder="天数" name="" class="el-range-total-input" @focus="switchShowPicker(true)">
            <span class="el-range-separator">天</span>
            <i class="el-input__icon el-range__close-icon el-icon-circle-close" @click="clear"></i>
        </div>
        <!-- <div>
            <i class="el-input__icon el-range__icon el-icon-date"></i>
            <input autocomplete="off" v-model="startDate" placeholder="开始日期" name="" class="el-range-input" @focus="switchShowPicker(true)">
            <span class="el-range-separator">至</span>
            <input autocomplete="off" v-model="endDate" placeholder="结束日期" name="" class="el-range-input">
            <i class="el-input__icon el-range__close-icon"></i>
        </div> -->
        <div v-show="showPicker" class="date-section">
            <div class="el-date-picker-panel__body_wrapper">
                <div class="el-picker-panel__body-wrapper">
                    <div class="el-picker-panel__body">
                        <div class="el-date-picker__header">
                            <button type="button" aria-label="前一年" class="el-picker-panel__icon-btn el-date-picker__prev-btn el-icon-d-arrow-left" @click="preYear"></button>
                            <button v-show="showTable === 'date'" type="button" aria-label="上个月" class="el-picker-panel__icon-btn el-date-picker__prev-btn el-icon-arrow-left" @click="preMouth"></button>
                            <span role="button" class="el-date-picker__header-label" @click="showAllYears">{{hearYearDes}}</span>
                            <span v-show="showTable == 'mouth' || showTable === 'date'" role="button" class="el-date-picker__header-label" @click="showAllMouths">{{hearMouthDes}}</span>
                            <button type="button" aria-label="后一年" class="el-picker-panel__icon-btn el-date-picker__next-btn el-icon-d-arrow-right" @click="nextYear"></button>
                            <button v-show="showTable === 'date'" type="button" aria-label="下个月" class="el-picker-panel__icon-btn el-date-picker__next-btn el-icon-arrow-right" @click="nextMouth"></button>
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
                                    <tr>
                                        <th v-for="week in dateData.weekData" :key="week">{{week}}</th>
                                    </tr>
                                    <tr v-for="(rows,trIndex) in dateData.dates" :key="trIndex">
                                        <td v-for="(date) in rows" :key="date.date"
                                            :class="[date.class, {'current': dateData.pickerDate.includes(date.fullDate)}]"
                                            @click="pickDate(date)">
                                            <div>
                                                <span>{{date.date}}</span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table v-show="showTable === 'time'" class="el-time-table">

                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="el-picker-panel__footer">
                <button type="button" class="el-button el-picker-panel__link-btn el-button--text el-button--mini" @click="clear">
                    <span>清空</span>
                </button>
                <button type="button" class="el-button el-picker-panel__link-btn el-button--default el-button--mini is-plain" @click="ok">
                    <span>确定</span>
                </button>
            </div>
            <div class="date-picker-panel__arrow">
                <i class="el-icon-caret-top"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['value'],
  data () {
    return {
      startDate: '',
      endDate: '',
      trs: [0, 1, 2],
      tds: [0, 1, 2, 3],
      showPicker: false,
      showTable: 'date',
      selectDate: '',
      hearYearDes: '',
      hearMouthDes: '',
      hearDateDes: '',
      dateData: {
        weekData: ['日', '一', '二', '三', '四', '五', '六'],
        currentWeek: new Date().getDay(),
        currentDate: new Date().getDate(),
        dates: [],
        pickerDate: []
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
  watch: {
    value () {

    },
    'dateData.pickerDate' (nv) {
      this.selectDate = nv.join(',')
      this.getMinAndMax()
    }
  },
  methods: {
    /**
       * 显示选择器
       */
    switchShowPicker (flag) {
      this.showPicker = flag
    },
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
      this.showAllDates()
    },
    /**
     * 选中日期
     */
    pickDate (date) {
      if (!this.dateData.pickerDate.includes(date.fullDate)) {
        this.dateData.pickerDate.push(date.fullDate)
      } else {
        let index = this.dateData.pickerDate.indexOf(date.fullDate)
        this.dateData.pickerDate.splice(index, 1)
      }
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
    /**
     * 显示所有日期
     */
    showAllDates (type) {
      let row = []
      let date
      if (type === 'init') {
        date = new Date(`${this.yearData.currentYear}-${1 + this.mouthData.currentMouth}-01`)
      } else {
        date = new Date(`${this.yearData.pickerYear}-${1 + this.mouthData.pickerMouth}-01`)
      }
      let week = date.getDay()

      let rowIndex = Math.floor(date.getDate() / 7)
      // 上个月和当前月第一行的数据
      for (let r = 0; r <= rowIndex; r++) {
        // week左边的数据
        for (let i = 0; i < week; i++) {
          let newDate = new Date(date.getTime() - (week - i - (rowIndex - r) * 7) * 24 * 60 * 60 * 1000)
          let obj = {
            date: newDate.getDate(),
            class: newDate.getDate() > 1 ? 'prev-month' : 'available',
            week: newDate.getDay(),
            fullDate: this.formatDate(newDate)
          }
          row[i] = obj
        }
        // week那一列右边的数据
        for (let k = week; k < 7; k++) {
          let newDate = new Date(date.getTime() + (k - week - (rowIndex - r) * 7) * 24 * 60 * 60 * 1000)
          let obj = {
            date: newDate.getDate(),
            class: 'available',
            week: newDate.getDay(),
            fullDate: this.formatDate(newDate)
          }
          if (r === rowIndex && k === week) {
            obj.class += ' today'
          }
          row[k] = obj
        }
        this.dateData.dates[r] = row
        row = []
      }
      // 当月除了第一行的数据 和 下个月的数据
      for (let r2 = rowIndex + 1; r2 < 6; r2++) {
        // week那一列左边的数据
        for (let i = 0; i < week; i++) {
          let newDate = new Date(date.getTime() + (r2 * 7 - week + i) * 24 * 60 * 60 * 1000)
          let obj = {
            date: newDate.getDate(),
            class: r2 > 3 && newDate.getDate() <= 14 ? 'next-month' : 'available',
            week: newDate.getDay(),
            fullDate: this.formatDate(newDate)
          }
          row[i] = obj
        }
        // week那一列以及右边的数据
        for (let k = week; k < 7; k++) {
          let newDate = new Date(date.getTime() + (r2 * 7 + k - week) * 24 * 60 * 60 * 1000)
          let obj = {
            date: newDate.getDate(),
            class: r2 > 3 && newDate.getDate() <= 14 ? 'next-month' : 'available',
            week: newDate.getDay(),
            fullDate: this.formatDate(newDate)
          }
          if (r2 === rowIndex && k === week) {
            obj.class += ' today'
          }
          row[k] = obj
        }
        this.dateData.dates[r2] = row
        row = []
      }
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
      this.showAllDates()
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
      this.showAllDates()
    },
    /**
     * 上个月
     */
    preMouth () {
      if (this.mouthData.pickerMouth) {
        this.mouthData.pickerMouth--
      } else {
        this.yearData.pickerYear--
        this.mouthData.pickerMouth = 11
      }
      this.hearYearDes = this.yearData.pickerYear + ' 年'
      this.hearMouthDes = this.mouthData.pickerMouth + 1 + ' 月'
      this.showAllDates()
    },
    /**
     * 下个月
     */
    nextMouth () {
      if (this.mouthData.pickerMouth === 11) {
        this.yearData.pickerYear++
        this.mouthData.pickerMouth = 0
      } else {
        this.mouthData.pickerMouth++
      }
      this.hearYearDes = this.yearData.pickerYear + ' 年'
      this.hearMouthDes = this.mouthData.pickerMouth + 1 + ' 月'
      this.showAllDates()
    },
    /**
     * 格式化日期
     */
    formatDate (time) {
      var d = time
      var str = ''
      var a = [d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds()]
      for (var i = 0, len = a.length; i < len; i++) {
        if (a[i] < 10) {
          a[i] = '0' + a[i]
        }
      }
      str = a[0] + '-' + a[1] + '-' + a[2]
      return str
    },
    /**
     * 清空
     */
    clear () {
      this.dateData.pickerDate = []
    },
    /**
     * 确定
     */
    ok () {
      this.switchShowPicker(false)
      this.$emit('getDate', this.dateData.pickerDate)
    },
    /**
     * 获取数组中最小的值或者最大的值
     */
    getMinAndMax () {
      let newArr = this.dateData.pickerDate.map(item => {
        return item
      })
      console.log(newArr.sort())
      this.startDate = newArr[0]
      this.endDate = newArr[newArr.length - 1]
    },
    init () {
      let date = new Date()
      this.hearYearDes = date.getFullYear() + ' 年'
      this.hearMouthDes = date.getMonth() + 1 + ' 月'
      this.showAllDates('init')
    }
  },
  mounted () {
    this.init()
    window.addEventListener('click', (event) => {
      let e = event || window.event // 浏览器兼容性
      let elem = e.target || e.srcElement
      while (elem) {
        if (elem && elem.id && elem.id === 'datePicker') {
          break
        } else {
          elem = elem.parentNode
        }
      }
      if (!elem) {
        this.switchShowPicker(false)
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.date-picker{
    .el-range-total-input{
            width: 20px;
            border: none;
            text-align: center
        }
    .date-section{
        position: absolute;
        top:50px;
        z-index: 100;
        color: #606266;
        width:  322px;
        border: 1px solid #e4e7ed;
        -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        background: #fff;
        border-radius: 4px;
        line-height: 30px;
        margin: 5px 0;
        .el-picker-panel__content{
            table{
                width: 100%;
            }
        }
        .date-picker-panel__arrow{
            position: absolute;
            top: -16px;
            left: 30px;
            .el-icon-caret-top{
                color: #ffffff;
                font-size: 18px;
            }
        }
    }
}

</style>
