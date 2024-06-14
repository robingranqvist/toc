# TOC

Just a script to simplify creating table of contents in Webflow.

## Init

### Import

```javascript
<script src="https://cdn.jsdelivr.net/gh/robingranqvist/toc@1.0.5/script.js"></script>
```

### Init

```javascript
document.addEventListener("DOMContentLoaded", () => {
  new Toc(
    "your-rich-text-class",
    "your-toc-wrapper-class",
    ["h1", "h2", "h3", "h4", "h5", "h6"],
    20
  );
});
```

### textSource (string)

The class of your rich text content.

### targetDiv (string)

The wrapper class of your table of contents.

### headingTypes (array of strings)

The heading types you want to include in your table of contents.

### indentSize (int)

The pixel value of indentation you want between your headings in your table of contents.

## Style your TOC

The classes are required for your table of contents to work in Webflow. Style these as you want.

### toc

The main list for your toc.

### toc-item

An item of the toc list.

### toc-heading

A link containing a heading in the list.
