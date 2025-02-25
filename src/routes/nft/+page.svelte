<script lang="ts">
	import NFTImage from '$lib/assets/nft.png';
	import Heading from '$lib/components/Heading.svelte';
</script>

<svelte:head>
	<title>Owen Rummage</title>
</svelte:head>

<div class="flex w-screen max-w-screen-lg flex-col space-y-12">
	<Heading />

	<div class="flex w-full flex-col items-center gap-12">
		<img src={NFTImage} alt="NFT Image" class="w-1/2" />
		<p>To get the NFT, please <b>right click</b> and <b>save the image</b>.</p>
	</div>
</div>
