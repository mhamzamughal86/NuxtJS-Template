<template>
  <v-container>
    <v-card>
      <v-data-table
        :headers="headers"
        :items="users"
        item-key="name"
      ></v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    users: [],
    headers: [
      { text: 'Name', value: 'name', align: 'left' },
      { text: 'Username', value: 'username', align: 'left' },
      { text: 'Email', value: 'email', align: 'left' },
      { text: 'Phone', value: 'phone', align: 'left' },
      { text: 'Website', value: 'website', align: 'left' },
    ],
  }),

  created() {
    this.fetchUsers()
  },

  methods: {
    async fetchUsers() {
      await this.$axios
        .get('/users')
        .then((response) => {
          this.users = response.data
        })
        .catch(() => {
          this.users = null
        })
    },
  },
}
</script>
