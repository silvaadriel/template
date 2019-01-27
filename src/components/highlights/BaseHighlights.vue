<template>
	<section id="destaque" class="container">
    <h2 class="subtitulo">Highlights</h2>
    <ul class="features">
	    <li
				v-for="highlightItem in highlightsArray"
				:key="highlightItem.name"
				:value="highlightItem.name"
				:label="highlightItem.name"
	    >
	      <img
		      :src="highlightItem.image"
		      :alt="highlightItem.imageDescription"
		    >
	      <h3>{{ highlightItem.name }}</h3>
	      <p>{{ highlightItem.description }}</p>
	    </li>
  	</ul>
  	<show-more-buttom/>
  </section>
</template>

<style lang="css" scoped>
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
	.features {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0;
	}

	.features li {
		width: calc(33% - 2em);
		margin-left: 2em;
		margin-top: 3em;
		padding: 0;
	}

	@media screen and (max-width: 480px) {
		.features {
			display: block;
		}

		.features li {
			width: 100%;
			margin-left: 0;
			margin-top: 3.5em;
		}

		#destaque {
			padding-top: 4em;
		}
	} 
	.subtitulo:after {
		content: " ";
		display: block;
		width: 60px;
		height: 3px;
		background: #636363;
		margin: 10px auto;
	}

	#destaque {
		padding-top: 8em;
	}
	#destaque li {
		margin: 0 .1em;
		font-size: 1em;
		text-align: center;
		padding: 1em;
		border-radius: 0.25em;
		transition: all .3s ease;
	}

	#destaque li img {
		border-radius: 0.25em;
	}

	#destaque li h3:after {
		content: " ";
		display: block;
		width: 60px;
		height: 3px;
		background: #636363;
		margin: 8px auto;
	}

	#destaque li:hover {
		background: rgba(44, 141, 158, 0.493);
		color: #fff;
	}

	#destaque li:hover h3:after {
		background: #fff;
	}
</style>

<script>
import ShowMoreButtom from '@/components/ShowMoreButtom';

export default {
  name: 'BaseHighlights',
  components: {
  	ShowMoreButtom,
  },
  props: {
  	highlightsArray: {
  		type: Array,
  		default: null,
  	},
  },
};
</script>
