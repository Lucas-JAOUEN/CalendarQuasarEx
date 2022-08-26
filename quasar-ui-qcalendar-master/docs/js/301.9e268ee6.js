(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[301],{"65a2":function(n,e,s){"use strict";s.r(e),e["default"]='<template>\n  <div class="row justify-center full-width" style="max-width: 800px; width: 100%;">\n    <div class="row justify-center full-width q-pa-md">\n      <div class="q-gutter-sm column justify-center">\n        <div class="row justify-evenly q-gutter-sm" style="width: 400px;">\n          <span>Cell Min. Width</span>\n          <q-slider\n          v-model="minWidth"\n          label\n          label-always\n          :min="50"\n          :max="300"\n          :step="5"\n        />\n        </div>\n        <div class="row justify-evenly q-gutter-sm" style="width: 400px;">\n          <span>Max Days</span>\n          <q-slider\n            v-model="maxDays"\n            label\n            label-always\n            :min="1"\n            :max="100"\n          />\n        </div>\n      </div>\n    </div>\n    <div class="row justify-center" style="max-width: 100%;">\n\n      <div class="full-width q-ma-md q-pl-md"><strong>Custom Scheduler</strong></div>\n\n      <q-calendar\n        v-model="selectedDate"\n        view="custom-scheduler"\n        bordered\n        :resources="resources"\n        resource-key="name"\n        :resource-height="50"\n        :resource-width="120"\n        :max-days="maxDays"\n        :cell-width="minWidth + \'px\'"\n        locale="en-us"\n        style="height: 300px; max-width: 800px"\n      />\n\n      <div class="full-width q-ma-md q-pl-md"><strong>Month Scheduler</strong></div>\n\n      <q-calendar\n        v-model="selectedDate"\n        view="month-scheduler"\n        bordered\n        :resources="resources"\n        resource-key="name"\n        :resource-height="50"\n        :resource-width="120"\n        :max-days="maxDays"\n        :cell-width="minWidth + \'px\'"\n        locale="en-us"\n        style="height: 300px; max-width: 800px"\n      />\n    </div>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      selectedDate: \'\',\n      minWidth: 100,\n      maxDays: 7,\n      resources: [\n        { name: \'John\' },\n        {\n          name: \'Board Room\',\n          expanded: false,\n          children: [\n            { name: \'Room-1\' },\n            {\n              name: \'Room-2\',\n              expanded: false,\n              children: [\n                { name: \'Partition-A\' },\n                { name: \'Partition-B\' },\n                { name: \'Partition-C\' }\n              ]\n            }\n          ]\n        },\n        { name: \'Mary\' },\n        { name: \'Susan\' },\n        { name: \'Olivia\' }\n      ]\n    }\n  }\n}\n<\/script>\n'}}]);