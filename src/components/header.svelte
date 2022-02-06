<script>
    let links = [
        {
            title: 'Home',
            link: ''
        },
        {
            title: 'Education',
            link: ''
        },
        {
            title: 'Experience',
            link: ''
        },
        {
            title: 'Projects',
            link: ''
        },
        {
            title: 'Skills',
            link: ''
        },
    ]
</script>
<template>
    <div class="flex flex-row bg-background text-white font-medium px-14 pt-8">
        <div class="mr-auto text-lg">
            <h1>Francis<br />Wibisono</h1>
        </div>
        <div class="lg:flex flex-row right-0 font-normal hidden">
            {#each links as link}
                <a href={link.link} class="mx-5 h-min my-auto">
                    {link.title}
                </a>
            {/each}
        </div>
    </div>
</template>