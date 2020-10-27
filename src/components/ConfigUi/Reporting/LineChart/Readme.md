#### Description

The line chart component needs to be passed a **data** prop with multiple values (array), a **dataKeys** prop (array) with at least one value - representing a line on a line chart section, and a **xDataKey** prop (string) - representing the name displayed on the X axis.

#### Example 1: Default

```jsx
const data = [
  { name: 'Query 1', forecasted: 4000, actual: 2400, runRate: 89 },
  { name: 'Query 2', forecasted: 3000, actual: 1398, runRate: 117 },
  { name: 'Query 3', forecasted: 2000, actual: 9800, runRate: 119 },
  { name: 'Query 4', forecasted: 2780, actual: 3908, runRate: 93 },
  { name: 'Query 5', forecasted: 1890, actual: 4800, runRate: 75 },
  { name: 'Query 6', forecasted: 2390, actual: 3800, runRate: 81 },
];

<LineChart data={data} dataKeys={['runRate']} xDataKey="name" height={300} width={500} />;
```

#### Example 2: Responsive (adjusting to the width and height of it's parent container)

```jsx
const data = [
  { name: 'Query 1', forecasted: 4000, actual: 2400, runRate: 89 },
  { name: 'Query 2', forecasted: 3000, actual: 1398, runRate: 117 },
  { name: 'Query 3', forecasted: 2000, actual: 9800, runRate: 119 },
  { name: 'Query 4', forecasted: 2780, actual: 3908, runRate: 93 },
  { name: 'Query 5', forecasted: 1890, actual: 4800, runRate: 75 },
  { name: 'Query 6', forecasted: 2390, actual: 3800, runRate: 81 },
];

// the container div is just for the purpose of this demo, to display responsiveness of the component
<div class="container" style={{ height: '60vh', border: '1px dashed #ccc' }}>
  <p style={{ position: 'absolute', margin: 5, color: '#ccc' }}>Container</p>
  <LineChart data={data} dataKeys={['runRate']} xDataKey="name" />
</div>;
```

#### Example 3: With legend, tooltip and click event

```jsx
const data = [
  { name: 'Query 1', forecasted: 4000, actual: 2400, runRate: 89 },
  { name: 'Query 2', forecasted: 3000, actual: 1398, runRate: 117 },
  { name: 'Query 3', forecasted: 2000, actual: 9800, runRate: 119 },
  { name: 'Query 4', forecasted: 2780, actual: 3908, runRate: 93 },
  { name: 'Query 5', forecasted: 1890, actual: 4800, runRate: 75 },
  { name: 'Query 6', forecasted: 2390, actual: 3800, runRate: 81 },
];

<LineChart
  data={data}
  dataKeys={['runRate']}
  xDataKey="name"
  height={300}
  width={500}
  onClick={() => alert('Clicked!')}
/>;
```

#### Example 4: With legend, tooltip and percentage labels on the Y axis

```jsx
const data = [
  { name: 'Query 1', forecasted: 4000, actual: 2400, runRate: 89 },
  { name: 'Query 2', forecasted: 3000, actual: 1398, runRate: 117 },
  { name: 'Query 3', forecasted: 2000, actual: 9800, runRate: 119 },
  { name: 'Query 4', forecasted: 2780, actual: 3908, runRate: 93 },
  { name: 'Query 5', forecasted: 1890, actual: 4800, runRate: 75 },
  { name: 'Query 6', forecasted: 2390, actual: 3800, runRate: 81 },
];

<LineChart
  data={data}
  dataKeys={['runRate']}
  xDataKey="name"
  height={300}
  width={500}
/>;
```

#### Example 5: With multiple data keys, legend and tooltip

```jsx
const data = [
  { name: 'Query 1', forecasted: 400, actual: 240, runRate: 89 },
  { name: 'Query 2', forecasted: 300, actual: 139, runRate: 117 },
  { name: 'Query 3', forecasted: 200, actual: 980, runRate: 119 },
  { name: 'Query 4', forecasted: 278, actual: 390, runRate: 93 },
  { name: 'Query 5', forecasted: 189, actual: 480, runRate: 75 },
  { name: 'Query 6', forecasted: 239, actual: 380, runRate: 81 },
];

<LineChart
  data={data}
  dataKeys={['forecasted', 'actual']}
  xDataKey="name"
  height={300}
  width={500}
/>;
```
