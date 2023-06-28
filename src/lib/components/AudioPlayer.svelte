<script>
	/**
	 * @type {string}
	 */
	export let src;

	/**
	 * @type {boolean}
	 */
	export let isPlaying;
</script>

<div class="fixed bottom-0 left-0">
	<audio controls>
		<source {src} />
		Your browser does not support the audio element.
	</audio>
</div>
