<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.mb-lg-4.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/intro/img01.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0
        p.mb-3(data-aos="fade-right") La distribución constituye uno de los procesos estratégicos dentro de la gestión comercial, ya que permite que los productos lleguen al cliente en el momento, lugar y condiciones requeridas. Para lograrlo, las organizaciones deben definir acciones de distribución acordes con el formato comercial, las características del mercado y los objetivos del plan de mercadeo, garantizando eficiencia en las operaciones y competitividad empresarial.
        
        .bg-fondo-01.br-15.mb-0.p-4
          p.mb-0 En este componente formativo se desarrollan los conceptos fundamentales de la logística y la logística inversa, las estrategias de distribución, la administración de inventarios, el control de existencias, el uso de herramientas de georreferenciación y la elaboración del plan de distribución. Estos elementos permiten comprender cómo planificar y coordinar el flujo de productos dentro de la cadena de suministro, optimizando recursos y fortaleciendo el nivel de servicio al cliente.

    p.mb-0 Durante el proceso de aprendizaje, usted analizará situaciones propias del contexto comercial y aplicará criterios técnicos para definir acciones de distribución que respondan a las necesidades de diferentes formatos comerciales. De esta manera, fortalecerá su capacidad para apoyar la toma de decisiones relacionadas con la cobertura del mercado, la disponibilidad de los productos y la eficiencia de los procesos logísticos.

    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
