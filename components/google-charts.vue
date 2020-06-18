<template>
  <GChart type="GeoChart" :data="data" :settings="settings" />
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { GChart } from 'vue-google-charts';

@Component({ components: { GChart } })
export default class GoogleCharts extends Vue {
  settings: any = {
    packages: ['geochart'],
    mapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  };

  data: Array<Array<any>> = [
    ['Country', 'Popularity'],
    ['Germany', 200],
    ['United States', 300],
    ['Brazil', 400],
    ['Canada', 500],
    ['France', 600],
    ['RU', 700],
  ];
}
</script>

<style lang="scss" scoped></style>
