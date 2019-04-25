<template>
  <div>
    <div class="core-menu">
      <settings-button
        v-for="button in coreButtons"
        :key="button.name"
        :text="button.name"
        :className="'core-menu__btn'"
        @click.native="handleClick(button)"
        :style="isActive(button.id)"
      />
    </div>
    <div
      v-if="isSecondaryActive && secondaryButtons && secondaryButtons.length > 0"
      class="secondary-menu"
    >
      <settings-button
        v-for="button in secondaryButtons"
        :key="button.name"
        :text="button.name"
        :className="'secondary-menu__btn'"
        :style="isActive(button.id)"
        @click.native="handleClick(button)"
      />
    </div>

    <div v-if="settingsComponent" class="dynamic-menu">
      <keep-alive>
        <component :is="settingsComponent"/>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import settingsButton from "./components/_settings-button.vue";

//settings components
const expressMarks = () => import("./components/_settings-express-marks.vue");
const usersMarks = () => import('./components/_settings-users-marks.vue');
const azsTypes = () => import('./components/_settings-layers-azs-types.vue');

export default {
  name: "settings-container",
  components: {
    settingsButton,
    //settings components
    expressMarks,
    usersMarks,
    azsTypes
  },
  data() {
    return {
      isSecondaryActive: false,
      activeParent: ""
    };
  },
  computed: {
    ...mapGetters(["getButtonsByTier", "getStatusById", 'getActiveTierButton']),
    ...mapState({
        settingsComponent: state => state.settings.settingsComponent
    }),
    coreButtons() {
      return this.getButtonsByTier({ tier: 1 });
    },
    secondaryButtons() {
      return this.getButtonsByTier({ tier: 2, parent: this.activeParent });
    },
    activeSecondaryButton(){
        return this.getActiveTierButton({ tier: 2, parent: this.activeParent })
    }
  },
  methods: {
    clearSettingsComponent() {
        this.$store.dispatch("setSettingsComponent", "");
    },
    handleClick(button) {
      switch (button.name) {
        case "Слои":
          this.$store.dispatch("selectSingleTierButton", {
            parent: "",
            tier: 1,
            id: button.id
          });
          this.$store.dispatch("resetComponents");
          this.isSecondaryActive = true;
          this.activeParent = button.name;
          
          break;
        case "Настройки маркировки":
          this.$store.dispatch("selectSingleTierButton", {
            parent: "",
            tier: 1,
            id: button.id
          });
          this.$store.dispatch("resetComponents");
          this.isSecondaryActive = true;
          this.activeParent = button.name;
          break;
        case "Отчёты":
          this.$store.dispatch("setComponent", {
            componentPosition: "leftMenuComponent",
            componentName: "reports-navigation"
          });
          this.isSecondaryActive = false;
          this.activeParent = "";
          this.clearSettingsComponent()
          break;
        case "Графика":
          this.$store.dispatch("setComponent", {
            componentPosition: "leftMenuComponent",
            componentName: "heatmap-controls"
          });
          this.$store.dispatch("setComponent", {
            componentPosition: "centralComponent",
            componentName: "heatmap-graph"
          });
          this.isSecondaryActive = false;
          this.activeParent = "";
          this.clearSettingsComponent()
          break;
        case "Типы АЗС":
        this.$store.dispatch("selectSingleTierButton", {
            tier: 2,
            parent: this.activeParent,
            id: button.id
          });

          break;
        case "СДО":
        case "Регионы":

          this.$store.dispatch("selectSingleTierButton", {
            tier: 2,
            parent: this.activeParent,
            id: button.id
          });
          break;
        case "Экспресс-маркировка":

          this.$store.dispatch("selectSingleTierButton", {
            tier: 2,
            parent: this.activeParent,
            id: button.id
          });
          break;
        case "Пользовательская маркировка":
          this.$store.dispatch("selectSingleTierButton", {
            tier: 2,
            parent: this.activeParent,
            id: button.id
          });

          break;
        default:
          break;
      }
    },
    isActive(id) {
      let status = this.getStatusById(id);
      if (status) {
        return { "background-color": "rgb(237, 237, 237)" };
      }
    }
  },
  watch: {
      activeSecondaryButton: {
          handler: function(val, oldVal) {
              if (val !== oldVal) {
                  if (val && val.component) {
                       this.$store.dispatch("setSettingsComponent", val.component);
                  } else {
                      this.clearSettingsComponent()
                  }
              }
          },
          deep: true,
          immediate: true
      }
  }
};
</script>

<style scoped lang='sass'>
.core-menu__btn
    vertical-align: middle
    position: relative
    cursor: pointer
    line-height: 37px
    font-size: 1em
    white-space: nowrap
    text-overflow: ellipsis
    overflow: hidden
    padding: 0 16px
    transition: all .5s
    &:hover
        &:after
            content: ''
            position: absolute
            bottom: 0
            left: 0
            color: black
            width: 100%
            height: 3px
.core-menu
    width: 100%
    overflow: hidden
    position: relative
    top: 0
    left: 0
    height: 37px
    display: flex
    flex-basis: auto
    flex-direction: row
    flex-grow: 0
    flex-shrink: 1
    flex-wrap: nowrap
    justify-content: flex-start
    background-color: $color-white
    @include shadow(2)
    @include border(2)
.secondary-menu
    width: 100%
    overflow: hidden
    position: relative
    top: 0
    left: 0
    margin-top: .25em
    height: 37px
    display: flex
    flex-basis: auto
    flex-direction: row
    flex-grow: 0
    flex-shrink: 1
    flex-wrap: nowrap
    justify-content: flex-start
    @include shadow(2)
    @include border(2)
    background-color: $color-white
.secondary-menu__btn
    vertical-align: middle
    position: relative
    cursor: pointer
    line-height: 37px
    font-size: .9em
    text-align: center
    white-space: nowrap
    text-overflow: ellipsis
    overflow: hidden
    padding: 0 16px
    transition: all .5s      
    &:hover
        &:after
            content: ''
            position: absolute
            bottom: 0
            left: 0
            color: black
            width: 100%
            height: 3px
    cursor: pointer
    color: black
    width: 50%
.dynamic-menu
    width: 100%
    overflow: hidden
    position: relative
    top: 0
    left: 0
    margin-top: .25em
    display: flex
    flex-basis: auto
    flex-direction: row
    flex-grow: 0
    flex-shrink: 1
    flex-wrap: nowrap
    justify-content: center
    @include shadow(2)
    @include border(2)
    background-color: $color-white    
</style>