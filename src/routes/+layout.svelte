<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="flex min-h-screen w-screen flex-col items-center p-4">
	{@render children()}
</div>
