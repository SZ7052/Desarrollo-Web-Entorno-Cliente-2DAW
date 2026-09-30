/*Ejercicio 3 [Refactorización]: Corrección de Código Legacy a Estándar
ES6+
Enunciado: Detecta los 4 errores de malas prácticas en el siguiente código sucio y refactorízalo en tu
editor:
    Código Sucio: var pieza = 'Peon'; if(pieza == 'Peon') { document.write('Es un ' + pieza); }
Pautas de Refactorización:
    1. Cambia var por const o let.
2. Sustituye la comparación débil == por la estricta ===.
3. Reemplaza la concatenación antigua con + por un Template Literal (`` `Es un \${pieza}` ``).
4. Elimina document.write() y usa textContent asignado a un elemento del DOM.*/