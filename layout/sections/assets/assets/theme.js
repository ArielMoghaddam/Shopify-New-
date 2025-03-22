document.addEventListener('DOMContentLoaded', function() {
  // Initialize product gallery
  initProductGallery();
  
  // Initialize wishlist functionality
  initWishlist();
  
  // Initialize add to cart functionality
  initAddToCart();
  
  // Initialize collection page sorting
  initCollectionSorting();
  
  // Initialize collection view switching
  initCollectionViewSwitching();
});

function initProductGallery() {
  const thumbnails = document.querySelectorAll('.thumbnail');
  const featuredImage = document.getElementById('featured-image');
  
  if (thumbnails.length && featuredImage) {
    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', function() {
        // Remove active class from all thumbnails
        thumbnails.forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked thumbnail
        this.classList.add('active');
        
        // Update featured image
        const thumbnailImg = this.querySelector('img');
        featuredImage.src = thumbnailImg.src.replace('_small', '_large');
        featuredImage.alt = thumbnailImg.alt;
      });
    });
  }
}

// More JavaScript functions would follow...
