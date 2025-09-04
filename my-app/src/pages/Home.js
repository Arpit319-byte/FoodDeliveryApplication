import React, { useState } from 'react';
import RestaurantCard from '../components/RestaurantCard';
import './Home.css';


const restaurants = [
  {
      "info": {
          "id": "509008",
          "name": "Burger King",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/60080ae1-8e6b-40ab-8bf6-b77898156e04_509008.jpg",
          "locality": "Vvip Style Mall",
          "areaName": "Raj Nagar",
          "costForTwo": "₹350 for two",
          "cuisines": [
              "Burgers",
              "American"
          ],
          "avgRating": 4.5,
          "parentId": "166",
          "avgRatingString": "4.5",
          "totalRatingsString": "7.1K+",
          "sla": {
              "deliveryTime": 36,
              "lastMileTravel": 4.1,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "4.1 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2025-09-05 04:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "Rxawards/_CATEGORY-Burger.png",
                      "description": "Delivery!"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹59"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
          "context": "seo-data-9db31603-8fd1-41b1-bd9a-ac48682b2efb"
      },
      "cta": {
          "link": "https://www.swiggy.com/city/noida/burger-king-vvip-style-mall-raj-nagar-rest509008",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "454201",
          "name": "KFC",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/3387462c-2b13-416f-85c5-7875bda6db1b_454201.JPG",
          "locality": "Raj Nagar Extension",
          "areaName": "Raj Nagar Extension",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "Burgers",
              "Fast Food",
              "Rolls & Wraps"
          ],
          "avgRating": 4.3,
          "parentId": "547",
          "avgRatingString": "4.3",
          "totalRatingsString": "3.4K+",
          "sla": {
              "deliveryTime": 21,
              "lastMileTravel": 1.3,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "1.3 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2025-09-05 03:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "android/static-assets/icons/big_rx.png",
                      "description": "bolt!"
                  },
                  {
                      "imageId": "Rxawards/_CATEGORY-Burger.png",
                      "description": "Delivery!"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                              }
                          },
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹179"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "4.5",
                  "ratingCount": "685"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
          "context": "seo-data-9db31603-8fd1-41b1-bd9a-ac48682b2efb"
      },
      "cta": {
          "link": "https://www.swiggy.com/city/noida/kfc-raj-nagar-extension-rest454201",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "457303",
          "name": "Bakingo",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/4/965a0bcb-28d1-4511-8aa3-538fc7cdb6b2_457303.JPG",
          "locality": "sector 23",
          "areaName": "Raj Nagar",
          "costForTwo": "₹300 for two",
          "cuisines": [
              "Bakery",
              "Desserts",
              "Beverages",
              "Snacks"
          ],
          "avgRating": 4.6,
          "parentId": "3818",
          "avgRatingString": "4.6",
          "totalRatingsString": "5.1K+",
          "sla": {
              "deliveryTime": 35,
              "lastMileTravel": 5,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "5.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2025-09-05 00:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "Rxawards/_CATEGORY-Desserts.png",
                      "description": "Delivery!"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Desserts.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹79"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
          "context": "seo-data-9db31603-8fd1-41b1-bd9a-ac48682b2efb"
      },
      "cta": {
          "link": "https://www.swiggy.com/city/noida/bakingo-sector-23-raj-nagar-rest457303",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "703869",
          "name": "NIC Ice Creams",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/8/78d523ee-d9a7-47c5-9e95-7caab06809b6_703869.JPG",
          "locality": "Aura Plaza",
          "areaName": "Raj Nagar",
          "costForTwo": "₹120 for two",
          "cuisines": [
              "Ice Cream",
              "Desserts"
          ],
          "avgRating": 4.8,
          "veg": true,
          "parentId": "6249",
          "avgRatingString": "4.8",
          "totalRatingsString": "687",
          "sla": {
              "deliveryTime": 20,
              "lastMileTravel": 2.9,
              "serviceability": "SERVICEABLE",
              "slaString": "15-20 mins",
              "lastMileTravelString": "2.9 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2025-09-05 00:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹175"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
          "context": "seo-data-9db31603-8fd1-41b1-bd9a-ac48682b2efb"
      },
      "cta": {
          "link": "https://www.swiggy.com/city/noida/nic-ice-creams-aura-plaza-raj-nagar-rest703869",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "729504",
          "name": "Theobroma",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/14/5ec6f834-2e28-4330-885b-d76758dffce0_729504.JPG",
          "locality": "Raj Nagar Extension",
          "areaName": "Raj Nagar Extension",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "Bakery",
              "Desserts",
              "Beverages"
          ],
          "avgRating": 4.6,
          "parentId": "1040",
          "avgRatingString": "4.6",
          "totalRatingsString": "572",
          "sla": {
              "deliveryTime": 15,
              "lastMileTravel": 1.2,
              "serviceability": "SERVICEABLE",
              "slaString": "10-15 mins",
              "lastMileTravelString": "1.2 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2025-09-04 23:59:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "android/static-assets/icons/big_rx.png",
                      "description": "bolt!"
                  },
                  {
                      "imageId": "Rxawards/_CATEGORY-Desserts.png",
                      "description": "Delivery!"
                  },
                  {
                      "imageId": "newg.png",
                      "description": "Gourmet"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                              }
                          },
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Desserts.png"
                              }
                          },
                          {
                              "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "4.5",
                  "ratingCount": "51"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
          "context": "seo-data-9db31603-8fd1-41b1-bd9a-ac48682b2efb"
      },
      "cta": {
          "link": "https://www.swiggy.com/city/noida/theobroma-raj-nagar-extension-rest729504",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "772697",
          "name": "Kwality Walls Ice Cream and More",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/a2fbdd94-b3af-4fab-89c8-6fd240cd6951_772697.JPG",
          "locality": "Nagar Nigam",
          "areaName": "Kaushambi",
          "costForTwo": "₹200 for two",
          "cuisines": [
              "Desserts",
              "Ice Cream",
              "Ice Cream Cakes"
          ],
          "avgRating": 4.7,
          "veg": true,
          "parentId": "582",
          "avgRatingString": "4.7",
          "totalRatingsString": "236",
          "sla": {
              "deliveryTime": 35,
              "lastMileTravel": 7.7,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "7.7 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2025-09-04 23:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹100 OFF",
              "subHeader": "ABOVE ₹399",
              "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
          "context": "seo-data-9db31603-8fd1-41b1-bd9a-ac48682b2efb"
      },
      "cta": {
          "link": "https://www.swiggy.com/city/noida/kwality-walls-ice-cream-and-more-nagar-nigam-kaushambi-rest772697",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "710824",
          "name": "The Belgian Waffle Co.",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/16/19cf9eae-2ebf-4e3d-8c67-f48f9c610b10_710824.jpg",
          "locality": "KHASRA",
          "areaName": "RAJ NAGAR EXTENSION",
          "costForTwo": "₹200 for two",
          "cuisines": [
              "Waffle",
              "Desserts",
              "Ice Cream"
          ],
          "avgRating": 4.7,
          "veg": true,
          "parentId": "2233",
          "avgRatingString": "4.7",
          "totalRatingsString": "1.2K+",
          "sla": {
              "deliveryTime": 33,
              "lastMileTravel": 4,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "4.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2025-09-05 04:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "UPTO ₹50"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
          "context": "seo-data-9db31603-8fd1-41b1-bd9a-ac48682b2efb"
      },
      "cta": {
          "link": "https://www.swiggy.com/city/noida/the-belgian-waffle-co-khasra-raj-nagar-extension-rest710824",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "254130",
          "name": "McDonald's",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/eb2c142e-7432-4bd4-b727-260a5ab90dfa_254130.JPG",
          "locality": "BRS Nagar",
          "areaName": "Raj Nagar",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "American"
          ],
          "avgRating": 4.5,
          "parentId": "630",
          "avgRatingString": "4.5",
          "totalRatingsString": "13K+",
          "sla": {
              "deliveryTime": 40,
              "lastMileTravel": 6.7,
              "serviceability": "SERVICEABLE",
              "slaString": "40-45 mins",
              "lastMileTravelString": "6.7 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2025-09-04 22:50:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "Rxawards/_CATEGORY-Burger.png",
                      "description": "Delivery!"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹49"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "4.2",
                  "ratingCount": "6.5K+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
          "context": "seo-data-9db31603-8fd1-41b1-bd9a-ac48682b2efb"
      },
      "cta": {
          "link": "https://www.swiggy.com/city/noida/mcdonalds-brs-nagar-raj-nagar-rest254130",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "89918",
          "name": "Pizza Hut",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/d156d462-8cf7-4738-84a6-f47f52714e19_89918.JPG",
          "locality": "Vvip Style Mall",
          "areaName": "Raj Nagar",
          "costForTwo": "₹350 for two",
          "cuisines": [
              "Pizzas"
          ],
          "avgRating": 4.3,
          "parentId": "721",
          "avgRatingString": "4.3",
          "totalRatingsString": "5.7K+",
          "sla": {
              "deliveryTime": 44,
              "lastMileTravel": 4,
              "serviceability": "SERVICEABLE",
              "slaString": "40-45 mins",
              "lastMileTravelString": "4.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2025-09-05 03:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹99"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
          "context": "seo-data-9db31603-8fd1-41b1-bd9a-ac48682b2efb"
      },
      "cta": {
          "link": "https://www.swiggy.com/city/noida/pizza-hut-vvip-style-mall-raj-nagar-rest89918",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "626553",
          "name": "La Pino'z Pizza",
          "cloudinaryImageId": "mkbgksj3ou3gsc7znsdd",
          "locality": "sector 10",
          "areaName": "Raj Nagar",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "Pizzas",
              "Pastas",
              "Italian",
              "Desserts",
              "Beverages"
          ],
          "avgRating": 4.2,
          "parentId": "4961",
          "avgRatingString": "4.2",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 49,
              "lastMileTravel": 7,
              "serviceability": "SERVICEABLE",
              "slaString": "45-50 mins",
              "lastMileTravelString": "7.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2025-09-05 05:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
          "context": "seo-data-9db31603-8fd1-41b1-bd9a-ac48682b2efb"
      },
      "cta": {
          "link": "https://www.swiggy.com/city/noida/la-pinoz-pizza-sector-10-raj-nagar-rest626553",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "220321",
          "name": "Subway",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/2229e6bb-a4ab-47ae-bff2-0d7a34816368_220321.jpg",
          "locality": "C Block",
          "areaName": "Raj Nagar",
          "costForTwo": "₹350 for two",
          "cuisines": [
              "sandwich",
              "Salads",
              "wrap",
              "Healthy Food"
          ],
          "avgRating": 4.4,
          "parentId": "2",
          "avgRatingString": "4.4",
          "totalRatingsString": "3.9K+",
          "sla": {
              "deliveryTime": 47,
              "lastMileTravel": 7,
              "serviceability": "SERVICEABLE",
              "slaString": "45-50 mins",
              "lastMileTravelString": "7.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2025-09-05 02:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹119"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
          "context": "seo-data-9db31603-8fd1-41b1-bd9a-ac48682b2efb"
      },
      "cta": {
          "link": "https://www.swiggy.com/city/noida/subway-c-block-raj-nagar-rest220321",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "686202",
          "name": "Chinese Wok",
          "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
          "locality": "Raj Nagar",
          "areaName": "VVIP Style Mall",
          "costForTwo": "₹250 for two",
          "cuisines": [
              "Chinese",
              "Asian",
              "Tibetan",
              "Desserts"
          ],
          "avgRating": 4.1,
          "parentId": "61955",
          "avgRatingString": "4.1",
          "totalRatingsString": "1.7K+",
          "sla": {
              "deliveryTime": 42,
              "lastMileTravel": 4.1,
              "serviceability": "SERVICEABLE",
              "slaString": "40-45 mins",
              "lastMileTravelString": "4.1 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2025-09-05 01:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹129"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
          "context": "seo-data-9db31603-8fd1-41b1-bd9a-ac48682b2efb"
      },
      "cta": {
          "link": "https://www.swiggy.com/city/noida/chinese-wok-raj-nagar-vvip-style-mall-rest686202",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "686203",
          "name": "Big Bowl",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/30548ac4-2e57-4c1d-ba73-8372f74a1ad2_686203.JPG",
          "locality": "Raj Nagar",
          "areaName": "VVIP Style Mall",
          "costForTwo": "₹250 for two",
          "cuisines": [
              "Chinese",
              "Tibetan",
              "Desserts"
          ],
          "avgRating": 4.2,
          "parentId": "434792",
          "avgRatingString": "4.2",
          "totalRatingsString": "1.0K+",
          "sla": {
              "deliveryTime": 45,
              "lastMileTravel": 4,
              "serviceability": "SERVICEABLE",
              "slaString": "40-45 mins",
              "lastMileTravelString": "4.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2025-09-05 01:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹129"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
          "context": "seo-data-9db31603-8fd1-41b1-bd9a-ac48682b2efb"
      },
      "cta": {
          "link": "https://www.swiggy.com/city/noida/big-bowl-raj-nagar-vvip-style-mall-rest686203",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "536446",
          "name": "Bikkgane Biryani",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/15/caf52139-d5ea-4af4-b699-d4cd36387430_536446.jpg",
          "locality": "Govindpuram Road",
          "areaName": "Raj Nagar",
          "costForTwo": "₹350 for two",
          "cuisines": [
              "Biryani",
              "Hyderabadi",
              "Andhra",
              "South Indian",
              "North Indian",
              "Mughlai",
              "Kebabs"
          ],
          "avgRating": 4.3,
          "parentId": "5070",
          "avgRatingString": "4.3",
          "totalRatingsString": "4.1K+",
          "sla": {
              "deliveryTime": 41,
              "lastMileTravel": 5.6,
              "serviceability": "SERVICEABLE",
              "slaString": "40-45 mins",
              "lastMileTravelString": "5.6 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2025-09-05 00:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "Rxawards/_CATEGORY-Biryani.png",
                      "description": "Delivery!"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Biryani.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹219"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
          "context": "seo-data-9db31603-8fd1-41b1-bd9a-ac48682b2efb"
      },
      "cta": {
          "link": "https://www.swiggy.com/city/noida/bikkgane-biryani-govindpuram-road-raj-nagar-rest536446",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "342832",
          "name": "Wendy's Burgers",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/5549f8bd-c17a-44e7-9f18-5fa13d7f9643_342832.JPG",
          "locality": "Block B",
          "areaName": "Rajendra Nagar",
          "costForTwo": "₹200 for two",
          "cuisines": [
              "Burgers",
              "American",
              "Fast Food",
              "Snacks"
          ],
          "avgRating": 4.3,
          "parentId": "972",
          "avgRatingString": "4.3",
          "totalRatingsString": "2.3K+",
          "sla": {
              "deliveryTime": 56,
              "lastMileTravel": 9.1,
              "serviceability": "SERVICEABLE",
              "slaString": "55-60 mins",
              "lastMileTravelString": "9.1 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2025-09-04 23:59:00",
              "opened": true
          },
          "badges": {
              "textExtendedBadges": [
                  {
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available",
                      "fontColor": "#7E808C"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                              }
                          }
                      ]
                  }
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹59"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
          "context": "seo-data-9db31603-8fd1-41b1-bd9a-ac48682b2efb"
      },
      "cta": {
          "link": "https://www.swiggy.com/city/noida/wendys-burgers-block-b-rajendra-nagar-rest342832",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "54238",
          "name": "Baskin Robbins - Ice Cream Desserts",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/24/45a4a62a-38fb-4637-9754-dde1d7eabbc3_54238.JPG",
          "locality": "Raj Nagar",
          "areaName": "Raj Nagar",
          "costForTwo": "₹300 for two",
          "cuisines": [
              "Ice Cream"
          ],
          "avgRating": 4.8,
          "veg": true,
          "parentId": "5588",
          "avgRatingString": "4.8",
          "totalRatingsString": "2.1K+",
          "sla": {
              "deliveryTime": 40,
              "lastMileTravel": 6.9,
              "serviceability": "SERVICEABLE",
              "slaString": "40-45 mins",
              "lastMileTravelString": "6.9 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2025-09-05 00:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "4.5",
                  "ratingCount": "353"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
          "context": "seo-data-9db31603-8fd1-41b1-bd9a-ac48682b2efb"
      },
      "cta": {
          "link": "https://www.swiggy.com/city/noida/baskin-robbins-ice-cream-desserts-raj-nagar-rest54238",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "416439",
          "name": "Biryani By Kilo",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/4/772e8188-6671-4796-8402-4c362ab5d4f7_416439.JPG",
          "locality": "Gaur Mall",
          "areaName": "Raj Nagar",
          "costForTwo": "₹600 for two",
          "cuisines": [
              "Biryani",
              "Hyderabadi",
              "Kebabs",
              "Mughlai",
              "Desserts"
          ],
          "avgRating": 4.3,
          "parentId": "130",
          "avgRatingString": "4.3",
          "totalRatingsString": "3.4K+",
          "sla": {
              "deliveryTime": 46,
              "lastMileTravel": 6.6,
              "serviceability": "SERVICEABLE",
              "slaString": "45-50 mins",
              "lastMileTravelString": "6.6 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2025-09-05 01:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "newg.png",
                      "description": "Gourmet"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹89"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "4.0",
                  "ratingCount": "252"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
          "context": "seo-data-9db31603-8fd1-41b1-bd9a-ac48682b2efb"
      },
      "cta": {
          "link": "https://www.swiggy.com/city/noida/biryani-by-kilo-gaur-mall-raj-nagar-rest416439",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "543898",
          "name": "Wow! China",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/28/21af146c-3e5b-4729-b9a9-2000434243da_543898.JPG",
          "locality": "NH 58 Bypass",
          "areaName": "KW6 Mall",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "Chinese",
              "Asian",
              "fastfood",
              "Beverages",
              "Snacks"
          ],
          "avgRating": 3.7,
          "parentId": "226836",
          "avgRatingString": "3.7",
          "totalRatingsString": "393",
          "sla": {
              "deliveryTime": 41,
              "lastMileTravel": 3,
              "serviceability": "SERVICEABLE",
              "slaString": "40-45 mins",
              "lastMileTravelString": "3.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2025-09-05 01:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹39"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
          "context": "seo-data-9db31603-8fd1-41b1-bd9a-ac48682b2efb"
      },
      "cta": {
          "link": "https://www.swiggy.com/city/noida/wow-china-nh-58-bypass-kw6-mall-rest543898",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "703870",
          "name": "Grameen Kulfi",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/16/8afc6913-91f4-4c86-bbcc-e3484cf339bd_703870.jpg",
          "locality": "Aura Plaza",
          "areaName": "Raj Nagar",
          "costForTwo": "₹120 for two",
          "cuisines": [
              "Ice Cream",
              "Desserts"
          ],
          "avgRating": 4.9,
          "veg": true,
          "parentId": "12175",
          "avgRatingString": "4.9",
          "totalRatingsString": "196",
          "sla": {
              "deliveryTime": 19,
              "lastMileTravel": 2.9,
              "serviceability": "SERVICEABLE",
              "slaString": "15-20 mins",
              "lastMileTravelString": "2.9 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2025-09-05 00:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹148"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
          "context": "seo-data-9db31603-8fd1-41b1-bd9a-ac48682b2efb"
      },
      "cta": {
          "link": "https://www.swiggy.com/city/noida/grameen-kulfi-aura-plaza-raj-nagar-rest703870",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "161136",
          "name": "Behrouz Biryani",
          "cloudinaryImageId": "a4ffed13eb197c6df43dfe1c756560e5",
          "locality": "Azad Building",
          "areaName": "Navyug Market",
          "costForTwo": "₹500 for two",
          "cuisines": [
              "Biryani",
              "Kebabs",
              "Mughlai",
              "Beverages",
              "Desserts"
          ],
          "avgRating": 4.3,
          "parentId": "1803",
          "avgRatingString": "4.3",
          "totalRatingsString": "4.9K+",
          "sla": {
              "deliveryTime": 53,
              "lastMileTravel": 7.8,
              "serviceability": "SERVICEABLE",
              "slaString": "50-55 mins",
              "lastMileTravelString": "7.8 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2025-09-04 23:59:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "newg.png",
                      "description": "Gourmet"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹99"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
          "context": "seo-data-9db31603-8fd1-41b1-bd9a-ac48682b2efb"
      },
      "cta": {
          "link": "https://www.swiggy.com/city/noida/behrouz-biryani-azad-building-navyug-market-rest161136",
          "type": "WEBLINK"
      }
  }
]

const Home = () => {
  // const [restaurants] = useState([
  //   {
  //     id: 1,
  //     name: "Pizza Palace",
  //     cuisine: "Italian",
  //     rating: 4.5,
  //     deliveryTime: 30,
  //     minOrder: 200,
  //     image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400"
  //   },
  //   {
  //     id: 2,
  //     name: "Burger House",
  //     cuisine: "American",
  //     rating: 4.2,
  //     deliveryTime: 25,
  //     minOrder: 150,
  //     image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400"
  //   },
  //   {
  //     id: 3,
  //     name: "Sushi Express",
  //     cuisine: "Japanese",
  //     rating: 4.7,
  //     deliveryTime: 35,
  //     minOrder: 300,
  //     image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400"
  //   }
  // ]);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Delicious Food Delivered to Your Door</h1>
          <p>Order from your favorite restaurants and get it delivered in minutes</p>
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Enter your delivery address..."
              className="address-input"
            />
            <button className="search-btn">Find Food</button>
          </div>
        </div>
      </section>

      <section className="restaurants">
        <h2>Popular Restaurants</h2>
        <p className="restaurants-subtitle">Discover amazing food from top-rated restaurants near you</p>
        <div className="restaurants-grid">
          {restaurants.map(restaurant => {
            return <RestaurantCard  restaurant={restaurant} />
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
