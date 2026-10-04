<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Software para georreferenciación

    .container
      .row.mb-lg-4.mb-4.justify-content-center.align-items-center
        .col-lg-12.col-md-12
          .row.align-items-center.bg-fondo-11.p-4
            //- .col-lg-auto.d-none.d-lg-flex
            //-   img(src="@/assets/curso/tema3/img01.svg").mx-auto
            .col-lg-12
              p.mb-0 En la gestión de la distribución comercial, la ubicación geográfica de los clientes, puntos de venta y rutas logísticas se convierte en un factor determinante para optimizar la operación. El uso de herramientas tecnológicas permite analizar el territorio, mejorar la planificación de rutas y tomar decisiones estratégicas basadas en datos espaciales, fortaleciendo la eficiencia en la distribución.

    separador
    
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.1 Concepto

    .bloque-texto-g.bloque-texto-g--inverso.bg-color-08.p-4.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema5/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El software para georreferenciación es una herramienta tecnológica que permite identificar, registrar y analizar la ubicación geográfica de elementos como clientes, puntos de venta, rutas y centros de distribución mediante coordenadas o mapas digitales.

    p.mb-4 Este tipo de software facilita la visualización espacial de la información, permitiendo optimizar procesos logísticos, mejorar la cobertura del mercado y reducir costos asociados al transporte. Además, integra datos en tiempo real que apoyan la toma de decisiones estratégicas en la distribución.

    
    .container
      .row.mb-lg-5.mb-4.justify-content-center.align-items-center
        .col-lg-10.col-md-12
          .row.align-items-center.bg-fondo-04.p-4
            .col-lg-auto.order-1
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/img03.svg", style="max-width: 150px").mx-auto
            .col-lg.order-2
              p.mb-0 En el contexto empresarial, herramientas como Google Maps, ArcGIS y QGIS son utilizadas para planificar rutas de entrega, ubicar clientes y analizar zonas de cobertura, mientras que empresas como Rappi y Uber Eats dependen de sistemas de georreferenciación para gestionar entregas en tiempo real.


    separador
    
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.2 Procedimiento de uso

    p.mb-4 El uso del software de georreferenciación implica una serie de pasos que permiten aprovechar sus funcionalidades dentro de la gestión logística y comercial.

    .row.mb-4.justify-content-center.align-items-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-2 Tabla 3.
          span Procedimiento de uso del software de georreferenciación
        .tabla-a.tb-custom.mb-0
          table
            caption Nota. Adaptada de Ballou, R. H. (2004); Christopher, M. (2016); y ESRI (2023).
            thead
              tr
                th Etapa
                th Descripción
                th Aplicación
            tbody
              tr
                td Recolección de datos
                td Registro organizado de direcciones, coordenadas geográficas y puntos de interés mediante bases de datos o sistemas de información.
                td Creación de bases de datos de clientes, proveedores y puntos de entrega.
              tr
                td Geocodificación
                td Proceso de transformación de direcciones físicas en coordenadas geográficas (latitud y longitud) para su ubicación en mapas digitales.
                td Ubicación precisa de clientes y puntos de venta en plataformas como Google Maps o ArcGIS.
              tr
                td Visualización
                td Representación gráfica de los datos georreferenciados en mapas digitales que permiten identificar patrones espaciales.
                td Identificación de zonas de cobertura, concentración de clientes y áreas de oportunidad.
              tr
                td Análisis
                td Evaluación de variables como distancias, tiempos de desplazamiento, rutas óptimas y densidad geográfica mediante herramientas tecnológicas.
                td Optimización de rutas de distribución, reducción de costos logísticos y mejora en tiempos de entrega.
              tr
                td Toma de decisiones
                td Definición de estrategias logísticas y comerciales basadas en el análisis de la información geográfica obtenida.
                td Diseño de rutas eficientes, expansión de cobertura y mejora de la eficiencia operativa.


    p.mb-5 En la práctica, empresas de mensajería como Servientrega utilizan software de georreferenciación para planificar rutas eficientes, mientras que plataformas como Mercado Libre optimizan sus entregas mediante análisis geográficos que reducen tiempos y costos de distribución.


    .row.align-items-center(data-aos="fade-right")
      .col-lg-10.mx-auto
        .tarjeta.bg-fondo-08.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-6.col-sm-4.col-md-3.col-lg-2.mb-3.mb-lg-0.mx-auto.mx-lg-0.text-center
              img(src="@/assets/curso/tema1/img12.svg")
            .col-12.col-lg.mb-2.mb-lg-0
              h4.mb-2.mx-lg-0.text-lg-start Cómo georreferenciar una imagen con QGIS
              p.mb-0 Para comprender el uso de la georreferenciación en la distribución ir a los siguientes videos:
            .col-12.col-lg-auto.text-center.d-flex.flex-column.gap-2
              a.boton.color-acento-botones.mb-0(:href="'https://www.youtube.com/watch?v=gswAM4fJcRM'" target="_blank")
                span Ir al recurso
              a.boton.color-acento-botones.mb-0(:href="'https://www.youtube.com/watch?v=RXGHYSg0QhQ'" target="_blank")
                span Ir al recurso



    .row.align-items-center(data-aos="fade-right")
      .col-lg-10.mx-auto
        .tarjeta.bg-fondo-14.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-6.col-sm-4.col-md-3.col-lg-2.mb-3.mb-lg-0.mx-auto.mx-lg-0.text-center
              img(src="@/assets/curso/tema4/img10.svg")
            .col-12.col-lg.mb-2.mb-lg-0
              h4.mb-2.mx-lg-0.text-lg-start Aplicación de escritorio con todas las funciones para ArcGIS
              p.mb-2 Para fortalecer la comprensión del uso de software de georreferenciación en la gestión de la distribución, se recomienda explorar el siguiente recurso:
              p.mb-0 Este sitio presenta la herramienta ArcGIS Pro, la cual permite analizar datos geográficos, visualizar información espacial y optimizar procesos logísticos mediante la planificación de rutas y la gestión territorial. Se invita al aprendiz a navegar el sitio web para identificar sus principales funcionalidades, reconociendo su aplicación en la toma de decisiones dentro de la distribución comercial.
            .col-12.col-lg-auto.text-center
              a.boton.color-acento-botones(:href="'https://www.esri.com/es-es/arcgis/products/arcgis-pro/overview'" target="_blank")
                span Ir al recurso
                //- i.fas.fa-link






  //
    .bloque-texto-g.bg-color-08.p-4.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema6/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En el proceso de distribución, la forma en que los productos se presentan y comercializan al cliente final influye directamente en la experiencia de compra y en el alcance del mercado. Los formatos comerciales responden a las dinámicas del consumo, adaptándose a las necesidades del cliente, al tipo de producto y a los canales utilizados por las empresas.

    separador
    
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.1 Concepto


    .row.mb-lg-4.mb-3.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema6/img02.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0
        p.mb-3(data-aos="fade-right") Los formatos comerciales corresponden a las diferentes formas o tipos de establecimientos y medios a través de los cuales se comercializan productos o servicios al consumidor final.
        
        .bg-fondo-05.br-15.mb-3.p-4
          p.mb-0 Estos formatos determinan la manera en que el cliente interactúa con el producto, influyendo en aspectos como accesibilidad, servicio, exhibición y experiencia de compra. Su elección depende del segmento de mercado, el tipo de producto y la estrategia comercial de la organización.

        p.mb-0(data-aos="fade-right") En el contexto real, Éxito opera en formatos como hipermercados y supermercados, mientras que D1 utiliza un formato de tienda de descuento que prioriza precios bajos y alta rotación de productos.

    separador
    
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.2 Tipos

    p.mb-4 Los tipos de formatos comerciales se diferencian según características como tamaño, surtido, nivel de servicio y modelo de operación.  Entre los más comunes tenemos:

    
    .bg-full-width.bg-fondo-03.p-5.mb-5
      SlyderA(tipo="b").bg-color-white.p-3.tarjeta
        .tarjeta.p-4.h-100.mb-0
          .row.align-items-center.justify-content-center
            .col-lg-7.col-md-10.order-2.order-lg-2.mb-0.mb-lg-0
              figure
                img(src="@/assets/curso/tema6/img03.png", data-aos="zoom-in").mx-auto
            .col-lg-5.order-1.order-lg-1.mb-4.mb-lg-0
              h4 Tienda tradicional
              p.mb-3 Ofrece productos de consumo frecuente en establecimientos pequeños y cercanos al consumidor, caracterizados por atención directa, surtido limitado y compras en cantidades reducidas.
              p.mb-0 #[b Ejemplo:] tiendas de barrio.

        .tarjeta.p-4.h-100.mb-0
          .row.align-items-center.justify-content-center
            .col-lg-7.col-md-10.order-2.order-lg-2.mb-0.mb-lg-0
              figure
                img(src="@/assets/curso/tema6/img04.png", data-aos="zoom-in").mx-auto
            .col-lg-5.order-1.order-lg-1.mb-4.mb-lg-0
              h4 Supermercado
              p.mb-3 Reúne diferentes categorías de productos de consumo, principalmente alimentos, bebidas, aseo y artículos para el hogar, mediante un sistema de autoservicio que permite al consumidor seleccionar directamente los productos.
              p.mb-0 #[b Ejemplo:] cadenas como Olímpica.

        .tarjeta.p-4.h-100.mb-0
          .row.align-items-center.justify-content-center
            .col-lg-7.col-md-10.order-2.order-lg-2.mb-0.mb-lg-0
              figure
                img(src="@/assets/curso/tema6/img05.png", data-aos="zoom-in").mx-auto
            .col-lg-5.order-1.order-lg-1.mb-4.mb-lg-0
              h4 Hipermercado
              p.mb-3 Integra una amplia variedad de productos alimenticios y no alimenticios dentro de establecimientos de gran superficie, combinando diferentes categorías y servicios para facilitar múltiples compras en un mismo lugar.
              p.mb-0 #[b Ejemplo:] almacenes como Éxito.

        .tarjeta.p-4.h-100.mb-0
          .row.align-items-center.justify-content-center
            .col-lg-7.col-md-10.order-2.order-lg-2.mb-0.mb-lg-0
              figure
                img(src="@/assets/curso/tema6/img06.png", data-aos="zoom-in").mx-auto
            .col-lg-5.order-1.order-lg-1.mb-4.mb-lg-0
              h4 Tienda de descuento
              p.mb-3 Prioriza precios competitivos mediante una operación simplificada, surtido seleccionado y control de costos, frecuentemente apoyado en marcas propias y presentaciones funcionales.
              p.mb-0 #[b Ejemplo:] D1, Ara.

        .tarjeta.p-4.h-100.mb-0
          .row.align-items-center.justify-content-center
            .col-lg-7.col-md-10.order-2.order-lg-2.mb-0.mb-lg-0
              figure
                img(src="@/assets/curso/tema6/img07.png", data-aos="zoom-in").mx-auto
            .col-lg-5.order-1.order-lg-1.mb-4.mb-lg-0
              h4 Comercio electrónico
              p.mb-3 Facilita la compra y venta de productos mediante sitios web, aplicaciones o plataformas digitales, permitiendo consultar la oferta, realizar pedidos y efectuar pagos sin acudir físicamente al establecimiento.
              p.mb-0 #[b Ejemplo:] Amazon, Mercado Libre.

    .container
      .row.mb-lg-4.mb-4.justify-content-center.align-items-center
        .col-lg-10.col-md-12
          .row.align-items-center.bg-fondo-07.p-4
            .col-lg-auto
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/img10.png", style="max-width: 150px").mx-auto
            .col-lg
              p.mb-0 En la práctica, Ara y D1 han ganado participación de mercado mediante formatos de descuento, mientras que Amazon lidera el comercio electrónico con modelos de distribución digital.

    .bg-full-width.bg-fondo-1


      separador
      
      #t_6_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 6.3 Clasificación      

      p.mb-4 Los formatos comerciales también pueden clasificarse según criterios relacionados con su operación y relación con el cliente.

      .row.mb-5.justify-content-center.align-items-center
        .col-lg-12
          .titulo-sexto.color-acento-contenido.mb-3
            h5.text-bold.mb-2 Tabla 4.
            span Clasificación de formatos comerciales
          .tabla-a.tb-custom.mb-0
            table
              //- caption Nota. SENA, (2026).
              thead
                tr
                  th() Criterio
                  th() Clasificación
                  th() Descripción
              tbody
                tr
                  td(rowspan="2") Nivel de servicio
                  td Autoservicio
                  td El cliente selecciona los productos directamente.
                tr
                  td Servicio asistido
                  td Requiere apoyo del vendedor.
                tr
                  td(rowspan="2") Canal
                  td Físico
                  td Punto de venta tradicional.
                tr
                  td Digital
                  td Plataformas <em>online</em> o aplicaciones.
                tr
                  td(rowspan="2") Propiedad
                  td Independiente
                  td Negocio individual.
                tr
                  td Cadena
                  td Empresa con múltiples puntos de venta.

    .bg-full-width.bg-fondo-1
      .row.mb-lg-5.mb-4.justify-content-center.align-items-center
        .col-lg-10.col-md-12
          .cajon.bg-color-c1.p-4
            p.mb-0 En el contexto actual, empresas como Falabella integran formatos físicos y digitales, mientras que Rappi opera bajo un modelo digital que transforma la experiencia de compra mediante entregas a domicilio.

      .row.align-items-center(data-aos="fade-right")
        .col-lg-10.mx-auto
          .tarjeta.bg-fondo-11.p-3.mb-5
            .row.justify-content-around.align-items-center
              .col-6.col-sm-4.col-md-3.col-lg-2.mb-3.mb-lg-0.mx-auto.mx-lg-0.text-center
                img(src="@/assets/curso/tema6/img08.svg")
              .col-12.col-lg.mb-2.mb-lg-0
                //- h4.mb-2.max-cont-md.mx-lg-0.text-lg-start Clasificación de formatos comerciales
                p.mb-0 Para profundizar en los formatos comerciales, su clasificación y características dentro del comercio minorista, se recomienda consultar el siguiente documento:
              .col-12.col-lg-auto.text-center
                a.boton.color-acento-botones(:href="'https://rua.ua.es/bitstream/10045/10922/7/formatos_comerciales.pdf'" target="_blank")
                  span Ir al recurso

</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
