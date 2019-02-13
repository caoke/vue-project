<template>
    <div class="memory-game">
        <div class="text">{{runTimeText}}</div>
        <el-button type="primary" @click="resetCard">重新洗牌</el-button>
        <div class="section-warp">
            <section class="card-warp">
                <div v-for="(item,index) in cardData" :key="index" :class="['memory-card', {'filp': item.filp}]"  @click="!item.filp &flipCard($event, item, index)" :style="{order: item.order}">
                    <img class="font-face" :src="item.fontImg"/>
                    <img class="back-face" :src="item.jsImg" alt="JS Badge"/>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import Angular from '../assets/images/game/angular.svg'
import JsBadge from '../assets/images/game/js-badge.svg'
import Aurelia from '../assets/images/game/aurelia.svg'
import Ember from '../assets/images/game/ember.svg'
import React from '../assets/images/game/react.svg'
import Vue from '../assets/images/game/vue.svg'
import Backbone from '../assets/images/game/backbone.svg'

export default {
  data () {
    return {
      firstCard: null,
      secondCard: null,
      cardData: [
        {
          'fontImg': require('../assets/images/game/angular.svg'),
          'jsImg': JsBadge,
          filp: false,
          order: Math.floor(Math.random() * 12)
        },
        {
          'fontImg': Angular,
          'jsImg': JsBadge,
          filp: false,
          order: Math.floor(Math.random() * 12)
        },
        {
          'fontImg': Aurelia,
          'jsImg': JsBadge,
          filp: false,
          order: Math.floor(Math.random() * 12)
        },
        {
          'fontImg': Aurelia,
          'jsImg': JsBadge,
          filp: false,
          order: Math.floor(Math.random() * 12)
        },
        {
          'fontImg': Ember,
          'jsImg': JsBadge,
          filp: false,
          order: Math.floor(Math.random() * 12)
        },
        {
          'fontImg': Ember,
          'jsImg': JsBadge,
          filp: false,
          order: Math.floor(Math.random() * 12)
        },
        {
          'fontImg': Backbone,
          'jsImg': JsBadge,
          filp: false,
          order: Math.floor(Math.random() * 12)
        },
        {
          'fontImg': Backbone,
          'jsImg': JsBadge,
          filp: false,
          order: Math.floor(Math.random() * 12)
        },
        {
          'fontImg': React,
          'jsImg': JsBadge,
          filp: false,
          order: Math.floor(Math.random() * 12)
        },
        {
          'fontImg': React,
          'jsImg': JsBadge,
          filp: false,
          order: Math.floor(Math.random() * 12)
        },
        {
          'fontImg': Vue,
          'jsImg': JsBadge,
          filp: false,
          order: Math.floor(Math.random() * 12)
        },
        {
          'fontImg': Vue,
          'jsImg': JsBadge,
          filp: false,
          order: Math.floor(Math.random() * 12)
        }
      ],
      lockBoard: false,
      count: 0,
      time: '',
      firstClick: false,
      h: 0,
      m: 0,
      s: 0,
      runTime: null
    }
  },
  computed: {
    'runTimeText' () {
      let hh = this.h < 10 ? '0' + this.h : this.h
      let mm = this.m < 10 ? '0' + this.m : this.m
      let ss = this.s < 10 ? '0' + this.s : this.s
      return `${hh} : ${mm} : ${ss}`
    }
  },
  watch: {
    'count' (nv) {
      if (nv === 6) {
        clearInterval(this.runTime)
      }
    }
  },
  methods: {
    /**
         * 翻卡片
         */
    flipCard (e, data, index) {
      if (!this.firstClick) {
        this.firstClick = true
        this.runTime = setInterval(() => {
          this.startRun()
        }, 1000)
      }
      if (this.lockBoard) return
      if (data === this.firstCard) return

      data.filp = true
      if (!this.firstCard) {
        this.firstCard = data
        return
      }
      this.secondCard = data
      this.matchCard()
    },
    /**
         * 匹配卡片
         */
    matchCard () {
      let isMatch = this.firstCard.fontImg === this.secondCard.fontImg

      isMatch ? this.disableCards() : this.unflipCards()
    },
    disableCards () {
      this.count++
      this.resetBoard()
    },
    unflipCards () {
      let _this = this
      this.lockBoard = true
      setTimeout(function () {
        _this.firstCard.filp = false
        _this.secondCard.filp = false
        _this.resetBoard()
      }, 1000)
    },
    resetBoard () {
      [this.firstCard, this.secondCard] = [null, null]
      this.lockBoard = false
    },
    /**
         * 重新洗牌
         */
    resetCard () {
      this.cardData.forEach(card => {
        card.filp = false
        card.order = Math.floor(Math.random() * 12)
      })
      this.firstClick = false
      clearInterval(this.runTime)
      this.h = this.m = this.s = 0
    },
    /**
         * 开始计时
         */
    startRun () {
      if (this.s === 59) {
        if (this.m === 59) {
          this.h++
          this.m = 0
        } else {
          this.m++
          this.s = 0
        }
      } else {
        this.s++
      }
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
* {
    box-sizing: border-box;
}
.memory-game{
    .text{
        color: #1C7CCC;
        font-size: 16px;
        text-align: center;
    }
    .el-button{
        position: absolute;
        top:15px;
        right: 20px;
    }
    .section-warp{
        height: 90vh;
        background: #060AB2;
        display: flex;
        margin-top: 20px;
    }
    .card-warp{
        width: 640px;
        height: 640px;
        margin: auto;
        display: flex;
        flex-wrap: wrap;
        .memory-card{
            width: calc(25% - 10px);
            height: calc(33.333% - 10px);
            margin: 5px;
            position: relative;
            transform: scale(1);
            transform-style: preserve-3d;
            transition: transform .2s;
            box-shadow: 1px 1px 1px rgba(0,0,0,.3);
            img{
                width: 100%;
                height: 100%;
                padding: 20px;
                position: absolute;
                background: #1C7CCC;
                border-radius: 5px;
                backface-visibility: hidden;
            }
            &:active{
                transform: scale(0.97);
                transition: transform .2s;
            }
            &.filp{
                transform: rotateY(180deg);
            }
            .font-face{
                transform: rotateY(180deg);
            }
        }
    }
}
</style>
