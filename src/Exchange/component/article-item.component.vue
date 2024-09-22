<script>
import { Article } from "../model/article-entity.js"

export default {
  name: "article-item",
  props: {
    article: {
      type: Article,
      required: true
    }
  }
}
</script>

<template>
  <!-- Al usar un pv-card usar un template para mostrar la información -->
    <pv-card>
      <template #content>
        <!-- <pre>{{ article }}</pre> -->
        <p>Code: {{article.code}}</p>
        <p>Symbol: {{article.symbol}}</p>
        <p>Rate: {{article.rate}}</p>
        <p>Description: {{article.description}}</p>
        <p>Rate_Float: {{article.rate_float}}</p>
      </template>
    </pv-card>
</template>

<style scoped>
</style>