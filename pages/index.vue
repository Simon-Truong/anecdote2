<template>
  <v-container class="pt-0" fluid>
    <v-row>
      <v-col cols="12" class="pt-0">
        <GoogleCharts />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import GoogleCharts from '../components/google-charts.vue';

@Component({ components: { GoogleCharts } })
export default class Home extends Vue {}
</script>

<style lang="scss" scoped></style>
