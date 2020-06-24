<template>
  <v-container>
    <v-row class="h-8">
      <input id="search" v-model="query" type="text" class="h-6 border border-gray-900 border-solid px-1 py-1" name="search" @keyup.enter="search" />
      <button class="h-6 border border-solid border-gray-700 rounded custom-bg-grey ml-2 px-2" type="button" @click="search">Search</button>
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
  get CHART_HEIGHT(): number {
    return 600;
  }

  _selectedContinent: string = '_all';

  get selectedContinent(): string {
    return this._selectedContinent;
  }

  set selectedContinent(value: string) {
    this._selectedContinent = value;

    const options: { [key: string]: string | number } = {
      height: this.CHART_HEIGHT,
    };

    if (value !== Continent.all) {
      options.region = value;
    }

    this.options = options;
  }

  get continentOptions(): ContinentOption[] {
    return [
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
  }

  get settings(): any {
    return {
      packages: ['geochart'],
      mapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    };
  }

  options: { [key: string]: string | number } = {
    height: this.CHART_HEIGHT,
  };

  chartEvents: { [key: string]: (obj: { region: string }) => void } = {
    regionClick: ({ region }) => {
      console.log({ region });
    },
  };

  countryData: Array<Array<string | number>> = countries.map((country) => [country, Math.floor(Math.random() * 10000)]);

  data: Array<Array<string | number>> = [['Country', 'Anecdotes'], ...this.countryData];

  query: string = '';

  // TODO: refactor this with radio buttons
  search(): void {
    const options: { [key: string]: string | number } = {
      height: this.CHART_HEIGHT,
    };

    if (this.query) {
      options.region = this.query;
    }

    this.options = options;
  }
}
</script>

<style lang="scss" scoped>
.custom-bg-grey {
  background-color: rgb(239, 239, 239) !important;
}
</style>
