<template>
  <nav class='admin-header navbar navbar-default col-lg-12 col-12 p-0 fixed-top d-flex flex-row'>
    <div class='text-left navbar-brand-wrapper'>
      <a class='navbar-brand brand-logo' href=''>
        <img :src='logo' alt='Logo' />
      </a><a class='navbar-brand brand-logo-mini' href='#/'><img src='' alt='' /></a></div>
    <ul class='nav navbar-nav mr-auto'>
      <li class='nav-item'><a class='button-toggle-nav inline-block ml-20 pull-left'>
        <i class='zmdi zmdi-menu ti-align-right'>
          <img :src='menuic' alt='menuic' @click="toggleClass" />
        </i></a></li>
    </ul>
    <ul class='nav navbar-nav ml-auto'>
      <li class='nav-item fullscreen'><a id='btnFullscreen' class='nav-link'><i class='ti-fullscreen'></i></a></li>
      <li class='nav-item dropdown mr-30'>
        <a class='nav-link nav-pill user-avatar' data-toggle='dropdown' href='#' role='button' aria-haspopup='true' aria-expanded='false'>
          <img :src='avatar' alt='avatar' /></a>
        <div class='dropdown-menu dropdown-menu-right'>
          <div class='dropdown-header'>
            <div class='media'>
              <div class='media-body'>
                <h5 class='mt-0 mb-0'></h5>
                <span class='txt-email-user'></span>
              </div>
            </div>
          </div>
          <div class='dropdown-divider'></div>
          <a class='dropdown-item' href='#' >
            <i class='text-danger ti-unlock'></i>Logout</a>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
import {logo, avatar, menuic} from '../common/image-const'
export default {
  name: 'TopBarComponent',
  data () {
    return {
      logo: logo,
      avatar: avatar,
      menuic: menuic
    }
  },
  methods: {
    toggleClass () {
      this.$parent.toggleClass()
    }
  }
}
</script>
<style>
@import '../assets/styles/topbar.scss';
</style>
