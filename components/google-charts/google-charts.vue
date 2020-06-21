<template>
  <v-container>
    <v-row class="flex justify-around">
      <span v-for="continentOption in continentOptions" :key="continentOption.id">
        <input :id="continentOption.id" v-model="selectedContinent" type="radio" name="region" :value="continentOption.value" />
        <label :for="continentOption.id">{{ continentOption.label }}</label>
      </span>
    </v-row>

    <GChart type="GeoChart" :data="data" :settings="settings" :options="options" :events="chartEvents" />
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { GChart } from 'vue-google-charts';
import ContinentOption from '../../models/continent-option.model';
import countries from './countries.js';

@Component({ components: { GChart } })
export default class GoogleCharts extends Vue {
  selectedContinent: string = 'world';

  continentOptions: ContinentOption[] = [
    {
      id: 'world',
      label: 'World',
      value: 'world',
    },
    {
      id: 'africa',
      label: 'Africa',
      value: '002',
    },
    {
      id: 'europe',
      label: 'Europe',
      value: '150',
    },
    {
      id: 'americas',
      label: 'Americas',
      value: '019',
    },
    {
      id: 'asia',
      label: 'Asia',
      value: '142',
    },
    {
      id: 'oceania',
      label: 'Oceania',
      value: '009',
    },
  ];

  settings: any = {
    packages: ['geochart'],
    mapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  };

  options: { [key: string]: string | number } = {
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
