<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Estrategias de distribución

    .container
      .row.mb-lg-4.mb-4.justify-content-center.align-items-center
        .col-lg-12.col-md-12
          .row.align-items-center.bg-fondo-11.p-4
            .col-lg-auto.d-none.d-lg-flex
              img(src="@/assets/curso/tema3/img01.svg").mx-auto
            .col-lg
              p.mb-0 En la distribución moderna, las empresas han transitado de modelos tradicionales a esquemas más flexibles y multicanal. La integración de canales físicos y digitales permite ofrecer experiencias omnicanal, donde el cliente puede interactuar mediante diversos puntos de contacto, como tiendas físicas, plataformas en línea, aplicaciones móviles y redes sociales.


    separador
    
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Concepto

    p.mb-4 Las estrategias de distribución corresponden al conjunto de decisiones que toma una empresa para definir cómo sus productos llegarán al consumidor final, considerando aspectos como canales, cobertura, intermediarios y nivel de control.


    .bloque-texto-g.bloque-texto-g--inverso.bg-color-08.p-4.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema3/img02.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Estas estrategias buscan equilibrar variables como costo, disponibilidad, posicionamiento y servicio, permitiendo que el producto esté accesible en el momento y lugar adecuados. Su diseño depende del tipo de producto, el mercado objetivo y la capacidad logística de la organización. 

    .container
      .row.mb-lg-4.mb-4.justify-content-center.align-items-center
        .col-lg-10.col-md-12
          .row.align-items-center.bg-fondo-04.p-4
            .col-lg-auto.order-1
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/img03.svg", style="max-width: 150px").mx-auto
            .col-lg.order-2
              p.mb-0 En el contexto empresarial, Coca-Cola aplica estrategias orientadas a la máxima cobertura, mientras que Apple utiliza estrategias que priorizan el control del canal y la experiencia del cliente mediante distribución selectiva y exclusiva.

    separador
    
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Tipos

    p.mb-2 Las estrategias de distribución se definen según el nivel de cobertura que la organización desea alcanzar y la cantidad de intermediarios que participan en la comercialización del producto. La selección de la estrategia depende de las características del mercado, el tipo de producto y los objetivos comerciales de la empresa.

    p.mb-4 Los principales tipos de estrategias de distribución son:


    .bg-full-width.bg-fondo-1
      .bg-full-width.bg-fondo-05
        .bg-full-width.bg-fondo-03.p-5.mb-5
          SlyderA(tipo="b").bg-color-white.p-3.tarjeta
            .tarjeta.p-4.h-100.mb-0
              .row.align-items-center.justify-content-center
                .col-lg-5.col-md-10.order-2.order-lg-2.mb-0.mb-lg-0
                  figure
                    img(src="@/assets/curso/tema3/img03.png", data-aos="zoom-in").mx-auto
                .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
                  h4 Distribución intensiva
                  p.mb-2 Busca alcanzar la mayor cobertura posible, ubicando el producto en numerosos puntos de venta para facilitar su disponibilidad y adquisición. Se utiliza principalmente en productos de consumo frecuente y alta rotación.
                  p.mb-0 #[b Ejemplo:] una empresa de bebidas distribuye sus productos en supermercados, tiendas de barrio, restaurantes, minimercados y estaciones de servicio.

            .tarjeta.p-4.h-100.mb-0
              .row.align-items-center.justify-content-center
                .col-lg-5.col-md-10.order-2.order-lg-2.mb-0.mb-lg-0
                  figure
                    img(src="@/assets/curso/tema3/img04.png", data-aos="zoom-in").mx-auto
                .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
                  h4 Distribución selectiva
                  p.mb-2 Utiliza un número limitado de intermediarios o puntos de venta, seleccionados según criterios como ubicación, capacidad comercial, servicio, experiencia o posicionamiento, buscando equilibrar la cobertura del mercado con el control de la distribución.
                  p.mb-0 #[b Ejemplo:] una marca de electrodomésticos comercializa sus productos únicamente mediante almacenes especializados y determinadas cadenas comerciales.

            .tarjeta.p-4.h-100.mb-0
              .row.align-items-center.justify-content-center
                .col-lg-5.col-md-10.order-2.order-lg-2.mb-0.mb-lg-0
                  figure
                    img(src="@/assets/curso/tema3/img05.png", data-aos="zoom-in").mx-auto
                .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
                  h4 Distribución exclusiva
                  p.mb-2 Otorga a uno o pocos intermediarios autorizados la comercialización del producto en un territorio o mercado determinado, permitiendo mantener mayor control sobre la venta, el servicio, la presentación y el posicionamiento de la marca.
                  p.mb-0 #[b Ejemplo:] una marca de artículos de lujo autoriza únicamente a determinados establecimientos para comercializar sus productos en una ciudad.

      .container
        .row.mb-lg-4.mb-4.justify-content-center.align-items-center
          .col-lg-10.col-md-12
            .row.align-items-center.bg-fondo-04.p-4
              .col-lg-auto.order-1
                img.d-none.d-lg-flex(src="@/assets/curso/tema1/img03.svg", style="max-width: 150px").mx-auto
              .col-lg.order-2
                p.mb-0 En la práctica, Pepsi y Coca-Cola utilizan distribución intensiva para garantizar presencia en diversos canales, mientras que Samsung aplica distribución selectiva y Rolex utiliza distribución exclusiva para mantener su posicionamiento.


      separador
      
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 3.3 Clasificación

      .bg-full-width.bg-fondo-02.px-5.py-4
        img(src="@/assets/curso/tema3/img06.png", alt="")
      .row.justify-content-center.align-items-center.z-2.mb-5
        .col-lg-10(data-aos="fade-right")
          p.banner-text Las estrategias de distribución también pueden clasificarse según el tipo de canal utilizado, el nivel de integración entre los participantes y el enfoque adoptado para atender el mercado. Esta clasificación permite seleccionar el modelo de distribución más adecuado de acuerdo con las necesidades de la organización y de sus clientes. <br> Las principales clasificaciones de las estrategias de distribución son:

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5.text-bold.mb-2 Figura 1.
          span Clasificación de los canales de distribución
        img.mb-0(data-aos="fade-up", src="@/assets/curso/tema3/img07.png", alt="La figura muestra las diferentes formas de organizar la distribución de productos desde la empresa hasta el consumidor. Mediante ejemplos visuales, muestra cómo las organizaciones pueden comercializar directamente o incorporar intermediarios, coordinar distintas etapas de la distribución y establecer relaciones de colaboración. También muestra el uso de diversos medios de venta y atención, (multicanal y omnicanal) los cuales pueden funcionar de manera independiente o integrarse para facilitar una experiencia continua y coherente para el cliente.").mx-auto.d-none.d-lg-block
        img.mb-0(data-aos="fade-up", src="@/assets/curso/tema3/img08.png", alt="La figura muestra las diferentes formas de organizar la distribución de productos desde la empresa hasta el consumidor. Mediante ejemplos visuales, muestra cómo las organizaciones pueden comercializar directamente o incorporar intermediarios, coordinar distintas etapas de la distribución y establecer relaciones de colaboración. También muestra el uso de diversos medios de venta y atención, (multicanal y omnicanal) los cuales pueden funcionar de manera independiente o integrarse para facilitar una experiencia continua y coherente para el cliente.").mx-auto.d-lg-none


    .container
      .row.mb-lg-5.mb-4.justify-content-center.align-items-center
        .col-lg-12.col-md-12
          .row.align-items-center.bg-fondo-12.p-4
            .col-lg-auto.order-1
              img.d-none.d-lg-flex(src="@/assets/curso/tema3/img09.svg", style="max-width: 150px").mx-auto
            .col-lg.order-2
              p.mb-0 En el entorno actual, Falabella implementa estrategias omnicanal integrando tiendas físicas, comercio electrónico y aplicaciones móviles, mientras que Nike combina estrategias directas e indirectas para ampliar su alcance y fortalecer su marca.
              
    .row.align-items-center(data-aos="fade-right")
      .col-lg-10.mx-auto
        .tarjeta.bg-fondo-08.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-6.col-sm-4.col-md-3.col-lg-2.mb-3.mb-lg-0.mx-auto.mx-lg-0.text-center
              img(src="@/assets/curso/tema1/img12.svg")
            .col-12.col-lg.mb-2.mb-lg-0
              h4.mb-2.mx-lg-0.text-lg-start Cómo hacer una estrategia de distribución
              p.mb-0 Para comprender las estrategias de distribución en el contexto empresarial, incluyendo su diseño, aplicación y toma de decisiones, se recomienda ir al siguiente recurso:
            .col-12.col-lg-auto.text-center
              a.boton.color-acento-botones(:href="'https://www.youtube.com/watch?v=0ECA79SVUsI'" target="_blank")
                span Ir al recurso

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
