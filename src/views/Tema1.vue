<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Logística
    
    .bg-full-width.bg-fondo-02.px-5.py-4
      img(src="@/assets/curso/tema1/img01.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text En la gestión de la distribución comercial, la logística cumple un papel fundamental al coordinar los procesos que permiten el flujo eficiente de productos desde el origen hasta el cliente. Su adecuada planificación y ejecución impacta directamente en los costos, tiempos de entrega y nivel de servicio, convirtiéndose en un factor clave de competitividad empresarial.


    separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Concepto

    .row.mb-lg-5.mb-4.justify-content-center
      .col-lg-7.mb-4.mb-lg-0
        .bg-fondo-03.br-15.mb-0.h-100.align-content-center.p-2
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-auto.d-none.d-lg-flex
              img(src="@/assets/curso/tema1/img02.svg").mx-auto
            .col-lg
              p.mb-0 La logística se entiende como el conjunto de actividades encargadas de planificar, implementar y controlar el flujo eficiente de productos, información y recursos desde el punto de origen hasta el consumidor final.
      
      .col-lg-5
        p.mb-0 Este proceso integra funciones como transporte, almacenamiento, gestión de inventarios, manejo de pedidos y distribución física. Su propósito es garantizar que el producto llegue en las condiciones adecuadas, en el lugar y momento requeridos, optimizando costos y niveles de servicio.
       
    .container
      .row.mb-lg-4.mb-4.justify-content-center.align-items-center
        .col-lg-10.col-md-12
          .row.align-items-center.bg-fondo-04.p-4
            .col-lg-auto
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/img03.svg", style="max-width: 150px").mx-auto
            .col-lg
              p.mb-0 En el contexto empresarial, Amazon ha desarrollado sistemas logísticos avanzados con centros de distribución automatizados y entregas rápidas, mientras que Servientrega gestiona procesos logísticos que permiten la distribución de productos a nivel nacional.

    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Funciones


    p.mb-2 La logística cumple diversas funciones que permiten coordinar el proceso de distribución y garantizar que los productos lleguen al cliente en el momento oportuno, con la calidad esperada y al menor costo posible. Estas funciones integran actividades relacionadas con el transporte, el almacenamiento, el control de inventarios y el manejo de la información, favoreciendo la eficiencia de la cadena de suministro.
    p.mb-4 Entre las principales funciones de la logística se encuentran:

    .row.mb-lg-4.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure.mb-3
          img(src="@/assets/curso/tema1/img04.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Transporte").align-content-center
            p.mb-0 Comprende el traslado de los productos desde el lugar de origen hasta el punto de entrega, asegurando que lleguen de manera oportuna a los clientes, distribuidores o puntos de venta.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Almacenamiento").align-content-center
            p.mb-0 Consiste en conservar los productos en condiciones adecuadas mientras son requeridos para su comercialización, utilizando bodegas o centros de distribución que faciliten su organización y protección.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Gestión de inventarios").align-content-center
            p.mb-0 Permite controlar las existencias disponibles, planificar la reposición de mercancías y evitar tanto el desabastecimiento como el exceso de inventario.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Procesamiento de pedidos").align-content-center
            p.mb-0 Incluye la recepción, preparación, verificación y despacho de los pedidos, garantizando que cada solicitud sea atendida de manera correcta y dentro de los tiempos establecidos.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Manejo de la información").align-content-center
            p.mb-0 Comprende el registro, seguimiento y análisis de los datos relacionados con las operaciones logísticas mediante sistemas de información, como los ERP y otras plataformas digitales, facilitando la toma de decisiones.

  
    .bg-full-width.bg-fondo-1
      .row.mb-lg-4.mb-3.justify-content-center.align-items-center
        .col-lg-10.col-md-12
          .cajon.bg-color-c1.p-4
            p.mb-0 En la práctica, Mercado Libre gestiona funciones logísticas mediante centros de fulfillment, mientras que Éxito coordina almacenamiento, inventarios y distribución para abastecer sus puntos de venta.

      separador

      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.3 Actores


      .bloque-texto-g.bg-color-01.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/tema1/img05.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Los actores de la logística desempeñan funciones específicas que permiten coordinar el flujo de bienes, información y recursos a lo largo de la cadena de distribución. La participación articulada de cada uno garantiza que los productos lleguen al consumidor final de manera eficiente, oportuna y con el nivel de servicio esperado.
      
      p.mb-4 Los principales actores de la logística son:

      

      .row.mb-5.justify-content-center.align-items-center
        .col-lg-12
          .titulo-sexto.color-acento-contenido.mb-3
            h5.text-bold.mb-2 Tabla 1.
            span Actores de la logística
          .tabla-a.tb-custom.mb-0
            table
              thead
                tr
                  th Actor
                  th Concepto
                  th Ejemplo
              tbody
                tr
                  td Proveedor
                  td Suministra materias primas, productos, insumos o servicios requeridos por una organización para desarrollar sus actividades. Su desempeño influye en aspectos como disponibilidad, calidad, costos y cumplimiento de los tiempos establecidos para el abastecimiento.
                  td Un proveedor entrega semanalmente frutas y verduras a una cadena de supermercados según las cantidades solicitadas.
                tr
                  td Operador logístico
                  td Gestiona por encargo de otra empresa una o varias actividades logísticas, como transporte, almacenamiento, preparación de pedidos, manejo de inventarios o distribución, utilizando recursos especializados para facilitar el flujo eficiente de los productos.
                  td Una empresa contrata un operador logístico para almacenar sus productos, preparar los pedidos y distribuirlos entre diferentes ciudades.
                tr
                  td Distribuidor
                  td Facilita la llegada de los productos desde fabricantes o proveedores hasta diferentes mercados y puntos de venta. Puede encargarse de comprar, almacenar, transportar y comercializar mercancías, contribuyendo a ampliar la cobertura y disponibilidad de la oferta.
                  td Un distribuidor recibe bebidas del fabricante y abastece supermercados, restaurantes y tiendas ubicadas en diferentes municipios.
                tr
                  td Minorista
                  td Comercializa productos directamente al consumidor final, generalmente en cantidades adecuadas para el consumo individual o familiar. Constituye uno de los últimos eslabones de la cadena y facilita el acceso mediante establecimientos físicos o canales digitales.
                  td Un supermercado adquiere productos de diferentes distribuidores y los ofrece en sus puntos de venta directamente a los consumidores.
                tr
                  td Cliente
                  td Adquiere productos o servicios para satisfacer una necesidad y constituye el destinatario de las actividades desarrolladas a lo largo de la cadena. Sus requerimientos de disponibilidad, calidad, precio, entrega y servicio orientan las decisiones del plan de distribución.
                  td Un consumidor realiza una compra en línea y espera recibir el producto solicitado, en buenas condiciones, dentro del plazo establecido.


    .row.mb-lg-4.mb-3.justify-content-center.align-items-center
      .col-lg-10.col-md-12
        .cajon.bg-color-c1.p-4
          p.mb-0 En el contexto actual, empresas como DHL y FedEx actúan como operadores logísticos globales, mientras que plataformas como Rappi integran actores logísticos en servicios de última milla.

    separador
    
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Beneficios
    

    .container
      .row.mb-lg-4.mb-3.justify-content-center.align-items-center.bg-color-06
        .col-lg-5.col-md-12.mb-4.mb-lg-0.order-1.order-lg-2.p-0
          figure
            img(src="@/assets/curso/tema1/img06.png", data-aos="zoom-in").mx-auto
        .col-lg-7.order-2.order-lg-1.mb-0.mb-lg-0.p-4
          p.mb-0(data-aos="fade-right") La logística genera beneficios que fortalecen el desempeño de las organizaciones al optimizar los procesos relacionados con el almacenamiento, el transporte y la distribución de productos. Una adecuada gestión logística no solo contribuye a reducir costos, sino que también mejora el nivel de servicio, incrementa la competitividad y facilita la toma de decisiones estratégicas.

    p.mb-4 Entre los principales beneficios de la logística se destacan:

    .bg-full-width.bg-fondo-05.px-5.py-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-1
          figure
            img(src="@/assets/curso/tema1/img07.png", data-aos="zoom-in", alt="")
        .col-lg-8.order-2.order-lg-2.col-md-12.mb-4.mb-lg-0
          SlyderF(columnas="col-lg-12 col-xl-6 col-md-12 col-sm-12 p-3")
            .tarjeta.bg-fondo-07.p-4.h-100.br-15
              img(src='@/assets/curso/tema1/img08.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
              h4.text-center Reducción de costos
              p.text-center.mb-0 Optimiza el uso de los recursos humanos, tecnológicos y financieros mediante una mejor planificación y ejecución de las operaciones logísticas, favoreciendo la rentabilidad de la organización.

            .tarjeta.bg-fondo-07.p-4.h-100.br-15
              img(src='@/assets/curso/tema1/img09.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
              h4.text-center Mejora del servicio
              p.text-center.mb-0 Garantiza que los productos lleguen al cliente en el momento, lugar y condiciones requeridas, incrementando la satisfacción y fortaleciendo la relación con los consumidores.

            .tarjeta.bg-fondo-07.p-4.h-100.br-15
              img(src='@/assets/curso/tema1/img10.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
              h4.text-center Mayor competitividad
              p.text-center.mb-0 Permite responder con rapidez a las necesidades del mercado, adaptarse a los cambios del entorno y ofrecer un servicio más eficiente frente a la competencia.

            .tarjeta.bg-fondo-07.p-4.h-100.br-15
              img(src='@/assets/curso/tema1/img11.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
              h4.text-center Control de las operaciones
              p.text-center.mb-0 Facilita el seguimiento de las actividades logísticas mediante indicadores y sistemas de información, apoyando la toma de decisiones y la mejora continua de los procesos.
     
    .container
      .row.mb-lg-5.mb-4.justify-content-center.align-items-center
        .col-lg-10.col-md-12
          .row.align-items-center.bg-fondo-04.p-4
            .col-lg-auto.order-2
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/img03.svg", style="max-width: 150px").mx-auto
            .col-lg.order-1
              p.mb-0 Empresas como Zara han logrado ventajas competitivas mediante sistemas logísticos eficientes que permiten rápida reposición de productos, mientras que Amazon ha consolidado su liderazgo gracias a su capacidad logística y tiempos de entrega reducidos.


    .row.align-items-center(data-aos="fade-right")
      .col-lg-10.mx-auto
        .tarjeta.bg-fondo-08.p-3.mb-4
          .row.justify-content-around.align-items-center
            .col-6.col-sm-4.col-md-3.col-lg-2.mb-3.mb-lg-0.mx-auto.mx-lg-0.text-center
              img(src="@/assets/curso/tema1/img12.svg")
            .col-12.col-lg.mb-2.mb-lg-0
              h4.mb-2.mx-lg-0.text-lg-start ¿Qué es la Gestión Logística? Significado, Importancia y Estrategias / Tendencia Logística
              p.mb-0 Para comprender la logística aplicada en empresas reales ir al siguiente enlace:
            .col-12.col-lg-auto.text-center
              a.boton.color-acento-botones(:href="'https://www.youtube.com/watch?v=SCK26hVa1AM'" target="_blank")
                span Ir al recurso

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
