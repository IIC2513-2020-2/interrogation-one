# Tests Interrogación 1

Para corregir cada solución entregada, el proyecto incluye el script `test` que realiza una corrección que podríamos denominar de "primer filtro". Esta corrección consiste en tomar una solución de una forma en particular (`forma1`, `forma2`, `forma3`) y correr un script que se encarga de verificar el output de la solución.

**Nota**: podría haber diferencias entre el output esperado y el output de las soluciones, lo que hará que el test falle. No necesariamente esto significa que la solución está mal. Es por esto que se considera un "primer filtro", y es necesario verificar el output de las funciones a mano.

## Pasos para corregir una solución

1. Supongamos que disponemos de una solución, que debería corresponder a la carpeta `src` completa. Lo primero que se debe hacer es copiar la carpeta src dentro del proyecto (reemplazará la carpeta `src` original).

2. Luego, dependiendo de la forma que esté implementada en esta solución, corremos el siguiente comando en la raíz del proyecto:
    ```bash
    # Considering "forma1" as solution
    yarn test forma1
    ```
    Con lo anterior, verás el output de los tests. Los que pasaron estarán marcados en verde con "Pass", y los que no, estarán marcados en rojo con "Fail"
3. Como fue mencionado, **DEBES** revisar además el output de las funciones directamente. Para esto, puedes ejecutar la siguiente variación del script
    ```bash
    yarn test forma1 onlyOutput > test_output.js
    ```
    Este comando, en vez de indicar si el test pasó o no, imprime el output de las funciones. Estamos además especificando que el output se escriba al archivo `test_output.js`, para así poder ver todo el detalle (en consola puede que se pierda).

    Notar que el archivo es creado como `.js` para facilidad de lectura dentro de un editor de texto, pero puede contener líneas que no son JS.
4. La pregunta 3 de cada forma no tiene un test real (siempre mostrará que el test pasa). Debes revisar el archivo `output.html` generado para verificar correctitud.

## Consideraciones

- El output es generado con `console.log`. Por defecto, Node "corta" algunos objetos a los que se les hace `console.log`, indicando algo como `"... 51 more items"`. Esto no debiese ser problema, pues para el caso específico de estas soluciones, con lo que sí se muestra ya es posible verificar la estructura del objeto resultante
- Todas las preguntas tienen algo de puntaje por el concepto `"Función corre sin problemas (no se cae)"`. Corriendo los scripts anteriores verás inmediatamente si esto se cumple o no, pues cualquier error aparecerá en la ejecución
- La pregunta 1 de cada forma tiene 2 test cases. El resto sólo tiene 1.
- En la pregunta 1 de la `forma3`, la función `getTotalDeaths` tiene dos soluciones posibles (hasta el momento), por lo que el test evalua dos outputs
- Entre cada solución que evalúes, sólo debes asegurarte de incluir la carpeta `src` correcta. No es necesario borrar nada. Por ejemplo, el archivo `output.html` es eliminado automáticamente antes de generarlo al llamar a la función correspondiente. 
- Si quieres revisar cuál es el output esperado para cada solución, puedes verlo en los archivos `tests/formaX/preguntaY.json`. Es un archivo grande con el siguiente formato:
  ```json
  // Each element of the array corresponds to a test case
  {
    "fnName": [
      {
        "input": inputObject, 
        "output": outputObject
      }
    ]
  }
  ```
