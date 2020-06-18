<template>
  <v-container class="pt-0" fluid>
    <v-row>
      <v-col cols="12" class="pt-0">
        <GoogleMapsComponent />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import GoogleMapsComponent from '../components/google-maps.vue';

@Component({ components: { GoogleMapsComponent } })
export default class IndexPage extends Vue {}
</script>

<style lang="scss" scoped></style>
