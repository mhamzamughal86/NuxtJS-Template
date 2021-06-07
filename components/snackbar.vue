<template>
  <div>
    <v-snackbar
      v-model="showSnackBar"
      app
      right
      top
      v-if="snackbar"
      :key="`snackbar-${snackbar.key}`"
      :color="snackbar.color"
    >
      <div>
        <v-row no-gutters>
          <v-col cols="10">
            <v-icon>{{ snackbar.icon }}</v-icon>
            <span>{{ snackbar.text }}</span>
          </v-col>
          <v-col cols="2">
            <v-btn icon text @click="showSnackBar = false"
              ><v-icon>mdi-close</v-icon></v-btn
            >
          </v-col>
        </v-row>
      </div>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    showSnackBar: true,
  }),

  computed: {
    snackbar() {
      return this.$store.getters['snackbar/GET_SNACKBAR']
    },
  },
  watch: {
    showSnackBar() {
      if (!this.showSnackBar) this.$store.dispatch('snackbar/hideSnackbar')
    },
    snackbar() {
      if (this.snackbar) this.showSnackBar = true
    },
  },
}
</script>
