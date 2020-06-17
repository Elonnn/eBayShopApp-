const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.get('/api/search/:searchParams', (req, res, next) => {
  console.log(req.params.searchParams)
  const items = [{"title": "Gundam Bandai Hobby HG G-Reco 1/144 Elf Bullock (Mask Custom) Model Kit Japan", "condition": "New", "category": "Gundam", "itemURL": "https://www.ebay.com/itm/Gundam-Bandai-Hobby-HG-G-Reco-1-144-Elf-Bullock-Mask-Custom-Model-Kit-Japan-/402249709432", "price": "40.0", "shippingPrice": "264.0", "location": "Japan", "isReturnAccepted": true, "isTopRated": false, "isExpedited": true, "imageURL": "https://thumbs1.ebaystatic.com/m/m--5jOP-SjFdDVcv5VqISdQ/140.jpg"}, {"title": "clear polycarbonate sheet .040\u201d x 52\u201d x 105\u201d with Thermoformable Masking 2 sides", "condition": "New", "category": "Plastic Sheets", "itemURL": "https://www.ebay.com/itm/clear-polycarbonate-sheet-040-x-52-x-105-Thermoformable-Masking-2-sides-/324137827720", "price": "48.0", "shippingPrice": "175.0", "location": "Enon,OH,USA", "isReturnAccepted": false, "isTopRated": false, "isExpedited": true, "imageURL": "https://thumbs1.ebaystatic.com/m/mhVk27fjTE87rjSjCcudtHg/140.jpg"}, {"title": "NEW 2019 STAR WARS HAPPY MEAL TOY LOT of 11 MASKS C3PO CHEWBACCA MCDONALDS POTF", "condition": "New", "category": "Other Star Wars Collectibles", "itemURL": "https://www.ebay.com/itm/NEW-2019-STAR-WARS-HAPPY-MEAL-TOY-LOT-11-MASKS-C3PO-CHEWBACCA-MCDONALDS-POTF-/293511217784", "price": "34.99", "shippingPrice": "115.0", "location": "Maricopa,AZ,USA", "isReturnAccepted": false, "isTopRated": false, "isExpedited": true, "imageURL": "https://thumbs1.ebaystatic.com/m/mYpDUpg7QVXzeQg6bS_rp1g/140.jpg"}, {"title": "Lululun Face Mask Extra Moist Brightening Whitening Aging Care 7-32-36 sheets", "condition": "New", "category": "Masks & Peels", "itemURL": "https://www.ebay.com/itm/Lululun-Face-Mask-Extra-Moist-Brightening-Whitening-Aging-Care-7-32-36-sheets-/291674492293?var=592358427193", "price": "35.99", "shippingPrice": "100.0", "location": "Japan", "isReturnAccepted": true, "isTopRated": false, "isExpedited": true, "imageURL": "https://thumbs2.ebaystatic.com/pict/2916744922934040_3.jpg"}, {"title": "Black Panther, Vibranium Power FX Claw, Hasbro NEW & SEALED W/Light Up Mask 2017", "condition": "New", "category": "Comic Book Heroes", "itemURL": "https://www.ebay.com/itm/Black-Panther-Vibranium-Power-FX-Claw-Hasbro-NEW-SEALED-W-Light-Up-Mask-2017-/254415607239", "price": "50.0", "shippingPrice": "50.0", "location": "San Leandro,CA,USA", "isReturnAccepted": false, "isTopRated": false, "isExpedited": true, "imageURL": "https://thumbs4.ebaystatic.com/m/mAZ-U_toaB_uK-m3jkX3YaA/140.jpg"}, {"title": "Mask Pentagon lenteguela oro Wrestling Lucha libre Mexicana Luchador.", "condition": "New", "category": "Wrestling", "itemURL": "https://www.ebay.com/itm/Mask-Pentagon-lenteguela-oro-Wrestling-Lucha-libre-Mexicana-Luchador-/164148033083", "price": "33.99", "shippingPrice": "65.0", "location": "Mexico", "isReturnAccepted": false, "isTopRated": false, "isExpedited": true, "imageURL": "https://thumbs4.ebaystatic.com/m/ml6uWwLTKfWX_u_TqhXJuBw/140.jpg"}, {"title": "LebeL IAU SERUM Mask Hair Treatment 170g Made in Japan", "condition": "New", "category": "Shampoos & Conditioners", "itemURL": "https://www.ebay.com/itm/LebeL-IAU-SERUM-Mask-Hair-Treatment-170g-Made-Japan-/153680718240", "price": "39.99", "shippingPrice": "50.0", "location": "Japan", "isReturnAccepted": false, "isTopRated": false, "isExpedited": true, "imageURL": "https://thumbs1.ebaystatic.com/m/mT9wMOSKHibzWICiWFSWYAA/140.jpg"}, {"title": "3\u00a0Unused\u00a0Authentic Handcrafted African Masks from\u00a0Senegal for Wall Decoration", "condition": "New", "category": "Masks", "itemURL": "https://www.ebay.com/itm/3-Unused-Authentic-Handcrafted-African-Masks-from-Senegal-Wall-Decoration-/112734286116", "price": "49.0", "shippingPrice": "35.0", "location": "New York,NY,USA", "isReturnAccepted": false, "isTopRated": false, "isExpedited": true, "imageURL": "https://thumbs1.ebaystatic.com/m/mAeIb5WZEqAsoNWbRhXfw2g/140.jpg"}, {"title": "Mobile Suit Gundam UC (Unicorn) This mask is for that. T-shirt Black Size: M", "condition": "New", "category": "DragonBall Z", "itemURL": "https://www.ebay.com/itm/Mobile-Suit-Gundam-UC-Unicorn-mask-that-T-shirt-Black-Size-M-/174151311425", "price": "46.42", "shippingPrice": "35.0", "location": "Japan", "isReturnAccepted": true, "isTopRated": false, "isExpedited": true, "imageURL": "https://thumbs2.ebaystatic.com/m/mKNqDWa9inbvj8ksH9deEFA/140.jpg"}, {"title": "Removable Cover Transparent Sun Cap Mask Block Vinyl Protective / made in korea ", "condition": "New with tags", "category": "Hats & Headwear", "itemURL": "https://www.ebay.com/itm/Removable-Cover-Transparent-Sun-Cap-Mask-Block-Vinyl-Protective-made-korea-/124098873005", "price": "34.65", "shippingPrice": "45.0", "location": "Korea, South", "isReturnAccepted": false, "isTopRated": false, "isExpedited": true, "imageURL": "https://thumbs2.ebaystatic.com/m/mX1DCt6jPV0JVcEndo6rT5A/140.jpg"}];
  res.status(200).json({
    message: 'dummy',
    items: items
  });

});

module.exports = app;
