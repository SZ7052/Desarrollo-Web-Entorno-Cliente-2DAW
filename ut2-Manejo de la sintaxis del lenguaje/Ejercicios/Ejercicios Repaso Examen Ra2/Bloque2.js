/*BLOQUE 02: Gestor de Peticiones HTTP y Nivel SLA (2,0 Puntos)
El balanceador de carga de un servidor web debe procesar códigos de estado HTTP e inspeccionar latencias.
• a) Variables Iniciales (0,0 pts - Obligatorio): Declara codigoHTTP = 404 y latenciaMs = 120.
• b) Evaluación con Switch y Ternario (2,0 pts):
- Mediante una estructura switch, evalúa codigoHTTP (casos 200: 'OK', 401: 'No Autorizado', 404: 'No
Encontrado', 500: 'Error Servidor'). Obligatorio incluir cláusula default para códigos no previstos (1,0 pt).
- Con un operador ternario, asigna a la variable calidadServicio el valor 'ÓPTIMA' si latenciaMs < 150 o
'DEGRADADA' en caso contrario (1,0 pt).
*/