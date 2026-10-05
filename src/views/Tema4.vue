<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Inventario

    .bg-full-width.bg-fondo-02.px-5.py-4
      img(src="@/assets/curso/tema4/img01.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text En la gestión de la distribución comercial, el control de los productos disponibles es un elemento clave para garantizar la continuidad de las operaciones y la satisfacción del cliente. El inventario permite a las empresas responder a la demanda del mercado, evitando faltantes o excesos que puedan afectar la rentabilidad y el nivel de servicio.

    separador
    
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Concepto

  
    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema4/img02.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0
        .row.align-items-center.bg-fondo-12.p-3.mb-3
          .col-lg-auto.order-1
            img.d-none.d-lg-flex(src="@/assets/curso/tema4/img03.svg", style="max-width: 150px").mx-auto
          .col-lg.order-2
            p.mb-0 El inventario corresponde al conjunto de bienes o productos que una empresa mantiene almacenados con el propósito de ser utilizados en la producción o comercialización.

        p.mb-3 Su gestión implica el control de entradas, salidas y niveles de existencias, permitiendo asegurar la disponibilidad del producto en el momento requerido. Un manejo adecuado del inventario contribuye a optimizar costos, evitar pérdidas y mejorar la eficiencia operativa.

        .row.align-items-center.bg-fondo-04.p-4
          .col-lg-auto.order-1
            img.d-none.d-lg-flex(src="@/assets/curso/tema1/img03.svg", style="max-width: 90px").mx-auto
          .col-lg.order-2
            p.mb-0 En el contexto empresarial, Amazon utiliza sistemas avanzados de gestión de inventarios para garantizar disponibilidad inmediata, mientras que Zara mantiene inventarios controlados que le permiten responder rápidamente a las tendencias del mercado.


    separador
    
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Tipos

    p.mb-2 Los inventarios pueden clasificarse según la función que cumplen dentro de la organización y la etapa del proceso productivo o comercial en la que se encuentran. Esta clasificación facilita el control de las existencias y contribuye a una adecuada planificación de la distribución.
    p.mb-4 Los principales tipos de inventario son: 

    .row.mb-lg-4.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure.mb-3
          img(src="@/assets/curso/tema4/img04.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-2.mb-0.mb-lg-0
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Inventario de materias primas").align-content-center
            p.mb-2 Comprende los materiales e insumos adquiridos y almacenados que aún no han ingresado al proceso productivo y serán utilizados para elaborar los productos de la empresa.
            p.mb-0 #[b Ejemplo:] una panadería mantiene existencias de harina, azúcar, huevos y mantequilla para elaborar sus productos.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Inventario en proceso").align-content-center
            p.mb-2 Corresponde a los materiales y productos que ya iniciaron su transformación, pero todavía requieren actividades adicionales antes de convertirse en productos terminados disponibles para su comercialización.
            p.mb-0 #[b Ejemplo:] una fábrica de calzado mantiene zapatos ensamblados que todavía requieren suelas, acabados y empaque antes de estar disponibles para la venta.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Inventario de productos terminados").align-content-center
            p.mb-2 Incluye los productos que finalizaron el proceso de producción y se encuentran disponibles para almacenamiento, comercialización y posterior distribución a clientes, intermediarios o puntos de venta.
            p.mb-0 #[b Ejemplo:] una empresa de bebidas almacena botellas de agua empacadas y listas para ser distribuidas a supermercados y tiendas.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Inventario de seguridad").align-content-center
            p.mb-2 Representa una cantidad adicional de existencias mantenida para responder ante variaciones inesperadas de la demanda, retrasos de proveedores u otras situaciones que puedan afectar la disponibilidad del producto.
            p.mb-0 #[b Ejemplo:] un supermercado mantiene paquetes adicionales de arroz para responder ante aumentos inesperados de la demanda o retrasos del proveedor.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Inventario en tránsito").align-content-center
            p.mb-2 Comprende los productos o materiales que se encuentran desplazándose entre diferentes puntos de la cadena de suministro y todavía no han llegado al lugar establecido para su recepción.
            p.mb-0 #[b Ejemplo:] un camión transporta cajas de frutas desde un centro de distribución hasta diferentes supermercados para su comercialización.

    .bg-full-width.bg-fondo-1
      .row.mb-lg-4.mb-3.justify-content-center.align-items-center
        .col-lg-10.col-md-12
          .cajon.bg-color-c1.p-4
            p.mb-0 En la práctica, Coca-Cola gestiona inventarios de productos terminados para garantizar abastecimiento continuo, mientras que empresas industriales mantienen inventarios de materias primas para asegurar la producción.

      separador
      
      #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 4.3 Rotación

      p.mb-4 La rotación de inventario es un indicador que mide la frecuencia con la que los productos se venden y se reponen en un periodo determinado.

    
      .bloque-texto-g.bloque-texto-g--inverso.bg-color-01.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/tema4/img05.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Este indicador permite evaluar la eficiencia en la gestión del inventario, identificando si los productos se están comercializando de manera adecuada o si existen acumulaciones innecesarias. Una alta rotación indica dinamismo en las ventas, mientras que una baja rotación puede generar costos de almacenamiento y riesgo de obsolescencia.

      p.mb-4 En empresas como D1 y Ara, la alta rotación de inventarios es clave para mantener precios bajos y disponibilidad constante, mientras que, en sectores como tecnología, una baja rotación puede afectar la vigencia de los productos.

      separador
    
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.4 Métodos

    
    .container
      .row.mb-lg-4.mb-4.justify-content-center.align-items-center
        .col-lg-12.col-md-12
          .row.align-items-center.bg-fondo-11.p-4
            .col-lg-auto.d-none.d-lg-flex
              img(src="@/assets/curso/tema4/img06.svg").mx-auto
            .col-lg
              p.mb-0 Los métodos de gestión de inventarios corresponden a las técnicas utilizadas para controlar las entradas, salidas y valoración de las existencias. Su aplicación permite optimizar el manejo de los productos, mejorar el control de costos y apoyar la toma de decisiones relacionadas con el abastecimiento.

    p.mb-4 Los principales métodos de gestión de inventarios son:

    .row.mb-4.mb-lg-5.justify-content-center.align-items-center
      .col-lg-9.mb-4.mb-lg-0
        .titulo-sexto.color-acento-contenido.mb-4
          h5.text-bold.mb-2 Figura 3.
          span Métodos de gestión de inventarios
        img.mb-0(data-aos="fade-up", src="@/assets/curso/tema4/img07.png", alt="La figura presenta diferentes métodos utilizados para organizar, valorar y controlar los inventarios dentro de una empresa. Mediante situaciones representativas de bodegas y establecimientos comerciales, muestra cómo los productos pueden gestionarse considerando su orden de ingreso y salida, su costo promedio o su importancia económica. La información permite comprender que cada método responde a necesidades específicas de administración y facilita la toma de decisiones relacionadas con la disponibilidad, rotación, valoración y control de las existencias.").mx-auto.d-none.d-lg-block
        img.mb-0(data-aos="fade-up", src="@/assets/curso/tema4/img08.png", alt="La figura presenta diferentes métodos utilizados para organizar, valorar y controlar los inventarios dentro de una empresa. Mediante situaciones representativas de bodegas y establecimientos comerciales, muestra cómo los productos pueden gestionarse considerando su orden de ingreso y salida, su costo promedio o su importancia económica. La información permite comprender que cada método responde a necesidades específicas de administración y facilita la toma de decisiones relacionadas con la disponibilidad, rotación, valoración y control de las existencias.").mx-auto.d-lg-none

      .col-lg-3.d-none.d-lg-flex
        figure
          img(src="@/assets/curso/tema4/img09.png", data-aos="zoom-in").mx-auto


    .container
      .row.mb-lg-5.mb-4.justify-content-center.align-items-center
        .col-lg-10.col-md-12
          .row.align-items-center.bg-fondo-04.p-4
            .col-lg-auto
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/img03.svg", style="max-width: 150px").mx-auto
            .col-lg
              p.mb-0 En el contexto real, supermercados como Éxito aplican el método PEPS para evitar vencimientos, mientras que empresas industriales utilizan el método ABC para priorizar el control de productos de mayor valor.


    .row.align-items-center(data-aos="fade-right")
      .col-lg-10.mx-auto
        .tarjeta.bg-fondo-08.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-6.col-sm-4.col-md-3.col-lg-2.mb-3.mb-lg-0.mx-auto.mx-lg-0.text-center.order-1.order-lg-3
              img(src="@/assets/curso/tema1/img12.svg")
            .col-12.col-lg.mb-2.mb-lg-0.order-2.order-lg-1
              h4.mb-2.mx-lg-0.text-lg-start Cómo hacer un buen inventario
              p.mb-0 Para profundizar en la gestión de inventarios y su relación con la logística ir al siguiente recurso:
            .col-12.col-lg-auto.text-center.order-3.order-lg-2
              a.boton.color-acento-botones(:href="'https://www.youtube.com/watch?v=s_GBs0V4cR0'" target="_blank")
                span Ir al recurso

    .row.align-items-center(data-aos="fade-right")
      .col-lg-10.mx-auto
        .tarjeta.bg-fondo-13.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-6.col-sm-4.col-md-3.col-lg-2.mb-3.mb-lg-0.mx-auto.mx-lg-0.text-center
              img(src="@/assets/curso/tema4/img10.svg")
            .col-12.col-lg.mb-2.mb-lg-0
              p.mb-0 Para fortalecer la comprensión de la rotación de inventarios, su cálculo y su importancia dentro de la gestión logística, se recomienda consultar el siguiente recurso:
            .col-12.col-lg-auto.text-center
              a.boton.color-acento-botones(:href="'https://www.slimstock.com/es/blog/rotacion-inventario/?utm_source=chatgpt.com'" target="_blank")
                span Ir al recurso

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
