class Toc {
  constructor(
    textSource,
    targetDiv,
    headingTypes = ["h1", "h2", "h3", "h4", "h5", "h6"],
    indentSize = 0
  ) {
    this.textSource = textSource;
    this.targetDiv = targetDiv;
    this.headingTypes = headingTypes;
    this.indentSize = indentSize;

    if (!textSource || !targetDiv) {
      throw new Error("Both a text source and a target div are required");
    }

    this.generate();
  }

  generate() {
    const textSource = document.querySelectorAll(`.${this.textSource}`);
    let html = "<div class='toc'>";
    let count = 0;

    textSource.forEach((div) => {
      div.querySelectorAll(this.headingTypes.join(",")).forEach((heading) => {
        const id = `h${count++}`;
        const level = parseInt(heading.tagName.substring(1)) - 1;

        heading.id = id;
        html += `<div class='toc-item toc-item-${id}' style="margin-left: ${
          level * this.indentSize
        }px;"><a href="#${id}" class="toc-heading toc-h${id}">${
          heading.textContent
        }</a></div>`;
      });
    });

    document.querySelector(`.${this.targetDiv}`).innerHTML = html;
  }
}
