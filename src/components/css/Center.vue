<template>
    <div class="center">
        <p>水平垂直居中</p>
        <p>1、块级元素：position:absolute + transform: translate(-50%,-50%) + top: 50% + left：50%</p>
        <div class="container div-position">
            <div class="item">
                1
            </div>
        </div>
        <p>2、利用grid布局，划分成3x3栅格，第二行第二列格子垂直水平居中</p>
        <div class="container div-grid">
            <div class="item">
                <span>2</span>
            </div>
        </div>
        <p>3、利用flex布局justify-content: center;和align-items: center;属性居中。</p>
        <div class="container div-flex">
            <div class="item">
                <span>3</span>
            </div>
        </div>
        <p>4、绝对定位加四边定位为0</p>
        <div class="container div-absolute">
            <div class="item">
                4
            </div>
        </div>
        <p>5、对于子级是块级元素，父级元素同样用display: table-cell;和vertical-align: middle;属性实现垂直居中，水平方向居中用margin: 0 auto;</p>
        <div class="container div-table">
            <div class="item">
                5
            </div>
        </div>
        <p>6、子元素是内联元素</p>
        <div class="container div-normal">
            6
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.center{
    .container{
        background: #ffff00;
        width: 200px;
        height: 200px;
        .item{
            width: 100px;
            height: 100px;
            background-color: #cccccc;
        }
    }
    p{
        font-weight: 800;
        margin-top: 20px;
    }
    .div-position{
        position: relative;
        div{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
    .div-grid{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        div{
            grid-row-start: 2;
            grid-column-start: 2;
            text-align: center;
            line-height: 100px; // 子元素为内联元素，父级设置line-height 与height相同
        }
    }
    .div-flex{
        display: flex;
        justify-content: center;
        align-items: center;
        div{
            display: table-cell;
            vertical-align: middle;

        }
    }
    .div-absolute{
        position: relative;
        .item{
            width: 100px;
            height: 100px;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            position: absolute;
        }
    }
    .div-table{
        display: table-cell;
        vertical-align: middle;
        .item{
            margin: 0 auto;
        }
    }
    .div-normal{
        text-align: center;
        line-height: 200px;
    }
}
</style>
