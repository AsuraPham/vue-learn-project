<template>
  <div id="app" v-bind:class="isActive ? 'wrapper' : 'wrapper slide-menu' ">
    <TopBarComponent :method='toggleClass'/>
    <div class="container-fluid">
      <div class="row">
        <LeftSideBarComponent/>
        <div class='content-wrapper'>
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopBarComponent from '@/components/TopBar'
import LeftSideBarComponent from '@/components/LeftSideBar'
export default {
  name: 'App',
  components: { TopBarComponent, LeftSideBarComponent },
  data () {
    return {
      isActive: true
    }
  },
  props: {
  },
  methods: {
    toggleClass () {
      this.isActive = !this.isActive
    }
  }
}
</script>
<style>
@import './assets/styles/app.scss';
</style>
