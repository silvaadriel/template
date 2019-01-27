<template>
	<section id="contato" class="container">
    <h2 class="subtitulo">{{ contact.title }}</h2>
  </section>
</template>

<style type="css">
	.subtitulo {
    font-size: 1.5em;
    line-height: 1.875em;
    font-weight: bold;
    letter-spacing: .1em;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 1.5em;
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
  
  .container:first-child {
    border-top: none;
  }
</style>
<script>
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
    	contact: {
    		title: 'Contato'
    	},
    };
  },
  computed: {},
  created() {},
  methods: {},
};
</script>
