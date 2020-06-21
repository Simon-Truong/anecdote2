<template>
  <v-container>
    <v-row>
      <input id="search" type="text" class="border border-gray-900 border-solid my-2 px-1 py-1" name="search" />
      <button class="border border-solid border-gray-700 rounded custom-bg-grey my-2 ml-2 px-2" type="button">Search</button>
    </v-row>

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
import ContinentOption, { Continent } from '../../models/continent-option.model';
import countries from './countries.js';

@Component({ components: { GChart } })
export default class GoogleCharts extends Vue {
  _selectedContinent: string = '_all';

  get selectedContinent(): string {
    return this._selectedContinent;
  }

  set selectedContinent(value: string) {
    this._selectedContinent = value;

    const options: { [key: string]: string | number } = {
      height: 600,
    };

    if (value !== Continent.all) {
      options.region = value;
    }

    this.options = options;
  }

  continentOptions: ContinentOption[] = [
    {
      id: Continent.all,
      label: 'World',
      value: '_all',
    },
    {
      id: Continent.africa,
      label: 'Africa',
      value: '002',
    },
    {
      id: Continent.europe,
      label: 'Europe',
      value: '150',
    },
    {
      id: Continent.americas,
      label: 'Americas',
      value: '019',
    },
    {
      id: Continent.asia,
      label: 'Asia',
      value: '142',
    },
    {
      id: Continent.oceania,
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

<style lang="scss" scoped>
.custom-bg-grey {
  background-color: rgb(239, 239, 239) !important;
}
</style>
