const galleryContent = document.querySelector(".gallery__content");
const currentDetailBox = null;
async function getData() {
  try {
    const response = await fetch("/data/data.json");
    if (!response.ok) {
      throw new Error("Fetching data failed");
    }

    return response.json();
  } catch (error) {
    console.log(error);
  }
}

function createElement() {
  getData().then((data) => {
    data.forEach((item, index) => {
      const img = document.createElement("img"),
        p = document.createElement("p"),
        view = document.createElement("span"),
        date = document.createElement("span"),
        itemBox = document.createElement("div"),
        boxImg = document.createElement("div"),
        boxFooter = document.createElement("div");

      img.setAttribute("src", item.image);
      p.textContent = item.title;
      view.textContent = item.views + " views";
      date.textContent = item.date;

      // boxImg.classList.add('img');
      // itemBox.classList.add('item');

      boxFooter.append(view);
      boxFooter.append(date);
      boxImg.append(img);
      boxImg.append(p);
      itemBox.append(boxImg);
      itemBox.append(boxFooter);
      galleryContent.append(itemBox);

      // classlist

      itemBox.classList.add("item");
      boxImg.classList.add("img", "loader");
      boxImg.style.cursor = "pointer";
      boxFooter.classList.add("title");
      view.style.opacity = 0;
      date.style.opacity = 0;

      img.addEventListener("load", () => {
        boxImg.classList.remove("loader");
        view.style.opacity = 1;
        date.style.opacity = 1;
      });

      boxImg.addEventListener("click", () => showImageItem(item));
    });

    galleryContent.addEventListener("click", (e) => {
      const target = e.target;
      const itemIndex = target.closest(".item")?.dataset.itemIndex;

      if (itemIndex !== undefined) {
        const item = data[itemIndex];
        showImageItem(item);
      }
    });
  });
<<<<<<< HEAD
}
createElement();

function showImageItem(item) {
  if (currentDetailBox) {
    currentDetailBox.classList.add("closed");
    currentDetailBox.remove();
  }
  const detailBox = createDetailBox(item);
  document.body.append(detailBox);
  currentDetailBox = detailBox;
}

function createDetailBox(item) {
  const detailBox = document.createElement("div");
  const img = document.createElement("img"),
    itemBox = document.createElement("div"),
    boxImg = document.createElement("div");

  img.setAttribute("src", item.image);



  detailBox.classList.add("detail__box");

  boxImg.append(img);

  detailBox.append(boxImg);

  detailBox.addEventListener("click", () => {
    detailBox.classList.add("closed");

    detailBox.remove();
  });

  return detailBox;
}
=======
}
createElement();

function showImageItem(item) {
  if (currentDetailBox) {
    currentDetailBox.classList.add("closed");
    currentDetailBox.remove();
  }
  const detailBox = createDetailBox(item);
  document.body.append(detailBox);
  currentDetailBox = detailBox;
}

function createDetailBox(item) {
  const detailBox = document.createElement("div");
  const img = document.createElement("img"),
    itemBox = document.createElement("div"),
    boxImg = document.createElement("div");

  img.setAttribute("src", item.image);

  // boxImg.classList.add('img');
  // itemBox.classList.add('item');

  detailBox.classList.add("detail__box");

  boxImg.append(img);

  detailBox.append(boxImg);

  detailBox.addEventListener("click", () => {
    detailBox.classList.add("closed");

    detailBox.remove();
  });

  return detailBox;
}
>>>>>>> 4c34d96b111f32c01e663db56f3f2d0ff6390276
