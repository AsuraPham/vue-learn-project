import Vue from 'vue'

const PROFILE_API = `${process.env.VUE_API_URL}`

export const ProfileService = {
  getProfile (resource, slug = '') {
    return Vue.axios.get(`${PROFILE_API}/${resource}/${slug}`)
  }
}
