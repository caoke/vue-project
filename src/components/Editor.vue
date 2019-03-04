<template>
    <div class="editor">
        <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
            <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="活动时间">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"></el-date-picker>
        </el-form-item>
        <el-form-item label="活动时间">
            <date-picker type="date" v-model="form.date2" @getDate="getDate"></date-picker>
        </el-form-item>
        <el-form-item label="即时配送">
            <el-switch v-model="form.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="活动性质">
            <el-checkbox-group v-model="form.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源">
            <el-radio-group v-model="form.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式">
            <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="活动详情">
            <quill-editor
                v-model="form.content"
                ref="descriptionQuillEditor"
                class="editor"
                :options="editorOption">
        </quill-editor>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
        </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { quillEditor, Quill } from 'vue-quill-editor'
import {container, ImageExtend, QuillWatch} from 'quill-image-extend-module'
import DatePicker from './DatePicker.vue'
Quill.register('modules/ImageExtend', ImageExtend)
export default {
  components: {
    quillEditor,
    DatePicker
  },
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: [],
        delivery: '',
        type: '',
        resource: '',
        desc: '',
        content: ''
      },
      editorOption: {
        modules: {
          ImageExtend: {
            loading: true,
            name: 'img',
            action: '',
            response: (res) => {
              return res.info
            }
          },
          toolbar: {
            container: container,
            handlers: {
              'image': function () {
                QuillWatch.emit(this.quill.id)
              }
            }
          }
        }
      }
    }
  },
  computed: {
    editor () {
      return this.$refs.descriptionQuillEditor.quill
    }
  },
  methods: {
    onSubmit () {
      console.log(this.form)
    },
    getDate (array) {
      this.form.date2 = array
      console.log(this.form.date2)
    },
    getTargetDom (e) {
      console.log(e)
    }
  },
  mounted () {

  }
}
</script>

<style lang="scss" scoped>
.editor{
    background: #ffffff;
    padding: 10px 10px;
}
</style>

<style>
.ql-snow .ql-picker{
    height: 40px;
    padding: 0px;
}
</style>
