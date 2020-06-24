<template>
  <v-container fluid>
    <v-row dense justify="center">
      <v-col cols="4">
        <div>
          <Navigation />

          <v-card>
            <v-toolbar flat dense>
              <v-toolbar-title>anecdote</v-toolbar-title>
            </v-toolbar>

            <nuxt />
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Navigation from '../components/navigation.vue';

@Component({ components: { Navigation } })
export default class Default extends Vue {}
</script>

<style lang="scss" scoped></style>
