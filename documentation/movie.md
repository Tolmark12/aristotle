#Movie
```yaml
{cmd: movie.layers.clear, data: 1}
{cmd: movie.layers.clear-all}
{cmd: movie.layers.cache, data: 1}
{cmd: movie.layers.uncache, data: 1}
{cmd: movie.layers.uncache-all}
{cmd: movie.layers.cache-all}
{cmd: movie.layers.cache-all-but, data: 1}
{cmd: movie.layers.cache-all-but, data: [1,2,5]}
{cmd: movie.report}
```

#### layers
An array of layers
```yaml
movie:
  layers:
    - {depth: 0, content: first-layer.svg }
    - {depth: 1, content: second-layer.jpg }
    - {depth: 2, content: third-layer.json }
```
#### zoom
The zoom amount and point to zoom into.
```yaml
movie:
  zoom: {scale: 2, x: 200, y: 200}
```
Or, the id of the svg item
```yaml
movie:
  zoom: {scale: 2, id: some-id}
```