// ---------------- Create Product Page i.e Inserting Information -------
function createProductPage(
  imageSrc,
  name,
  brand,
  price,
  description,
  img0,
  img1,
  img2,
  img3,
  img4
) {
  // Product Image
  var productImg = document.getElementById("productImg");
  productImg.src = imageSrc;

  // Product Name
  var productName = document.getElementById("name");
  productName.innerHTML = name;

  // Product Barnd
  var productBrand = document.getElementById("brand");
  productBrand.innerHTML = brand;

  // Product Price
  var productPrice = document.getElementById("price");
  productPrice.innerHTML = price;

  // Product Description
  var productDescription = document.getElementById("description");
  productDescription.innerHTML = description;

  // Product Preview Image 0
  var photo0 = document.getElementById("img0");
  photo0.src = img0;

  // Product Preview Image 1
  var photo1 = document.getElementById("img1");
  photo1.src = img1;

  // Product Preview Image 2
  var photo2 = document.getElementById("img2");
  photo2.src = img2;

  // Product Preview Image 3
  var photo3 = document.getElementById("img3");
  photo3.src = img3;

  // Product Preview Image 4
  var photo4 = document.getElementById("img4");
  photo4.src = img4;


  // ---------------- Change Preview Image OnClick -------
  function changeImage() {
    // Photo 0
    photo0.addEventListener("click", function() {
      productImg.src = img0;
    });

    // Photo 1
    photo1.addEventListener("click", function() {
      productImg.src = img1;
    });
    // Photo 2
    photo2.addEventListener("click", function() {
      productImg.src = img2;
    });

    // Photo 3
    photo3.addEventListener("click", function() {
      productImg.src = img3;
    });

    // Photo 4
    photo4.addEventListener("click", function() {
      productImg.src = img4;
    });

    });

    // Toggle Active Class
    $(document).on("click", ".previewImg img", function() {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");
    });
  }
  changeImage();
