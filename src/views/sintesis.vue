<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-4.justify-content-center.align-items-center
      .col-lg-12
        p.mb-0(data-aos="fade-right") El componente formativo Principios de la distribución comercial aborda el estudio de los productos, su distribución, incluyendo su concepto, tipos, plan, sistemas y utilidades, como un elemento clave dentro de la comercialización. En este contexto, se analizan los canales de distribución, su clasificación, características, estructura y métodos de selección, así como el papel de los intermediarios, los acuerdos comerciales en la gestión del mercado y el análisis de los formatos comerciales.


    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg" alt="La ilustración muestra la estructura jerárquica que sintetiza el contenido del componente formativo “Operación comercial digital”, el cual se organiza en ocho unidades. Inicia con estrategia comercial en social media en donde se abordan los conceptos de venta, objetivos SMART, producto, marketing online, embudo de ventas y canales de venta de social media. El capítulo dos corresponde a segmentación y posicionamiento comercial digital\t, allí se ve lo correspondiente a segmentación, posicionamiento, lead magnet, palabras clave e intenciones de búsqueda e insights. El capítulo tres corresponde a construcción de marca y comunicación persuasiva, en donde se copywriting, llamados a la acción y contenidos persuasivos, guiones técnicos para contenidos digitales, tono de marca, prisma de la marca y contenidos digitales. El capítulo cuatro aborda la temática de producción de contenidos digitales, en donde se desarrollan los conceptos de plataformas de inteligencia artificial, plataformas de diseño y edición multimedia, técnicas básicas de edición de imagen, técnicas básicas de edición de video y medios digitales. El capítulo cinco aborda la planificación, publicación y optimización de contenidos, allí se ve parrilla de contenidos, calendario de publicaciones, divulgación de contenido digital, protocolos de publicación e indexación de contenidos digitales y netiqueta. El capítulo seis aborda el cierre de ventas digitales con los conceptos de conversión y medios de pago. El capítulo siete desarrolla entrega y garantía, explícitamente con los conceptos de sistemas de entrega y garantía. Culmina el componente con el capítulo ocho en donde se desarrolla el análisis comercial a partir de los conceptos de reporte, métricas de ventas y KPI.")
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
