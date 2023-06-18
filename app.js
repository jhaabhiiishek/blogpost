var image = new Image();
function setImageBlogSize() {
	image.src = './b.jpg';
	var dynamicDiv = document.getElementById('blog');
  	dynamicDiv.style.backgroundImage = 'url("' + image.src + '")';
  	console.log(dynamicDiv.style.backgroundImage)
  	dynamicDiv.style.height = (dynamicDiv.clientWidth / image.width) * image.height + 'px';
};
window.addEventListener('load', function () {
	setImageBlogSize()	
});
window.addEventListener('resize', setImageBlogSize);

var image2 = new Image();
function setImageBlog2Size() {
	image2.src = './m.jpg';
	var dynamicDiv = document.getElementById('blog-2');
  	dynamicDiv.style.backgroundImage = 'url("' + image2.src + '")';
  	console.log(dynamicDiv.style.backgroundImage)
  	dynamicDiv.style.height = (dynamicDiv.clientWidth / image2.width) * image2.height + 'px';
};
window.addEventListener('load', function () {
	setImageBlog2Size()	
});
window.addEventListener('resize', setImageBlog2Size);

var image3 = new Image();
function setImageBlog3Size() {
	image3.src = './d.jpg';
	var dynamicDiv = document.getElementById('blog-3');
  	dynamicDiv.style.backgroundImage = 'url("' + image3.src + '")';
  	console.log(dynamicDiv.style.backgroundImage)
  	dynamicDiv.style.height = (dynamicDiv.clientWidth / image3.width) * image3.height + 'px';
};
window.addEventListener('load', function () {
	setImageBlog3Size()	
});
window.addEventListener('resize', setImageBlog3Size);

var image4 = new Image();
function setImageBlog4Size() {
	image4.src = './u.jpg';
	var dynamicDiv = document.getElementById('blog-4');
  	dynamicDiv.style.backgroundImage = 'url("' + image4.src + '")';
  	console.log(dynamicDiv.style.backgroundImage)
  	dynamicDiv.style.height = (dynamicDiv.clientWidth / image4.width) * image4.height + 'px';
};
window.addEventListener('load', function () {
	setImageBlog4Size()	
});
window.addEventListener('resize', setImageBlog4Size);