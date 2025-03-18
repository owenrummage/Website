<script>
	import Heading from '$lib/components/Heading.svelte';
	import { onMount } from 'svelte';
	import { formatDate } from '$lib/utils';

	const endpoint = 'https://api.github.com/users/owenrummage/repos';
	let repos = [];
	let { data } = $props();

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
<div class="flex max-w-screen-lg flex-col">
	<Heading />
	<div class="h-4" />
	<h1 class="font-bold">All Posts</h1>
	<ul>
		{#each data.posts as post}
			<li class="post">
				<a href="/blog/{post.slug}" class="title"
					>{post.title} <span class="font-bold text-white">/</span>
					<span class="text-white">{formatDate(post.date)}</span>
					<span class="font-bold text-white">/</span>
					<span class="text-white">{post.description}</span></a
				>
			</li>
		{/each}
	</ul>
	<div class="h-2" />
	<p>~ Owen Rummage</p>
</div>
