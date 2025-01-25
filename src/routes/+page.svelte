<script lang="ts">
	import type { Repository } from '$lib/_types';
	import Heading from '$lib/components/Heading.svelte';
	import { onMount } from 'svelte';
	const endpoint = 'https://api.github.com/users/owenrummage/repos';
	let repos: Repository[] = [];

	onMount(async function () {
		const response = await fetch(endpoint);
		const data = await response.json();
		console.log(data);
		repos = data;
	});
</script>

<div class="flex max-w-screen-lg flex-col space-y-4">
	<Heading />
	<div class="h-2" />
	<span class="text-neutral-800 dark:text-neutral-300">
		Hello! I’m Owen Rummage, a 19 year old systems administrator and software enthusiast with a
		lifelong passion for technology. Currently, I’m pursuing an Associate of Applied Sciences in
		Computer Information Technology at Nashville State. I’ve been fascinated by computers since I
		was 6 and have been a Linux user since I was 8, which sparked my interest in open-source
		software and development.
	</span>
	<span class="text-neutral-800 dark:text-neutral-300">
		When I’m not studying or working on projects, I enjoy spending time doing homelab shenanigans,
		Hi-Fi audio, car modifications and other things of that sort.. Thanks for stopping by my site,
		and feel free to reach out if you’d like to chat about tech, open-source software, or anything
		in between!
	</span>

	<span class="text-neutral-800 dark:text-neutral-300">
		I am known for a few things, I operate NixLabs (AS400655) an open-source organization that aids
		in getting servers and resources to open-source projects all around the internet. In my free
		time, I like to program and build networks. I mainly program in PHP, however I am also
		proficient in Javascript, GoLang, and Python. I am extremely experienced with Cisco and Arista
		networking equipment along with protocols such as BGP and OSPF. I have 32u of colocation to
		operate me and my friend’s servers as part of NixLabs, this is where I run all of my services. I
		have some cool stuf on this site, including a state of the art NFT you can go buy <a href="/nft"
			>here</a
		>. You can also go read my ramblings on my <a href="/blog">blog</a>.
	</span>

	<span class="text-neutral-800 dark:text-neutral-300">
		I have worked at a few companies in the past doing various things from systems administration to
		software engineering. Most of that can be found on my Linkedin, located <a
			href="https://www.linkedin.com/in/owen-rummage-335035245/">here</a
		>. Currently, I am employed at a small computer shop locally. My job mainly revolves around
		fixing desktops and laptops, but occasionally we get an enterprise contracting job where I do
		network installations or software deployment/configuration. I also do contracting on the side,
		see below for more details</span
	>

	<div class="grid grid-cols-1 gap-12 md:grid-cols-2">
		<div>
			<h3 class="font-bold">My GitHub Repos</h3>
			<ul class="list-inside list-disc">
				{#each repos as repo}
					<li><a href={repo.html_url}>{repo.name} ({repo.stargazers_count} stars)</a></li>
				{/each}
			</ul>
		</div>
		<div>
			<h3 class="font-bold">Professional Experience</h3>
			<ul class="list-inside list-disc">
				<li>Enterprise Networking (Cisco/Arista)</li>
				<li>Systems Design / Network Architecture</li>
				<li>Frontend Development (PHP/React/Svelte)</li>
				<li>Backend Development (Go/PHP/Typescript)</li>
				<li>Linux Systems Administration</li>
			</ul>
			<h3 class="mt-4 font-bold">My Involvement</h3>
			<ul class="list-inside list-disc">
				<li><a href="https://nixlabs.dev">NixLabs Networks (Founder)</a></li>
				<li><a href="https://wii-linux.org">Wii Linux (Supporter)</a></li>
			</ul>
		</div>
	</div>
</div>
