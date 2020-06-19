<template>
  <v-container class="pt-0" fluid>
    <v-row>
      <v-col cols="12" class="pt-0">
        <v-row class="flex justify-around">
          <span>
            <input id="world" v-model="selectedContinent" type="radio" name="region" value="world" />
            <label for="world">World</label>
          </span>

          <span>
            <input id="africa" v-model="selectedContinent" type="radio" name="region" value="002" />
            <label for="africa">Africa</label>
          </span>

          <span>
            <input id="europe" v-model="selectedContinent" type="radio" name="region" value="150" />
            <label for="europe">Europe</label>
          </span>
          <span>
            <input id="americas" v-model="selectedContinent" type="radio" name="region" value="019" />
            <label for="americas">Americas</label>
          </span>
          <span>
            <input id="asia" v-model="selectedContinent" type="radio" name="region" value="142" />
            <label for="asia">Asia</label>
          </span>
          <span>
            <input id="oceania" v-model="selectedContinent" type="radio" name="region" value="009" />
            <label for="oceania">Oceania</label>
          </span>
        </v-row>

        <GoogleCharts />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import GoogleCharts from '../components/google-charts/google-charts.vue';

@Component({ components: { GoogleCharts } })
export default class Home extends Vue {
  selectedContinent: string;
}
</script>

<style lang="scss" scoped></style>
