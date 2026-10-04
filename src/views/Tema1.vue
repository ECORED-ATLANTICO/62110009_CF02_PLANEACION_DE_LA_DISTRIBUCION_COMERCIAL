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
        .col-lg-4.mb-4.mb-lg-0.col-md-12.order-1.order-lg-1
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
                //- i.fas.fa-link










    
  //
    .bg-full-width.bg-fondo-02.px-5.py-4
      img(src="@/assets/curso/tema1/img01.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text El producto representa la base de la oferta comercial de una organización y constituye el principal medio para generar valor en el mercado. Su gestión estratégica permite responder a necesidades específicas del consumidor y construir diferenciación en entornos competitivos.


    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Concepto


    .row.mb-lg-4.mb-3.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema1/img02.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-3(data-aos="fade-right") El producto se define como un conjunto de atributos tangibles e intangibles que una empresa ofrece al mercado con el propósito de satisfacer necesidades o deseos. Desde una perspectiva técnica, no se limita a un bien físico, sino que incluye beneficios funcionales, emocionales y simbólicos que configuran la experiencia del consumidor.
        
        .bg-fondo-01.br-15.mb-0.p-4
          p.mb-0 En el contexto empresarial, el producto se diseña según el segmento de mercado y la propuesta de valor, considerando atributos como calidad, diseño y funcionalidad. Por ejemplo, IKEA desarrolla muebles modulares, funcionales y de bajo costo, orientados al consumo masivo.

    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2. Atributos

    p.mb-4 Los atributos del producto corresponden a las características que permiten diferenciarlo en el mercado y generar valor para el cliente. Su análisis facilita la selección de canales de distribución y la definición de estrategias comerciales acordes con las necesidades del consumidor. Entre los principales atributos se encuentran:

    .bg-full-width.bg-fondo-1
      .bg-full-width.bg-fondo-03.p-5.mb-5
        SlyderA(tipo="b").bg-color-white.p-3.tarjeta
          .tarjeta.p-4.h-100.mb-0
            .row.align-items-center.justify-content-center
              .col-lg-7.col-md-10.order-2.order-lg-2.mb-0.mb-lg-0
                figure
                  img(src="@/assets/curso/tema1/img04.png", data-aos="zoom-in").mx-auto
              .col-lg-5.order-1.order-lg-1.mb-4.mb-lg-0
                h4 Atributos funcionales
                p.mb-3 Hacen referencia al desempeño, utilidad y capacidad del producto para satisfacer una necesidad específica.
                p.mb-0 #[b Ejemplo:] una aspiradora con alta potencia, varias velocidades y bajo consumo energético facilita la limpieza y ahorra energía.

          .tarjeta.p-4.h-100.mb-0
            .row.align-items-center.justify-content-center
              .col-lg-7.col-md-10.order-2.order-lg-2.mb-0.mb-lg-0
                figure
                  img(src="@/assets/curso/tema1/img05.png", data-aos="zoom-in").mx-auto
              .col-lg-5.order-1.order-lg-1.mb-4.mb-lg-0
                h4 Atributos tangibles
                p.mb-3 Características físicas perceptibles del producto, como el diseño, los materiales, el tamaño, el color o el acabado.
                p.mb-0 #[b Ejemplo:] botella de agua de 600 ml, reciclable, con tapa hermética y diseño ergonómico presenta características físicas identificables.

          .tarjeta.p-4.h-100.mb-0
            .row.align-items-center.justify-content-center
              .col-lg-7.col-md-10.order-2.order-lg-2.mb-0.mb-lg-0
                figure
                  img(src="@/assets/curso/tema1/img06.png", data-aos="zoom-in").mx-auto
              .col-lg-5.order-1.order-lg-1.mb-4.mb-lg-0
                h4 Atributos intangibles
                p.mb-3 Relacionados con el valor percibido por el consumidor, asociado a la marca, la calidad o el prestigio del producto.
                p.mb-0 #[b Ejemplo:] un teléfono de marca reconocida, con garantía extendida y servicio técnico, genera confianza en el consumidor.

          .tarjeta.p-4.h-100.mb-0
            .row.align-items-center.justify-content-center
              .col-lg-7.col-md-10.order-2.order-lg-2.mb-0.mb-lg-0
                figure
                  img(src="@/assets/curso/tema1/img07.png", data-aos="zoom-in").mx-auto
              .col-lg-5.order-1.order-lg-1.mb-4.mb-lg-0
                h4 Atributos emocionales
                p.mb-3 Sensaciones, experiencias y vínculos que el producto genera en el consumidor, fortaleciendo la fidelización hacia la marca.
                p.mb-0 #[b Ejemplo:] un automóvil familiar puede transmitir tranquilidad y protección, asociándose con el bienestar de la familia.
      
      .row.mb-lg-4.mb-3.justify-content-center.align-items-center
        .col-lg-10.col-md-12
          .cajon.bg-color-c1.p-4
            p.mb-0 Un caso representativo es LEGO, donde el producto trasciende el juguete físico e incorpora creatividad, aprendizaje y experiencia lúdica.

      separador
      
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.3 Clasificación

      .row.mb-lg-4.mb-4.justify-content-center.align-items-center
        .col-lg-4.col-md-12.mb-4.mb-lg-0.order-1.order-lg-1
          figure.mb-4.mb-lg-3
            img(src="@/assets/curso/tema1/img08.png", data-aos="zoom-in").mx-auto
          p.mb-2 La clasificación del producto permite organizar la oferta según su uso, comportamiento de compra y finalidad, facilitando la definición de estrategias comerciales acordes con las características del mercado. 
          p.mb-0 Esta clasificación es fundamental para comprender el comportamiento del consumidor y orientar decisiones relacionadas con el precio, la promoción y la distribución. Los productos se clasifican en las siguientes categorías:

        .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
          AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-c1" data-aos="zoom-in").mb-0
            .tarjeta(titulo="Productos de conveniencia")
              p.mb-2 Son aquellos de compra frecuente, bajo costo y mínima comparación entre alternativas. El consumidor busca rapidez, disponibilidad y facilidad de acceso.
              p.mb-0 #[b Ejemplo:] agua embotellada, pan, jabón o bebidas gaseosas adquiridas habitualmente en supermercados y tiendas.

            .tarjeta(titulo="Productos de comparación")
              p.mb-2 Requieren que el consumidor evalúe diferentes alternativas antes de realizar la compra, considerando aspectos como calidad, precio, diseño o funcionalidad.
              p.mb-0 #[b Ejemplo:] un consumidor compara precio, capacidad y funciones de varios televisores antes de seleccionar uno.

            .tarjeta(titulo="Productos de especialidad")
              p.mb-2 Se caracterizan por su alto valor percibido, diferenciación y fuerte reconocimiento de marca. Los consumidores están dispuestos a realizar un mayor esfuerzo para adquirirlos.
              p.mb-0 #[b Ejemplo:] un reloj de lujo adquirido en una tienda especializada o distribuidor autorizado de la marca.

            .tarjeta(titulo="Productos industriales")
              p.mb-2 Corresponden a bienes destinados a procesos productivos, comerciales o de prestación de servicios. Su adquisición responde principalmente a criterios técnicos, económicos y de desempeño.
              p.mb-0 #[b Ejemplo:] maquinaria, equipos especializados o materias primas.
          
       
    .container
      .row.mb-lg-4.mb-4.justify-content-center.align-items-center
        .col-lg-10.col-md-12
          .row.align-items-center.bg-fondo-04.p-4
            .col-lg-auto
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/img10.png", style="max-width: 150px").mx-auto
            .col-lg
              p.mb-0 Por ejemplo, Decathlon comercializa productos de conveniencia y comparación orientados al consumidor final, mientras que empresas como Bosch desarrollan productos industriales dirigidos a procesos técnicos y productivos.

    separador
    
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Características


    p.mb-4 Las características del producto corresponden a los elementos que determinan su desempeño, calidad y aceptación en el mercado. Estas incluyen:

    .row.mb-lg-4.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure.mb-3
          img(src="@/assets/curso/tema1/img11.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Diseño").align-content-center
            p.mb-2 Se refiere a la forma, estilo y apariencia del producto, integrando aspectos estéticos y funcionales que facilitan su uso y generan atractivo para el consumidor.
            p.mb-0 #[b Ejemplo:] una botella con forma ergonómica facilita el agarre y mejora su apariencia.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Funcionalidad").align-content-center
            p.mb-2 Corresponde a la capacidad del producto para cumplir eficientemente con la necesidad para la cual fue creado, garantizando utilidad y desempeño.
            p.mb-0 #[b Ejemplo:] una licuadora con varias velocidades permite procesar diferentes tipos de alimentos.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Durabilidad").align-content-center
            p.mb-2 Hace referencia al tiempo de vida útil del producto y su resistencia al uso o desgaste, influyendo en la percepción de calidad.
            p.mb-0 #[b Ejemplo:] una maleta fabricada con materiales resistentes soporta el uso frecuente durante varios años.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Adaptabilidad").align-content-center
            p.mb-2 Es la capacidad del producto para ajustarse a diferentes usos, contextos o necesidades del consumidor, ampliando su aplicabilidad en el mercado.
            p.mb-0 #[b Ejemplo:] una silla ajustable en altura puede adaptarse a diferentes usuarios y espacios de trabajo.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Presentación").align-content-center
            p.mb-2 Corresponde a la forma en que el producto se muestra al consumidor, incluyendo empaque, etiqueta y apariencia, lo que impacta en la decisión de compra.
            p.mb-0 #[b Ejemplo:] un café presentado en empaque resellable conserva el producto y facilita su identificación.

    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-10.col-md-12
        .cajon.bg-color-c1.p-4
          p.mb-0 En mercados altamente competitivos, las características se convierten en factores diferenciadores. Un ejemplo es GoPro, cuyos productos se destacan por resistencia, portabilidad y calidad de grabación en condiciones extremas.

    separador
    
    .bg-full-width.bg-fondo-1
      #t_1_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.5 Referencias

      .bloque-texto-g.bg-color-01.p-4.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/tema1/img12.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Las referencias del producto corresponden a las distintas versiones o presentaciones dentro de una misma categoría, permitiendo atender diversos segmentos de mercado. Esta estrategia facilita ampliar la cobertura sin modificar la esencia del producto. Por ejemplo, Red Bull ofrece diferentes referencias como versiones sin azúcar, ediciones especiales y distintos tamaños, adaptándose a preferencias del consumidor.
          


      .row.align-items-center(data-aos="fade-right")
        .col-lg-10.mx-auto
          .tarjeta.bg-fondo-11.p-3.mb-4
            .row.justify-content-around.align-items-center
              .col-6.col-sm-4.col-md-3.col-lg-2.mb-3.mb-lg-0.mx-auto.mx-lg-0.text-center
                img(src="@/assets/curso/tema1/img13.png")
              .col-12.col-lg.mb-2.mb-lg-0
                h4.mb-2.max-cont-md.mx-lg-0.text-lg-start Qué es un producto: características, tipos, propósitos, benedicios.
                p.mb-0 Para fortalecer la comprensión del concepto de producto y su importancia en la estrategia de mercadeo, se recomienda ir al siguiente recurso, donde se explica cómo las empresas diseñan productos integrando atributos, valor y experiencia del cliente:
              .col-12.col-lg-auto.text-center
                a.boton.color-acento-botones(:href="'https://www.youtube.com/watch?v=Ls8xm2fys7I&t=55s'" target="_blank")
                  span Ir al recurso
                  //- i.fas.fa-link
                
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
