# Formulario de la saga Castlevania

## El proyecto cuenta con una versión minimificada y una rama principal

El proyecto consta de 10 preguntas que se gestionan automáticamente por medio de JavaScript haciendo un parse con un XML (Se puede usar JSON pero yo he usado XML) todo lo que contenga ese XML debe ser traspasado por nuestras funciones de JavaScript a nuestra página HTML



## Este es la página principal del proyecto que da lugar al formulario: [Castlevania](https://rawgit.com/HighYitan/Formulario_Castlevania/master/castlevania.html)

## Este es el formulario del proyecto: [Formulario de Castlevania](https://rawgit.com/HighYitan/pruebas_examen/master/formulario.html)

## He validado tanto los archivos HTML como los CSS del proyecto con W3CValidator: [Validador de W3C](https://validator.w3.org/)

## También he validado el archivo XML con DTD Y XSD: [Validador de XML](https://www.xmlvalidation.com/)

# Funciones principales

Este proyecto es sobre un foro de Castlevania en el que decidimos entrar y que vemos que tiene un cuestionario muy interesante para probar tus conocimientos acerca de la saga de juegos; Castlevania. Una muy respetada franquicia con decenas de juegos y muy antigua, sobreviviendo hasta nuestros tiempos.

El cuestionario puede corregirse automáticamente (Excepto el checkbox, he estado a punto de hacerlo funcionar pero no lo he logrado a tiempo), el cuestionario puede pasar las preguntas que se deseen de XML a HTML desde cualquier archivo XML, tenía pensado hacerlo con JSON pero era complicarse la vida demasiado y no había tiempo para ello.

Cuando pulsas el botón de entregar el formulario el formulario valida si has respóndido todas las preguntas o no y si no has respondido alguna te obliga a responder antes de pasar a dar la corrección del formulario, también he incluido un botón que te manda a la página principal y viceversa y que al hacer hover sobre él cambia de aspecto y tamaño un poco.

# Proceso del parse del XML para incorporarse en nuestro HTML

Cuando codificamos completamente el XMLDoc definitivamente hay que meter toda la información al código HTML a traves de ese parse y guardar las respuestas en variables en nuestro archivo de JavaScript que son arrays a su vez, de eso se encarga nuestra función de gestionarXML, en todas las preguntas, el bucle generado por el método evalua el título de dicha pregunta o mejor dicho su index y guarda las respuestas en las variables pertinenetes (Que son arrays), identificando cada pregunta por su index creado por nosotros por medio de una clase de la cual obtenemos su número de índice, la primera pregunta sería el número 0 y la segunda el 1 y así sucesivamente.

# Proceso de comprobación de preguntas respondidas o no

La función de comprobación se encarga de comprobar si se han respondido todas las preguntas antes de empezar a corregir el formulario si no han sido respondidas todas no dejará al usuario que pase al siguiente paso que sería la corrección. Los métodos en JavaScript uno a uno recorren las preguntas en busca de respuestas, si los campos están vacíos cuando se ha pulsado el botón no dejará que avancemos por medio de un aviso de alerta por el cual detendrá lo que queramos hacer hasta que contestemos esa pregunta.

# Corrección de las preguntas

Si bien no corrige correctamente los checkbox si que lo hace con los demás elementos del formulario y por este motivo el examen pasaría a ser un 8 sobre 8 en el que un 8 equivaldría a un 10 ya que los checkbox no cuentan en este caso, cuando se corrige una de las preguntas esta suma un punto si es correcta y resta un punto si es incorrecta, digamos que descuenta lo que vale la pregunta, el código informa de las preguntas correctas e incorrectas si las respuestas correctas son múltiples. Todas estas notas se suman en una nota total.

# Estética elegida

He elegido tonos oscuros y/o estridentes para recrear el ambiente vampírico y monstruoso de las mansiones de los vampiros en las que tienen lugar las aventuras de los juegos de la saga Castlevania, digamos que he intentado ser más o menos fiel a esa estética oscura pero sin dejar de lado la diferenciación entre letras y fondos con el contraste, la imagen elegida para la portada de la página ha sido elegida por mi como un personaje icónico de la saga que marcó un antes y un después en la saga con sus hazañas legendarias, el gran Alucard.
