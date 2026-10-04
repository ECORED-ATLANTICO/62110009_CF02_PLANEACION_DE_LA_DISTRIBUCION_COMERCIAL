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
      .row.mb-lg-4.mb-3.justify-content-center.align-items-center.bg-color-06
        .col-lg-5.col-md-12.mb-4.mb-lg-0.order-1.order-lg-2.p-0
          figure
            img(src="@/assets/curso/tema5/img05.png", data-aos="zoom-in").mx-auto
        .col-lg-7.order-2.order-lg-1.mb-0.mb-lg-0.p-4
          p.mb-0(data-aos="fade-right") La ubicación del stock de inventarios corresponde a los espacios donde se almacenan los productos dentro de la cadena de distribución. Una ubicación adecuada facilita el abastecimiento, reduce los tiempos de entrega y contribuye a mejorar la eficiencia de las operaciones logísticas.

    p.mb-4 Las principales ubicaciones del stock de inventarios son:
    
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
                //- i.fas.fa-link



  //
    .bg-full-width.bg-fondo-02.px-5.py-4
      img(src="@/assets/curso/tema5/img01.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text En la distribución comercial, las relaciones entre los actores del canal requieren condiciones que orienten la negociación y operación. En este contexto, los acuerdos comerciales facilitan la coordinación, optimizan procesos y fortalecen la gestión de la comercialización. 

    separador
    
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Concepto

    .bloque-texto-g.bg-color-01.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema5/img02.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los acuerdos comerciales son instrumentos clave dentro de la distribución, ya que establecen las condiciones bajo las cuales los actores del canal interactúan. Su correcta definición permite garantizar relaciones claras, eficientes y sostenibles entre productores, intermediarios y distribuidores. En el contexto actual, estos acuerdos también incorporan aspectos logísticos, comerciales y tecnológicos.

    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-5.mb-4.mb-lg-0
        p.mb-0 Estos acuerdos permiten regular aspectos como precios, volúmenes de compra, territorios de venta, tiempos de entrega, condiciones de pago y exclusividad. Su finalidad es asegurar el cumplimiento de los objetivos comerciales y optimizar la relación entre los participantes del canal.

      .col-lg-7
        .bg-fondo-01.br-15.mb-0.p-4
          p.mb-0 En la práctica, empresas como Nestlé establecen acuerdos con distribuidores para garantizar cobertura territorial, mientras que Coca-Cola define condiciones específicas con minoristas para asegurar visibilidad del producto y rotación en el punto de venta.

    separador
    
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Tipos

    .bg-full-width.bg-fondo-1
      .row.align-items-center.mb-3.justify-content-center
        .col-lg-auto.d-none.d-lg-flex
          img(src="@/assets/curso/tema5/img03.svg").mx-auto
        .col-lg
          p.mb-2 Los acuerdos comerciales se clasifican según su alcance, las condiciones pactadas y la relación establecida entre las partes, con el propósito de regular la comercialización y distribución de productos.
          p.mb-0 Los principales tipos son:
      

      .row.mb-lg-4.mb-5.justify-content-center.align-items-center
        .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
          figure.mb-3
            img(src="@/assets/curso/tema5/img04.png", data-aos="zoom-in").mx-auto
        .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0
          TabsA.color-acento-botones
            .tarjeta.color-acento-botones--borde.p-4(titulo="De distribución").align-content-center
              p.mb-2 Establecen las condiciones mediante las cuales una empresa autoriza a otra para comercializar sus productos en determinados mercados, territorios o canales.
              p.mb-0 #[b Ejemplo:] un fabricante acuerda con un distribuidor comercializar sus bebidas en supermercados de una región.

            .tarjeta.color-acento-botones--borde.p-4(titulo="De exclusividad").align-content-center
              p.mb-2 Otorgan a una de las partes derechos exclusivos para comercializar determinados productos, marcas o servicios bajo condiciones previamente establecidas.
              p.mb-0 #[b Ejemplo:] una empresa concede a un distribuidor la venta exclusiva de sus productos en una zona geográfica determinada.

            .tarjeta.color-acento-botones--borde.p-4(titulo="De franquicia").align-content-center
              p.mb-2 Autorizan al franquiciado a utilizar una marca, modelo de negocio, procedimientos y conocimientos comerciales definidos por el franquiciante, bajo condiciones acordadas.
              p.mb-0 #[b Ejemplo:] un empresario opera un restaurante utilizando la marca y el modelo comercial de una cadena.

            .tarjeta.color-acento-botones--borde.p-4(titulo="De suministro").align-content-center
              p.mb-2 Regulan el abastecimiento periódico de productos, materias primas o insumos entre proveedor y comprador, definiendo cantidades, precios, calidad y condiciones de entrega.
              p.mb-0 #[b Ejemplo:] un proveedor acuerda entregar semanalmente productos lácteos a una cadena de supermercados.
      
      .container
        .row.mb-lg-4.mb-4.justify-content-center.align-items-center
          .col-lg-10.col-md-12
            .row.align-items-center.bg-fondo-07.p-4
              .col-lg-auto
                img.d-none.d-lg-flex(src="@/assets/curso/tema1/img10.png", style="max-width: 150px").mx-auto
              .col-lg
                p.mb-0 En el entorno empresarial, McDonald’s opera bajo acuerdos de franquicia que garantizan estandarización del servicio, mientras que Samsung utiliza acuerdos de distribución con retailers para posicionar sus productos en grandes superficies.

      separador
      
      #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 5.3 Funciones

      p.mb-4 Los acuerdos comerciales cumplen funciones que facilitan la relación entre las partes y contribuyen al desarrollo eficiente de los procesos de distribución. Las principales funciones son:

    .row.justify-content-center.mb-5
      .col-xl-3.col-lg-6.col-md-10.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/img05.png", alt="")
          .crd_hover_txt--body
            h4.mb-3.text-center Regulación
            p.mb-0 Define las condiciones, responsabilidades, derechos y obligaciones que orientan la relación entre las partes y el desarrollo de las operaciones comerciales.
            p.mb-0 #[b Ejemplo:] un acuerdo establece precios, territorios autorizados y condiciones para comercializar determinados productos.

      .col-xl-3.col-lg-6.col-md-10.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/img06.png", alt="")
          .crd_hover_txt--body.py-xl-4.px-xl-2
            h4.mb-3.text-center Coordinación
            p.mb-0 Articula las actividades de los participantes para facilitar el abastecimiento, comercialización y entrega de productos conforme a condiciones previamente acordadas.
            p.mb-0 #[b Ejemplo:] fabricante y distribuidor coordinan inventarios, pedidos y fechas de entrega para atender oportunamente los puntos de venta.

      .col-xl-3.col-lg-6.col-md-10.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/img07.png", alt="")
          .crd_hover_txt--body
            h4.mb-3.text-center Control
            p.mb-0 Establece mecanismos para verificar el cumplimiento de las condiciones pactadas y realizar seguimiento al desempeño de las partes.
            p.mb-0 #[b Ejemplo:] una empresa revisa periódicamente ventas, inventarios y estándares de servicio establecidos con su distribuidor.

      .col-xl-3.col-lg-6.col-md-10.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/img08.png", alt="")
          .crd_hover_txt--body
            h4.mb-3.text-center Estabilidad
            p.mb-0 Favorece relaciones comerciales continuas al establecer condiciones que brindan previsibilidad y confianza entre las partes durante un periodo determinado.
            p.mb-0 #[b Ejemplo:] un proveedor garantiza entregas mensuales durante un año, permitiendo al comprador planificar su abastecimiento.

    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-10.col-md-12
        .cajon.bg-color-c1.p-4
          p.mb-0 En la práctica, empresas como Grupo Éxito establecen acuerdos con proveedores para garantizar abastecimiento continuo, condiciones de exhibición y estrategias promocionales, mientras que Amazon regula su marketplace mediante acuerdos que definen condiciones de venta para terceros.



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
