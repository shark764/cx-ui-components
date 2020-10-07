#### Description

The pie chart component needs to be passed a **data** prop with multiple values (array).

#### Example 1: Default

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

<PieChart data={data} width={300} height={300} />;
```

#### Example 2: Responsive (adjusting to the width and height of it's parent container)

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

// the container div is just for the purpose of this demo, to display responsiveness of the component
<div class="container" style={{ height: '60vh', border: '1px dashed #ccc' }}>
  <p style={{ position: 'absolute', margin: 5, color: '#ccc' }}>Container</p>
  <PieChart data={data} />
</div>;
```

#### Example 3: With tooltip, click event and no legend

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

<PieChart data={data} width={300} height={300} showLegend={false} showTooltip onClick={() => alert('Clicked!')} />;
```

#### Example 4: With tooltip and percentages in labels

```jsx
const data = [
  { name: 'Group A', value: 20 },
  { name: 'Group B', value: 15 },
  { name: 'Group C', value: 35 },
  { name: 'Group D', value: 20 },
];

<PieChart data={data} width={300} height={300} showTooltip percentageLabels />;
```

#### Example 5: With tooltip and inner labels displayed as percentages

```jsx
const data = [
  { name: 'Group A', value: 20 },
  { name: 'Group B', value: 15 },
  { name: 'Group C', value: 35 },
  { name: 'Group D', value: 20 },
];

<PieChart data={data} width={350} height={350} showInnerLabels percentageLabels showTooltip />;
```

#### Example 6: With tooltip and name labels

```jsx
const data = [{ name: 'Calls', value: 210 }, { name: 'Emails', value: 15 }, { name: 'Other', value: 45 }];

<PieChart data={data} width={350} height={350} showNameLabels showTooltip />;
```

#### Example 7: With tooltip and displayed as donut

```jsx
const data = [
  { name: 'Group A', value: 20 },
  { name: 'Group B', value: 15 },
  { name: 'Group C', value: 35 },
  { name: 'Group D', value: 20 },
];

<PieChart data={data} width={350} height={350} showAsDonut percentageLabels showTooltip />;
```

#### Example 8: With tooltip, inner labels and displayed as donut

```jsx
const data = [
  { name: 'Group A', value: 20 },
  { name: 'Group B', value: 15 },
  { name: 'Group C', value: 35 },
  { name: 'Group D', value: 20 },
];

<PieChart data={data} width={350} height={350} showAsDonut showInnerLabels percentageLabels showTooltip />;
```

#### Example 9: With custom colors

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

<PieChart data={data} width={350} height={300} percentageLabels colors={CUSTOM_COLORS} />;
```
