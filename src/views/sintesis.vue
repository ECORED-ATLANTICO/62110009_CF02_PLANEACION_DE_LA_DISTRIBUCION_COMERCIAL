<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-4.justify-content-center.align-items-center
      .col-lg-12
        p.mb-0(data-aos="fade-right") El componente formativo Diseño del plan de distribución aborda la logística y la logística inversa, considerando sus funciones, actores, ciclo y beneficios dentro de la cadena de suministro. Asimismo, desarrolla las estrategias de distribución, la gestión de inventarios, la rotación, los métodos de control y el <em>stock</em> de existencias, junto con el uso de <em>software</em> para georreferenciación. Finalmente, estudia el plan de distribución, su concepto, estructura y etapas, proporcionando los conocimientos necesarios para diseñar, implementar y evaluar estrategias de distribución comercial en diferentes contextos empresariales.


    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg" alt="La figura presenta la estructura temática del componente formativo Diseño del plan de distribución, que integra los principales elementos necesarios para planificar la distribución comercial. El contenido articula aspectos relacionados con la gestión logística, el retorno de productos, las estrategias de distribución, la administración y disponibilidad de inventarios, el uso de herramientas tecnológicas y la formulación del plan. Cada área se desglosa en elementos que facilitan su comprensión y aplicación dentro del proceso de distribución.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
