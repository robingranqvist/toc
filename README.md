# TOC

Just a script to simplify creating table of contents in Webflow.

## Init

```javascript
<script></script>

<script>
  new Toc(
    "your-rich-text-class",
    "your-toc-wrapper-class",
    ["h1", "h2", "h3", "h4", "h5", "h6"],
    20
  );
</script>
```

## textSource (string)

The class of your rich text content.

## targetDiv (string)

The wrapper class of your table of contents.

## headingTypes (array of strings)

The heading types you want to include in your table of contents.

## indentSize (int)

The pixel value of indentation you want between your headings in your table of contents.
