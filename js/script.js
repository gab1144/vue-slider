const { createApp } = Vue;

createApp({

  data(){
    return {
      images:[
        {
          country: "Svezia",
          url:"http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg",
          description: "Lorem ipsum dolor sit amet cons magni!"
        },
        {
          country: "Perù",
          url:"https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg",
          description: "Lorem ipsum dolor sit amearum maiores ipsum! Fuga enim fugit natuendis quo excepturi adipisci possimus exercitationem, tenetur sequi corporis magni!"
        },
        {
            country: "Chile",
            url:"https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c",
            description: "Lorem ipsum dolor sit amet consectetur, adifiat, perferendis quo excepturi adipisci possimus exercitationem, tenetur sequi corporis magni!"
        },
        {
          country: "Argentina",
          url:"https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg",
          description: "Lorem  adipisci possimus exercitationem, tenetur sequi corporis magni!"
        },
        {
          country: "Colombia",
          url:"https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop",
          description: "Lorem ipsum dolor"
        }
      ],
      activeImg: 0
    }
  },
  methods:{
    nextImage() {
      if(this.activeImg === (this.images.length - 1)) {
        this.activeImg=0;
      } else {
        this.activeImg++;
      }
    },
    prevImage() {
      if(this.activeImg === 0) {
        this.activeImg=this.images.length - 1;
      } else {
        this.activeImg--;
      }
    },
    changeImage(index) {
      this.activeImg=index;
    }
  }
}).mount('#app')