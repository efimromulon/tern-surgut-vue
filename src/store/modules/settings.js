export default {
  state: {
    activeFilterRange: [ 4, 19],
    
    buttons: [
      {
        name: "Слои",
        status: false,
        tier: 1,
        id: 0
      },
      {
        name: "Настройки маркировки",
        status: false,
        tier: 1,
        id: 1
      },
      {
        name: "Отчёты",
        status: false,
        tier: 1,
        id: 2
      },
      {
        name: "Графика",
        status: false,
        tier: 1,
        id: 3
      },
      {
        name: "Типы АЗС",
        status: false,
        tier: 2,
        id: 4,
        parent: "Слои",
        component: "azs-types"
      },
      {
        name: "СДО",
        status: false,
        tier: 2,
        id: 5,
        parent: "Слои"
      },
      {
        name: "Регионы",
        status: false,
        tier: 2,
        id: 6,
        parent: "Слои"
      },
      {
        name: "Экспресс-маркировка",
        status: false,
        tier: 2,
        id: 7,
        parent: "Настройки маркировки",
        component: "express-marks"
      },
      {
        name: "Пользовательская маркировка",
        status: false,
        tier: 2,
        id: 8,
        parent: "Настройки маркировки",
        component: "users-marks"
      }
    ],
    settingsComponent: "",

    //маркировка
    activeMarking: {
      name: "Минимальный срок до исчерпания резервуаров по всем видам топлива",
      id: 0,
      options: {
        type: "fuelStock",
        express: true,
        filter: "Все",
        dates: {
          analysis: [],
          compare: []
        }
      }
    },
    activeMarkingOptions: [
      {
        name:
          "Минимальный срок до исчерпания резервуаров по всем видам топлива",
        id: 0,
        options: {
          type: "FuelStock",
          express: true,
          filter: "Все",
          dates: {
            analysis: [],
            compare: []
          }
        }
      },
      {
        name: "Динамика реализации топлива по сравнению с прошлой неделей",
        id: 1,
        options: {
          type: "FuelSell",
          express: true,
          filter: "Все",
          dates: {
            analysis: [],
            compare: []
          }
        }
      },
      {
        name:
          "Динамика реализации сопутствующих товаров по сравнению с прошлой неделей",
        id: 2,
        options: {
          type: "ArticleSell",
          express: true,
          filter: "Все",
          dates: {
            analysis: [],
            compare: []
          }
        }
      }
    ],
    
    //цвета
    colorsButtons: [
        {
            name: 'green',
            status: true
        },
        {
            name: 'orange',
            status: true
        },
        {
            name: 'red',
            status: true
        },
        {
            name: 'grey',
            status: true
        },
    ],
    

    //СДО
  azsTypes: [
    {
      name: "Калининграднефтепродукт",
      id: "stations_knp",
      status: true
    },
    {
      name: "Киришиавтосервис",
      id: "stations_kas",
      status: true
    },
    {
      name: "Псковнефтепродукт",
      id: "stations_pnp",
      status: true
    },
    {
      name: "Тверьнефтепродукт",
      id: "stations_tnp",
      status: true
    },
    {
      name: "Новгороднефтепродукт",
      id: "stations_nnp",
      status: true
    }
  ],
    },
  mutations: {
    ADD_BUTTON(state, object) {
      state.buttons.push(object);
    },
    TOGGLE_BUTTON(state, payload) {
      const { id, bool } = payload;
      let target = state.buttons.find(button => button.id === id);
      target.status = bool;
    },
    TOGGLE_AZS_TYPE(state, payload) {
      const { id, bool } = payload;
      let target = state.azsTypes.find(type => type.id === id);
      if(bool === undefined) {
        target.status = !target.status
      } else {
        target.status = bool;
      }
      
    },
    TOGGLE_COLOR_TYPE(state, payload) {
        const { name, bool } = payload;
        let target = state.colorsButtons.find(type => type.name === name);
        if (bool === undefined) {
            target.status = !target.status
        } else {
            target.status = bool;
        }
        
    },
    SET_SETTINGS_COMPONENT(state, string) {
      state.settingsComponent = string;
    },
    SET_ACTIVE_MARKING(state, object) {
      state.activeMarking = object;
    }
  },

  actions: {
    addButton(context, object) {
      context.commit("ADD_BUTTON", object);
    },
    selectSingleTierButton(context, payload) {
      const { tier, parent, id } = payload;

      let tierButtons = context.getters.getButtonsByTier({ tier, parent });

      tierButtons.forEach(button => {
        if (button.id === id) {
          context.commit("TOGGLE_BUTTON", { id, bool: true });
        } else {
          if (button.status) {
            context.commit("TOGGLE_BUTTON", {
              id: button.id,
              bool: false
            });
          }
        }
      });
    },
    setSettingsComponent(context, string) {
      context.commit("SET_SETTINGS_COMPONENT", string);
    },
    setActiveMarking(context, object) {
      context.commit("SET_ACTIVE_MARKING", object);
    },
    toggleAzsType(context, payload) {
      context.commit("TOGGLE_AZS_TYPE", payload);
    },
    toggleColorType(context, payload) {
        context.commit("TOGGLE_COLOR_TYPE", payload);
    }
  },
  getters: {
    getButtonsByTier: state => ({ tier, parent }) => {
      let buttonsArr = state.buttons;
      if (!parent) {
        return buttonsArr.filter(button => button.tier === tier);
      } else {
        return buttonsArr.filter(button => {
          return button.tier === tier && button.parent === parent;
        });
      }
    },
    getStatusById: state => num => {
      let buttonsArr = state.buttons;
      return buttonsArr.find(button => button.id === num).status;
    },
    getActiveTierButton: state => ({ tier, parent }) => {
      let buttonsArr = state.buttons;
      let tierButtons;
      if (!parent) {
        tierButtons = buttonsArr.filter(button => button.tier === tier);
      } else {
        tierButtons = buttonsArr.filter(button => {
          return button.tier === tier && button.parent === parent;
        });
      }

      return tierButtons.find(button => button.status === true);
    },
    getActiveAzsTypeById: state => id => {
      let types = state.azsTypes;
      return types.find(type => type.id === id).status;
    },
    getActiveColorByName: state => name => {
        let colors = state.colorsButtons;
        return colors.find(color => color.name === name).status;
      },
  }
};
