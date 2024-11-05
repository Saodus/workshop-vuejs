app.component('product-display', {
    props: {
      premium: {
        type: Boolean,
        required: true,
      }
    },
  template:
    /*html*/
    `
  <img height="200" v-bind:src="image" :class="[!isOutOfStock ? 'ImageOpacity' : '']"/>
  <br>
  <p v-if="inStock">Disponible</p>
  <p v-else>Plus de stock</p>
  <br>
  <p v-if="stock > 10">Disponible</p>
  <p v-else-if="stock <= 10 && stock > 0">Peu de stock</p>
  <p v-else>Indisponible</p>
  <p v-show="onSale">En vente!</p>
  <br>
  <p>Shipping: {{ shipping }}</p>
  <div>
    <span v-for="(carouselImage, index) in carouselImages" :key="carouselImage.id"
    @mouseover="updateSelectedImage(index)">
      <img height="50" alt="carouselImage.text" :src="carouselImage.image" />
    </span>
  </div>
  <br>
  <div v-for="Size in productSize" :key="Size.id" :style="{color: Size.color}">
    {{ Size.text }}
  </div>
    `,
  data() {
    return {
      selectedImage: 0,
      inStock: true,
      stock: 11,
      onSale: true,
      carouselImages: [
        {
          id: 1,
          text: "Capsule 1",
          image: "./assets/images/colombia.png",
        },
        {
          id: 2,
          text: "Capsule 2",
          image: "./assets/images/colombia_de_cote.png",
        },
        {
          id: 3,
          text: "Tasse",
          image: "./assets/images/colombia_tasse.png",
        },
        {
          id: 4,
          text: "Paquet",
          image: "./assets/images/colombia_paquet.png",
        },
      ],
      productSize: [
        {
          id: 1,
          text: "S",
          color: "#6C99C6",
        },
        {
          id: 2,
          text: "M",
          color: "#BF9E74",
        },
        {
          id: 3,
          text: "L",
          color: "#D3B1A2",
        },
      ],
    };
  },
  methods: {
    updateSelectedImage(index) {
      this.selectedImage = index;
    },
  },
  computed: {
    image() {
      return this.carouselImages[this.selectedImage].image;
    },
  
    isOutOfStock() {
      return this.stock <= 0;
    },
  
    shipping() {
        if (this.premium) {
          return 'Free'
        }
      
        return 2.99
      },
  },
  });