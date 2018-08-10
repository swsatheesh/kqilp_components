We require the use of src and alt, only enforced by react in dev mode

### Basic
 - If src is not provided, a default image is showed. It only should be used for templating or under develop process.
 - If alt is not provided, the property 'role' is equal to 'presentation', so it wont be interpretate by web readers.
```
<Img />
```

### src
src should be an imported/require image. A url will work too, but because the cdlo has to work offline, this is not recommended
```
const imgExample = require ('./example.jpg');

<Img src={imgExample} />
```

### Alt text
```
const imgExample = require ('./example.jpg');

<Img src={imgExample} alt='Some text'/>
```