export const youtubeEmbedMixin = {
  data() {
    return {
      // player: null,
      width: '100%',
      height: '100%',
      videoId: null,
      playState: null,
      playerVars: {
        rel: 0,
        showinfo: 0,
        modestbranding: 1,
        color: 'white',
        mute: null,
        playsinline: 1
      }
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player
    }
  },
  mounted() {
    // alert()
  },
  methods: {
    ready(e) {
      // this.player = e.a
      this.playState = -1
      // console.log(this.playState)
    },
    playing(e) {
      this.playState = 1
      //  console.log(this.playState)
    },
    buffering(e) {
      this.playState = 3
      //  console.log(this.playState)
    },
    paused(e) {
      this.playState = 2
      //  console.log(this.playState)
    },
    ended(e) {
      this.playState = 0
      //  console.log(this.playState)
      this.stop()
    },
    play(e) {
      // console.log(this.player)
      this.player.playVideo()
    },
    stop() {
      this.player.stopVideo()
    }
  }
}
