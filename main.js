const app = Vue.createApp({
    data: function () {
      return {
        title: 'Achat de café Nespresso',
        description : 'Site pour acheter du café Nespresso',
        image : '/assets/images/colombia_de_cote.png',
        link : 'https://www.he-arc.ch',
        inStock : true,
        stock : 10,
        onSale : true,
        details : ['Doux', 'Moyen', 'Puissant'],
        carouselImages: [
            {
              id: 1,
              text: 'Capsule 1',
              image: './assets/images/colombia.png',
            },
            {
              id:  2,
              text: 'Capsule 2',
              image: './assets/images/colombia_de_cote.png',
            },
            {
              id: 3,
              text: 'Tasse',
              image: './assets/images/colombia_tasse.png',
            },
            {
              id: 4,
              text: 'Paquet',
              image: './assets/images/colombia_paquet.png',
            }
          ],
          productSize :[
            {
              id: 1,
              text: 'S',
            },
            {
              id: 2,
              text: 'M',
            },
            {
              id: 3,
              text: 'L',
            }
          ],
          cart : 0,
      };
      
    },

    methods: {
        addToCart: function() {
          this.cart += 1;
        },
        removeFromCart: function() {
            if (this.cart > 0) {
              this.cart -= 1;
            }
      }

    },
  });

 

  const mountedApp = app.mount('#app');