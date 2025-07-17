# Conversor de Monedas

Este proyecto es un conversor de monedas que permite convertir pesos chilenos a otras monedas utilizando la API de mindicador.cl. La aplicación también muestra un historial de los últimos 10 días del valor de la moneda seleccionada.

## Estructura del Proyecto

El proyecto tiene la siguiente estructura de archivos:

```
conversor-monedas
├── src
│   ├── index.html       # Estructura básica del documento HTML
│   ├── app.js           # Lógica principal del conversor de monedas
│   └── styles.css       # Estilos CSS para la aplicación
├── package.json         # Configuración para npm
└── README.md            # Documentación del proyecto
```

## Instalación

1. Clona el repositorio en tu máquina local:
   ```
   git clone <URL_DEL_REPOSITORIO>
   ```
2. Navega al directorio del proyecto:
   ```
   cd conversor-monedas
   ```
3. Instala las dependencias necesarias:
   ```
   npm install
   ```

## Uso

1. Abre el archivo `src/index.html` en tu navegador.
2. Ingresa la cantidad de pesos chilenos que deseas convertir.
3. Selecciona la moneda a la que deseas convertir.
4. Haz clic en el botón para iniciar la conversión.
5. El resultado de la conversión se mostrará en la página, junto con un gráfico que muestra el historial de los últimos 10 días del valor de la moneda seleccionada.

## Funcionalidades

- Conversión de pesos chilenos a diferentes monedas.
- Manejo de errores en la consulta a la API.
- Visualización del historial de tipos de cambio en un gráfico.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.