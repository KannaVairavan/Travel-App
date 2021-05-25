# Campground Search API

## API Params

[API URL](http://api.amp.active.com/camping/campgrounds?{queryString params}&api_key={key})

### Method
    Method: GET 

### Params
landmarkLat, landmarkLong (latitude/longitude)

### Example
Sample Request - return all campgrounds in Colorado with RV hookups, a golf course and pets allowed:

http://api.amp.active.com/camping/campgrounds?pstate=TX&siteType=2001&expwith=1&amenity=4005&pets=3010&api_key=E7MW2V7WQEKZFVU668CDUAXS

```
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<resultset amenity="4005" count="7" lengthOfStay="5" pstate="CO"
 resultType="campgrounds" siteType="2001">
   <result contractID="KOA" contractType="PRIVATE"
    facilityID="191502" facilityName="Alamosa KOA"
    faciltyPhoto="/photos/details/koa_191502_1.jpg"
    latitude="37.4744444" longitude="-105.7986111" sitesWithAmps="Y" sitesWithPetsAllowed="Y"
    sitesWithSewerHookup="N" sitesWithWaterHookup="Y" sitesWithWaterfront="" state="CO"/>
```