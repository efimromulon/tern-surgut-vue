<template>
  <div class="minimap-container">
      <div ref="minimap" class="minimap">

      </div>
  </div>
</template>

<script>
import { cloneDeep } from 'lodash'
import { mapState } from 'vuex'

export default {
  name: "panorama-minimap",
  props: ['panoramaData'],
  data: function data() {
    return {
      stage: null,
      pins: [], // описание, доп. инфа и прочее
      activePinAttrs: {
          "stroke":"#006DF0",
          "scale": { x: 1.25, y: 1.25 }
      },
      inactivePinAttrs: {
          "stroke":"transparent",
          "scale": { x: 1, y: 1 }
      },
      activePoiAttrs: {
          "stroke":'#f85850',
          "scale": { x: 1.25, y: 1.25 },
          "fill": "white"
      },
      inactivePoiAttrs: {
          "stroke":"white",
          "scale": { x: 1, y: 1 },
          "fill": '#f85850'
      }
    };
  },
  computed: {
      ...mapState({
          activePin: state => state.panorama.activePin
      })
  },
  methods: {
    prepareMinimap: async function prepareMinimap() {
      var container = this.$refs.minimap;
      var konvaObj = await cloneDeep(this.panoramaData.konva);
      var curScale = konvaObj.attrs.scale.x;
      var pins = this.panoramaData.pins;
      
     
      var width = container.offsetWidth;
      var height = container.offsetHeight;
      var minValue = width >= height ? height : width;
      var canvasVal = konvaObj.attrs.width;
      var scale = (minValue / canvasVal) * curScale;
      var vm = this;

      this.pins = pins;

      konvaObj.attrs.width = minValue;
      konvaObj.attrs.height = minValue;
      konvaObj.attrs.scale = { x: scale, y: scale };

      var stage = Konva.Node.create(konvaObj, container);
      this.stage = stage;

   

      for (let i = 0; i < pins.length; i++) {
        let item = pins[i];
        var name = item.name;

        var konvaItem = null;

        var isPoi = name.indexOf("poi") > -1;

        if (isPoi) {
          konvaItem = stage.find(node => {
            if (node) {
              node.setAttr("draggable", false);
            }
            if (node.attrs.poiId && node.attrs.poiId == name) {
              return node;
            }
          })[0];

          konvaItem.on("click", function() {
             vm.$store.dispatch('updateActivePin', item)
          });
        } else {
          konvaItem = stage.find(node => {
            if (node) {
              node.setAttr("draggable", false);
            }
            if (node.attrs.pinId && node.attrs.pinId == name) {
              return node;
            }
          })[0];

          let options = item.options;

          options.pointId = item.img;

          konvaItem.on("click", function() {
            // vm.changeUrl(options);
              vm.$store.dispatch('updateActivePin', item)
          });
          let activePin = vm.activePin
          if (!activePin || !activePin.name) {
            vm.$store.dispatch('updateActivePin', item)     
          }
        }
      }
     
    },
    changeAttr(name, type) {
        let isPoi = name.indexOf("poi") > -1;
        let stage = this.stage;
        if(!stage) {
          return false
        }
        let attrName = isPoi ? 'poiId' : 'pinId'
        let pin = stage.find(node => {
            if (node.attrs && node.attrs[attrName] && node.attrs[attrName] == name) {
              return node;
            }
        })[0];

        let attrsObject;

        if (type === 'active') {
            attrsObject = isPoi ? this.activePoiAttrs : this.activePinAttrs
        } else {
            attrsObject = isPoi ? this.inactivePoiAttrs : this.inactivePinAttrs
        }

        for (let attr in attrsObject) {
            let name = attr;
            let value = attrsObject[attr];
            pin.setAttr(name, value)
        }



        stage.draw();
    },
    deactivatePin(item) {
        if (!item.name) {
            return false
        }        
        this.changeAttr(item.name, 'inactive')
    },
    activatePin(item) {
        this.changeAttr(item.name, 'active')
    }
  },
  mounted: function mounted() {
      this.$store.dispatch('updateActivePin', null)
      if(this.panoramaData && this.panoramaData.konva) {
          this.prepareMinimap()
      }
  }, 
  watch: {
      activePin(val, oldVal) {
    
        if(val && val.name) {
          this.activatePin(val)
        }

        if(oldVal && oldVal.name) {
          this.deactivatePin(oldVal)
        }
          
          
      }
  }
};
</script>

<style scoped lang="sass">
.minimap-container
    width: 20vw
    height: 20vw
    // background-color: #e5e5e5
.minimap
    height: 100%
    width: 100%
</style>