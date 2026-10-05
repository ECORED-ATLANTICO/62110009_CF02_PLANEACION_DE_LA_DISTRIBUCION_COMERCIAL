<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Stock de inventarios (existencias)



    .bloque-texto-g.bg-color-08.p-4.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema5/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Dentro de la gestión de la distribución comercial, mantener niveles adecuados de productos disponibles es fundamental para garantizar la continuidad de las operaciones y la atención oportuna de la demanda. El stock de inventarios permite a las empresas responder de manera eficiente a las necesidades del mercado, evitando tanto el desabastecimiento como el exceso de productos.

    separador
    
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Concepto

    .row.mb-lg-4.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema5/img02.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0
        p.mb-3(data-aos="fade-right") El stock de inventarios, también denominado existencias, corresponde a la cantidad de productos que una empresa mantiene disponibles para satisfacer la demanda de sus clientes.
        
        .bg-fondo-01.br-15.mb-3.p-4
          p.mb-0 Este concepto está directamente relacionado con la gestión del inventario, ya que implica definir niveles óptimos que permitan garantizar disponibilidad sin generar costos innecesarios. Un adecuado control del stock permite equilibrar la oferta y la demanda, evitando pérdidas por faltantes o por acumulación de productos.

        p.mb-0 En el contexto empresarial, D1 y Ara manejan niveles de stock ajustados para garantizar alta rotación y reducción de costos, mientras que empresas como Amazon utilizan sistemas automatizados para mantener niveles de stock óptimos según la demanda.

    separador
    
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Beneficios

    
    .row.align-items-center.mb-5.justify-content-center
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema5/img03.svg").mx-auto
      .col-lg
        p.mb-0 El manejo adecuado del stock de inventarios contribuye a garantizar la disponibilidad de los productos y a mejorar el desempeño de las operaciones logísticas. Una administración eficiente de las existencias favorece la atención de la demanda, optimiza los recursos y fortalece la rentabilidad de la organización.

    p.mb-5 Entre los principales beneficios del stock de inventarios se destacan:

    
    .bg-full-width.bg-fondo-1
      .row.mb-lg-5.mb-4.justify-content-center.align-items-center
        .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
          figure
            img(src="@/assets/curso/tema5/img04.png", data-aos="zoom-in").mx-auto

        .col-lg-9.order-2.order-lg-2.mb-0.mb-lg-0
          AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-c1" data-aos="zoom-in").mb-0
            .tarjeta(titulo="Disponibilidad de productos")
              p.mb-2 Permite mantener las cantidades necesarias de productos para responder oportunamente a los pedidos y requerimientos de los clientes en los diferentes puntos de comercialización.
              p.mb-0 #[b Ejemplo:] un supermercado mantiene existencias suficientes de leche para atender la demanda diaria de sus clientes.

            .tarjeta(titulo="Reducción de faltantes")
              p.mb-2 Disminuye el riesgo de agotamiento de productos mediante el seguimiento de existencias, la reposición oportuna y la definición de cantidades adecuadas para atender la demanda.
              p.mb-0 #[b Ejemplo:] una tienda repone las bebidas antes de alcanzar niveles mínimos de inventario, evitando quedarse sin unidades disponibles.

            .tarjeta(titulo="Optimización de las operaciones")
              p.mb-2 Facilita la planificación del almacenamiento, abastecimiento, preparación de pedidos y distribución, favoreciendo el uso eficiente del espacio, el tiempo y los recursos disponibles.
              p.mb-0 #[b Ejemplo:] una bodega organiza los productos según su rotación para agilizar el alistamiento y despacho de los pedidos.

            .tarjeta(titulo="Control de costos")
              p.mb-2 Contribuye a identificar y reducir costos relacionados con almacenamiento, exceso de existencias, deterioro, obsolescencia, faltantes y movimientos innecesarios de productos.
              p.mb-0 #[b Ejemplo:] una empresa ajusta las cantidades almacenadas de alimentos para disminuir pérdidas por vencimiento y costos de almacenamiento.


      .container
        .row.mb-lg-5.mb-4.justify-content-center.align-items-center
          .col-lg-10.col-md-12
            .row.align-items-center.bg-fondo-04.p-4
              .col-lg-auto.order-2
                img.d-none.d-lg-flex(src="@/assets/curso/tema1/img03.svg", style="max-width: 150px").mx-auto
              .col-lg.order-1
                p.mb-0 En la práctica, supermercados como Éxito mantienen niveles de stock que aseguran disponibilidad constante, mientras que empresas de comercio electrónico ajustan sus existencias en función de la demanda proyectada.

      separador
      
      #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 5.3 Ubicación


    .container
      .row.mb-lg-5.mb-4.justify-content-center.align-items-center.bg-color-06
        .col-lg-5.col-md-12.mb-4.mb-lg-0.order-1.order-lg-2.p-0
          figure
            img(src="@/assets/curso/tema5/img05.png", data-aos="zoom-in").mx-auto
        .col-lg-7.order-2.order-lg-1.mb-0.mb-lg-0.p-4
          p.mb-0(data-aos="fade-right") La ubicación del stock de inventarios corresponde a los espacios donde se almacenan los productos dentro de la cadena de distribución. Una ubicación adecuada facilita el abastecimiento, reduce los tiempos de entrega y contribuye a mejorar la eficiencia de las operaciones logísticas.

    p.mb-4 Las principales ubicaciones del stock de inventarios son:
    
    .bg-full-width.bg-fondo-1
      .bg-full-width.bg-fondo-05
        .bg-full-width.bg-fondo-03.p-5.mb-5
          SlyderA(tipo="b").bg-color-white.p-3.tarjeta
            .tarjeta.p-4.h-100.mb-0
              .row.align-items-center.justify-content-center
                .col-lg-5.col-md-10.order-2.order-lg-1.mb-0.mb-lg-0
                  figure
                    img(src="@/assets/curso/tema5/img06.png", data-aos="zoom-in").mx-auto
                .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4 Bodega central
                  p.mb-2 Instalación principal donde se concentran y almacenan productos provenientes de proveedores o plantas de producción, desde la cual se abastecen otras instalaciones, establecimientos o puntos de la red comercial.
                  p.mb-0 #[b Ejemplo:] una cadena de ferreterías concentra herramientas y materiales en una bodega central para abastecer posteriormente sus diferentes establecimientos.

            .tarjeta.p-4.h-100.mb-0
              .row.align-items-center.justify-content-center
                .col-lg-5.col-md-10.order-2.order-lg-1.mb-0.mb-lg-0
                  figure
                    img(src="@/assets/curso/tema5/img07.png", data-aos="zoom-in").mx-auto
                .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4 Punto de venta
                  p.mb-2 Establecimiento físico donde se mantiene una cantidad de inventario destinada principalmente a atender de manera directa e inmediata las compras realizadas por el consumidor final.
                  p.mb-0 #[b Ejemplo:] una farmacia conserva medicamentos y productos de cuidado personal para atender diariamente las compras de sus clientes.

            .tarjeta.p-4.h-100.mb-0
              .row.align-items-center.justify-content-center
                .col-lg-5.col-md-10.order-2.order-lg-1.mb-0.mb-lg-0
                  figure
                    img(src="@/assets/curso/tema5/img08.png", data-aos="zoom-in").mx-auto
                .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4 Centro de distribución
                  p.mb-2 Instalación logística destinada a recibir, almacenar temporalmente, preparar y despachar productos hacia diferentes destinos, buscando agilizar el flujo de mercancías dentro de la red de distribución.
                  p.mb-0 #[b Ejemplo:] un centro recibe productos de aseo, prepara los pedidos y los despacha hacia supermercados ubicados en diferentes ciudades.

            .tarjeta.p-4.h-100.mb-0
              .row.align-items-center.justify-content-center
                .col-lg-5.col-md-10.order-2.order-lg-1.mb-0.mb-lg-0
                  figure
                    img(src="@/assets/curso/tema5/img09.png", data-aos="zoom-in").mx-auto
                .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4 Almacenamiento regional
                  p.mb-2 Ubica inventarios en instalaciones cercanas a determinadas zonas geográficas para reducir distancias de distribución, mejorar los tiempos de entrega y responder oportunamente a la demanda regional.
                  p.mb-0 #[b Ejemplo:] una empresa mantiene inventario de bebidas en una bodega regional para abastecer tiendas y restaurantes de varios municipios cercanos.

      .container
        .row.mb-lg-5.mb-4.justify-content-center.align-items-center
          .col-lg-10.col-md-12
            .row.align-items-center.bg-fondo-04.p-4
              .col-lg-auto.order-2
                img.d-none.d-lg-flex(src="@/assets/curso/tema1/img03.svg", style="max-width: 150px").mx-auto
              .col-lg.order-1
                p.mb-0 En el entorno empresarial, Mercado Libre utiliza centros de distribución estratégicamente ubicados para reducir tiempos de entrega, mientras que Falabella combina bodegas centrales y puntos de venta para optimizar su operación.
      
      
      .row.align-items-center(data-aos="fade-right")
        .col-lg-10.mx-auto
          .tarjeta.bg-fondo-08.p-3.mb-5
            .row.justify-content-around.align-items-center
              .col-6.col-sm-4.col-md-3.col-lg-2.mb-3.mb-lg-0.mx-auto.mx-lg-0.text-center
                img(src="@/assets/curso/tema1/img12.svg")
              .col-12.col-lg.mb-2.mb-lg-0
                h4.mb-2.mx-lg-0.text-lg-start ¿Qué es el stock de una empresa?
                p.mb-0 Para comprender el manejo del stock de inventarios en empresas ir al siguiente video:
              .col-12.col-lg-auto.text-center
                a.boton.color-acento-botones(:href="'https://www.youtube.com/watch?v=FQhWLNrN92E'" target="_blank")
                  span Ir al recurso

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
