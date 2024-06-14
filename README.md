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

Create a mock table of contents using the following classes in Webflow. These can be styled however you want, and will then be replaced by the generated toc with the same style(s).

### toc

The main table of contents list.

### toc-item

An item of the toc list.

### toc-heading

A heading / link.
