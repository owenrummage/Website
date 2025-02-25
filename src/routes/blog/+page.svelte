<script>
	import Heading from '$lib/components/Heading.svelte';
	import { onMount } from 'svelte';
	const endpoint = 'https://api.github.com/users/owenrummage/repos';
	let repos = [];

	onMount(async function () {
		const response = await fetch(endpoint);
		const data = await response.json();
		console.log(data);
		repos = data;
	});
</script>

<svelte:head>
	<title>Owen Rummage - Blog</title>
</svelte:head>
<div class="flex max-w-screen-lg flex-col space-y-4">
	<Heading />

	<span class="text-neutral-800 dark:text-neutral-300">
		You have stumbled upon my blog. Here I will write my schizophrenic (joking) ramblings for all
		the world to read. This isnt quite finished yet, but check back because it will be soon!
	</span>
	<span class="text-purple-800 dark:text-purple-500"> ~ Owen </span>
</div>
