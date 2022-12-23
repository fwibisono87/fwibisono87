<script lang="ts">
	export let title: string;
	export let cta: string ="";
	export let ctaMobile: string;
</script>

<h3 class="text-2xl font-semibold text-text text-center lg:text-left">{title}</h3>
<span class="hidden lg:block text-dove">{cta}</span>
<span class="block lg:hidden text-dove text-center">{ctaMobile ? ctaMobile : cta}</span>
