# Material Symbols Capsule for Mojo CSS

Integrate Google Material Symbols effortlessly into your Mojo CSS projects.

## Usage

#### NPM

1. Install the capsule package via npm:

```bash
npm install @mojocss/material-symbols
```

2. Import the `capsuleExample` function from the installed package:

```javascript
import materialSymbols from "@mojocss/material-symbols";
```

3. Add the capsule to your Mojo config:

```javascript
mojo({
  // Mojo CSS Config
  capsules: [materialSymbols],
});
```

Alternatively, you can configure specific options:

```javascript
mojo({
  // Mojo CSS Config
  capsules: [
    {
      capsule: materialSymbols,
      options: {
        type: ["Outlined","Rounded","Sharp"], // Array of icon styles | Default ["Outlined"]
        fill: "both", // true, false, "both" | Default "both"
        weight: 400, // 100...700 | Default 400
        grade: 0, // -25...200 | Default 0
        size: 24, // 20...48 | Default 48
      },
    },
  ],
});
```

#### CDN

```html
<script src="https://unpkg.com/@mojocss/material-symbols"></script>
```

and then

```javascript
mojo({
  // Mojo CSS Config
  capsules: [materialSymbols],
});
```

## Usage

For outlined use:
```html
<span class="material-symbols-outlined">
home
</span>
```

For rounded use:
```html
<span class="material-symbols-rounded">
home
</span>
```

For sharp use:
```html
<span class="material-symbols-sharp">
home
</span>
```

When the fill option is set to `"both"`, you can use the `symbols-filled` class to fill the icon:

```html
<span class="material-symbols-outlined symbols-filled">
home
</span>
```


## Related Resources

- [More Info and Icons List](https://fonts.google.com/icons)
- [Capsules Documentation](https://mojocss.com/docs/config/capsules)
