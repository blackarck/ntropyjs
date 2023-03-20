export default function loadImages(imgpath,imageUrls, callback) {
    console.log("Starting image loading");
    const images = [];
    let loadedImages = 0;
  
    function imageLoaded() {
      loadedImages++;
      if (loadedImages === imageUrls.length) {
        console.log("images l is ",images.length);
       callback(images);
       return images;
      }
    }
  
    for (let i = 0; i < imageUrls.length; i++) {
      const img = new Image();
      img.onload = imageLoaded;
      console.log("Loading img "+i + " ,-"+imageUrls[i]);
      img.src = imgpath+imageUrls[i];
      images.push(img);
    }
  }