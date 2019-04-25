<template>
  <div class="side-menu-fixed">
    <div class="scrollarea scrollbar side-menu-bg" style="overflow: hidden">
      <div class="scrollarea-content saidbar">
        <div class="saidbar">
          <ul class="nav navbar-nav side-menu" id="sidebarnav" style="margin: 0">
            <li>
              <router-link :to="{name: ''}" aria-current="{true}">
                <i class="ti-home">
                  <img :src='iconDashboad'>
                </i>
                <span class="right-nav-text">{{DASHBOARD}}</span>
              </router-link>
            </li>
            <li>
              <router-link :to="{name: ''}" class="nav-link" >
                <i class="ti-home">
                  <img :src='iconDevice'>
                </i>
                <span class="right-nav-text">{{DEVICE}}</span>
              </router-link>
            </li>
            <li>
              <router-link :to="{name: ''}" class="nav-link" >
                <i class="ti-home">
                  <img :src='iconUser'>
                </i>
                <span class="right-nav-text">{{USERS}}</span>
              </router-link>
            </li>
            <li>
              <router-link :to="{name: ''}" class="nav-link">
                <i class="ti-home">
                  <img :src='iconNotification'>
                </i>
                <span class="right-nav-text">{{NOTIFICATION}}</span>
              </router-link>
            </li>
            <li>
              <router-link :to="{name: ''}" class="nav-link" >
                <i class="ti-home">
                  <img :src='iconSoftware'>
                </i>
                <span class="right-nav-text">{{SOFTWARE_PACKAGES}}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  DEVICE,
  DASHBOARD,
  USERS,
  NOTIFICATION,
  SOFTWARE_PACKAGES
} from '../common/menu'
import {iconDashboad, iconUser, iconDevice, iconNotification, iconSoftware} from '../common/image-const'
export default {
  name: 'LeftSideBarComponent',
  data () {
    return {
      DEVICE: DEVICE,
      DASHBOARD: DASHBOARD,
      NOTIFICATION: NOTIFICATION,
      USERS: USERS,
      SOFTWARE_PACKAGES: SOFTWARE_PACKAGES,
      iconSoftware: iconSoftware,
      iconDashboad: iconDashboad,
      iconUser: iconUser,
      iconNotification: iconNotification,
      iconDevice: iconDevice
    }
  }
}
</script>
<style>
@import "../assets/styles/sidebar.scss";
</style>
