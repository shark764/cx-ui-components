#### Description

The gauge component has two versions and needs to be passed either a **percentage** prop (number) or a **data** prop with multiple values (array).

#### Example 1: With single percentage

```jsx
<Gauge percentage={80} height={300} width={300} />
```

#### Example 2: Responsive (adjusting to the width and height of it's parent container)

```jsx
// the container div is just for the purpose of this demo, to display responsiveness of the component
<div class="container" style={{ height: '60vh', border: '1px dashed #ccc' }}>
  <p style={{ position: 'absolute', margin: 5, color: '#ccc' }}>Container</p>
  <Gauge percentage={80} />
</div>
```

#### Example 3: With single percentage, legend, tooltip and click event

```jsx
<Gauge
  percentage={32.5}
  width={300}
  height={300}
  showLegend
  showTooltip
  digitsAfterPeriod={1}
  onClick={() => alert('Clicked!')}
/>
```

#### Example 4: With multiple data, legend, tooltip and click event

```jsx
const data = [
  { name: 'Group A', value: 100 },
  { name: 'Group B', value: 50 },
  { name: 'Group C', value: 120 },
  { name: 'Group D', value: 60 },
  { name: 'Group E', value: 300 },
  { name: 'Group F', value: 103 },
  { name: 'Group G', value: 102 },
];

<Gauge data={data} width={300} height={300} showLegend showTooltip onClick={() => alert('Clicked!')} />;
```

#### Example 5: With multiple data, legend, tooltip and percentages in labels

```jsx
const data = [{ name: 'Group A', value: 25 }, { name: 'Group B', value: 25 }, { name: 'Group C', value: 50 }];

<Gauge data={data} width={300} height={300} showLegend showTooltip percentageLabels />;
```

#### Example 6: With multiple data, legend, tooltip and name labels instead of values

```jsx
const data = [{ name: 'Calls', value: 223 }, { name: 'Emails', value: 115 }, { name: 'Other', value: 25 }];

<Gauge data={data} width={350} height={350} showNameLabels showLegend showTooltip />;
```

#### Example 7: With multiple data, legend, percentage labels and custom colors

```jsx
const data = [
  { name: 'Red', value: 14.28 },
  { name: 'Orange', value: 14.28 },
  { name: 'Yellow', value: 14.28 },
  { name: 'Green', value: 14.28 },
  { name: 'Blue', value: 14.28 },
  { name: 'Indigo', value: 14.28 },
  { name: 'Violet', value: 14.28 },
];

const CUSTOM_COLORS = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

<Gauge data={data} width={350} height={300} percentageLabels showLegend colors={CUSTOM_COLORS} />;
```
