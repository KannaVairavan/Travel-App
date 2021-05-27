# RoadGoat API

## API Params

[RoadGoat!](https://api.roadgoat.com)
```
BaseURL: https://api.roadgoat.com,

endpoints : {
  'Destination': /api/v2/destinations/{:id},
  'Autocomplete': /api/v2/destinations/auto_complete?q={cityName}
  }

params : {
  'Destination': {id},
  'Autocompletion': {cityName}}
```



### Destination Example
 Sample response object using the Destination URL endpoint --> '/api/v2/destinations/new-york-ny-usa'
```
"id": "6588544",
        "type": "destination",
        "attributes": {
            "slug": "new-york-ny-usa",
            "destination_type": "City",
            "short_name": "New York",
            "name": "New York, NY",
            "long_name": "New York, New York State, US",
            "population": 8175133,
            "latitude": 40.742185,
            "longitude": -73.992602
            ...
        },
        "relationships": {
          ...
        },
        "included": {
          ...
        }
    }
}
```

### Autocomplete Example
```
 Sample response object using the Destination URL endpoint --> '/api/v2/destinations/auto_complete?q=austin'
{
  data: [
    {
      id: "10685986",
      type: "destination",
      attributes: {
        slug: "austin-tx-usa",
        destination_type: "City",
        short_name: "Austin",
        name: "Austin, TX",
        long_name: "Austin, Texas, US",
        latitude: 30.26715,
        longitude: -97.74306,
        bounding_box: null,
        countable: true,
        average_rating: 4.22222222222222,
        check_in_count: 2307,
      },
      relationships: {
        known_for: {
          data: [
            { id: "12", type: "known_for" },
            { id: "4", type: "known_for" },
            { id: "3", type: "known_for" },
            { id: "7", type: "known_for" },
            { id: "21", type: "known_for" },
            { id: "10", type: "known_for" },
            { id: "11", type: "known_for" },
            { id: "18", type: "known_for" },
            { id: "13", type: "known_for" },
            { id: "5", type: "known_for" },
            { id: "19", type: "known_for" },
            { id: "6", type: "known_for" },
          ],
        },
        featured_photo: { data: { id: "382", type: "photo" } },
      },
    },
    {
      id: "10732635",
      type: "destination",
      attributes: {
        slug: "austintown-oh-usa",
        destination_type: "City",
        short_name: "Austintown",
        name: "Austintown, OH",
        long_name: "Austintown, Ohio, US",
        latitude: 41.10172,
        longitude: -80.76452,
        bounding_box: null,
        countable: true,
        average_rating: 0.0,
        check_in_count: 1,
      },
      relationships: {
        known_for: { data: [] },
        featured_photo: { data: null },
      },
    },
    {
      id: "10719757",
      type: "destination",
      attributes: {
        slug: "austin-mn-usa",
        destination_type: "City",
        short_name: "Austin",
        name: "Austin, MN",
        long_name: "Austin, Minnesota, US",
        latitude: 43.66663,
        longitude: -92.97464,
        bounding_box: null,
        countable: true,
        average_rating: 0.0,
        check_in_count: 1,
      },
      relationships: {
        known_for: { data: [] },
        featured_photo: { data: null },
      },
    },
    {
      id: "10618532",
      type: "destination",
      attributes: {
        slug: "austin-ar-usa-2",
        destination_type: "City",
        short_name: "Austin",
        name: "Austin, AR",
        long_name: "Austin, Lonoke County, Arkansas, US",
        latitude: 34.99842,
        longitude: -91.98376,
        bounding_box: null,
        countable: true,
        average_rating: 0.0,
        check_in_count: 0,
      },
      relationships: {
        known_for: { data: [] },
        featured_photo: { data: null },
      },
    },
    {
      id: "10636348",
      type: "destination",
      attributes: {
        slug: "austin-in-usa",
        destination_type: "City",
        short_name: "Austin",
        name: "Austin, IN",
        long_name: "Austin, Indiana, US",
        latitude: 38.75839,
        longitude: -85.80803,
        bounding_box: null,
        countable: true,
        average_rating: 0.0,
        check_in_count: 0,
      },
      relationships: {
        known_for: { data: [] },
        featured_photo: { data: null },
      },
    },
  ],
  included: [
    {
      id: "382",
      type: "photo",
      attributes: {
        image: {
          full: "https://cdn.roadgoat.com/uploads/photo/image/382/travel-guide-of-austin-tx-usa-original.jpg",
          large:
            "https://cdn.roadgoat.com/uploads/photo/image/382/large_travel-guide-of-austin-tx-usa-original.jpg",
          medium:
            "https://cdn.roadgoat.com/uploads/photo/image/382/medium_travel-guide-of-austin-tx-usa-original.jpg",
          thumb:
            "https://cdn.roadgoat.com/uploads/photo/image/382/thumb_travel-guide-of-austin-tx-usa-original.jpg",
          avatar:
            "https://cdn.roadgoat.com/uploads/photo/image/382/avatar_travel-guide-of-austin-tx-usa-original.jpg",
        },
      },
    },
    {
      id: "12",
      type: "known_for",
      attributes: {
        slug: "charming",
        name: "Charming",
        icon: "https://cdn.roadgoat.com/images/shared/icons/known-for/charming",
      },
    },
    {
      id: "4",
      type: "known_for",
      attributes: {
        slug: "foodie",
        name: "Foodie",
        icon: "https://cdn.roadgoat.com/images/shared/icons/known-for/foodie",
      },
    },
    {
      id: "3",
      type: "known_for",
      attributes: {
        slug: "nightlife",
        name: "Nightlife",
        icon: "https://cdn.roadgoat.com/images/shared/icons/known-for/nightlife",
      },
    },
    {
      id: "7",
      type: "known_for",
      attributes: {
        slug: "performing-arts",
        name: "Performing Arts",
        icon: "https://cdn.roadgoat.com/images/shared/icons/known-for/performing-arts",
      },
    },
    {
      id: "21",
      type: "known_for",
      attributes: {
        slug: "music",
        name: "Music",
        icon: "https://cdn.roadgoat.com/images/shared/icons/known-for/music",
      },
    },
    {
      id: "10",
      type: "known_for",
      attributes: {
        slug: "hipster",
        name: "Hipster",
        icon: "https://cdn.roadgoat.com/images/shared/icons/known-for/hipster",
      },
    },
    {
      id: "11",
      type: "known_for",
      attributes: {
        slug: "hippie",
        name: "Hippie",
        icon: "https://cdn.roadgoat.com/images/shared/icons/known-for/hippie",
      },
    },
    {
      id: "18",
      type: "known_for",
      attributes: {
        slug: "lgbt-friendly",
        name: "LGBT Scene",
        icon: "https://cdn.roadgoat.com/images/shared/icons/known-for/lgbt-friendly",
      },
    },
    {
      id: "13",
      type: "known_for",
      attributes: {
        slug: "college-town",
        name: "College Town",
        icon: "https://cdn.roadgoat.com/images/shared/icons/known-for/college-town",
      },
    },
    {
      id: "5",
      type: "known_for",
      attributes: {
        slug: "outdoorsy",
        name: "Outdoorsy",
        icon: "https://cdn.roadgoat.com/images/shared/icons/known-for/outdoorsy",
      },
    },
    {
      id: "19",
      type: "known_for",
      attributes: {
        slug: "wineries",
        name: "Wineries",
        icon: "https://cdn.roadgoat.com/images/shared/icons/known-for/wineries",
      },
    },
    {
      id: "6",
      type: "known_for",
      attributes: {
        slug: "shopping",
        name: "Shopping",
        icon: "https://cdn.roadgoat.com/images/shared/icons/known-for/shopping",
      },
    },
  ],
};
```