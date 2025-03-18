<script lang="ts">
	import Heading from '$lib/components/Heading.svelte';
	import { formatDate } from '$lib/utils';

	let { data } = $props();
</script>

<div class="flex max-w-screen-lg flex-col">
	<Heading />
	<div class="h-4" />
	<h1 class="text-2xl font-bold">{data.meta.title} ({data.meta.date})</h1>
	<div class="h-2" />
	<article>
		<data.content />
	</article>

	<p>~ Owen Rummage</p>
</div>

<style>
	article :global(h1) {
		@apply text-2xl font-bold text-white;
	}
	article :global(h2) {
		@apply text-xl font-bold text-white;
	}
	article :global(h3) {
		@apply text-lg font-bold text-white;
	}

	article :global(p) {
		@apply mb-2 text-sm text-white;
	}

	article :global(pre) {
		@apply my-4 rounded-md bg-white px-2 py-1 font-mono text-black;
	}
</style>
