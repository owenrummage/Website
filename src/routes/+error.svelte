<script>
	import { page } from '$app/state';

	const quotes = [
		'"I work best on the floor of the datacenter at 1 in the morning with a Monster in my hand" - Owen\n',
		'"I was right and that\'s bad" - Owen',
		'"I\'m in the copyright because I\'m your emotional support" - Owen',
		'"Zero to sixty in three to five business days" - Owen',
		'"So I died because the routes... *dies*" - Owen',
		'"don\'t you hate it when you build your wall out of floor" - Mineman',
		'"Open triangle pyramid left" - Mineman\n',
		'"It is going at the speed of not fast" - Techflash\n',
		'"If you need anything, don\'t, cause I\'m putting my phone back into airplane mode" - Mineman\n',
		'"I\'m having the boomerest issue right now. I can\'t find a stamp. To mail a check." - NathanR\n',
		'"Great minds think alike. So what\'s our excuse?" - NathanR\n',
		'"The arp table is getting big, I dont think thats- *loses internet*" - Owen',
		'"It sounds like you\'re speaking enchantment table" - Kyo',
		'"first, you light the oven" - Owen',
		'"People like a real fire in their homes, I have one in my car!" - Jeremy Clarkson',
		'"I would say I walked into that one... some would argue I full-on sprinted" - Mineman',
		'"be a hero run raid 0" - Blazak in DisNCord',
		'"Sometimes there\'s two ways to do things. The right way and the only way." - Nathan',
		'"your router must have a mental disease" - Techflash',
		'"Free, cheap, or easy. Pick zero." - Nathan'
	];
</script>

{#if page.status == 404}
	<div class="flex flex-col items-center">
		<p>The page cannot be found (404)</p>
		<p class="mb-2 text-purple-500">---------------------------------</p>
		<p class="text-center">{quotes[Math.floor(Math.random() * quotes.length)]}</p>
	</div>
{/if}
