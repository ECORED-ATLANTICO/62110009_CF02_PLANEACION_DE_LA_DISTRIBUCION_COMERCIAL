<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Logística inversa


    .bloque-texto-g.bg-color-01.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema2/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En la gestión moderna de la distribución, los procesos no finalizan con la entrega del producto al cliente. La necesidad de gestionar devoluciones, productos defectuosos o excedentes ha llevado a las empresas a incorporar flujos de retorno dentro de sus operaciones. En este contexto, la logística inversa se convierte en un elemento clave para optimizar recursos, mejorar el servicio al cliente y fortalecer la gestión comercial.

    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Concepto
  
  
  
    .row.mb-lg-4.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema2/img02.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0
        p.mb-3(data-aos="fade-right") La logística inversa se define como el conjunto de actividades orientadas a gestionar el flujo de productos desde el consumidor final hacia la empresa, con el propósito de recuperar valor o realizar su adecuada disposición.
        
        .bg-fondo-01.br-15.mb-3.p-4
          p.mb-0 Este proceso incluye devoluciones, reciclaje, reutilización, reparación y manejo de residuos. A diferencia de la logística tradicional, que se enfoca en el flujo directo, la logística inversa gestiona el retorno de productos dentro de la cadena de suministro.

        p.mb-0 En el contexto real, empresas como Amazon permiten devoluciones ágiles de productos comprados en línea, mientras que Falabella gestiona cambios y devoluciones como parte de su servicio al cliente.

    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Funciones
  
    .row.align-items-center.mb-5.justify-content-center
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema2/img03.svg").mx-auto
      .col-lg
        p.mb-0 La logística inversa comprende el conjunto de actividades orientadas a gestionar el retorno de productos desde el cliente hacia la organización. Su propósito es recuperar valor mediante la reutilización, reparación o reciclaje de los productos, o garantizar su disposición final de forma responsable cuando ya no pueden ser aprovechados. Estas funciones contribuyen a optimizar recursos, reducir el impacto ambiental y fortalecer la sostenibilidad empresarial.
  
    p.mb-4 Entre las principales funciones de la logística inversa se encuentran:
  
    .bg-full-width.bg-fondo-1
      .row.mb-5.g-4.justify-content-center.align-items-stretch
        .col-lg-3.col-md-6
          .position-relative.h-100.pt-2.ps-3
            .p-4.br-15.h-100.bg-white.text-center.d-flex.flex-column.align-items-center.justify-content-center(style="border: 2px solid #3FA8FE;")
              h5.text-center.mb-2 Recolección
              p.mb-0.text-center Recibe los productos devueltos por los clientes y los traslada para su procesamiento.
            .position-absolute.top-50.start-0.translate-middle-y.rounded-circle.d-flex.align-items-center.justify-content-center.fw-bold(style="width: 45px; height: 45px; background-color: #3FA8FE; margin-left: -5px;") 1

        .col-lg-3.col-md-6
          .position-relative.h-100.pt-2.ps-3
            .p-4.br-15.h-100.bg-white.text-center.d-flex.flex-column.align-items-center.justify-content-center(style="border: 2px solid #83DFE0;")
              h5.text-center.mb-2 Clasificación
              p.mb-0.text-center Evalúa el estado de los productos retornados para definir su destino.
            .position-absolute.top-50.start-0.translate-middle-y.rounded-circle.d-flex.align-items-center.justify-content-center.fw-bold(style="width: 45px; height: 45px; background-color: #83DFE0; margin-left: -5px;") 2

        .col-lg-3.col-md-6
          .position-relative.h-100.pt-2.ps-3
            .p-4.br-15.h-100.bg-white.text-center.d-flex.flex-column.align-items-center.justify-content-center(style="border: 2px solid #D7D7D8;")
              h5.text-center.mb-2 Recuperación
              p.mb-0.text-center Reincorpora los productos o sus componentes al ciclo comercial mediante reparación o reutilización.
            .position-absolute.top-50.start-0.translate-middle-y.rounded-circle.d-flex.align-items-center.justify-content-center.fw-bold(style="width: 45px; height: 45px; background-color: #D7D7D8; margin-left: -5px;") 3

        .col-lg-3.col-md-6
          .position-relative.h-100.pt-2.ps-3
            .p-4.br-15.h-100.bg-white.text-center.d-flex.flex-column.align-items-center.justify-content-center(style="border: 2px solid #FFA85B;")
              h5.text-center.mb-2 Disposición final
              p.mb-0.text-center Trata los productos que no pueden recuperarse mediante reciclaje o eliminación conforme a la normatividad vigente.
            .position-absolute.top-50.start-0.translate-middle-y.rounded-circle.d-flex.align-items-center.justify-content-center.fw-bold(style="width: 45px; height: 45px; background-color: #FFA85B; margin-left: -5px;") 4
    
      .row.mb-lg-4.mb-3.justify-content-center.align-items-center
        .col-lg-10.col-md-12
          .cajon.bg-color-c1.p-4
            p.mb-0 En la práctica, Mercado Libre gestiona devoluciones mediante centros logísticos, mientras que IKEA implementa programas de recuperación de productos para su reutilización.

    
      separador
      
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 2.3 Actores

      
      .bg-full-width.bg-fondo-02.px-5.py-4
        img(src="@/assets/curso/tema2/img04.png", alt="")
      .row.justify-content-center.align-items-center.z-2.mb-5
        .col-lg-10(data-aos="fade-right")
          p.banner-text Los actores de la logística inversa participan en el proceso de devolución, recuperación y disposición de los productos retornados. Cada uno cumple una función específica que contribuye a optimizar el aprovechamiento de los recursos y fortalecer la sostenibilidad de la cadena de suministro. Los principales actores de la logística inversa son:
    
    .bg-full-width.bg-fondo-1
      .row.mb-lg-5.mb-4.justify-content-center.align-items-center
        .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
          figure
            img(src="@/assets/curso/tema2/img05.png", data-aos="zoom-in").mx-auto.w-md-75

        .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0
          AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-c1" data-aos="zoom-in").mb-0
            .tarjeta(titulo="Cliente")
              p.mb-0 Inicia el flujo inverso al devolver productos, empaques o materiales por motivos como defectos, garantías, inconformidades, finalización de su vida útil o programas de recuperación establecidos por la empresa.

            .tarjeta(titulo="Empresa")
              p.mb-0 Planifica y coordina las condiciones para recibir, controlar y gestionar los productos retornados, definiendo políticas, responsables y alternativas de recuperación que permitan reducir pérdidas, aprovechar recursos y responder adecuadamente a los requerimientos del cliente.

            .tarjeta(titulo="Operador logístico")
              p.mb-0 Ejecuta actividades especializadas relacionadas con la recolección, transporte, almacenamiento y manejo de productos retornados, facilitando su traslado desde los puntos de origen hasta los lugares establecidos para su evaluación, recuperación o tratamiento.

            .tarjeta(titulo="Centro de procesamiento")
              p.mb-0 Recibe y evalúa los productos, materiales o empaques retornados para determinar y ejecutar el tratamiento correspondiente, como reparación, reacondicionamiento, reutilización, reciclaje, aprovechamiento de componentes o disposición final.


      .container
        .row.mb-lg-5.mb-4.justify-content-center.align-items-center
          .col-lg-10.col-md-12
            .row.align-items-center.bg-fondo-04.p-4
              .col-lg-auto.order-1
                img.d-none.d-lg-flex(src="@/assets/curso/tema1/img03.svg", style="max-width: 150px").mx-auto
              .col-lg.order-2
                p.mb-0 En el contexto actual, empresas como DHL participan en procesos de logística inversa transportando productos devueltos, mientras que plataformas como Rappi facilitan la gestión de devoluciones en entregas.

      separador
      
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 2.4 Beneficios

      .bloque-texto-g.bg-color-08.p-4.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/tema2/img06.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La logística inversa aporta beneficios que favorecen la eficiencia operativa, la sostenibilidad y la satisfacción del cliente. Su adecuada implementación permite aprovechar mejor los recursos, reducir pérdidas y fortalecer la imagen de la organización frente al mercado.

    p.mb-4 Entre los principales beneficios de la logística inversa se destacan:
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-2 Tabla 2.
          span Beneficios de la logística inversa
        .tabla-a.tb-custom.mb-0
          table
            thead
              tr
                th Beneficio
                th Descripción
                th Ejemplo
            tbody
              tr
                td Recuperación de valor
                td Permite aprovechar productos retornados mediante su reutilización, reparación, reacondicionamiento o nueva comercialización, disminuyendo pérdidas y recuperando parte de su valor económico.
                td Una empresa repara muebles devueltos en buen estado y los comercializa nuevamente a un precio diferenciado.
              tr
                td Mejora del servicio
                td Facilita la gestión eficiente de devoluciones, cambios y garantías, proporcionando respuestas oportunas ante las necesidades del consumidor y contribuyendo a fortalecer su confianza y satisfacción.
                td Una tienda recoge un producto defectuoso y gestiona rápidamente su cambio sin exigir al cliente desplazamientos adicionales.
              tr
                td Optimización de recursos
                td Favorece el aprovechamiento de productos, componentes, materiales y empaques recuperables, disminuyendo desperdicios y reduciendo el uso innecesario de nuevos recursos en las operaciones de la organización.
                td Una empresa recupera cajas y empaques retornados para reutilizarlos en nuevos procesos de distribución.
              tr
                td Imagen empresarial
                td Fortalece la percepción de la organización mediante prácticas orientadas al aprovechamiento responsable de recursos y la adecuada gestión de retornos, contribuyendo a su reputación y posicionamiento frente al mercado.
                td Una empresa implementa puntos de devolución de envases para recuperarlos y reincorporarlos a sus procesos productivos.


    .container
      .row.mb-lg-5.mb-4.justify-content-center.align-items-center
        .col-lg-10.col-md-12
          .row.align-items-center.bg-fondo-04.p-4
            .col-lg-auto.order-2
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/img03.svg", style="max-width: 150px").mx-auto
            .col-lg.order-1
              p.mb-0 Empresas como Amazon han fortalecido la confianza del cliente mediante políticas de devolución eficientes, mientras que Nike ha implementado programas de reciclaje de productos para optimizar recursos.


    .row.align-items-center(data-aos="fade-right")
      .col-lg-10.mx-auto
        .tarjeta.bg-fondo-08.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-6.col-sm-4.col-md-3.col-lg-2.mb-3.mb-lg-0.mx-auto.mx-lg-0.text-center
              img(src="@/assets/curso/tema1/img12.svg")
            .col-12.col-lg.mb-2.mb-lg-0
              h4.mb-2.mx-lg-0.text-lg-start Logística inversa
              p.mb-0 Para comprender la logística inversa en la práctica, incluyendo su aplicación en devoluciones, recuperación de productos y reutilización dentro de la cadena de suministro, se recomienda ir al siguiente recurso:
            .col-12.col-lg-auto.text-center
              a.boton.color-acento-botones(:href="'https://www.youtube.com/watch?v=qwZg7zLS_Ms'" target="_blank")
                span Ir al recurso

    .container
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-10
          .row.bg-fondo-09.align-items-center.justify-content-center.br-15.p-0
            .col-md-8.col-lg-6.mb-3.mb-lg-0.order-2.order-md-2.order-lg-2.p-0
              figure
                img(src="@/assets/curso/tema2/img07.png", data-aos="fade-right").w-50.mx-auto
            .col-lg-6.order-1.order-md-1.order-lg-1.p-4.p-lg-4
              p(data-aos="fade-left").mb-4 Ir al pódcast:
              TarjetaAudio.color-acento-contenido.bg-color-white.mb-3(
                texto="La logística y la distribución hoy"
                tiempo
                :audio="require_src('@/assets/curso/podcast/podcast1.mp3')"
              )

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
