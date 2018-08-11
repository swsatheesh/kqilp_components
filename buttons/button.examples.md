#### Button
```
<div>
  <Button />
  <Button>Custom text</Button>
</div>
```

#### On Click event
```
initialState = { count: 1 };

<Button onClick={() => setState({count: state.count+1})}>
  You clicked me {state.count} times
</Button>
```

#### Types
```
<div>
  <Button type='solid'>Solid</Button>
  <Button type='outline'>Outline</Button>
  <Button type='gray'>Gray</Button>
  <Button type='link'>Link</Button>
</div>
```

#### Text transform
```
<div>
  <Button transform='init-caps'>init-caps</Button>
  <Button transform='lower-case'>lower-case</Button>
  <Button transform='upper-case'>upper-case</Button>
  <Button transform='no-transform'>no-transform</Button>
</div>
```

#### Sizes
```
<div>
  <Button size='btn-lg'>Large</Button>
  <Button size='btn-sm'>Default</Button>
</div>
```


#### Disabled
```
<Button disabled />
```
