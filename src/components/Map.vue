<template>
  <v-container fluid grid-list-md>
    <v-flex>
      <div id="map"></div>
    </v-flex>

  </v-container>
</template>

<script>
  /* eslint-disable */
  import router from '@/router'
  import firebase from '@/firebase'
  export default {
    name: 'Map',
    data () {
      return {
        map: null
      }
    },
    mounted () {
      // INIT MAP
      this.map = new window.google.maps.Map(document.getElementById('map'), {
        center: {lat: +44.4243931, lng: +26.1079027},
        zoom: 16
      })
      var employers = {}
      firebase.database().ref('Employer')
        .on('value', snap => {
          employers = snap.val()
          const keysEmployers = Object.keys(employers)
          keysEmployers.forEach(key => {
            var marker = new window.google.maps.Marker({
              position: new window.google.maps.LatLng(+employers[key].LL.Lat, +employers[key].LL.Long),
              map: this.map,
              title: employers[key].Name
            })
            var y = keysEmployers.indexOf(key)
            var path = 'Employer'
            var infowindow = new window.google.maps.InfoWindow()
            window.google.maps.event.addListener(marker, 'click', function () {
              var contentString = '<div>' + employers[key].Name + '</div>'
              infowindow.setContent(contentString)
              infowindow.open(this.map, this)
            }.bind(marker))
          })
        }, function (error) {
          console.log('Error: ' + error.message)
        })
    }
  }
</script>

<style scoped>
 #map {
   width: 100%;
   min-height: 570px;
   background-color: grey;
 }
</style>
