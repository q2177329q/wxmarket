<template>
	<div class="index-wrap">
		<header class="index-header">
			<div class="index-header__search-wrap">
				<input type="text" placeholder="搜索商品" class="index-header__search">
			</div>
		</header>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'index'
	}
</script>
<style type="less" scoped>
	.index-header__search-wrap {
		background: #f1f1f1;
		height: 46px;
		line-height: 45px;
		padding: 0 15px;
	}
</style>