<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div
	class="flex min-h-screen flex-col items-center bg-neutral-900 px-4 py-8 font-mono text-gray-100"
>
	{@render children()}
</div>
