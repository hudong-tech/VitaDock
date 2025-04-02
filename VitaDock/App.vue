<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import './styles/tailwind-base.css';
	@import './styles/tailwind.css';
	@import './styles/iphone-status.css';
	@import './styles/tabbar.css';
	@import './styles/dashboard.css';
</style>
