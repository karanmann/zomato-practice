// You should now have data from *at least* 10 restaurants 
//from the `/search` endpoint on your page, 
//and include the following data:

// - The restaurant name
// - The average cost for a dinner there
// - The address of the restaurant
// - An image (you choose which image you'd like to display from the response)
// - Either the `aggregate_rating` or the `rating_text` for that restaurant

const cityId = "311";
const cuisineId = "168";

const zomatoApiUrlCuisine = `https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&cuisines=${cuisineId}`;

const apiKey = {
  headers: {
    "user-key": "e2ebc2f85586d3cdd1bcde9e2e9924d4"
  }
};

fetch(zomatoApiUrlCuisine, apiKey)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    data.restaurants.forEach((restaurantContainer) => {
      console.log(restaurantContainer.restaurant.name);
    });
    
    //ITERATING OVER THE ARRAY WITH MAP 

    // const testmap = data.restaurants.map(
    //   (restaurantContainer) => restaurantContainer.restaurant.name
    // );
    // console.log(testmap);
  });
