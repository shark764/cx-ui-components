#### Description

The stat component needs to be passed a **label** prop (string) and a **value** prop (string).

#### Example 1: Default

```jsx
<Stat label="Example 1" value="60.2%" />
```

#### Example 2: Responsive (adjusting to the width and height of it's parent container)

```jsx
// the container div is just for the purpose of this demo, to display responsiveness of the component
<div class="container" style={{ height: '40vh', border: '1px dashed #ccc' }}>
  <p style={{ position: 'absolute', margin: 5, color: '#ccc' }}>Container</p>
  <Stat label="Example 2" value="60.2%" />
</div>
```

#### Example 3: Success

```jsx
<Stat label="Example 3" value="60.2%" componentType="success" />
```

#### Example 4: Warning

```jsx
<Stat label="Example 4" value="00:00:45" componentType="warning" />
```

#### Example 5: Error

```jsx
<Stat label="Example 5" value="< 0.002" componentType="error" />
```

#### Example 6: Custom color

```jsx
<Stat label="Example 6" value="+725" color="#3498db" />
```
