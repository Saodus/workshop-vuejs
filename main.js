const app = Vue.createApp({
    data: function () {
      return {
        title: 'Achat de café Nespresso',
        description : 'Site pour acheter du café Nespresso',
        image : '/assets/images/colombia_de_cote.png',
        link : 'https://www.he-arc.ch',
        inStock : true,
        stock : 1,
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
              color: '#6C99C6',
            },
            {
              id: 2,
              text: 'M',
              color: '#BF9E74',
            },
            {
              id: 3,
              text: 'L',
              color: '#D3B1A2',
            }
          ],
          cart : 0,

          styles: {
            roundButton: {
                borderRadius: '20px',
                padding: '10px',
                backgroundColor: 'rgb(0, 114, 180)',
                color: 'white',
                cursor: 'pointer'
              },
            },
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