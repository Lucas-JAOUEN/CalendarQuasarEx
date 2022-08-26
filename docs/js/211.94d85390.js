(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[211],{bcf2:function(e,n,t){"use strict";t.r(n),n["default"]='<template>\n  <div class="row items-center" style="max-width: 800px; width: 100%; height: 421px;">\n    <div class="col-8 full-height">\n      <div class="row justify-center items-center" style="height: 30px;">\n        <q-btn flat dense label="Prev" @click="calendarPrev" />\n        <q-separator vertical />\n        <q-btn flat dense label="Next" @click="calendarNext" />\n      </div>\n      <q-separator />\n      <q-calendar\n        ref="calendar"\n        v-model="selectedDate"\n        view="day"\n        locale="en-us"\n        animated\n        @input="onModelChanged"\n        @click:date2="onClickDate2"\n        @click:day:header2="onClickDayHeader2"\n        @click:interval2="onClickInterval2"\n        @click:time2="onClickTime2"\n        @click:interval:header2="onClickIntervalHeader2"\n        style="height: 390px;"\n      />\n    </div>\n    <q-card class="events col-4 q-pa-xs full-height column justify-start items-start">\n      <q-item-section class="full-width">\n        <q-item-label>Events</q-item-label>\n        <q-item-label class="my-text-caption">New data appended to top</q-item-label>\n      </q-item-section>\n      <q-separator />\n      <div class="scroll overflow-auto" style="height: 360px; width: 100%;">\n        <div v-for="(event, index) in events" :key="index" class="col-12" style="font-size: 10px; line-height: 10px; max-height: 14px; min-height: 14px; padding: 2px 2px; white-space: nowrap;">\n          {{ event }}\n        </div>\n      </div>\n    </q-card>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      selectedDate: \'\',\n      events: []\n    }\n  },\n  methods: {\n    calendarNext () {\n      this.$refs.calendar.next()\n    },\n    calendarPrev () {\n      this.$refs.calendar.prev()\n    },\n    onModelChanged (date) {\n      this.events.unshift(`Model changed: ${date}`)\n    },\n    onClickDate2 (data) {\n      this.events.unshift(`click:date2: ${JSON.stringify(data)}`)\n    },\n    onClickDayHeader2 (data) {\n      this.events.unshift(`click:day:header2: ${JSON.stringify(data)}`)\n    },\n    onClickInterval2 (data) {\n      this.events.unshift(`click:interval2: ${JSON.stringify(data)}`)\n    },\n    onClickTime2 (data) {\n      this.events.unshift(`click:time2: ${JSON.stringify(data)}`)\n    },\n    onClickIntervalHeader2 (data) {\n      this.events.unshift(`click:interval:header2: ${JSON.stringify(data)}`)\n    }\n  }\n}\n<\/script>\n<style lang="sass" scoped>\n.my-text-caption\n  font-size: 0.7rem\n  font-weight: 400\n  line-height: .75rem !important\n  letter-spacing: 0.03333em\n</style>\n'}}]);