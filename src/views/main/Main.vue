<template>
  <div>
    <h1>Hello world!</h1>
  </div>
</template>

<script>
import Echo from 'laravel-echo'
import io from 'socket.io-client'

export default {
  name: 'Main',
  computed: {
    //
  },
  methods: {
    //
  },
  mounted() {
    // laravel-echo
    window.io = io
    window.Echo = new Echo({
      broadcaster: 'socket.io',
      host: window.location.hostname + ':6001'
    })

    window.Echo.channel('wchat')
      .listen('.server.wchat', (e) => {
        console.log(e)
      })

    // window.Echo.leave('wchat')

    console.log('123')
  }
}
</script>
