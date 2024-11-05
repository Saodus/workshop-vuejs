const app = Vue.createApp({
  data: function () {
    return {
      action: "Achat de café",
      brand: "Nespresso",
      description: "Site pour acheter du café Nespresso",
      link: "https://www.he-arc.ch",
      cart: 0,
      premium : true,
      details: ["Doux", "Moyen", "Puissant"],
      styles: {
        roundButton: {
          borderRadius: "20px",
          padding: "10px",
          backgroundColor: "rgb(0, 114, 180)",
          color: "white",
          cursor: "pointer",
        },
      },
    };
  },

  methods: {
    addToCart: function () {
      this.cart += 1;
    },
    removeFromCart: function () {
      if (this.cart > 0) {
        this.cart -= 1;
      }
    },
  },

  computed: {
    title() {
      return this.action + " " + this.brand;
    },
  },
});


