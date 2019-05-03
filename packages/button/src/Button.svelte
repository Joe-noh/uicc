<script>
  export let outline = false
  export let disabled = false

  $: normal = !outline
</script>

<style>
  button {
    cursor: pointer;
    border-radius: 4px;
    font-size: 1rem;
    margin: 0;
    padding: 8px 16px;
  }
  button:disabled {
    cursor: not-allowed;
  }

  .normal {
    color: white;
    background-color: #0066FF;
    border: none;
  }
  .normal:disabled {
    background-color: #ccc;
  }

  .outline {
    color: #0066FF;
    background-color: white;
    border: 1px solid #0066FF;
  }
  .outline:disabled {
    color: #ccc;
    background-color: white;
    border: 1px solid #ccc;
  }
</style>

<button class:normal class:outline { disabled }>
  <slot />
</button>
