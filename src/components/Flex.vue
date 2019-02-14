<template>
    <div class="flex">
        <p class="title">本页用于说明flex布局的6个属性</p>
        <p class="tips">注意，设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效。</p>
        <a href="https://segmentfault.com/a/1190000017362497" target="_blank">资料参考</a>
        <ul>
            <li>

            </li>
        </ul>
        <section class="direction">
            <p>(1)flex-direction：控制主轴的方向</p>
            <el-select v-model="flexObject['flex-direction']">
                <el-option value="row"></el-option>
                <el-option value="row-reverse"></el-option>
                <el-option value="column"></el-option>
                <el-option value="column-reverse"></el-option>
            </el-select>
       </section>
       <section>
           <label>(2)flex-wrap：</label>
           <el-select v-model="flexObject['flex-wrap']">
                <el-option value="nowrap"></el-option>
                <el-option value="wrap"></el-option>
                <el-option value="wrap-reverse"></el-option>
            </el-select>
       </section>
       <section>
           <p>(3)flex-flow：该属性是flex-direction属性和flex-wrap属性的简写形式</p>
           <p class="tips">默认值： row nowrap</p>
       </section>
       <section>
           <label>(4)justify-content：</label>
           <el-select v-model="flexObject['justify-content']">
               <el-option value="flex-start"></el-option>
               <el-option value="flex-end"></el-option>
               <el-option value="center"></el-option>
               <el-option value="space-between"></el-option>
               <el-option value="space-around"></el-option>
           </el-select>
       </section>
       <section>
           <label>(5)align-items：</label>
           <el-select v-model="flexObject['align-items']">
               <el-option value="flex-start"></el-option>
               <el-option value="flex-end"></el-option>
               <el-option value="center"></el-option>
               <el-option value="baseline"></el-option>
               <el-option value="stretch"></el-option>
           </el-select>
       </section>
       <section>
           <label>(6)align-content：</label>
           <el-select v-model="flexObject['align-content']">
               <el-option value="flex-start"></el-option>
               <el-option value="flex-end"></el-option>
               <el-option value="center"></el-option>
               <el-option value="space-between"></el-option>
               <el-option value="space-around"></el-option>
               <el-option value="stretch"></el-option>
           </el-select>
       </section>
       <section>
           <div class="content" :style="flexObject">
                <div class="div1 div-wrap" :style="{order:order[0]}">
                    1
                    <el-input v-model="order[0]"></el-input>
                </div>
                <div class="div2 div-wrap" :style="{order:order[1]}">
                    2
                    <el-input v-model="order[1]"></el-input>
                </div>
                <div class="div3 div-wrap" :style="{order:order[2]}">
                    3
                    <el-input v-model="order[2]"></el-input>
                </div>
                <div class="div4 div-wrap" :style="{order:order[3]}">
                    4
                    <el-input v-model="order[3]"></el-input>
                </div>
                <div class="div5 div-wrap" :style="{order:order[4]}">
                    5
                    <el-input v-model="order[4]"></el-input>
                </div>
                <div class="div6 div-wrap" :style="{order:order[5]}">
                   6
                    <el-input v-model="order[5]"></el-input>
                </div>
                <div class="div7 div-wrap" :style="{order:order[6]}">
                    7
                    <el-input v-model="order[6]"></el-input>
                </div>
            </div>
       </section>
       <section>
           色子
           <ul class="tmp-style dian1">
               <li></li>
           </ul>
           <ul class="tmp-style dian2">
               <li></li>
               <li></li>
           </ul>
           <ul class="tmp-style dian3">
               <li></li>
               <li></li>
               <li></li>
           </ul>
           <ul class="tmp-style dian4">
               <div class="item">
                   <li></li>
                   <li></li>
               </div>
               <div class="item">
                  <li></li>
                  <li></li>
               </div>
           </ul>
           <ul class="tmp-style dian5">
               <div class="item">
                  <li></li>
                  <li></li>
               </div>
               <div class="item">
                   <li></li>
               </div>
               <div class="item">
                   <li></li>
                   <li></li>
               </div>
           </ul>
           <ul class="tmp-style dian6">
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
           </ul>
       </section>
    </div>
</template>

<script>
export default {
  data () {
    return {
      flexDirecion: '',
      flexObject: {
        'flex-direction': 'row',
        'flex-wrap': 'nowrap',
        'justify-content': 'flex-start',
        'align-items': 'flex-start',
        'align-content': 'flex-start',
        'flex-grow': 1
      },
      order: [1, 2, 3, 4, 5, 6, 7]
    }
  }
}
</script>

<style lang="scss" scoped>
.flex{
    .title{
        font-weight: 800;
    }
    .tips{
        color: red;
    }
    section{
        display: flex;
        align-items:center;
        margin: 10px 0px;
        .content{
            width: 60%;
            border: solid 1px #000000;
            display: flex;
            margin-left: 20px;
            .div-wrap{
                width: 20%;
                height: 100px;
                margin: 5px;
                background: #f1dc5f;
                border: dotted 1px #000000;
            }
            .div1{
                background: #f1dc5f;
            }
            .div2{
                width: 500px;
                height: 100px;
                background: #edfcdd;
            }
            .div3{
                height: 120px;
                background: #6cb5f1;
            }
            .div4{
                background: #25d159;
            }
            .div5{
                height: 60px;
                background: #f1dc5f;
            }
            .div6{
                background: #cc70c4;
            }
            .div7{
                background: #e25b0c;
            }
            .el-input__inner{

            }

        }
        .tmp-style{
            display: flex;
            width: 100px;
            height: 100px;
            margin: 10px;
            background: #333;
            border-radius: 10px;
            ul,li {
                margin: 0;
                padding: 0;
                list-style: none;
            }
            li{
                height: 30px;
                width: 30px;
                background: #ffffff;
                border-radius: 30px;
            }
            &.dian1{
                justify-content: center;
                align-items: center;
            }
            &.dian2{
                justify-content: space-between;
                align-items: center;
            }
            &.dian3{
                justify-content: space-between;
                align-items: flex-start;
                li{
                    &:nth-child(2){
                        align-self: center;
                    }
                    &:nth-child(3){
                        align-self: flex-end;
                    }
                }

            }
            &.dian4{
                display: flex;
                flex-wrap: wrap;
                align-content: space-between;
                .item{
                    flex-basis: 100%;
                    display: flex;
                    justify-content: space-between;
                }
            }
            &.dian5{
                display: flex;
                flex-wrap:wrap;
                align-content: space-between;
                .item{
                    flex-basis: 100%; //用于设置或检索弹性盒伸缩基准值
                    display: flex;
                    justify-content: space-between;
                    &:nth-child(2){
                        justify-content: center;
                    }
                }
            }
            &.dian6{
                flex-flow: row wrap;
                justify-content: space-between;
                align-content: space-between;
            }
        }
    }
}
</style>
