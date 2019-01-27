<template>
	<section id="sobre" class="container">
    <h2 class="subtitulo">{{ about.title }}</h2>
    <div class="sobre">
      <p>{{ about.message }}</p>
      <img  class="img" :src="about.image" alt="">
    </div>
    <show-more-buttom/>
	</section>
</template>

<style lang="css" scoped>
	.sobre {
		justify-content: space-between;
		display: flex;
	}
	.container {
    max-width: calc(100% - 4em);
    padding: 4em 2em 2em 2em;
    margin: 0 auto;
    border-top: 1px #ccc solid;
  }
  
  @media screen and (max-width: 480px) {
    .container {
      padding: 2em 0 1em 0;
    }
  }
  
  .container:first-child, footer.container {
    border-top: none;
  }
	.subtitulo {
    font-size: 1.5em;
    line-height: 1.875em;
    font-weight: bold;
    letter-spacing: .1em;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 1.5em;
  }
  
  .subtitulo:after {
    content: " ";
    display: block;
    width: 60px;
    height: 3px;
    background: #636363;
    margin: 10px auto;
  }

  #sobre img {
    width: 20em;
    max-width: calc(100% - 4em);
    height: 20em;
    max-height: calc(100% - 4em);
    margin-left: 4em;
    padding: 0.65em;
    border-radius: 100%;
    border: solid 1px;
  }
  
  #sobre p {
    font-size: 1.2em;
    line-height: 1.8em;
    padding-top: 4em;
  }
  
  #sobre .sobre {
    display: flex;
  }
  
  #sobre .subtitulo {
    text-align: left;
    margin-bottom: 0;
  }
  
  #sobre .subtitulo:after {
    margin: 10px 0;
  }
  
  #sobre .call {
    text-align: left;
    padding-top: 0;
  }
  
  @media screen and (max-width: 480px) {
    #sobre .sobre {
      display: block;
    }
  
    #sobre img {
      width: 12em;
      height: 12em;
      margin: 1em auto;
    }
  
    #sobre p {
      font-size: .875em;
      padding-top: 1em;
    }
  
    #sobre .call {
      text-align: center;
      padding: 2em 0;
    }
  }
</style>

<script>
import ShowMoreButtom from '@/components/ShowMoreButtom';

export default {
  name: 'BaseAbout',
  components: {
  	ShowMoreButtom,
  },
  props: {
  	about: {
  		type: Object,
  		required: true,
  	},
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  methods: {},
};
</script>
