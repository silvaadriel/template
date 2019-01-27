<template>
	<nav id="nav">
    <ul>
      <li
      	v-for="items in navItemsArray"
				:key="items.name"
				:value="items.name"
				:label="items.name"
  		>
  		<a :href="items.link">{{ items.name }}</a>    
  	</li>
    </ul>
  </nav>
</template>

<style lang="css" scoped>
	#nav {
    position: absolute;
    width: 74em;
    max-width: calc(100% - 4em);
    padding: 2em;
    text-align: center;
  }
  
  #nav ul li {
    display: inline-block;
    margin: 0 1.875rem;
    padding: 0;
  }
  
  #nav ul li a {
    color: #636363;
    font-size: 1.2em;
    padding: 1em;
    transition: all .5s ease;
  }
  
  #nav ul li a:hover {
    color: #2C8D9E;
  }
  
  @media screen and (max-width: 480px) {
    #nav {
      position: fixed;
      bottom: -1px;
      max-width: 100%;
      padding: 1.5em 0;
      z-index: 20;
      background: #fff;
      box-shadow: 0px 1px 3px 2px rgba(0, 0, 0, .2);
    }
    #nav ul li {
      margin: 0 .1rem;
      padding: 0;
    }
    #nav ul li a {
      font-size: 1em;
      padding: .875em .5em;
    }
  }
</style>

<script>
export default {
  name: 'BaseNav',
  props: {
  	navItemsArray: {
  		type: Array,
  		required: true,
  	},
  },
};
</script>
