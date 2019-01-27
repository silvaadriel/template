<template>
  <div id="wrapper">
    <base-nav
      :nav-items-array="navItemsArray"
    />
    <main>
      <base-highlights
        :highlights-array="hightlightsArray"
      />
      <base-portfolio
        :portfolio-items="portfolioItems"
      />
      <base-about
        :about="about"
      />
      <base-contact/>
    </main>
  </div>
</template>
<style>
  *, *:before, *:after {
    box-sizing: inherit;
    box-sizing: inherit;
  }
  
  html {
    box-sizing: border-box;
  }
  
  body, p, ul, li, h2, h1, a {
    padding: 0px;
    margin: 0px;
  }
  
  body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #ddd;
  }
  
  img {
    max-width: 100%;
    display: block;
  }
  
  a {
    text-decoration: none;
  }
  
  ul {
    list-style: none;
  }
  #header {
    width: 100%;
    height: 40.7em;
    margin-bottom: -100px;
    background: url("../assets/images/patrick-tomasso-1272187-unsplash.jpg") no-repeat center;
    background-size: cover;
    padding: 5em 5em 1em 5em;
    text-align: center;
  }
  
  #logo h1 {
    color: #fff;
    font-weight: bold;
    font-size: 4em;
    padding-top: 100px;
    margin-bottom: 40px;
  }
  
  .quote {
    max-width: 500px;
    margin: 0 auto;
    font-size: 1em;
    line-height: 1.5em;
    color: #fff;
    font-style: italic;
    margin-bottom: 50px;
  }
  
  .quote p:before, .quote p:after {
    content: " ";
    display: block;
    width: 60px;
    height: 3px;
    background: #fff;
    margin: 14px auto 10px auto;
  }
  
  .quote cite {
    font-size: .875em;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: .1em;
    font-style: normal;
  }
  
  @media screen and (max-width: 480px) {
    #header {
      margin-bottom: 0;
      padding: 4em 2em 1em 2em;
    }
  
    .quote {
      font-size: 1em;
    }
  }
  
  /* Wrapper */
  
  #wrapper {
    width: 74em;
    max-width: calc(100% - 4em);
    margin: 0 auto;
    border-radius: 0.25em;
    background-color: #fff;
    box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, .1);
  }
  
  @media screen and (max-width: 480px) {
    #wrapper {
      max-width: 100%;
      border-radius: 0;
    }
  }
  /* Main */
  
  main {
    color: #636363;
    border-radius: 0.25em;
  }
</style>

<script>
import BaseNav from '@/components/BaseNav';
import BaseHighlights from '@/components/highlights/BaseHighlights';
import BasePortfolio from '@/components/portfolio/BasePortfolio';
import BaseAbout from '@/components/aboutFooter/BaseAbout';
import BaseContact from '@/components/contact/BaseContact';

export default {
  name: 'HelloWorld',
  components: {
    BaseNav,
    BaseHighlights,
    BasePortfolio,
    BaseAbout,
    BaseContact
  },
  data () {
    return {
      about: {
        title: 'Sobre',
        message: 'Fugiat voluptate ad dolore duis consequat eiusmod labore commodo elit sint ad do pariatur sed nulla in pariatur sunt cupidatat nisi velit voluptate consequat consequat do amet laboris dolore id in voluptate.',
        image: 'https://www.playreplay.com.br/wp-content/uploads/2018/04/anime-melhores-aberturas-inverno-2018.jpg'
      },
      navItemsArray: [
        { name: 'Item 1', link: '/link-1' },
        { name: 'Item 2', link: '/link-2' },
        { name: 'Item 3', link: '/link-3' },
        { name: 'item 4', link: '/link-4' },
      ],
      hightlightsArray: [
        { 
          name: 'Highlight 1',
          description: 'Ad consequat reprehenderit.',
          image: 'https://images1.laweekly.com/imager/u/745xauto/8095594/kamasi-washington-levan-tk.jpg',
          imageDescription: 'description 1'
        },
        { 
          name: 'Highlight 2',
          description: 'Ullamco consequat.',
          image: 'https://d279m997dpfwgl.cloudfront.net/wp/2018/10/psycho_primary-1000x672.jpg',
          imageDescription: 'Description 2'
        },
      ],
      portfolioItems: [
        {
          id: 'radio1',
          name: 'img',
          imagePath: 'https://yt3.ggpht.com/a-/AAuE7mDGN4WmsOPvQURqbOiac_2JV6ntwAFVXQIzVg=s900-mo-c-c0xffffffff-rj-k-no'
        },
        {
          id: 'radio2',
          name: 'img',
          imagePath: 'https://res.cloudinary.com/jerrick/image/upload/f_auto,fl_progressive,q_auto,c_fit,w_1100/kjffvvi4vdfcyly9a0to'
        },
      ],
    };
  },
}
</script>
