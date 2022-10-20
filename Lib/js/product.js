const productData = {
  product: {
    name: document.getElementById("productname"),
    price: document.getElementById("productprice"),
    Image: document.getElementById("productimage"),
  },
  basic: {
    productDescription: document.getElementById("basicProductDecription"),
    gigDescription: document.getElementById("basicGigDecription"),
    delivery: document.getElementById("basicGigDelivery"),
    price: document.getElementById("basicGigPrice"),
  },
  pro: {
    productDescription: document.getElementById("proProductDecription"),
    gigDescription: document.getElementById("proGigDecription"),
    delivery: document.getElementById("proGigDelivery"),
    price: document.getElementById("proGigPrice"),
  },
  advanced: {
    productDescription: document.getElementById("advanceProductDecription"),
    gigDescription: document.getElementById("advanceGigDecription"),
    delivery: document.getElementById("advanceGigDelivery"),
    price: document.getElementById("advanceGigPrice"),
  },
};

export default productData;
