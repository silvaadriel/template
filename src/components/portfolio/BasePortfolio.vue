<template>
	<section id="portfolio" class="container">
    <h2 class="subtitulo">{{ portfolioTitle }}</h2>
    <div class="a">
	    <ul class="slider">
		    <li>
	        <input
	        	type="radio"
	        	:name="firstPortfolioItem.name"
	        	:id="firstPortfolioItem.id"
	        	checked
	      	>
	        <label :for="firstPortfolioItem.id"></label>
	        <img class="img" :src="firstPortfolioItem.imagePath" alt="">
	      </li>
	      <li
					v-for="portfolio in portfolioItemsList"
					key="portfolio.id"
					value="portfolio.imagePath"
					label="portfolio.name"
	      >
	        <input
	        	type="radio"
	        	:name="portfolio.name"
	        	:id="portfolio.id"
	      	>
	        <label :for="portfolio.id"></label>
	        <img class="img" :src="portfolio.imagePath" alt="">
	      </li>
	    </ul>
	    <show-more-buttom/>
  	</div>
  </section>
</template>

<style lang="css" scoped>
	.a {
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: center;
		width: 100% !important;
		height: 700px !important;
	}
	.img {
		width: 80% !important;
		height: 500px !important;
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
  .slider {
    display: block;
    height: 30.5em;
    max-height: calc(100% - 4em);
    width: 54em;
    max-width: calc(100% - 4em);
    margin: auto;
    margin-top: 60px;
    position: relative;
  }
    
   .slider li {
    list-style: none;
    position: absolute;
  }
  
   .slider img {
    margin: auto;
    height: 100%;
    width: 100%;
    vertical-align: top;
    border-radius: 0.25em;
  } 
  
  .slider input {
    display: none;
  }
  
  .slider label {
    background-color: #000;
    bottom: 10px;
    border-radius: 50px;
    box-shadow: 0px 2px 3px 2px rgba(0, 0, 0, .5);
    opacity: .8;
    cursor: pointer;
    display: block;
    height: 2.5em;
    position: absolute;
    width: 2.5em;
    z-index: 10;
    transition: all .3s ease;
  }
  
  .slider li:nth-child(1) label {
    background: url(../../assets/images/daniel-chen-108577-unsplash-thumb.jpg) no-repeat center;
    background-size: cover; 
    left: 10px;
    top: -30px;
  }
  
  .slider li:nth-child(2) label {
    background: url(../../assets/images/floriane-vita-88722-unsplash-thumb.jpg) no-repeat center;
    background-size: cover; 
    left: 60px;
    top: -30px;
  }
  
  .slider li:nth-child(3) label {
    background: url(../../assets/images/freeman-zhou-1252466-unsplash-thumb.jpg) no-repeat center;
    background-size: cover; 
    left: 110px;
    top: -30px;
  } 
  
  .slider li:nth-child(4) label {
    background: url(../../assets/images/joel-filipe-171928-unsplash-thumb.jpg) no-repeat center;
    background-size: cover; 
    left: 160px;
    top: -30px;
  } 
  
  .slider li:nth-child(5) label {
    background: url(../../assets/images/lance-anderson-213491-unsplash-thumb.jpg) no-repeat center;
    background-size: cover; 
    left: 210px;
    top: -30px;
  } 
  
  .slider li:nth-child(6) label {
    background: url(../../assets/images/patrick-tomasso-1272187-unsplash-thumb.jpg) no-repeat center;
    background-size: cover; 
    left: 260px;
    top: -30px;
  } 
  
  .slider li:nth-child(7) label {
    background: url(../../assets/images/sean-pollock-203658-unsplash-thumb.jpg) no-repeat center;
    background-size: cover; 
    left: 310px;
    top: -30px;
  } 
  
  .slider img {
    opacity: 0;
    visibility: hidden;
    transition: all .3s ease;
  }
  
  .slider li input:checked ~ label {
    opacity: 1;
    width: 42px;
    height: 42px;
  }
  
  .slider li input:checked ~ img {
    opacity: 1;
    visibility: visible;
    z-index: 10;
  } 
  
  @media screen and (max-width: 480px) {
    .slider {
      display: block;
      height: 10em;
      max-width: 100%;
      margin: auto;
      margin-top: 60px;
      position: relative;
    }
  
    .slider label {
      height: 1.5em;
      width: 1.5em;
    }
  
    .slider li:nth-child(1) label {
      left: 1em;
    }
    
    .slider li:nth-child(2) label {
      left: 3.5em;
    }
    
    .slider li:nth-child(3) label {
      left: 6em;
    } 
    
    .slider li:nth-child(4) label {
      left: 8.5em;
    } 
    
    .slider li:nth-child(5) label {
      left: 11em;
    } 
    
    .slider li:nth-child(6) label {
      left: 13.5em;
    } 
    
    .slider li:nth-child(7) label {
      left: 16em;
    } 
  
    .slider li input:checked ~ label {
      width: 1.875em;
      height: 1.875em;
    }
    
  }
</style>

<script>
import ShowMoreButtom from '@/components/ShowMoreButtom';

export default {
  name: 'BasePortfolio',
  components: {
  	ShowMoreButtom,
  },
  props: {
  	portfolioItems: {
  		type: Array,
  		required: true,
  	},
  },
  data() {
    return {
    	portfolioTitle: 'Portfólio',
    	firstPortfolioItem: {},
    	portfolioItemsList: [],
    };
  },
  computed: {},
  async created() {
  	await this.segregatePortfolios();
  },
  methods: {
  	segregatePortfolios() {
  		const [ firstPortfolioItem, ...portfolioItemsList ] = this.portfolioItems;
  		this.firstPortfolioItem = firstPortfolioItem;
  		this.portfolioItemsList = portfolioItemsList;
  	},
  },
};
</script>
