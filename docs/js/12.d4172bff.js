(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"25c7":function(t,e,n){"use strict";n("99d8")},"99d8":function(t,e,n){},ec00:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"max-width":"800px",width:"100%"}},[n("q-calendar",{ref:"calendar",staticStyle:{height:"400px"},attrs:{view:"day",locale:"en-us"},scopedSlots:t._u([{key:"day-container",fn:function(e){return[n("div",{staticClass:"day-view-current-time-indicator",style:t.style}),n("div",{staticClass:"day-view-current-time-line",style:t.style})]}}]),model:{value:t.currentDate,callback:function(e){t.currentDate=e},expression:"currentDate"}})],1)},i=[],a=n("384e"),s={data:function(){return{currentDate:void 0,currentTime:void 0,intervalId:null,timeStartPos:0}},mounted:function(){var t=this;this.adjustCurrentTime(),this.intervalId=setInterval((function(){t.adjustCurrentTime()}),6e4)},beforeDestroy:function(){clearInterval(this.intervalId)},computed:{style:function(){return{top:this.timeStartPos+"px"}}},methods:{adjustCurrentTime:function(){var t=new Date,e=a["a"].parseDate(t);this.currentDate=e.date,this.currentTime=e.time,this.timeStartPos=this.$refs.calendar.timeStartPos(this.currentTime)}}},c=s,u=(n("25c7"),n("2877")),l=Object(u["a"])(c,r,i,!1,null,null,null);e["default"]=l.exports}}]);