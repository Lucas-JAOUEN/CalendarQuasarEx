(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[40],{"38be":function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("div",{staticClass:"q-gutter-sm q-mb-sm"},[e("q-checkbox",{attrs:{dense:"",label:"No active date"},model:{value:a.noActiveDate,callback:function(t){a.noActiveDate=t},expression:"noActiveDate"}}),e("q-checkbox",{attrs:{dense:"",label:"Disabled weekends"},model:{value:a.disabledDays,callback:function(t){a.disabledDays=t},expression:"disabledDays"}})],1),e("q-calendar",{staticStyle:{height:"400px"},style:a.styles,attrs:{view:"week-agenda","disabled-weekdays":a.disabledWeekdays,"no-active-date":a.noActiveDate,bordered:"",locale:"en-us"},scopedSlots:a._u([{key:"day-body",fn:function(t){var s=t.timestamp;return[a._l(a.getAgenda(s),(function(t){return[e("div",{key:s.date+t.time,staticClass:"justify-start q-ma-sm shadow-5 bg-grey-6",attrs:{label:t.time}},[t.avatar?e("div",{staticClass:"row justify-center",staticStyle:{"margin-top":"30px",width:"100%"}},[e("q-avatar",{staticStyle:{"margin-top":"-25px","margin-bottom":"10px","font-size":"60px","max-height":"50px"}},[e("img",{staticStyle:{border:"#9e9e9e solid 5px"},attrs:{src:t.avatar}})])],1):a._e(),e("div",{staticClass:"col-12 q-px-sm"},[e("strong",[a._v(a._s(t.time))])]),t.desc?e("div",{staticClass:"col-12 q-px-sm",staticStyle:{"font-size":"10px"}},[a._v("\n            "+a._s(t.desc)+"\n          ")]):a._e()])]}))]}}]),model:{value:a.selectedDate,callback:function(t){a.selectedDate=t},expression:"selectedDate"}})],1)},i=[],r={name:"ThemeBuilderAgenda",props:{value:String,styles:Object},data:function(){return{selectedDate:"",noActiveDate:!1,disabledDays:!1,agenda:{1:[{time:"08:00",avatar:"https://cdn.quasar.dev/img/boy-avatar.png",desc:"Meeting with CEO"},{time:"08:30",avatar:"https://cdn.quasar.dev/img/avatar.png",desc:"Meeting with HR"},{time:"10:00",avatar:"https://cdn.quasar.dev/img/avatar1.jpg",desc:"Meeting with Karen"}],2:[{time:"11:30",avatar:"https://cdn.quasar.dev/img/avatar2.jpg",desc:"Meeting with Alisha"},{time:"17:00",avatar:"https://cdn.quasar.dev/img/avatar3.jpg",desc:"Meeting with Sarah"}],3:[{time:"08:00",desc:"Stand-up SCRUM",avatar:"https://cdn.quasar.dev/img/material.png"},{time:"09:00",avatar:"https://cdn.quasar.dev/img/boy-avatar.png"},{time:"10:00",desc:"Sprint planning",avatar:"https://cdn.quasar.dev/img/material.png"},{time:"13:00",avatar:"https://cdn.quasar.dev/img/avatar1.jpg"}],4:[{time:"09:00",avatar:"https://cdn.quasar.dev/img/avatar3.jpg"},{time:"10:00",avatar:"https://cdn.quasar.dev/img/avatar2.jpg"},{time:"13:00",avatar:"https://cdn.quasar.dev/img/material.png"}],5:[{time:"08:00",avatar:"https://cdn.quasar.dev/img/boy-avatar.png"},{time:"09:00",avatar:"https://cdn.quasar.dev/img/avatar2.jpg"},{time:"09:30",avatar:"https://cdn.quasar.dev/img/avatar4.jpg"},{time:"10:00",avatar:"https://cdn.quasar.dev/img/avatar5.jpg"},{time:"11:30",avatar:"https://cdn.quasar.dev/img/material.png"},{time:"13:00",avatar:"https://cdn.quasar.dev/img/avatar6.jpg"},{time:"13:30",avatar:"https://cdn.quasar.dev/img/avatar3.jpg"},{time:"14:00",avatar:"https://cdn.quasar.dev/img/linux-avatar.png"},{time:"14:30",avatar:"https://cdn.quasar.dev/img/avatar.png"},{time:"15:00",avatar:"https://cdn.quasar.dev/img/boy-avatar.png"},{time:"15:30",avatar:"https://cdn.quasar.dev/img/avatar2.jpg"},{time:"16:00",avatar:"https://cdn.quasar.dev/img/avatar6.jpg"}]}}},beforeMount:function(){this.selectedDate=this.value},watch:{value:function(a){this.selectedDate=a}},methods:{getAgenda:function(a){return this.agenda[parseInt(a.weekday,10)]}},computed:{disabledWeekdays:function(){return!0===this.disabledDays?[0,6]:[]}}},d=r,n=e("2877"),c=e("8f8e"),v=e("cb32"),m=e("eebe"),p=e.n(m),l=Object(n["a"])(d,s,i,!1,null,null,null);t["default"]=l.exports;p()(l,"components",{QCheckbox:c["a"],QAvatar:v["a"]})}}]);