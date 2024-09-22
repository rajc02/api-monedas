<script>
/*import ArticleListComponent from "./Exchange/component/article-list.component.vue";
  import {Article} from '/src/Exchange/model/article-entity.js'
  import {ArticleService} from "./Exchange/service/article.service.js";
  import ArticleList from "./Exchange/component/article-list.component.vue";
*/
/*  import ArticleList from "./Exchange/component/article-list.component.vue";
  import { Article } from './Exchange/model/article-entity.js';
  import { ArticleService } from "./Exchange/service/article.service.js";


  export default {
    name: 'App',
    components: {
      ArticleList
    },
    data() {
      return {
        articles: [],
        newsApi: new ArticleService()
      }
    },
    mounted() {
      this.getArticlesForSources();
    },
    methods: {
      buildArticles(bpiData) {
        return Object.values(bpiData).map(item => new Article(
            item.code,
            item.symbol,
            item.rate,
            item.description,
            item.rate_float
        ));
      },
      getArticlesForSources() {
        this.newsApi.getSources()
            .then(response => {
              let bpiData = response.data.bpi;
              this.articles = this.buildArticles(bpiData);
            })
            .catch(error => {
              console.error("Error al cargar los artículos:", error);
            });
      }
    }
  }*/

import ArticleList from "./Exchange/component/article-list.component.vue";
import { Article } from './Exchange/model/article-entity.js';
import { ArticleService } from "./Exchange/service/article.service.js";

export default {
  name: 'App',
  components: {
    ArticleList
  },
  data() {
    return {
      articles: [],
      newsApi: new ArticleService()
    }
  },
  mounted() {
    this.getArticlesForSources();
  },
  methods: {
    // Modifica el metodo buildArticles para crear instancias de Article
    buildArticles(bpiData) {
      return Object.values(bpiData).map(item => new Article(
          item.code,        // Asignar código de la moneda
          item.symbol,      // Asignar símbolo de la moneda
          item.rate,        // Asignar tasa de cambio (rate)
          item.description, // Descripción de la moneda
          item.rate_float   // Tasa en valor flotante
      ));
    },
    // Obtiene los datos de la API y construye los artículos
    getArticlesForSources() {
      this.newsApi.getSources()
          .then(response => {
            const bpiData = response.data.bpi; // Extraer el objeto bpi de la respuesta
            this.articles = this.buildArticles(bpiData); // Construir los artículos y asignarlos
          })
          .catch(error => {
            console.error("Error al cargar los artículos:", error);
          });
    }
  }
}
</script>

<template>
  <div>
    <article-list :articles="articles"/>
  </div>
</template>

<style scoped>

</style>
