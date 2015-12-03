#Movie


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