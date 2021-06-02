# Rhisco

###  Antecedentes y contexto

![](link de logo de rhisco)

[Rhisco](https://rhisco.com/) es una empresa de tecnología que ofrece servicios y soluciones de capital a bancos y aseguradoras de primer y segundo nivel en  todo el mundo. 
Con el uso de la innovación, la creatividad y la tecnología, desarrolla soluciones integrales para sus clientes, como Tegra,  una plataforma de integración para el análisis de riesgo y capital. 
Esta es una plataforma de gestión integración y agregación de datos y procesos, que realiza cálculo de métricas complejas que requieran múltiples escenarios y variables y generación de reportes que pueden utilizarse para completar la toma de decisiones de los clientes.
Tegra es una excelente herramienta, sin embargo, no es una plataforma “user experience friendly”, especialmente para perfiles diferentes al analítico, por lo que si no se tiene un conocimiento profundo de inteligencia de negocios o de análisis de negocios, la plataforma es compleja de entender ya que los datos los procesa y los entrega a su usuario final con un formato muy parecido a tablas de Excel.
Uno de los dos perfiles de usuario que suelen consultar la data generada por Tegra, es el del directivo, quien se encarga de la toma de decisiones dentro de su empresa, y en algunas ocasiones no cuenta con un background profundo en análisis de datos, aunado a que tiene poco tiempo para detenerse a analizar punto por punto.
Por tal motivo, Rhisco detectó un punto de oportunidad para la eficiencia de Tegra, y es la posibilidad de convertir la consulta de datos de la plataforma, y entregárselas al cliente resumida en gráficas y tablas, que formen un dashboard que sea de fácil consulta para el cliente final, no importando si el perfil que usa la herramienta es el de directivo o analista.
Es por ello, que con ayuda de varias tecnologías se trabajó en el presente  MVP que consumiendo una API y simulando la data de Rhisco, tiene la capacidad de presentar en un “visor, de manera agregada, la información principal que el nivel Directivo y Analista requieren para complementar el proceso de toma de decisiones. 
De manera resumida, con este producto se busca mejorar la experiencia de los usuarios de la plataforma Tegra en especial, el del perfil directivo, ya que le va a permitir, visualizar de manera mas amigable un resumen de los datos.
No se espera que en esta primera versión del producto se conecte a la base de datos. En esta fase será suficiente que proporcione archivos planos con ejemplos de las salidas que presentará el “Dashboard” para ser utilizada para el desarrollo de la aplicación web.

### La solución tecnológica
El actual trabajo es el resultado del Talent Fest, una hackaton realizado por mujeres que están egresando del bootcamp de [Laboratoria](https://www.laboratoria.la/), que en la clausura del programa de educación, participan junto con una empresa, trabajando 4 días para realizar un producto tecnológico que resuelva alguna problemática dentro de esa organización.
En esta primera versión, la web app no se conectará aún a la plataforma Tegra, sin embargo, desde el inicio de la construcción de la misma se ha pensado en que sea escalable, para que en un futuro, pueda ser una extensión de esta herramienta y ayude a generar una experiencia del usuario más amigable, complementando así a Tegra para que se convierta en una plataforma completa, combinando análisis lógico con creatividad e innovación, para entregar una experiencia de usabilidad completa al usuario final.
Como se menciona anteriormente, desde el momento del diseño del prototipado se pensó en la escalabilidad del proyecto por lo que las decisiones que se tomaron para la elección del stack tecnológico incorporado, siempre fueron basadas en esa premisa de que sea un proyecto escalable.

#### Firebase
![](link de la consola de Firebase)
Para almacenar la información y consumirla, utilizamos el servicio de Realtime database de [Firebase](https://firebase.google.com/?hl=es), un servidor que provee Google mediante una base de datos en tiempo real, back-end y organizada en forma de árbol JSON. Mediante este servicio, la aplicación está sincronizada y almacenada en la nube de Firebase. La base de datos está siendo consumida a través de una REST API e integrada mediante la librería de JavaScript React js.
La REST API utiliza el protocolo SSE (del inglés Server-Sent Events), el cual es una API para crear conexiones de HTTP para recibir notificaciones push de un servidor.

#### React y Node.js
El proyecto está construido con la lógica que provee React junto con [Node.js](https://nodejs.org/es/). Este último es un entorno de ejecución para el backend, por lo que JavaScript es el idioma principal para toda la pila de desarrollo de esta plataforma.
Node.js es un entorno de tiempo de ejecución multiplataforma de código abierto que se basa en el motor de JavaScript de Google Chrome. Node.js se usa para desarrollar aplicaciones de red y de servidor rápidas y escalables.
Por su parte React es una potente biblioteca construida y mantenida por Facebook, que permite al desarrollador crear componentes encapsulados que manejan su propio estado y que  tienen la capacidad de ya unidos, convertirse en interfaces de usuarios complejas. La forma en que React trabaja es mediante un [DOM Virtual](https://developer.mozilla.org/es/docs/Glossary/DOM)  de JavaScript, que es más rápido que un DOM ordinario.
Esta biblioteca es declarativa, por lo que, de acuerdo a información de la documentación oficial de React, ayuda a crear interfaces de usuario interactivas de forma sencilla a la vez que actualiza y renderiza de manera eficiente los componentes correctos cuando los datos cambian.
La eficiencia de esta tecnología y su capacidad de escalabilidad es tal, que React esta presente en la construcción de las plataformas tecnológicas de empresas como Whatsapp, AirBnb, Facebook, Netflix, Spotify y Discord y al ser un framework tan popular, la disponibilidad de helpers es amplia y variada, además de que cuenta con una comunidad de desarrolladores fortalecida.

#### Javascript, HTML y CSS
Como anteriormente se mencionó, el código está escrito en Javascript, el lenguaje de programación encargado de dotar de mayor interactividad y dinamismo a las páginas web. Cuando JavaScript se ejecuta en el navegador, no necesita de un compilador. El navegador lee directamente el código, sin necesidad de terceros. Por tanto, se le reconoce como uno de los tres lenguajes nativos de la web junto a HTML (contenido y su estructura) y a CSS (diseño del contenido y su estructura).
En este proyecto, la capacidad que tiene Javascript, HTML y CSS está potenciada por React, por lo que los componentes creados se vuelven reutilizables.

#### Axios
Para realizar la petición de la data al servidor utilizamos la librería [axios](https://github.com/axios/axios), la cual elegimos por tener diversas ventajas, entre ellas, que no es una librería pesada y está basada en promesas, por lo que se genera un código asíncrono ordenado.
Esta es una librería pensada para facilitar el consumo de servicios web, API REST que devuelvan datos JSON, ofreciendo una API unificada para las solicitudes [AJAX](https://developer.mozilla.org/es/docs/Glossary/AJAX ).

#### Chart.js
![](imagen de una de las graficas )
Uno de los requerimientos más importantes para el desarrollo de nuestra aplicación se enfoca en la experiencia de usuario y en el desarrollo de la interfaz de usuario, por lo que la elección de la librería que ayudó a crear los gráficos, fue imprescindible.  Ese es el motivo por el que este proyecto se construyó con ayuda de Chart.js, la cual es altamente compatible con React y permite crearlas a partir de los datos que se le pasan. De esta forma, se generan una serie de gráficos con un buen aspecto visual y con diseño responsive, lo que al final se traduce en  un buen aspecto de la interfaz y con múltiples opciones de diseño y elección de color, que ayudaron a cumplir con el objetivo final de esta webApp.

#### Datatable
[Datatable](https://www.npmjs.com/package/react-data-table-component) es una librería de tablas simple y flexible que aporta funcionalidades integradas como ordenación, paginación, estructuración atómica de tablas HTML, etc. La mayoría de las tablas que se pueden visualizar en el proyecto se realizaron con ayuda de esta, a excepción de fund list ya que cuenta con estilos determinados por default y esta tabla tiene requerimientos específicos.

#### Git y Github

Para la organización del trabajo colaborativo, ocupamos Git y GitHub. [Git](https://git-scm.com/ ) es un sistema de control de versiones que nos permite guardar los cambios que se van efectuando en nuestro proyecto, crear copias o regresar a alguna versión anterior. Mientras que [GitHub](https://github.com/) es una herramienta que nos permite publicar y compartir nuestras creaciones con los demás. Los proyectos pueden publicarse como públicos o privados y generalmente es usado por desarrolladores.
Dado que nos sentimos cómodas trabajando con Git y GitHub decidimos llevar la gestión del proyecto de Rhisco aquí. Cada una de las integrantes tuvimos la oportunidad de trabajar en tareas específicas y al culminar con esta, se subían los aportes a GitHub, donde la persona encargada buscaba integrar todos los aportes de las demas, siguiendo buenas prácticas, permitiendo que todas tuvieran la versión más actualizada y seguir trabajando con una buena comunicación tanto verbal como en código.

#### Figma
 [Figma] (https://www.figma.com/ ) es un editor de gráficos vectorial y una herramienta de generación de prototipos. Está pensada para trabajarse desde el navegador, sin embargo, también existen aplicaciones para sistema operativo IOS y para Windows. Decidimos usar esta plataforma debido a su  versatilidad para prototipar para diferentes pantallas, así como las diferentes opciones que ofrece para crear los distintos componentes de nuestra interfaz de usuario. Además, existen plugins que ayudan a desarrollar partes específicas del prototipado con mayor facilidad. Tal es el caso de Figpie que fue de mucha utilidad para prototipar las gráficas de Pie.
 
 #### Dinámica de trabajo
 Para la construcción de este producto tecnológico, se trabajó de manera organizada con un squad técnico de seis egresadas de Laboratoria, quienes antes de la entrega de la información, realizaron reuniones previas para organizarse y conocer cuáles eran los puntos fuertes de cada una y qué es lo que podría aportar.
Cada una tomó una responsabilidad dentro del armado, sin descartar que todas deberíamos participar en todo, cuando así se requiriera. Conocimos un panorama general del proyecto, lo que nos permitió buscar posibles soluciones a lo que se estaba planteando como problemática a resolver.

#### Sobre la creación del prototipo
Conocimos a los integrantes de Rhisco, con quienes se trabajó y quienes nos ayudaron a entender mejor la problemática y a compartirnos de manera general, una introducción a los principales conceptos que manejan en los temas de inteligencia de negocios y finanzas.

![](foto del primer día)

La data fue recibida en archivos con extensión .csv, que es un formato muy parecido a las tablas de excel, sin embargo, para poder alojarla en el servidor de Firebase, cambiamos el formato de la misma a archivos .json. 
La data que fue entregada por Rhisco, para el desarrollo de este MVP, corresponde a una simulación de la información que manejan en Rhisco, por lo que trabajamos con datos simulados pero muy parecidos a los que se manejan en el día a día de la empresa.
Después de tener los datos, platicar con la empresa y conocer el problema más a fondo, trabajamos en entender los conceptos básicos con los que íbamos a trabajar y a presentar entre el squad propuestas sobre las gráficas que podrían funcionar, para cada tipo de data que se necesitaba traducir a tablas y gráficas.
Posteriormente, se eligió la paleta de colores, respetando la identidad gráfica de la empresa y se diseñó en Figma la primera propuesta de prototipo de alta fidelidad, haciendo la propuesta de elección de colores y tipografía.
Recibimos feedback del equipo Rhisco, principalmente en el acomodo de las gráficas y en la interpretación de la data de manera que cada gráfica que se renderizara, fuera la mejor opción de acuerdo al tipo de información que se estaba manejando. 

![](imagenes de prototipo)

Trabajamos para incorporar el feedback que recibimos de la empresa a una nueva propuesta de dashboards, donde  se diseñaron las interfaces de analista y de director, incorporando las tablas y los gráficos que le interesan a cada perfil. 

#### Preparación del entorno de trabajo
Previo a preparar el entorno de trabajo, se hizo un análisis para ver cuales son las tecnologías a incorporar al proyecto. Para elegirlas, tomamos en cuenta algunos puntos, entre los más importantes son: la compatibilidad con React y la capacidad de escalabilidad que se planea para esta aplicación.
Ya con la lista de las librerías necesarias, se instalaron en el repositorio y se hizo una planeación de la arquitectura de los componentes que se iban a requerir, utilizando la metodología de separa por carpetas los archivos de acuerdo a la funcionalidad que tendría cada uno de los componentes, y se subió este entorno de trabajo a GitHub, donde cada una de las integrantes del squad lo forkeó y clonó. 

#### Aplicación de la funcionalidad
Para el inicio de manera formal del proyecto, se inició trabajando con una mock de la API, a la par que se subía la información en archivos .json al servidor de firebase. 
Cada una de nosotras tomó la responsabilidad de darle funcionalidad a una base datos o dos, de acuerdo a la complejidad de las gráficas, tablas y data que teníamos. Ya con la API en el servidor, se empezó a consumir la data a través de ahí y que estos alimentaran a las graficas y tablas.
Se trabajó en las gráficas que requirieron algún filtrado y posteriormente con la lógica del filtrado realizada y se conectaron la lógica del filtrado con la de las tablas y gráficas mediante props. 

 #### Los estilos
Ya con la funcionalidad de cada una de las tablas y gráficas, alimentadas con la data de la API, se trabajó para unir el trabajo de todas en una sola versión. El trabajar mediante componentes, ayudó a que este paso no fuera complicado, debido a que cada una contaba desde el inicio con los archivos creados en donde trabajaría sus componentes y en esta etapa, se trabajó para jalar cada uno de los componentes en una sola vista de interfaz, la de directivo o la de analista, según fuera el caso.
Lo siguiente fue la aplicación de estilos a cada uno de los componentes que estaban viviendo dentro de las interfaces de los dashboards, por lo que se trabajó de manera conjunta para lograr eso, apoyadas con el plugin de LiveShare que tiene disponible Visual Studio Code, se trabajó al mismo tiempo manipulando el mismo archivo, cada una desde sus computadoras. 


A la par, se trabajó en la maquetación de la interfaz de home, que da la bienvenida y en darle funcionalidad de ruteo a los botones.


Con lo anteriormente trabajado, se  volvió a hacer un git push y un merge a la rama principal, para que quedara una sola versión, se probó si el código no se había roto y se arreglaron los pequeños detalles que surgieron por haberlo unido. Ya con esa versión del trabajo del equipo completo, cada una la bajó para que todas continuaran trabajando con la versión actualizada. 
Cabe destacar que no fue la única ocasión que todas bajaron los cambios para que se trabajara sobre versiones actualizadas, sino que en este proceso se siguió esa lógica varias veces, aunado a que se trabajó con la premisa, de que con cada logro en el código, se hiciera commit para ir guardando esos cambios. Otra de las premisas fueron que los mensajes en los commits fueran lo más descriptivos posibles, para tener un mejor control de las versiones cargadas.
Se presentaron estos avances a la empresa, quienes estuvieron cómodos con el trabajo que estábamos presentando, por lo que la etapa final, sirvió sobre todo para arreglar algunos detalles de estilos y de sintaxis, todo a fin de que el código fuera mas eficiente y entendible para quien lo estuviera leyendo.

#### Sobre la organización del trabajo
Desde el inicio se planeó trabajar por sprints de horas, ya fuera en equipo o de manera individual. Al inicio del día se hizo  el daily,  lo que permitía tener un punto de partida sobre dónde estaba iniciando cada una al día, lo que fue fundamental para actualizar en la información que se había trabajado el día anterior y lo que pensábamos trabajar ese día. 
Al final del daily, donde además participaba Rhisco, se tomaba un tiempo para leer un una lista de las tareas que debían salir ese día antes de que acabara el mismo y hacer la planeación del trabajo en equipo. En los dailys participaba la empresa, por lo que sí había bloqueos de alguna de las integrantes de los squads en los que la empresa pudiera ayudar, lo hacían en el momento, o en el transcurso de la mañana enviaban la información correspondiente.
Gracias a la buena organización de trabajo y una buena comunicación, se lograron eficientar los esfuerzos, de forma que los espacios dedicados a la escritura de código, fueron productivos.
En el transcurso del día se trabajó por sprints de dos o tres horas (el tiempo se determinaba de acuerdo a los avances y las tareas asignadas) y en cada periodo de sprint cada una trabajó en sus tareas de manera individual, cumpliendose el tiempo, regresamos a la sala de zoom asignada  de Rhisco y una a una compartimos avances del sprint y si se tenía un bloqueo. En caso de que alguien lo tuviera, compartía pantalla y entre todas se daba solución. Posterior al feedback recibido, se compartia en qué se  iba a seguir trabajando en el siguiente mini sprint, para después continuar con la misma dinámica. Al finalizar el día, antes de despedirse, se dejaba el código sin errores, se juntaba en una sola versión y se bajaba para el siguiente día empezar a trabajar desde una versión actualizada.

#### Sobre el hackaton
El squad de trabajo estuvo conformado por seis mujeres: [Alicia](https://github.com/soyaliciaflores), [Andrea](https://github.com/AndreVivs), [Daniela](https://github.com/aleinadrh), [Karina](https://github.com/KarinaKanoDev), [Liliana](https://github.com/ravalidesign) y [Mariliz](https://github.com/Maariliz) quienes trabajamos durante 4 días en toda la propuesta que aquí se presenta, desde el prototipado de baja fidelidad, hasta obtener el MVP y los integrantes de la empresa, quienes participaron activamente dándonos el feedback necesario y proporcionandonos la información necesaria cuando la requeríamos.
![](foto del equipo)
En todo el proceso, en el squad se trabajó mediante la metodología agil de Scrum, por lo que cada mañana se realizó un daily, contestando las preguntas: ¿Qué hice ayer?, ¿Qué voy a hacer hoy? y ¿Qué impedimentos o bloqueos tengo?, esto permitió que todas las mañanas al incio del día, los integrantes de Rhisco conocieran los avances, el plan del día pero sobre todo, los bloqueos que estábamos teniendo para ese día, y si estaba en sus manos ayudarnos a desbloquear el problema, lo hacían en el momento.
