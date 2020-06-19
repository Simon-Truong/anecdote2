<template>
  <GChart type="GeoChart" :data="data" :settings="settings" :options="options" :events="chartEvents" />
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { GChart } from 'vue-google-charts';
import countries from './countries.js';

@Component({ components: { GChart } })
export default class GoogleCharts extends Vue {
  settings: any = {
    packages: ['geochart'],
    mapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  };

  options: { [key: string]: string | number } = {
    // displayMode: 'text',
    height: 600,
  };

  chartEvents: { [key: string]: (obj: { region: string }) => void } = {
    regionClick: ({ region }) => {
      console.log({ region });
    },
  };

  countryData: Array<Array<string | number>> = countries.map((country) => [country, Math.floor(Math.random() * 10000)]);

  data: Array<Array<string | number>> = [['Country', 'Anecdotes'], ...this.countryData];
}
</script>

<style lang="scss" scoped></style>
