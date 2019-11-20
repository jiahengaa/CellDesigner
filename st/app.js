var elements = [];
elements.push({
  name: "root",
  span: 24,
  type: "col",
  elements: [
    {
      name: "item1",
      span: 0,
      type: "row",
      elements: [
        {
          name: "item1",
          span: 8,
          type: "col",
          elements: []
        },
        {
          name: "item2",
          span: 8,
          type: "col",
          elements: []
        },
        {
          name: "item3",
          span: 8,
          type: "col",
          elements: [
            {
              name: "item4",
              span: 8,
              type: "col",
              elements: []
            },
            {
              name: "item5",
              span: 8,
              type: "col",
              elements: []
            },
            {
              name: "item6",
              span: 8,
              type: "col",
              elements: []
            }
          ]
        }
      ]
    },
    {
      name: "itemb1",
      span: 0,
      type: "row",
      elements: [
        {
          name: "itemb1",
          span: 8,
          type: "col",
          elements: []
        },
        {
          name: "itemb2",
          span: 8,
          type: "col",
          elements: []
        },
        {
          name: "itemb3",
          span: 8,
          type: "col",
          elements: [
            {
              name: "itemb4",
              span: 8,
              type: "col",
              elements: []
            },
            {
              name: "itemb5",
              span: 8,
              type: "col",
              elements: []
            },
            {
              name: "itemb6",
              span: 8,
              type: "col",
              elements: []
            }
          ]
        }
      ]
    }
  ]
});

function buildContent() {
  var contentElement = document.createElement("div");

  contentElement.classList.add(...["cellItem", "row"]);
  makeSortable(contentElement);

  var curRoot = document.getElementById("nestedDemo");
  elements.forEach(ele => {
    contentElement = buildChild(contentElement, ele);
  });
  curRoot.append(contentElement);
}

function buildChild(parent, ele) {
  var curEle = document.createElement("div");
  //新增自定义属性
  curEle.ele = ele;
  let type = "";
  if (ele.type === "row") {
    type = "row";
  } else {
    type = "col-md-" + ele.span;
  }
  curEle.classList.add(...["cellItem", type]);
  makeSortable(curEle);

  if (ele.elements.length === 0) {
    curEle.innerHTML = ele.name;
    parent.appendChild(curEle);
  } else {
    ele.elements.forEach(ele => {
      curEle = buildChild(curEle, ele);
      parent.appendChild(curEle);
    });
  }

  return parent;
}

buildContent();

function makeSortable(ele) {
  new Sortable(ele, {
    group: "nested",
    animation: 150,
    fallbackOnBody: true,
    swapThreshold: 0.65,
    onAdd: e => {
      console.log(e);
    },
    setData: (dataTransfer, dragEL) => {
      console.log(dataTransfer);

      console.log(dragEL);
    },
    onChoose: e => {
      console.log(e);
    },
    onUnchoose: e => {
      console.log(e);
    },
    onStart: e => {
      console.log(e);
    },
    onEnd: e => {
      console.log(e);
    },
    onUpdate: e => {
      console.log(e);
    },
    onSort: e => {
      console.log(e);
    },
    onRemove: e => {
      console.log(e);
    },
    onFilter: e => {
      console.log(e);
    },
    onMove: e => {
      console.log(e);
    },
    onClone: e => {
      console.log(e);
    },
    onChange: e => {
      console.log(e);
    }
  });
}
