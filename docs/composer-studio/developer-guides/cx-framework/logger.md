# Logger

Our logging interface provides a way to hook into the internals of the framework for debugging/logging purposes. The interface is compatible with the well-known `console` interface. See [`Window.console`](https://developer.mozilla.org/en-US/docs/Web/API/Window/console).

| Parameter | Type | Default | Required? | Description |
|:----------|:-----|:--------|:----------|:------------|
| error | `(message?: any, ...optionalParams: any[]) => void` | - | No | - |
| warn | `(message?: any, ...optionalParams: any[]) => void` | - | No | - |
| info | `(message?: any, ...optionalParams: any[]) => void` | - | No | - |
| debug | `(message?: any, ...optionalParams: any[]) => void` | - | No | - |
