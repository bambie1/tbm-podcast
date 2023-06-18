<script>
  import "../app.css";
    import logo from '$lib/assets/tbm-logo.png';
</script>

<header class="max-w-6xl xl:max-w-screen-2xl mx-auto flex items-center gap-10 justify-between py-4 px-4">
  <img alt="TBM logo" src={logo} class="h-16 w-[12rem] object-cover" />

  <div class="flex items-center gap-4">
    <a href="/#about">About</a>
  </div>
</header>
<slot />


<footer>Footer</footer>