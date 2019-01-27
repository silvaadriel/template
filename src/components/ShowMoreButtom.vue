<template>
	<div class="call">
      <a href="#" class="btn">{{ showMore }}</a>
  </div>
</template>

<style lang="css" scoped>
.call {
		text-align: center;
		padding: 2em 0 3em 0em;
	}
  .btn {
    border-radius: 8px;
    border: 0;
    background: rgba(44, 141, 158, 0.493);
    cursor: pointer;
    font-weight: bold;
    color: #636363;
    font-size: 1em;
    text-transform: uppercase;
    padding: 1em 1.5em;
    transition: all .3s ease;
  }
  
  .btn:hover {
    background: #2C8D9E;
    color: #fff; 
  }
</style>
<script>
export default {
  name: 'ShowMoreButtom',
  data() {
    return {
    	showMore: 'Ver mais',
    };
  },
};
</script>
