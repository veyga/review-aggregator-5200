reviewsApp.service('formattingService', function () {
    this.formattedAddress = function (business) {
        return `${business.address}, ${business.city} ${business.state} ${business.postal_code}`;
    }
});

// SERVICES
reviewsApp.service('businessService', function () {
    this.searchTerm = 'business1'; //shared between home and businesses controller
    this.searchType = 'name';
    this.business = {}; //transfer between businesses and reviews
});


reviewsApp.service('businessesDAOService', ['$resource', '$http', function ($resource, $http) {

    this.searchForBusinesses = function (businessName, city) {
        var matches;

        let includesCity = (b) => b.city.toUpperCase().includes(city.toUpperCase());
        let includesName = (b) => b.name.toUpperCase().includes(businessName.toUpperCase());
        if (!businessName && city) { // if searching for only city
            matches = yelps.filter(includesCity);
        } else if (businessName && city) { //searching for both
            matches = yelps.filter(includesName && includesCity);
        } else { //searching only for business name
            matches = yelps.filter(includesName);
        }

        for (var i = 0; i < matches.length; i++) {
            let match = matches[i];
            for (var j = 0; j < trips.length; j++) {
                let trip = trips[j];
                if (match.name.includes(trip.name) || trip.name.includes(match.name)) {
                    match.tripreviews = trip.reviews;
                }
            }
        }
        return matches;
    }

    this.post = function (business_id, rev) {
        for (var i = 0; i < yelps.length; i++) {
            if (yelps[i].business_id == business_id) {
                yelps[i].review.push(rev);
            }
        }
    }

    let yelps = [
        {
            "_id": {"$oid": "5d15b8865eab926c7d998054"},
            "business_id": "UdC4xRKTFQPOhkc6vPVwvA",
            "name": "Loose Caboose",
            "address": "4045 S Buffalo Dr",
            "city": "Las Vegas",
            "state": "NV",
            "postal_code": "89147",
            "latitude": 36.1153986,
            "longitude": -115.2626207,
            "stars": 3.5,
            "review_count": 12,
            "is_open": 1,
            "attributes": {
                "OutdoorSeating": "False",
                "HasTV": "True",
                "Ambience": "{'romantic': False, 'intimate': False, 'classy': False, 'hipster': False, 'divey': False, 'touristy': False, 'trendy': False, 'upscale': False, 'casual': False}",
                "RestaurantsPriceRange2": "1",
                "RestaurantsGoodForGroups": "True",
                "RestaurantsReservations": "False",
                "BikeParking": "False",
                "RestaurantsAttire": "'casual'",
                "RestaurantsDelivery": "False",
                "GoodForKids": "False",
                "RestaurantsTakeOut": "True",
                "Alcohol": "'full_bar'",
                "BusinessAcceptsCreditCards": "True",
                "BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': False, 'valet': False}",
                "NoiseLevel": "'average'",
                "Caters": "False"
            },
            "categories": "Restaurants",
            "hours": null,
            "review": [{
                "_id": {"$oid": "5d23c86616a84d360d61a3cc"},
                "review_id": "kRK72hsLpYAeU-XmnKRYnQ",
                "user_id": "Q7IoE5m2heQKThuVq3SYFA",
                "business_id": "UdC4xRKTFQPOhkc6vPVwvA",
                "stars": 3.0,
                "useful": 0,
                "funny": 0,
                "cool": 0,
                "text": "Ok food and ok service. I had a burger and pretzel bites. Nothing to write home about, but good nonetheless",
                "date": "2013-02-22 05:42:43"
            }, {
                "_id": {"$oid": "5d23c86716a84d360d61d500"},
                "review_id": "KpBITSpt-dh2sd03evx58Q",
                "user_id": "XQOWYd0VM9gDEepzzcRNEg",
                "business_id": "UdC4xRKTFQPOhkc6vPVwvA",
                "stars": 4.0,
                "useful": 0,
                "funny": 0,
                "cool": 0,
                "text": "My boyfriend and I come here during football season since it's close to our home. Beer is cold and food is cheap especially during football season. They have a restaurant section separate from the bar area; good for those who would like to dine away from the bar in a smoke free area. You can of course, enjoy your meal in the bar area while you play on some electronic gambling machines. \n\nCan't beat the specials they have in food during football games. Five bucks for 2 hot dogs and fries, $3 for a huge basket of fries and $7 for sliders and fries to name a few. Typical car food but it comes out nice and hot and the service is very welcoming. They seem to have a lot of regulars but new customers will feel welcome also. The bar is clean and they serve well drinks as well as some top shelf stuff.",
                "date": "2017-01-15 03:11:18"
            }, {
                "_id": {"$oid": "5d23c86e16a84d360d6384b3"},
                "review_id": "S4ng_8N10qi4oXkQ9pNgNQ",
                "user_id": "uM8YOJ7tuvFD3dPo9bipYA",
                "business_id": "UdC4xRKTFQPOhkc6vPVwvA",
                "stars": 4.0,
                "useful": 0,
                "funny": 0,
                "cool": 1,
                "text": "Dined here on a whim when staying at the Palms a few years ago the restaurant was across the street.  During our recent visit, we searched for the restaurant and found they closed but had another location. Caught Uber from the Strip (10min drive) and my craving for a homemade breakfast was satisfied.\n\nCheap eats but not fine dining or anything fancy.\n\nI ordered the Deuces Wild which includes eggs, hashbrown, sausage AND bacon along with 2 buttery pancakes courtesy of Ms. Esther. Hope you enjoy your visit!",
                "date": "2018-01-01 02:55:24"
            }, {
                "_id": {"$oid": "5d23c87316a84d360d64af11"},
                "review_id": "Q0xnvrRSlWl-Lr2jgkofsg",
                "user_id": "iCJMQp3WZuRON4AmzXJmZA",
                "business_id": "UdC4xRKTFQPOhkc6vPVwvA",
                "stars": 1.0,
                "useful": 1,
                "funny": 1,
                "cool": 0,
                "text": "So disappointed in this place.  I come here a lot but it's going down hill. Now I ask them to turn the tv to the game I want to watch and they said no.  No one is watching this tv but me!  I'm leaving and done with Loose Caboose.",
                "date": "2016-10-16 20:28:04"
            }, {
                "_id": {"$oid": "5d23c87716a84d360d6594f6"},
                "review_id": "2e9TdCN-7R89rlGTU4KMBQ",
                "user_id": "KdROdSqq-wxbCBZDszU9CQ",
                "business_id": "UdC4xRKTFQPOhkc6vPVwvA",
                "stars": 3.0,
                "useful": 0,
                "funny": 0,
                "cool": 0,
                "text": "Oh my, the crowd was awesome but the bartender Sue was very rude and told me she won't make me a bloody Mary because I'm not playing enough but we had just been gambling the whole time and been playing 80 dollars in less then a half hour. She is terrible! Never again wil I sit at the bar with her behind it!",
                "date": "2018-01-27 23:16:19"
            }, {
                "_id": {"$oid": "5d23c87716a84d360d65c344"},
                "review_id": "e-CCiK6M_H-drBg5AxVgRQ",
                "user_id": "2V8lslhb-OF9ayHNAwgwqg",
                "business_id": "UdC4xRKTFQPOhkc6vPVwvA",
                "stars": 4.0,
                "useful": 0,
                "funny": 0,
                "cool": 2,
                "text": "Cool place. Went on a Sunday night, so it was pretty slow! I like the atmosphere; a little dive-y, but still awesome. Drinks aren't watered down at all \u0026 the bartender's really chill too. He made it a point to call us by name \u0026 make good conversation. He even gave us 2 free drinks on a $22 tab. Really nice dude. Didn't try the food but saw others eating what seems to be decent bar grub. Definitely gonna come back!",
                "date": "2015-06-15 07:41:45"
            }, {
                "_id": {"$oid": "5d23c87916a84d360d660d94"},
                "review_id": "n6H8BN5NgipOPDZvjuI-eA",
                "user_id": "T1XUUXIEU5uj3NmdWAdIlA",
                "business_id": "UdC4xRKTFQPOhkc6vPVwvA",
                "stars": 4.0,
                "useful": 1,
                "funny": 0,
                "cool": 2,
                "text": "Stopped in for a quick bite to eat with a friend since I live close by. The bar had customers but the restaurant area did not.. We were the only two in the dining area lol\n\nThe woman server was nice and nobody else to serve so was always around. \n\nThey have a tv in the dining room area and we ordered some nachos and watched tv. The nachos were good. Lots of cheese, and toppings. \n\nI will return",
                "date": "2013-02-08 05:38:57"
            }, {
                "_id": {"$oid": "5d23c87d16a84d360d66e9dc"},
                "review_id": "VYIYjuDsTh4WmfvOmbTWNQ",
                "user_id": "eDdQbUwwkoE_TZeqQ_1NNA",
                "business_id": "UdC4xRKTFQPOhkc6vPVwvA",
                "stars": 3.0,
                "useful": 0,
                "funny": 1,
                "cool": 0,
                "text": "Great service during graveyard... Not so much during swing. Machines are pretty tight",
                "date": "2017-03-11 10:50:56"
            }, {
                "_id": {"$oid": "5d23c88516a84d360d68fffa"},
                "review_id": "cDtdXwst-61xvMJKn45hcQ",
                "user_id": "izDQpyMqkwHQSuwf2zCXAA",
                "business_id": "UdC4xRKTFQPOhkc6vPVwvA",
                "stars": 5.0,
                "useful": 0,
                "funny": 0,
                "cool": 0,
                "text": "This place is awesome! Nicest staff, cheap strong drinks, they will put anything on the TV for you, we came to watch sports, and had to come back the next morning for steak and eggs and they were incredible for only 10 bucks! I will come back here every time I'm in Vegas.",
                "date": "2018-05-06 17:40:39"
            }, {
                "_id": {"$oid": "5d23c88a16a84d360d6a4292"},
                "review_id": "JC2d0CF0gSWnANPiFcS-ug",
                "user_id": "cPp46ARZ2YBnIcqSk6X7tA",
                "business_id": "UdC4xRKTFQPOhkc6vPVwvA",
                "stars": 5.0,
                "useful": 0,
                "funny": 0,
                "cool": 1,
                "text": "Danny is the absolute best! Made my experience so fun! Great energy and such a positive person!",
                "date": "2016-08-23 12:07:26"
            }, {
                "_id": {"$oid": "5d23c88a16a84d360d6a4eab"},
                "review_id": "Zi_7hsZh2lRia-O5NCBKPg",
                "user_id": "fCExFIeu2BT35FSx2Yz2aA",
                "business_id": "UdC4xRKTFQPOhkc6vPVwvA",
                "stars": 3.0,
                "useful": 1,
                "funny": 1,
                "cool": 1,
                "text": "So they took down their Loose Caboose branding and put up a Magoos Bar \u0026 Grill sign the night i was there (same company).\n\nI've been here a few times lately and I can summarize my trips into one little ball of reading joy.\n\nATMOSPHERE: Dim lighted bar atmosphere, the folks that were in were obviously long time regulars (everyone knew each other) and the vibe was lively, your typical bar setting.\n\nFOOD: The menu has a lot of great selections at very reasonable prices. Most recently i ordered the big bubba burger and i can still say that the food has always come out hot fresh and satisfying. The female servers are always cordial, but there's this bald headed white guy who may be a cook who just always come off as this snarky pompous jerk.....\n\nBAR SERVICE: The bartender i've met each time ( I think his name is Mike) is very attentive, jovial and efficient. Theres a female bartender (brunette) that gives off the \"I hate my life\" vibe, but she had always been just leaving shortly after i came luckily.\n\nIts a cool inexpensive typical bar and it's perfect for your average Joe type people.",
                "date": "2018-07-04 20:56:09"
            }, {
                "_id": {"$oid": "5d23c88d16a84d360d6b2a94"},
                "review_id": "HTR8lY2gTdCzx7ahU_Zz9g",
                "user_id": "wAwlgeJpWY_-RUqHLGTx3w",
                "business_id": "UdC4xRKTFQPOhkc6vPVwvA",
                "stars": 5.0,
                "useful": 0,
                "funny": 0,
                "cool": 1,
                "text": "Ordered a breakfast to go and OMG was the french toast with apples was to die for...was very Impressed with how efficient they were with all the necessary eating utensils to make sure I was able to eat in stil while on the go...I will be back for more for sure!!!",
                "date": "2013-10-23 06:46:51"
            }]
        },
        {
            "_id": {"$oid": "5d15b8865eab926c7d99891b"},
            "business_id": "lqEbAO2I1q4ttg2LvMStqQ",
            "name": "Ruby Tuesday",
            "address": "1220 N Town Ctr Dr",
            "city": "Las Vegas",
            "state": "NV",
            "postal_code": "89144",
            "latitude": 36.183143,
            "longitude": -115.308819,
            "stars": 4.0,
            "review_count": 13,
            "is_open": 0,
            "attributes": {
                "BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': True, 'valet': False}",
                "GoodForKids": "True",
                "RestaurantsDelivery": "False",
                "RestaurantsPriceRange2": "2",
                "RestaurantsGoodForGroups": "True",
                "BusinessAcceptsCreditCards": "True",
                "RestaurantsTakeOut": "True",
                "RestaurantsReservations": "True",
                "OutdoorSeating": "False",
                "RestaurantsAttire": "u'casual'",
                "Alcohol": "u'full_bar'"
            },
            "categories": "Restaurants",
            "hours": null,
            "review": [{
                "_id": {"$oid": "5d23c86616a84d360d6174c1"},
                "review_id": "A9h6QMp7e-40c-_f1C15Dw",
                "user_id": "77lef7kKkoOVupY-7AmieQ",
                "business_id": "lqEbAO2I1q4ttg2LvMStqQ",
                "stars": 4.0,
                "useful": 2,
                "funny": 0,
                "cool": 1,
                "text": "Not one bad visit to this location and we've been coming here since we moved here, roughly 5 yrs. \n\nOn our most recent visit we ordered:\n$4.58- 2 Iced Teas \n$13.99- *Tuesday Special; Steak \u0026 Lobster with broccoli \u0026 baked potato\n$17.99-*Tuesday Special; Steak \u0026 Lobster Mac 'n' Cheese with broccoli \u0026 mashed potato\n$5.98-*Price is add-on to meal, 2 Salad Bar Buffet\n\nWe were seated and greeted right away. Our server took our order and checked on us, often. Service was good, nothing spectacular.\n\nWe then headed over to the Salad Bar. Very clean! We just recently went some where and I had major complaints about their salsa bar which was 'EW!' so it was quite refreshing to visit a place that kept up with their serve yourself thingie majig! I liked their selection of greens, iceberg, romaine, spinach and mixed greens. Dressings were OK, nothing I haven't tried before.\n\nMy steak was med-rare, hubster's was rare. It was seasoned well but one tid bit, it's a cheap cut so it tastes better cooked rare. Although my steak was still a little pink, it was really chewy, not fun for my jaw. Hubs enjoyed lobster, although a little over cooked it was still a deal! My Lobster Mac 'n' Cheese had flavor but I guess they stick the MnC under the salamander bc the lobster that was exposed was dry and chewy but the lobster within the MnC was still moist. Only thing I was disappointed in was their broccoli, it's probably the simplest item in this meal and it was way over cooked, borderline mushy.\n\nThe usual good experience, it'd been awhile since we'd been here but nothing has changed, still the same ole good experience :)",
                "date": "2010-05-14 15:04:22"
            }, {
                "_id": {"$oid": "5d23c86716a84d360d61d74f"},
                "review_id": "bNwLiAJ4aPLaSX1Gc0usFg",
                "user_id": "xb21ZDIWOck1nvf3Ua5Hyw",
                "business_id": "lqEbAO2I1q4ttg2LvMStqQ",
                "stars": 2.0,
                "useful": 0,
                "funny": 0,
                "cool": 0,
                "text": "While John's (our server) performance was impeccable, I doubt we'll be returning any time soon. My crab cake was VERY fishy tasting and Tuesday's only offered a very blah cocktail sauce - no teriyaki, soy or other flavor masker. My bride's chicken fresco was noticeably dry and her favorite vegetable, steamed broccoli, was not warm enough to melt the \"butter\" that John served after being asked for it. Her mashed cauliflower (which she couldn't bring herself to insist I try) was \"not quite what I remember\".\n\nWe didn't partake of the salad bar ... it was nicely presented but compared to Dessey's or a Sizzler it was seriously lacking.\n\nBottom line, if we get another ($10 max) 2 for 1 coupon we might return for a (see previous ratings) highly rated turkey burger. On the other hand, In-N-Out  is hard to resist when it come to burgers.\n\nBTW, I'm glad we didn't take the (5 \u0026 13) kids with us. There was nothing that would have appealed to them on the menu and we'd have had to stop at McDonald's to feed them later.",
                "date": "2010-11-27 06:47:06"
            }, {
                "_id": {"$oid": "5d23c86f16a84d360d63b8ce"},
                "review_id": "Hv2MIokgTSUL5XxE3wItAw",
                "user_id": "1bKViE447MdvO_r0AiDEJQ",
                "business_id": "lqEbAO2I1q4ttg2LvMStqQ",
                "stars": 1.0,
                "useful": 0,
                "funny": 0,
                "cool": 0,
                "text": "I don't know what is up with this Ruby's. I have had very good experiences at other locations but from now on I avoid this one. \n\nThe server never came back to check on us, I asked for my burger medium rare and it was well done, and the waiter kept making weird comments to people at our table. For the price of the meal I would have been better off staying home and wouldn't have had to put up with such awful service.",
                "date": "2010-01-21 22:28:21"
            }, {
                "_id": {"$oid": "5d23c87516a84d360d652400"},
                "review_id": "_5UyX9M6JrJvwzigFZUM-w",
                "user_id": "QVQuFXcIrCXR39GF9OjbOQ",
                "business_id": "lqEbAO2I1q4ttg2LvMStqQ",
                "stars": 4.0,
                "useful": 1,
                "funny": 1,
                "cool": 1,
                "text": "It is kinda crappy that I live in SoCal and see their juicy commercials, but know that the closest one to me is in LAS VEGAS!!!! My grandparents live a couple miles away from this location, and It is a must visit if your in Vegas. If it is your last day in Vegas, take a last small side trip to Ruby Tuesday and go home satisfied. \n\nThe homies and I always mob this place before we leave Vegas. They have a full bar if you want to get tipsy before you leave Vegas (as a passenger!)\n\nThere burgers are pretty worth the trip (especially buffalo burgers) and their food and service is great as well.\n\nI really like this place, its so GOOD!",
                "date": "2009-03-25 05:20:24"
            }, {
                "_id": {"$oid": "5d23c87616a84d360d65812e"},
                "review_id": "HUaU0Y7SZAU5umHHbeLAog",
                "user_id": "ru-XgFVN-RTChWjl_nDwKw",
                "business_id": "lqEbAO2I1q4ttg2LvMStqQ",
                "stars": 5.0,
                "useful": 1,
                "funny": 1,
                "cool": 1,
                "text": "I love this place. I was so glad to find one in West Covina not exactly close, but a lot closer then VEgas. The burgers are always fresh, hot, and juicy. They have the best turkey burger i've ever had. Turkey can get so dry. The hot wings are better then good. The salad bar is fresh with a wide selection of salad selections. Its very reasonably priced. JOe always gets the steak which is actually pretty good. But remember its a hamburger restaurant",
                "date": "2009-11-20 05:29:53"
            }, {
                "_id": {"$oid": "5d23c87916a84d360d662401"},
                "review_id": "7feHwZljoqOZ7JgQ--pynA",
                "user_id": "QVQuFXcIrCXR39GF9OjbOQ",
                "business_id": "lqEbAO2I1q4ttg2LvMStqQ",
                "stars": 4.0,
                "useful": 0,
                "funny": 0,
                "cool": 0,
                "text": "My esteemed colleague on Facebook just mentioned that one is now open in WEST COVINA! Yes, still far, but way closer than Vegas! AWESOME!\n\nWest Covina\n2200 South Azusa Avenue\nWest Covina, CA 91792\nUS\nPhone: 626-839-4222\nFax: 626-839-5956",
                "date": "2009-03-26 07:00:23"
            }, {
                "_id": {"$oid": "5d23c87a16a84d360d663749"},
                "review_id": "Y60FXpH4ZzB0C3Nu6btTmA",
                "user_id": "31QazLmtanAzUdqKnPJYXA",
                "business_id": "lqEbAO2I1q4ttg2LvMStqQ",
                "stars": 2.0,
                "useful": 0,
                "funny": 0,
                "cool": 0,
                "text": "My girlfriend wanted to eat here since we've seen the commercials down in So Cal. Now I have eaten at a Ruby Tuesday before in Cleveland, OH, and I thought this one would be the same as its midwestern counterpart. Wow, this Ruby Tuesday was completely different. From the outside it looked like a Cocos or Sizzler. The Ruby Tuesday in Cleveland looked and felt like an upscale Chilis but with a better menu. They even had Stella Artois (my favorite beer) on tap!\n\nThe service here was okay at best, but the food was disappointing, especially after having an amazing experience at another RT. If you want to eat at a Ruby Tuesday, you might as well go to one in the midwest. Stay away from this one.",
                "date": "2009-01-19 19:13:16"
            }, {
                "_id": {"$oid": "5d23c87c16a84d360d66afd0"},
                "review_id": "PyRrFvW9Lka0O5hOHG9Mjw",
                "user_id": "xjFEs9ljc3lHP5Vw7OGdoA",
                "business_id": "lqEbAO2I1q4ttg2LvMStqQ",
                "stars": 5.0,
                "useful": 1,
                "funny": 0,
                "cool": 0,
                "text": "We went by there tonight, and it was CLOSED!, so sad after 10 years in Summerlin, they are gone.",
                "date": "2011-01-31 05:50:57"
            }, {
                "_id": {"$oid": "5d23c88016a84d360d67bf3c"},
                "review_id": "4OncLkgdaZZBPja4bkU2rg",
                "user_id": "m-BZLIIh5PCAKnzH0qj_0Q",
                "business_id": "lqEbAO2I1q4ttg2LvMStqQ",
                "stars": 4.0,
                "useful": 3,
                "funny": 2,
                "cool": 1,
                "text": "Ruby's is really close by, so we come here fairly often. Especially when there are coupons floating around, which there usually are. We generally like having dinner here, and tonight was especially good. \n\nI ordered my usual glass of wine and my favorite RT dinner - the crabcake.  I order broccoli and mashed as my two sides.  I like that the broccoli doesn't have anything added, and isn't too raw or too well done:  as Baby Bear says, it's just right.  That helps atone for the crabcake, which is probably drenched in butter.  It's really good.\n\nMy husband had the sliders and salad bar.  It's on the lunch menu, but is available at dinner, too, for a few bucks more.  Two beef sliders (with fries or any side of your choice) and all-you-can-eat salad bar for, I think 9.99.  \n\nI like Ruby Tuesday's burgers, too, but their most recent menu incarnation now has two different qualities of meat available.  In the very old days, Ruby's burgers were awful.  I used to order them sometimes because I knew I'd never have to pay for the meal, since I'd invariably send them back and complain.  Then, a few years ago, they went more upscale and the burgers were top shelf and fabulous.  I don't think I've had a burger at Ruby's since they switched to the A and B burgers, just sliders, but since I discovered their crab cake, that's what I usually order.\n\nI love the fact that their drinks are reasonably priced - $5 for cocktails with their house brand liquors, which are decent quality.  The drink, though, depends on which bartender at which RT happens to be mixing that night.  I've been at Ruby Tuesdays all across the country, and it sure can vary.\n\nOur server, Raymie, was very friendly and efficient, though I was surprised she never heard of Yelp! \n\nBut the best part of our dinner was that -  ta-dah - none of the servers were running the infernal carpet sweepers back and forth!  This process was going on at every single Ruby Tuesday's I've ever been in, be it Las Vegas, New Jersey, Indiana, Tennessee, everywhere. And it didn't matter if it was 7 pm or near closing.  It was so annoying and pervasive that I emailed corporate (with no response), and then called.  Their curt answer:  \"That's the way they do things.\"  Maybe others have finally complained, or maybe the rain made all the servers sluggish and lazy tonight, but finally we had a meal without that damned \"Whirrrrrrr.\" \n\nMay it continue in 2011.",
                "date": "2010-12-22 08:34:56"
            }, {
                "_id": {"$oid": "5d23c88616a84d360d6954f5"},
                "review_id": "KMwhnsvMuxxiZOl2Ghf9tQ",
                "user_id": "3Vd_ATdvvuVVgn_YCpz8fw",
                "business_id": "lqEbAO2I1q4ttg2LvMStqQ",
                "stars": 5.0,
                "useful": 9,
                "funny": 3,
                "cool": 7,
                "text": "F\u0026#%$* FANTASTIC!!\n\nAnother FREEBIE for joining the E-Club. FREE Handcrafted Gourmet Burger!!\n\nI decided to try the Boston Bleu-Burger cooked medium with bleu cheese \u0026 steak sauce made with Sam Sdams Boston Lager!!\n\nyeah...sounds good don't it!!\n\nBEST damn burger I've ever had!!! I almost lost a finger!!\n\nPrices are reasonable $8.99 burger, looks like a real cool place to eat and a small bar too. Only thing is just 2 locations both in NE/NW Las Vegas.\n\nIf you haven't checked this place out DON'T WAIT!!",
                "date": "2009-09-17 02:59:24"
            }, {
                "_id": {"$oid": "5d23c88716a84d360d6964a1"},
                "review_id": "xiMM1W21iRsjg9rWuVj6ew",
                "user_id": "9ZoC0ctGe7UuF6DtPM7DBA",
                "business_id": "lqEbAO2I1q4ttg2LvMStqQ",
                "stars": 4.0,
                "useful": 0,
                "funny": 0,
                "cool": 0,
                "text": "it's your typical, TGIF, Chili's...etc kinda eatery ... but if you've seen their commercials you'll know why we were determined to find one when we were in Vegas... (the closest one to LA is like in Fresno).  \n\nwe went for lunch and my bf ordered the Triple Prime Burger 100% USDA Prime beef with prime tenderloin, prime rib eye and prime sirloin fresh ground, blended and grilled while I ordered the Bella Turkey Burger with Swiss and Baby Portabella Mushroom.  His burger was really good.... but my turkey burger was out of this world...  my mouth salivates as i'm thinking about it.  \n\nprice-wise it was the standard tgif, chili price, portions are fairly large.  service was good and the restaurant was clean...  next time we're in Vegas we're definitely stopping by again.  i'm only giving it 1 star less because there isn't one near me!!  =(",
                "date": "2007-09-10 19:23:11"
            }, {
                "_id": {"$oid": "5d23c88816a84d360d69b89d"},
                "review_id": "AM45AK6akM8kkzsfp34EuQ",
                "user_id": "ScAkGG5VXHNpnMYsGtaadg",
                "business_id": "lqEbAO2I1q4ttg2LvMStqQ",
                "stars": 4.0,
                "useful": 1,
                "funny": 0,
                "cool": 1,
                "text": "All I can say is, wow...Ruby Tuesday has really reinvented itself since I last went to one a year or so ago.  Their menu has completely changed from all burgers, steaks, and deep fried appetizers to something a little lighter, a litter fresher, and a little more up my ally.  \n\nNow, I'm not one for franchised family restaurants where screaming children and horribad decor can be found around any corner, but the guy wanted to show me his new office in Summerlin, it was late, and it was open.\n\nI sat down very discouraged...what would I eat?  And then I spotted their Fresh Combinations section.  Quiche?  Mozzarella and tomato salad?  What?  I ended up getting the mini turkey burgers, subbing the fries for the mozzerella and tomato salad I spotted with the quiche, and the garden bar instead of the caesar salad.  \n\nEven their salad bar seems to have really improved.  Edamame and a myriad of other whole beans, many fresh lettuces, many neat salads (the green bean and red pepper salad, very refreshing!)  Of course all the standard salad bar fare is there too...don't worry!  And they had avocado ranch...it was green and lumpy and I could TASTE the avocado in it.\n\nWe also ordered the spinach artichoke dip as an appetizer, subbing celery sticks in for tortilla chips.  It was totally delicious and a great compliment with the fresh, crisp, baby celery hearts they gave us.\n\nI was shocked, pleased, and very satisfied by the time we left.  Hopefully we'll stop by again for lunch if I'm ever in Summerlin to see guy during work.",
                "date": "2008-03-19 16:09:08"
            }, {
                "_id": {"$oid": "5d23c88916a84d360d69ecfb"},
                "review_id": "iFm9k4eGKxgqvT2avvnukg",
                "user_id": "yi5Huqotb8u52Y0OAU2WJQ",
                "business_id": "lqEbAO2I1q4ttg2LvMStqQ",
                "stars": 5.0,
                "useful": 0,
                "funny": 0,
                "cool": 0,
                "text": "Great service. Excellent prices with unbelievable portion sizes. The salad bar is fantastic.",
                "date": "2011-04-04 00:18:39"
            }, {
                "_id": {"$oid": "5d23c88c16a84d360d6aca48"},
                "review_id": "BE5ajUeRSuc8NCvvZOrWmg",
                "user_id": "LlwPg64wneb3XC1cgUlJqw",
                "business_id": "lqEbAO2I1q4ttg2LvMStqQ",
                "stars": 4.0,
                "useful": 0,
                "funny": 0,
                "cool": 0,
                "text": "Their bison burger LITERALLY took my breath away.. I seriously had respiratory problems after one bite, it was so weird. And I didn't mention it to anyone else at my table until I saw that they were grimacing uncomfortably, then I asked \"am I the only one having a hard time breathing?\" They all said they were having the same problem! Weird! I wonder if it is a common thing when you eat bison?\n\nAnyways.. nice restaurant in the outskirts of Vegas. Had to try it while I was there because there are none in the Bay Area (only in the greater Northern CA area.. boo). Ordered several appetizers, burgers and drinks.\n\n-spinach artichoke dip: I like BJ's better\n- mozarella and tomato salad: can't really mess that up\n- bison burger: a nice lean meat sandwiched between thick buttered bread and accompanied by fresh veggies. a must try\n- white cheddar mashed potatoes: i LOVE white cheddar so this was a nice surprise\n- bacon \u0026 cheese fries: the star of the show! loved it\n- zero proof strawberry lemonade: carbonated but good. could have done without the carbonation\n\nThe other nearest location to me is Folsom, CA. Luckily I have family there so I can make it another excuse to visit them and eat :)",
                "date": "2010-04-29 20:47:33"
            }]
        },
        {
            "_id": {"$oid": "5d15b8885eab926c7d99d3f3"},
            "business_id": "qCZrKe8igS10txtGW3ZV1Q",
            "name": "Atlanta Bread Company",
            "address": "9785 W Charleston Blvd",
            "city": "Las Vegas",
            "state": "NV",
            "postal_code": "89117",
            "latitude": 36.1577188,
            "longitude": -115.3111025,
            "stars": 3.0,
            "review_count": 5,
            "is_open": 0,
            "attributes": {
                "GoodForKids": "False",
                "OutdoorSeating": "True",
                "RestaurantsDelivery": "False",
                "RestaurantsPriceRange2": "1",
                "BusinessAcceptsCreditCards": "True",
                "BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': False, 'valet': False}",
                "RestaurantsAttire": "u'casual'"
            },
            "categories": "Restaurants",
            "hours": null,
            "review": [{
                "_id": {"$oid": "5d23c89916a84d360d6e3cb6"},
                "review_id": "re8bj3h1ZZImyap8Hw9rgw",
                "user_id": "fwk8sj8J9NlOr-zf_xCyOw",
                "business_id": "qCZrKe8igS10txtGW3ZV1Q",
                "stars": 3.0,
                "useful": 0,
                "funny": 0,
                "cool": 0,
                "text": "Poopski potato. Best chicken I've ever had in the north. Props Taco Bell. It says my message is too short so now I'm just wasting space. Check out my blog at michellepoopski.blog.com and let me know what you think!",
                "date": "2015-05-31 07:01:28"
            }, {
                "_id": {"$oid": "5d23c89c16a84d360d6f3ee1"},
                "review_id": "pwh3O9g524fxsi9tfg9Hrg",
                "user_id": "PYnnzS_3-0oDAT3cmcfs9Q",
                "business_id": "qCZrKe8igS10txtGW3ZV1Q",
                "stars": 1.0,
                "useful": 0,
                "funny": 2,
                "cool": 0,
                "text": "It's amazing how things can go so wrong.\n\nOn a 9 a.m. visit, the first thing I noticed was that this shop offers soups, sandwiches, and salads.  I wasn't in the mood for typical breakfast items. I asked the attendant whether they were serving sandwiches.  I even pointed to sandwiches on the menu.  No, he replied, only breakfast items (bacon, sausage, or ham and egg croissants or bagels).\n\nYou can't nuke a croissant.  My $4 croissant was no better than a cheap Jimmy Dean frozen sausage croissant from the grocery store. It came with coffee that was nothing special. I pumped the coffee from dispensers that ran dry.  You get better coffee from 7-Eleven.\n\nI noticed servers standing around the soup and salad area.  Out of curiosity, I asked if they were serving soup and sandwiches.  Yes, they serve soup, salad, and sandwiches all day.\n\nI asked the attendant who helped me at first.  \"I thought you said you weren't serving sandwiches.\"\n   \"Oh no.  We serve them all day!\"\n\nWhat can you do?  I spoke English and apparently he understood it.  What went wrong is anyone's guess.  My first experience here was highly negative.  It's a nice shop, however.  The attendant was friendly and pleasant. Maybe the misunderstanding was somehow all my fault.\n\nRather than buy anything here, pick up a cheap breakfast sandwich at the nearby Terrible's convenience store. \n\nOr, take your chances on their soups, sandwiches, and salads. There are pretty pictures all around the shop that make the offerings look tasty.",
                "date": "2008-09-20 02:05:35"
            }, {
                "_id": {"$oid": "5d23c89f16a84d360d7065a8"},
                "review_id": "s5WnTWMquVBXfzpTiYr9lg",
                "user_id": "7xL92njxQtQTchzRw5m5Xg",
                "business_id": "qCZrKe8igS10txtGW3ZV1Q",
                "stars": 3.0,
                "useful": 1,
                "funny": 0,
                "cool": 1,
                "text": "the boss went out with me today for a ride along to check up on my awesome sales skills. in the path of a super busy day we needed to eat and i spied this place in the parking lot so we pulled in. this is a clean little place with plenty of seating and a very clean look. you walk up and order, pay,and then pick up at the counter. they have all kinds of sandwiches, soups, and salads + a case of baked goods and sweets. i had the balsamic blue cheese salad with chicken added. the salad had apple slices, tomatoes, walnuts, cranberry's, and mixed greens. they served the dressing on the side, it was a balsamic with raspberry, they give you two little sealed containers which is more than enough (i only used one,so if you like a lot there is plenty) they also give you a piece of fresh french bread that was also tasty. i enjoyed the salad it tasted very fresh. my boss had a classic Caesar salad with chicken and also enjoyed it (kind of hard to mess that up) all in all this is a good place to grab a quick bite. i will go back if in the neighborhood and hungry.",
                "date": "2011-01-27 05:28:22"
            }, {
                "_id": {"$oid": "5d23c8a116a84d360d70e372"},
                "review_id": "7L0Ekv0YtU1kSLl3ahTWPg",
                "user_id": "p-xQUBvVKIssxJgkZeBX_Q",
                "business_id": "qCZrKe8igS10txtGW3ZV1Q",
                "stars": 3.0,
                "useful": 0,
                "funny": 0,
                "cool": 0,
                "text": "Always has a solid, fresh menu. Go with the California avocado sandwich.",
                "date": "2011-03-03 07:19:28"
            }, {
                "_id": {"$oid": "5d23c8a516a84d360d71db01"},
                "review_id": "9xEN7HSBEJIYsdm0oUOAow",
                "user_id": "Er3jnCCzX-3UvbuMINHCKw",
                "business_id": "qCZrKe8igS10txtGW3ZV1Q",
                "stars": 5.0,
                "useful": 0,
                "funny": 0,
                "cool": 0,
                "text": "Food is great! Fresh, Hot, and Yumm! Wish I had one near me!",
                "date": "2010-12-22 19:47:17"
            }]
        },
        {
            "_id": {"$oid": "5d15b8895eab926c7d9a1846"},
            "business_id": "fKAYcxoqblhyUIm7GTQMCA",
            "name": "Original Pancake House",
            "address": "8620 W Cheyenne Ave",
            "city": "Las Vegas",
            "state": "NV",
            "postal_code": "89129",
            "latitude": 36.219152,
            "longitude": -115.281428,
            "stars": 4.0,
            "review_count": 9,
            "is_open": 0,
            "attributes": {
                "Alcohol": "u'none'",
                "RestaurantsReservations": "True",
                "BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': True, 'valet': False}",
                "RestaurantsTakeOut": "False",
                "RestaurantsPriceRange2": "2",
                "BusinessAcceptsCreditCards": "True",
                "GoodForKids": "True",
                "RestaurantsGoodForGroups": "True",
                "RestaurantsAttire": "'casual'",
                "OutdoorSeating": "False",
                "RestaurantsDelivery": "False"
            },
            "categories": "Restaurants",
            "hours": null,
            "review": [{
                "_id": {"$oid": "5d23c8ba16a84d360d770fc6"},
                "review_id": "V1p_IqVsO9MX2qOLKJTDSA",
                "user_id": "BMEmpeosi4LfwRlAMgtjbg",
                "business_id": "fKAYcxoqblhyUIm7GTQMCA",
                "stars": 5.0,
                "useful": 0,
                "funny": 0,
                "cool": 0,
                "text": "I absolutely almost died here choking on french toast, but the french toast is amazing, so I still come here. Their french toast is also special -- they use sourdough bread, light egg covering, and sprinkle powdered sugar on it. This is what french toast should actually be. Well it is what it should be in the Southwest United States according to wikipedia, but that's where I am from so take it! \n\nThey also have fresh orange juice, great prices, and very friendly service. Be careful to go on Sundays around 9-10 because there's a church up the street where nearly everyone attends Original after.",
                "date": "2008-12-22 18:52:39"
            }, {
                "_id": {"$oid": "5d23c8c916a84d360d7ae537"},
                "review_id": "SbUsDBO4Yh9Yjb1Poa0YlQ",
                "user_id": "xRh1hiVs92563tupN662zg",
                "business_id": "fKAYcxoqblhyUIm7GTQMCA",
                "stars": 2.0,
                "useful": 2,
                "funny": 2,
                "cool": 2,
                "text": "Breakfast!!\n\nNothing to WOW about.\nAlthough their Specialty Pancakes look impressive as hell.\nThere is a Notice that these meals (even omelettes) may require an 18min cooking time over your basic bacon and eggs. Just an fyi.\n\nParty of one. No counter to kick back at. Bummer.\nGreat service though. They are all over you, and very nice. Monica was a sweetheart.\nEspecially with what the servers are contending with......and you too if you come here.\n\nTuesday morning 10:00am. Waited only 5mins for my table.\nOnce seated I'm surrounded by a couple screaming kids, several folks (who remember phonebooths)  chatting away about taking their garbage cans out, or having been to Phoenix already, etc., LOUDLY.\nAll the while ingnoring those right in front of them? I'm finding it sad that older people have discovered public use of a cell phone too. They make loud speaking people louder.\n\nFood is certainly worthy here. Except maybe the $3 small orange juice. Maybe even the $15 total which includes a $2 tip. And can most certainly get higher. I had a simple breakfast.\n\nWill I come again? Probably not as a party of one. With my folks, or a \"morning after\" episode of a fine romance? Majority rules will have to win that one.\n\nGive me the Mom \u0026 Pop breakfast joint any ol' time versus a place like this or similar.\n\nBut, your mileage may vary. I don't even want to think about a Sunday!",
                "date": "2008-06-24 18:56:53"
            }, {
                "_id": {"$oid": "5d23c8ca16a84d360d7b3d69"},
                "review_id": "P8lD6Ew45h2dxQlY0tVGhg",
                "user_id": "lOMM7HTHhabi1qofd-w7zw",
                "business_id": "fKAYcxoqblhyUIm7GTQMCA",
                "stars": 5.0,
                "useful": 4,
                "funny": 4,
                "cool": 4,
                "text": "I ask you what would you do when you go and pick your red Ferrari up? What is the first thing you do in that car? Put the top down, turn the bass up, light your cigarrette, and what? Go to the Original Pancake House (OPH as me and my Vegas crew call it). That's what I do. And I'm not playing. \n\nI'm driving on the freeway with one thing in mind. My challah french toast. I want my front parking spot, why I don't know because none of the spots there are in the shade at all, and want my breakfast. Thick slices of beautiful challah, dipped and cooked up all perfect with some strawberries. Oh, my strawberries, yes please. Extra please. Throw down some coffee with that, a little O.J. ya'll and watch your fingers. If you get too close to my toast you're gonna lose a hand. I'll even take an extra order to go knowing that they don't do takeout orders. That way I know I'll be totally taken care of in three hours, when my sugar high has crashed and I know I want more. I've even had my french toast with a glass of Chateau D'Yquem. That's sick. And it was delicious.\n\nThe service is fast, they have conveniently located restaurants. They close early, I think about 2:30 pm, so get your hungover asses outta bed and get some breakfast. It's a whole hell of a lot better than that IHOP shit they're always trying to feed us. I know it's not Waffle House guys, but that's a whole different story.",
                "date": "2008-10-12 07:33:30"
            }, {
                "_id": {"$oid": "5d23c8ca16a84d360d7b5923"},
                "review_id": "g8Hzovi3-ewWZGNDvnupTQ",
                "user_id": "XrlYaTPoZTpi-iluryFNcg",
                "business_id": "fKAYcxoqblhyUIm7GTQMCA",
                "stars": 4.0,
                "useful": 1,
                "funny": 1,
                "cool": 1,
                "text": "Yum. We love this place. It's exactly like the one in Royal Oak MI... I guess I never knew it was a chain! The omelets are awesome!! They are absolutely huge, you could probably split it with someone if you wanted. It nice and fluffy (I think because they bake it?) I recommend the veggie one, very good !\n\nThe bulgar wheat pancakes rock! I know what your thinking.....but I swear they kick ass and they are good for you (kind of ;)) This place totally owns IHOP! You have to check it out!\n\nCan't wait to try the french toast you are all raving about. I love the omelets so much I have a hard time trying anything else!",
                "date": "2009-01-15 05:05:59"
            }, {
                "_id": {"$oid": "5d23c8cb16a84d360d7b89be"},
                "review_id": "rDV0v2ws9mOokc3Ibt5muw",
                "user_id": "tcUYEM_AwVaMyZvX5z3UmA",
                "business_id": "fKAYcxoqblhyUIm7GTQMCA",
                "stars": 5.0,
                "useful": 0,
                "funny": 0,
                "cool": 0,
                "text": "I love coming to this place on the weekends besides the fact that it is jam packed with people so on the weekend get up at about 7 am to get a decent spot. The FRENCH TOAST is sprinkled with sugar and cinnamon.YUM!",
                "date": "2008-07-21 21:24:47"
            }, {
                "_id": {"$oid": "5d23c8cc16a84d360d7c263f"},
                "review_id": "T_hHcEAuRJE_LNRfzEVWpQ",
                "user_id": "ASvjSBCYRd4GhOtSIn8Gyw",
                "business_id": "fKAYcxoqblhyUIm7GTQMCA",
                "stars": 4.0,
                "useful": 0,
                "funny": 0,
                "cool": 0,
                "text": "Awesome!  I love potato pancakes.  They are excellent here.  When we visited here, among other things, we got the Bacon Lover's Special.  We must have gotten half a pound of bacon!  We ended up sharing with the \"older\" couple next to us, who commented on how much bacon came to the table.  \n\nMostly locals at this joint, since it's way off the strip.\n\nMy 'original' favorite was the OPH at Green Valley Ranch in Henderson  (see: http://www.yelp.com/biz/p7RWwyP49cDwgvoK1Um8Mg?hrid=JAjv8kjm89V08MGTqmb97Q ) but the lines are insane there and it' doesn't make much sense to drive all the way out there when my family is near Summerlin.  Thank goodness theres an excellent OPH in this part of town.",
                "date": "2007-01-24 06:14:47"
            }, {
                "_id": {"$oid": "5d23c8d116a84d360d7d319b"},
                "review_id": "APFT3RRavgIxTFfoNG4RYg",
                "user_id": "Fw4UjJ6yBeyPB27Y4wwEUQ",
                "business_id": "fKAYcxoqblhyUIm7GTQMCA",
                "stars": 3.0,
                "useful": 0,
                "funny": 0,
                "cool": 1,
                "text": "Was going to attempt to go this weekend but found out yesterday from the one on Fort Apache that this one is CLOSED.",
                "date": "2009-09-26 11:42:19"
            }, {
                "_id": {"$oid": "5d23c8d916a84d360d7f2195"},
                "review_id": "0FfcwkDHmYWNxg4cT-l0dQ",
                "user_id": "HQtXIf4bJ7nhYyM0utZUuA",
                "business_id": "fKAYcxoqblhyUIm7GTQMCA",
                "stars": 5.0,
                "useful": 0,
                "funny": 0,
                "cool": 0,
                "text": "I always go at least twice when I visit my folks in LV.  I stick to the pancakes (duh), but the omlettes aren't too bad either.  The dutch baby (which my mom always orders) does take 20 minutes, so if someone else orders it, you might be in for a bit of a wait.",
                "date": "2008-03-28 02:07:33"
            }, {
                "_id": {"$oid": "5d23c8dc16a84d360d7ff0c8"},
                "review_id": "9O7di6B4aRgE1AjcnNwHdw",
                "user_id": "g5JvNSSkz6q04uvDcqSU_g",
                "business_id": "fKAYcxoqblhyUIm7GTQMCA",
                "stars": 5.0,
                "useful": 1,
                "funny": 1,
                "cool": 0,
                "text": "To me breakfast is my most important meal of the day and this place does breakfast to its best!! living in Vegas at the time  while attending school for  Interior design, I decided to check this place out after hearing so many great things about it , not only in LV but in California .Wow Everything from there chocolate chip pancakes to there omelets are Amazing!! There omelets are fluffy and the size of my head,hard to finish, but just absolutely delisious.And there pancakes OMG!!Incredable I have since then tried choclate chip panckes one or two other place s and they just dont compare.It has been a while since i have been there but look forward to visiting once a gain",
                "date": "2009-05-14 14:59:51"
            }]
        },
        {
            "_id": {"$oid": "5d15b88a5eab926c7d9a89e8"},
            "business_id": "lYlVsbhDrglWDdhh7OTM2w",
            "name": "Rendezvous Cafe",
            "address": "2341 N Rainbow Blvd",
            "city": "Las Vegas",
            "state": "NV",
            "postal_code": "89108",
            "latitude": 36.2029728,
            "longitude": -115.2424433,
            "stars": 4.5,
            "review_count": 7,
            "is_open": 0,
            "attributes": {
                "RestaurantsGoodForGroups": "True",
                "RestaurantsAttire": "u'casual'",
                "RestaurantsDelivery": "True",
                "RestaurantsTakeOut": "True",
                "BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': False, 'valet': False}",
                "Ambience": "{'romantic': False, 'intimate': False, 'touristy': False, 'hipster': False, 'divey': False, 'classy': False, 'trendy': False, 'upscale': False, 'casual': False}",
                "HasTV": "False",
                "RestaurantsPriceRange2": "1",
                "GoodForKids": "True",
                "BusinessAcceptsCreditCards": "True",
                "Caters": "True",
                "OutdoorSeating": "True",
                "NoiseLevel": "u'quiet'"
            },
            "categories": "Restaurants",
            "hours": null,
            "review": [{
                "_id": {"$oid": "5d23c91316a84d360d8de992"},
                "review_id": "6OOtOpiLURbirakhvi6-YA",
                "user_id": "LQUmIsui7U_iq5p4D1czFg",
                "business_id": "lYlVsbhDrglWDdhh7OTM2w",
                "stars": 5.0,
                "useful": 0,
                "funny": 0,
                "cool": 0,
                "text": "Stopped in for lunch, and ordered the Gyro with a (beautiful) side of fruit. The service was nice, and the food delicious and well-portioned for the price. Will definitely be back.",
                "date": "2013-07-02 22:33:13"
            }, {
                "_id": {"$oid": "5d23c92116a84d360d90e3aa"},
                "review_id": "2DjB0AoZTh-6mxDFqyiIYw",
                "user_id": "lF2WBONSgakWHeAxYKP0bw",
                "business_id": "lYlVsbhDrglWDdhh7OTM2w",
                "stars": 5.0,
                "useful": 1,
                "funny": 0,
                "cool": 0,
                "text": "Went for take-out last Sunday, only two other parties there. Appears to be family run and just getting started - hope they make it because everything was delicious.  Not instantaneous food, but worth the wait for the made-to-order, home-cooked taste.  Everything was very good, generously portioned and reasonably priced. Best oatmeal we have ever had.",
                "date": "2013-09-30 03:42:53"
            }, {
                "_id": {"$oid": "5d23c92216a84d360d914d0e"},
                "review_id": "CYgFEsoezIZUqxB3p3VSKw",
                "user_id": "iCZFcVMCICuT7ZtcKYeL2Q",
                "business_id": "lYlVsbhDrglWDdhh7OTM2w",
                "stars": 4.0,
                "useful": 3,
                "funny": 0,
                "cool": 1,
                "text": "Went for the first time today, being a newer restaurant, we were the only customers.  I drink my coffee and black and theirs was not bitter at all and it was hot and freshly brewed.  \n We both had the choose 4 for $7 breakfast, I chose 2 eggs poached, home fries, french toast and Rye toast and my partner did 4 eggs over medium, home fries and pancakes .  My eggs were poached perfectly with no runny whites but with runny yolks and the over medium eggs were also cooked perfect and NOT soaked in oil (which is rare). The home fries were good, crispy but soft inside and nicely seasoned. The french toast could have used a little cinnamon but over all were good and not soggy. The pancakes were soft and fluffy and tasted great but were not as warm as he'd would have liked.\n Over all it was a nice breakfast for under $20 for two large breakfast, coffee and a orange juice. living pretty close to Rendezvous I feel this could become a regular breakfast stop for us. \n serving full menu 7 AM-3 PM daily",
                "date": "2013-06-23 17:44:35"
            }, {
                "_id": {"$oid": "5d23c92516a84d360d92088f"},
                "review_id": "TJFazCuA-3rdU866MmE0FA",
                "user_id": "9ZWl2vsSw4IAo0bhjfcHiQ",
                "business_id": "lYlVsbhDrglWDdhh7OTM2w",
                "stars": 5.0,
                "useful": 0,
                "funny": 0,
                "cool": 0,
                "text": "Yummy food, huge portions, beyond reasonably priced, and family owned and operated. What more can you ask for??  Have the waffles with the apple butter... So good!!\nEdited to add: Totally forgot to mention how awesome the service was! We will be back for sure and are thinking of asking them to cater for us.",
                "date": "2013-11-30 01:38:44"
            }, {
                "_id": {"$oid": "5d23c92c16a84d360d93cd90"},
                "review_id": "aYtoGDce7HpJGAssQCwVrA",
                "user_id": "1OrTk41FsYJkFYD8zdxsFQ",
                "business_id": "lYlVsbhDrglWDdhh7OTM2w",
                "stars": 3.0,
                "useful": 0,
                "funny": 1,
                "cool": 0,
                "text": "The food was a 3.5, the ambiance a 2. When we walked in the employees seemed surprised that we were there to eat.  The only menus that they have are paper to go menus which feel a little weird when you are eating in. They don't have any music or TV in the background which made us feel like we were intruding on their work. As they say, 'the silence was deafening.' The booth where we were seated had a large outdoor sign tucked behind it which awkwardly stuck out during our meal. The seating layout is also very strange. The good news is that the food was really good and they deliver. I think I may order delivery from them, but wouldn't dine in again. Rendezvous Cafe seems like a catering business, not a restaurant.",
                "date": "2013-08-29 15:51:32"
            }, {
                "_id": {"$oid": "5d23c92d16a84d360d93dfd2"},
                "review_id": "0f7mQ3EI-eHk9AUvpqtMuA",
                "user_id": "jfG6Tgnw3xFfIOaSZakSUQ",
                "business_id": "lYlVsbhDrglWDdhh7OTM2w",
                "stars": 4.0,
                "useful": 1,
                "funny": 1,
                "cool": 0,
                "text": "Ate here for the first time this morning at 11:15 a.m.  As A.B. guessed, they are primarily a catering gig.  There were only two other parties there. The family ordered off of the menu--eggs Benedict, patty melt, and 2 your way.  I ordered the skillet, as advertised on the window.\n\nI've eaten at most of the breakfast joints around town. Add this place to the list of good ones. Potatoes and eggs were perfect, the portions are huge, and everything came out about the same time. Service is attentive, and friendly.  Check out the pics of the Benedict and skillet--we'll be eating this for tomorrow's breakfast!",
                "date": "2013-09-28 20:08:34"
            }, {
                "_id": {"$oid": "5d23c92d16a84d360d93fe06"},
                "review_id": "36NgUr3J1pp6gA4vbQ27pA",
                "user_id": "O9xv43YfkLZ7verTsQfAMA",
                "business_id": "lYlVsbhDrglWDdhh7OTM2w",
                "stars": 5.0,
                "useful": 0,
                "funny": 0,
                "cool": 0,
                "text": "Huge Portions, great prices. I have been several times over the last few months and the food keeps getting better. The place always has a seat open, great location next to movies, killer desserts and the specials are fantastic.Everything is homemade and the delivery is free. I brought my neighrbor and now his wife and him visit the place as well. Friendly staff and the Invisible  Chef is one of the best in Las Vegas. My family loves this place. We ate here labor day. Rib dinners $8. can't beat that. Very please. recommend to all.",
                "date": "2013-11-12 17:37:20"
            }]
        },
        {
            "_id": {"$oid": "5d15b88b5eab926c7d9ab00b"},
            "business_id": "cRtPP-AKezf0m94W-aisYA",
            "name": "Green Leaf",
            "address": "875 S Grand Central Pkwy",
            "city": "Las Vegas",
            "state": "NV",
            "postal_code": "89106",
            "latitude": 36.1638289,
            "longitude": -115.1568419,
            "stars": 3.0,
            "review_count": 4,
            "is_open": 1,
            "attributes": {
                "RestaurantsGoodForGroups": "True",
                "RestaurantsDelivery": "False",
                "BusinessAcceptsCreditCards": "True",
                "RestaurantsAttire": "'casual'",
                "GoodForKids": "True",
                "GoodForMeal": "{'dessert': False, 'latenight': False, 'lunch': False, 'dinner': False, 'brunch': False, 'breakfast': False}",
                "RestaurantsReservations": "False",
                "RestaurantsTakeOut": "True"
            },
            "categories": "Restaurants",
            "hours": null,
            "review": [{
                "_id": {"$oid": "5d23c90c16a84d360d8c5630"},
                "review_id": "MSsMBrGEdAcFNxfT0WW9kQ",
                "user_id": "3gq1d-Qiyajk5TWq9jNytA",
                "business_id": "cRtPP-AKezf0m94W-aisYA",
                "stars": 3.0,
                "useful": 2,
                "funny": 0,
                "cool": 0,
                "text": "After shopping for about 5 hours, I needed to have a fuel break so I was looking for something healthy as most of the restaurants in the food court were fast food so I ordered a wrap BLTA (bacon, lettuce, tomato, avocado) and it was just the ticket!  It was very filling and was just what I needed to keep my energy going.",
                "date": "2015-11-23 06:04:27"
            }, {
                "_id": {"$oid": "5d23c90e16a84d360d8cf1a8"},
                "review_id": "FCpvmzgZb3d-WykslGgUKA",
                "user_id": "QCMqUyQSStKUzJWQloBqUg",
                "business_id": "cRtPP-AKezf0m94W-aisYA",
                "stars": 2.0,
                "useful": 0,
                "funny": 0,
                "cool": 0,
                "text": "Incredibly poor value. A salad with no protein and only 4 toppings costs $9. They won't even let you mix lettuce. All of their wraps are pre-made and sitting in a refrigerator so they are not fresh. Who knows when they were actually made? There are better choices in the same food court so avoid this one.",
                "date": "2017-09-13 01:31:33"
            }, {
                "_id": {"$oid": "5d23c91b16a84d360d8fc27b"},
                "review_id": "-pwqbiGcC0kuUXHPQDGd6Q",
                "user_id": "7df_6wIkTwGXYRub3oiWUw",
                "business_id": "cRtPP-AKezf0m94W-aisYA",
                "stars": 2.0,
                "useful": 1,
                "funny": 0,
                "cool": 1,
                "text": "So so bad...the whole experience was bad. The food court is small, noisy and seems kind of dirty. \nThe food was...ok? I had the soup and half sandwich which was bread with something inside. The soup was soupose to be clam, but it linda look like sour cream with artificial flavour and had chuncks of something inside, but I'm not sure of what.\nThe service was polite to a certain point.  They clearly didn't have the patience to let me chose much less to answer my questions. I didn't dare to ask for any especial requests, that's for sure. \nAfter a $10 or so meal I was still hungry, so that's the size of the portions.\nWell you can expect much for a mall food court either way, right?",
                "date": "2016-04-29 20:47:22"
            }, {
                "_id": {"$oid": "5d23c92d16a84d360d9404b1"},
                "review_id": "N16su-vZkHQsYQUgTJFTWw",
                "user_id": "vwLV4TkRMoghs86tB1Ke8Q",
                "business_id": "cRtPP-AKezf0m94W-aisYA",
                "stars": 4.0,
                "useful": 1,
                "funny": 1,
                "cool": 5,
                "text": "This by far is my favorite place in this food court .. north outlets isn't known for the best food in my opinion but this place was a pleasant surprise .: They offer affordable items that are fresh with friendly service .. take it with a grain of salt because it is a food court plus it's a place that has people who may not be gourmet. It did however please my taste buds and left me feeling full .\n\nPlus they give 1 free refill on Soda so I dig that a lot ..",
                "date": "2017-01-14 13:50:04"
            }]
        },
        {
            "_id": {"$oid": "5d15b88d5eab926c7d9b4c2b"},
            "business_id": "lD5lowsGjnU71NzA1L3-hA",
            "name": "Schoop's Hamburgers",
            "address": "9151 Las Vegas Blvd S, Ste 342",
            "city": "Las Vegas",
            "state": "NV",
            "postal_code": "89162",
            "latitude": 36.175,
            "longitude": -115.136389,
            "stars": 3.0,
            "review_count": 5,
            "is_open": 0,
            "attributes": null,
            "categories": "Restaurants",
            "hours": null,
            "review": [{
                "_id": {"$oid": "5d23c96316a84d360da04c56"},
                "review_id": "_ftVy320puB1zltsaivmng",
                "user_id": "qQecSd0lynfB4g-LPa9JCw",
                "business_id": "lD5lowsGjnU71NzA1L3-hA",
                "stars": 3.0,
                "useful": 2,
                "funny": 1,
                "cool": 2,
                "text": "From the outside, you'd think this burger joint was a restaurant. But as soon as you walk in, you realize this is a hamburger stand that's connected to the antique mall. The prices are reasonable but the burger I got was sub-par. In fact, it was so dry, I had to slather over 2 tablespoons of mayonaise on my burger to make it edible.\n\nIt was not greasy or juicy.\nIt was desert dry.\n\nI would sooner go to In-N-Out Burger before I come back here. \n\nThe reason I gave this a higher rating of 3 stars is the kitchy location and the fact that it's been around for a long time and I hate to see old things disappear among the new. Being able to browse the antique mall while you wait for your food is pretty cool. Being able to browse the mall with a malt in your hand is even cooler.\n\nBut seriously, the burger alone wasn't worth the visit to Schoop's. I was disappointed that my \"local\" burger joint was so boring.",
                "date": "2007-12-31 01:31:57"
            }, {
                "_id": {"$oid": "5d23c99616a84d360da340aa"},
                "review_id": "crEy_wbWnMbn4cDPoCm5QQ",
                "user_id": "3Vd_ATdvvuVVgn_YCpz8fw",
                "business_id": "lD5lowsGjnU71NzA1L3-hA",
                "stars": 1.0,
                "useful": 3,
                "funny": 1,
                "cool": 1,
                "text": "I had this place on my list but I didnt make in time because it is now closed.\n\nThe reviews here are varied and so are the ones elsewhere. Suppossedly thiey had deep fried hamburgers like Dyers in Memphis.\n\nSad to see it go but there must have been a reason",
                "date": "2009-01-11 07:06:50"
            }, {
                "_id": {"$oid": "5d23c99816a84d360da3b92a"},
                "review_id": "n1jUg6o4eq-_DX6QzimjZQ",
                "user_id": "8XrXgqWBhVOFIFQHwsUwDg",
                "business_id": "lD5lowsGjnU71NzA1L3-hA",
                "stars": 2.0,
                "useful": 0,
                "funny": 0,
                "cool": 0,
                "text": "Like another reviewer said, it does look like more from the outside.  When I walked in, it was actually a pretty shabby stand near the antique mall.  Prices weren't bad I guess, but the burgers were very blah as well as the fries.  Definitely are much much better places to get a good burger than here.  I'll give it one thing, it was all very fresh, as they didn't make it till we ordered it.  Maybe a decent eat if you happen to be shopping at the antique mall, but don't think we'll be coming back just for the food!",
                "date": "2008-02-11 21:42:54"
            }, {
                "_id": {"$oid": "5d23c99c16a84d360da5120e"},
                "review_id": "wW-BsFt3FsH-jbfrIixHHQ",
                "user_id": "UvY0E6Wuhv_0Bita52RPOw",
                "business_id": "lD5lowsGjnU71NzA1L3-hA",
                "stars": 5.0,
                "useful": 1,
                "funny": 1,
                "cool": 1,
                "text": "If there are things about me that's weird I've gotta say it's gotta be because I'm like a frosted mini wheat. Give me the lean beef, and foie gras from Burger Bar at Mandalay. But Schoops - you would never know about. Schoop's is hidden at the Food Basket inside the Antique Mall. One of my employees brought it for me for lunch. I had a Double Burger with cheese and bacon. OMFG It was GREAT. GREASY...JUICY...CRISPY....Yea while you wait you roam the Antique Mall while your burger gets deliciousness from the guys who cook it by pouring all their love magic into these delectable delights.  Yea I got it fully loaded...I even referred another dept. Now their whole group has it once a week. and they're BIG BOYS....A few weeks later. Las Vegas Weekly came out with talk about Greasy Spoons and lo and behold.(what the hell does LO mean anyway?) There's Schoops. So I made my trip there.....I missed it by half an hour. The following day. I went again. I smelled and my mouth watered for their delicious patty of meat....yea. Life is good...",
                "date": "2007-02-14 20:04:03"
            }, {
                "_id": {"$oid": "5d23c99d16a84d360da52e25"},
                "review_id": "2E-i1FYRT5Jo01-1Tkr8vQ",
                "user_id": "UvY0E6Wuhv_0Bita52RPOw",
                "business_id": "lD5lowsGjnU71NzA1L3-hA",
                "stars": 5.0,
                "useful": 2,
                "funny": 4,
                "cool": 1,
                "text": "Closed....WTF....NOOOOOOooooooooo. What more do we suffer? Circuit City is going out of business....the Great Indoors.....WHAT MORE?!",
                "date": "2009-01-19 21:01:05"
            }, {
                "_id": {"$oid": "5d23c9a316a84d360da70ef4"},
                "review_id": "v8etn66Y3T_eeDeUM5eD7w",
                "user_id": "a0PH_2zKVQExMP5w-OJQKw",
                "business_id": "lD5lowsGjnU71NzA1L3-hA",
                "stars": 4.0,
                "useful": 0,
                "funny": 0,
                "cool": 0,
                "text": "Located near Souhtpoint Hotel, this place isn't a bad Mom and Pop hamburger shop.  It's just a really good homemade style hamburger place with all the stuff that can be good with hamburgers such as fries, shakes, and other great items.",
                "date": "2007-05-09 08:34:48"
            }]
        },
        {
            "_id": {"$oid": "5d15b8905eab926c7d9c1624"},
            "business_id": "f5PPtPxB7CLgQuHiUBeBcQ",
            "name": "Brooklyn Bagel",
            "address": "2430 E Flamingo Rd",
            "city": "Las Vegas",
            "state": "NV",
            "postal_code": "89121",
            "latitude": 36.1152068,
            "longitude": -115.1181849,
            "stars": 2.0,
            "review_count": 3,
            "is_open": 0,
            "attributes": null,
            "categories": "Restaurants",
            "hours": null,
            "review": [{
                "_id": {"$oid": "5d23ca0916a84d360dc5aabd"},
                "review_id": "MSLv0YOOoLUFFgALd69cTw",
                "user_id": "VeYSD3Xgxd-R4yowet51tA",
                "business_id": "f5PPtPxB7CLgQuHiUBeBcQ",
                "stars": 3.0,
                "useful": 0,
                "funny": 2,
                "cool": 0,
                "text": "I was really excited when Brooklyn Bagel Deli opened up on my very, very short commute to work.  I stopped in almost immediately after it opened, waiting for a freshly toasted bagel with creamy creamy cream cheese to greet me upon my arrival in my office.  I opened up the bag, unwrapped the bagel, took a big bite and....frankly, I was disappointed.  \n\nThe sheer amount of cream cheese put on this thing was ri-di-cu-lous.  No one, not a sumo wrestler or a competitive eater, needs that much cream cheese.  The texture of the bagel was off.  I didn't get that slightly crispy then delightfully chewy sensation I look forward to in a good bagel.  It was just a pretty ho-hum experience all around.\n\nOf course, since it is one of three places on the way to work where I can pick up something quick, and the other two rhyme with Cartrucks and HacFondles, I still drop in here once a month or so if I need a carbohydrate pick-me-up so I guess it has to have some redeeming qualities or my taste buds might not just wake up until 10:00 AM.",
                "date": "2007-02-28 23:52:43"
            }, {
                "_id": {"$oid": "5d23ca0b16a84d360dc5fc2b"},
                "review_id": "_sENNBLP9-BXAv5try60IA",
                "user_id": "B431Cr-p_Fk0Ri-O-QRQMg",
                "business_id": "f5PPtPxB7CLgQuHiUBeBcQ",
                "stars": 1.0,
                "useful": 0,
                "funny": 0,
                "cool": 0,
                "text": "UGH.........\nI stopped by the deli today to grab a sandwich for lunch.  Not many other places in this area to eat so I thought it to be a good choice.  WRONG!!!  So I bought a chicken salad sandwich on a salt bagel and it looked so delectable but as I was eating it I heard a little voice from my tummy - 'not good'.  I just thought that maybe I was disappointed that the sandwich looked so good but didn't taste as good as it looked.  However, 30 minutes later I felt the BBG's (bubbly gut) and off to the toilet I ran.  Soooooo embarrassing when you're stuck in the bathroom at work for half the day.  To make matters worse, my co-worker offered to run to the drugstore to buy me some Kaopectate.  Yeah...not my finest hour.  Thanks Brooklyn Bagels!!!",
                "date": "2008-11-13 22:01:02"
            }, {
                "_id": {"$oid": "5d23ca0e16a84d360dc6e727"},
                "review_id": "wOIAh1w6SbeDSY6rKiJHXQ",
                "user_id": "HRyFtrmf19GTKEM_kOa2pg",
                "business_id": "f5PPtPxB7CLgQuHiUBeBcQ",
                "stars": 2.0,
                "useful": 0,
                "funny": 0,
                "cool": 0,
                "text": "I was expecting to get fresh bagels in here but it seemed as if these bagels have been sitting around since yesterday. I believe I have experienced better bagels at the grocery store. The cream cheese was good. For a bagel place, I expect more. I shall try them again. Maybe they could redeem themselves.",
                "date": "2009-05-14 23:57:03"
            }]
        },
        {
            "_id": {"$oid": "5d15b8905eab926c7d9c3657"},
            "business_id": "Pp6jOkxejp0WheNCajZIig",
            "name": "The Great American Grill",
            "address": "7830 S Las Vegas Blvd",
            "city": "Las Vegas",
            "state": "NV",
            "postal_code": "89123",
            "latitude": 36.0474982,
            "longitude": -115.170435,
            "stars": 3.5,
            "review_count": 3,
            "is_open": 1,
            "attributes": {
                "RestaurantsTakeOut": "False",
                "RestaurantsAttire": "u'casual'",
                "NoiseLevel": "u'quiet'",
                "RestaurantsPriceRange2": "2",
                "BusinessAcceptsCreditCards": "True",
                "HasTV": "True",
                "RestaurantsGoodForGroups": "True",
                "OutdoorSeating": "True",
                "BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': False, 'valet': False}",
                "GoodForKids": "False",
                "RestaurantsReservations": "False",
                "Ambience": "{'romantic': False, 'intimate': False, 'classy': False, 'hipster': False, 'divey': False, 'touristy': False, 'trendy': False, 'upscale': False, 'casual': False}",
                "Alcohol": "u'full_bar'"
            },
            "categories": "Restaurants",
            "hours": null,
            "review": [{
                "_id": {"$oid": "5d23c9f616a84d360dbfb19f"},
                "review_id": "TqjUwFsCtC4Qfbze1FPBLQ",
                "user_id": "u4BHxiH2fBlH6bRJxDl8Xw",
                "business_id": "Pp6jOkxejp0WheNCajZIig",
                "stars": 4.0,
                "useful": 0,
                "funny": 0,
                "cool": 1,
                "text": "I was staying at the Hilton Garden for a week, I usually avoid food at moderate priced hotels but I had a meeting and was pressed for time so I decided to grab dinner at The Great American Grill in the hotel.  I was very impressed!  I ordered the Surf and Turf which is a steak and grilled shrimp.  The steak was excellent for a steakhouse, let alone a hotel.  Really tender, cooked perfectly and seasoned to perfection.  The shrimp was great too and seasoned very well.  Even the veggies were great.  I had this meal twice and both time the chef came out of the kitchen to ask if I enjoyed my meal!   I was there for 7 days and didn't eat there until my 4th day there.  Considering the meals I had at some of the local restaurants, I wish I had ate there the first night I arrived.",
                "date": "2015-08-10 17:19:44"
            }, {
                "_id": {"$oid": "5d23ca0116a84d360dc2f487"},
                "review_id": "KOM0tCRqhWsp5JK7lsU2Qg",
                "user_id": "zy1CuLKzsy4WTggLOmRv5Q",
                "business_id": "Pp6jOkxejp0WheNCajZIig",
                "stars": 5.0,
                "useful": 0,
                "funny": 0,
                "cool": 0,
                "text": "Excellent service from Amy this morning at the Garden Grill! I frequently stay here and grab breakfast at the grill and the service is almost always good! What I appreciated about Amy this morning was ZERO argument about my asks. They're pretty simple yet asking outside what's printed on the menu can sometimes spark too much conversation when I haven't had coffee yet! I ordered a 3-egg omelette (the menu says 2 eggs) with jalapeños (not listed), spinach, and other veggies with a side of avocado  (not listed!) \n\nIt's the little things in life! \n\nThanks Amy for the great service! I'll be back!\n\nPS: My fab breakfast plate photo disappeared. User error yet trust me, it was beautiful!!!",
                "date": "2018-05-02 16:17:46"
            }, {
                "_id": {"$oid": "5d23ca0216a84d360dc37e6b"},
                "review_id": "KlTvan3oLp8cPITIBgvjRA",
                "user_id": "sUYMIwl-Zv5tOxZrQ8Iu9g",
                "business_id": "Pp6jOkxejp0WheNCajZIig",
                "stars": 1.0,
                "useful": 1,
                "funny": 0,
                "cool": 0,
                "text": "Box lunches for meetings here are terrible! The sandwich was dry, very little meat, and they didn't offer us any condiments. On top of that there was an old piece of fruit instead of chips, and a cookie that was as hard as a rock and tasted like it was a left over from a previous day. If you have a business meeting here, DON'T ORDER THEIR LUNCH!!!",
                "date": "2014-11-20 20:14:04"
            }]
        }

    ];

    let trips = [
        {
            "name": "Big Whiskey's American Restaurant ",
            "address": "6587 Las Vegas Blvd S",
            "city": "Las Vegas",
            "state": "NV",
            "source": "TripAdvisor",
            "tags": [],
            "reviews": [
                "Went to Big whiskey's last night and we were lucky to get a table given how busy it was for a Monday. They had a championship flair bar tending championship that they hold once a month on the first Monday of the week. I had.",
                "New restaurant in Town Square just opened. Huge inventory of Whiskey.... had the half rack with loaded fries and the best cold slaw I've had !!! Extensive menu moderately priced. Gotta try this new place, you wont be disappointed.",
                "We had reservations for Friday night and we were really excited to try this place after reading its menu online-  The seating hostess was very friendly and gave us more information than our actual server. Then we waited about 10 minutes for a server to.",
                "Booked table for Mother\u2019s Day evening meal on arrival was shown to table but server refused to acknowledge our presence but went out of her way to ask tables around us if everything was ok each time she passed she made it clear she would.",
                "We had a fun night. The servers were great and really knew their stuff. Excellent bar selection as you would expect. The food was all good, nothing great but nothing to complain about. If you are in the area it's a good pick for a.",
                "Super happy hour prices, good food, Beanita (Christina) was the best server\u2014great customer service! I would totally recommend Big Whiskey.",
                "Stopped by for lunch with my sister. Didn\u2019t realise it was a new establishment (until the waitress pointed it out after quite a long wait for our food). Had the buffalo chicken wontons for apps. They were good. Then a long wait for our mains..",
                "Quite a large menu of varied foods at moderate prices. Also a huge selection of whiskey! I ate there when it first opened and there bugs to worked out. The staff was not friendly, I think they were consumed with the operational aspects and not."
            ]
        },
        {
            "name": "Oyster Bar at Palace Station",
            "address": "2411 W Sahara Ave",
            "city": "Las Vegas",
            "state": "NV",
            "source": "TripAdvisor",
            "tags": [
                "Lunch",
                " Dinner",
                " Breakfast",
                " Late Night",
                "American",
                " Seafood",
                " Soups",
                "Takeout",
                " Parking Available",
                " Serves Alcohol",
                " Full Bar",
                " Accepts Credit Cards"
            ],
            "reviews": [
                "Went here with my friends last night. The wait was extremely long as there is very limited seating. The food was worth the wait. I had the steamed clams and the combo pan roast. Both were absolutely amazingly good and tasty. I will definitely go.",
                "Oh my goodness - fresh oysters and clams and the seafood based soup was tasty.  The service was great and sitting up in the bar gave you insight to the orchestra of your meal prepared.",
                "We waited in line for 30 minutes. We waited for our food for 30 minutes. And we would wait DOUBLE that to eat there again. Absolutely phenomenal food and service!!!!",
                "We lucked out with a less than 30 minute wait to sit but we waited about 35 minutes after ordering to get our meal but it was worth it. The peel and eat shrimp are so perfectly delicious! We also had the combo pan roast.",
                "Speaking as a non-seafood eater this place was excellent! A friend made me go, even though she knows I don\u2019t care for seafood. They will tell you what the top seller is to that\u2019s excellent, I don\u2019t recall the name. But I\u2019m told there is.",
                "Really fresh oyster for $1 each. We tried the top 3 dishes, seafood Gumbo, seafood pan roast and seafood bouillabaisse!!!! Amazing!!!!! Huge portion, delicious and fresh seafood ingredient, great value for money! The only downside is that seats are limited and queues are long. But.",
                "It\u2019s been in my bucket list to dine at this restaurant because of all the hype. But they did warn me about the wait. We got lucky our wait was only 15 mins. We ordered the combo pot roast, clam chowder New England, and oyster..",
                "My husband and I live in Summerlin...so Las Vegas locals. Have been wanting to try this place for sometime but hesitant after reading some reviews...great food but long wait times, etc.\n\nToday, Monday, we decided to give it a try. We walked in at about.",
                "I found this place in Vegas and was eager to try. When I arrived I noticed 3 bar stools open and I sat at the one in the middle. The cook said please do not sit yet and pointed to the block long line to.",
                "The Oyster Bar is one of my favorite dining spots in Las Vegas. The on the half shell oysters are fresh and the oyster stew is great."
            ]
        },
        {
            "name": "Joel Robuchon",
            "address": "3799 Las Vegas Blvd S",
            "city": "Las Vegas",
            "state": "NV",
            "source": "TripAdvisor",
            "tags": [
                "$250 - $385",
                "Vegetarian Friendly",
                " Vegan Options",
                " Gluten Free Options",
                "Dinner",
                " Late Night",
                "French",
                "Reservations",
                " Private Dining",
                " Seating",
                " Parking Available",
                " Valet Parking",
                " Wheelchair Accessible",
                " Serves Alcohol",
                " Full Bar",
                " Accepts Credit Cards",
                " Table Service"
            ],
            "reviews": [
                "This restaurant is a haven in a crazy, loud and ugly hotel. \n\nThe service is amazing and the food spectacular. Interesting and pleasingly delicious combinations of flavors. \n\nWe had the degustation menu with paired wines, it was wonderful. \n\nHighly recommended.",
                "The food was amazing staff was attentive and perfect my only complaint is the reason I gave it four stars instead of five because of the many surcharges in addition to the exorbitant prices I feel that the staff should point out the surcharge for.",
                "Indoor design of the restaurant, along with beautiful chandelier were all stunning. Decorated to the detail with dark brown and purple colors added to classy and elegant ambiance we experienced.\nMy friend and myself both ordered 8 course tasting menu, which consists of 17 little.",
                "this is the best part of vegas wow wow wow visited yesterday was recommned by a friend we will be coming back in august",
                "We had a lovely dinner at Joel Robuchon\u2019s.  Service started out a little \u201ccold\u201d perhaps because they were apprehensive about our young children, but once the staff realized our kids weren\u2019t going to swing on the beautiful crystal chandelier or set curtains on fire they.",
                "French food always is and adventure but here was so delicious!\nThe bread was out of this world, try the tasting menu!",
                "It\u2019s actually only the second time we\u2019ve eaten here though we did eat at L\u2019Atelier once. We brought our friends and warned them about how phenomenal it was and they did not disappoint. Starting with drinks in the small bar to being treated to the.",
                "If you have the money this is truly a wonderful restaurant to go to for that special celebration. The food, wine and service are excellent. If you can go I would.",
                "My friends and I decided to spend the evening at this top-tier restaurant.  Don't plan on other activities for the night, since if you go for the full experience, the xx-course tasting menu, you will be here for 3 plus hours. Two of us ordered.",
                "Words cannot adequately describe the experience of this restaurant. We do know they cater to the rich and famous daily BUT they treated us as if we were! Sommelier Rone gave us his full attention and described the entire history of the bottle of champagne....origin,."
            ]
        },
        {
            "name": "Mastro's Ocean Club",
            "address": "3720 Las Vegas Blvd S",
            "city": "Las Vegas",
            "state": "NV",
            "source": "TripAdvisor",
            "tags": [
                "$50 - $50",
                "Vegetarian Friendly",
                " Vegan Options",
                " Gluten Free Options",
                "Lunch",
                " Dinner",
                " Late Night",
                "American",
                " Seafood",
                "Reservations",
                " Private Dining",
                " Seating",
                " Parking Available",
                " Valet Parking",
                " Wheelchair Accessible",
                " Serves Alcohol",
                " Full Bar",
                " Accepts Credit Cards",
                " Table Service"
            ],
            "reviews": [
                "2 are for $135 no alcohol or dessert.  Chilean Sea bass excellent, cooked to perfection.  Scallops were also good.  HUGE bowl of fries with sea salt, more than shareable for 2 people.  All Ala carte .  Worth it.  Seating was in a large open air.",
                "Run here! It was such a great meal.  Beautiful restaurant and the food was fantastic.  We had the crab cocktail to start and I\u2019ll dream of the lobster mashed potatoes for a long long time. We ended our meal with brown butter cake.  It was.",
                "My husband was skeptical at first. He had seen the restaurant in a previous trip to Vegas and thought \"who would eat in a mall?\"  Well we did and it was the best meal of our trip!  The service was great, attentive without being invasive,.",
                "In the Crystals shopping center near Cosmo, this is a beautiful restaurant the hangs over the first floor of the high end shops like it is suspended from the clouds.  Impeccable service.  The seafood tower is the ultimate appetizer but do not miss the big.",
                "In Vegas for a few days.  It happened to be Restaurant Week.  Mastro's was highly rated for seafood, so we went to check it out. The regular menu had a dizzying array of fish and seafood to choose from.  There are no preparation descriptions, so.",
                "My favorite meal of my Las Vegas stay! The shrimp appetizer was delicious! I had the crab cakes for my entree, quality crab meat and not full of filler like you sometimes get. Service was great, staff was very attentive. I highly recommend this restaurant!",
                "A truly fantastic restaurant.  Very classy with high quality service and very high quality libations and foods.   One will never be disappointed with the service or the qualify that is offered.",
                "We had an absolutely perfect dinner. The treehouse ambiance, great food and attentive, prompt service made this truly special. Must have Seafood Tower, steak, lobster mash and the Butter cake! Beyond delicious ! Never disappointed... can\u2019t wait to come back.",
                "The major seating area is amazing and worth looking at before you are seated. The fillets where prefect. But be sure to confirm how you wanted it prepared. Medium rare is very rare. The wait staff is very helpful with this. Bread serviced. We split.",
                "The best steak restaurant in Vegas!  Staff were incredible, food amazing and beautiful atmosphere.  One of the top high end places in Vegas."
            ]
        },
        {
            "name": "Ferraro's Italian Restaurant ",
            "address": "4480 Paradise Road",
            "city": "Las Vegas",
            "state": "NV",
            "source": "TripAdvisor",
            "tags": [
                "$40 - $60",
                "Vegetarian Friendly",
                " Vegan Options",
                " Gluten Free Options",
                "Lunch",
                " Dinner",
                " Late Night",
                "Italian",
                "Takeout",
                " Reservations",
                " Outdoor Seating",
                " Private Dining",
                " Seating",
                " Parking Available",
                " Highchairs Available",
                " Wheelchair Accessible",
                " Serves Alcohol",
                " Full Bar",
                " Accepts Credit Cards",
                " Table Service"
            ],
            "reviews": [
                "We were excited to be able to return to Ferraro\u2019s for a third time and we\u2019re happy that the renovations had just been completed on the day we reserved \nWe went to the bar for a cocktail before dinner \nFront desk people were very nice.",
                "Sylvia, \n\nThank you so much for leaving your review and letting us know about your experience. We would like to get a few more details from you so we can look into some of the issues you described directly. We strive daily to ensure returning.",
                "Slightly off the strip but the food and the service were excellent. Just that being full, was bit noisy. But one can ignore till the food is authentic. Loved the Salmon",
                "We had to take a 10 min cab ride from the Venetian to get here but it was worth the trip from both a cost and food perspective. We are from Toronto where there is a large Italian contingent, as well, we have travelled Italy.",
                "Excellent food.  Great recommendation by the sommelier.  It did feel like the waiter was rushing us through the meal..More",
                "Hello, we are so pleased you enjoyed your meal and the recommendations by the sommelier. We want to enure you continue to enjoy your visits to Ferraro's and are concerned by your last statement. Would you mind contacting us via email at ferraros@ferraroslasvegas.com and let.",
                "I had heard the late Fox broadcaster Bob Massi compliment Ferraro's as the greatest Italian food he had ever had,  so my wife and I'm had to try it out when we were visiting Las Vegas. We were not disappointed. Don't be fooled by its.",
                "Large restaurant at the end of large \"strip mall\" off major Paradise Road. Easy in and out driving, ample parking. Menu is extensive and covers almost all the Italian variations and has an extensive appetizer section. Large space and full bar but smaller large group.",
                "Very good restaurant would recommend to anyone wanting authentic Italian food. The food was very well prepared.",
                "Italian food generally makes my boss happy, and he was very happy with this.  Had been recommended by friends and we were not disappointed.  Food good, service good, drink good, white table cloth service.  I will be back next year.",
                "I had a lot of difficulty with vegetarian options in Las Vegas.  I\u2019m a bit of a food diva and last night I dined at the prestigious  La Giada at the Cromwell.  The reception staff clearly displayed a culture of superiority and informed me there.",
                "Wonderful restaurant with traditional Italian food and drink. We had a great surprise birthday party there and everything was perfect!"
            ]
        },
        {
            "name": "Yardbird Southern Table ",
            "address": "3355 Las Vegas Blvd S",
            "city": "Las Vegas",
            "state": "NV",
            "source": "TripAdvisor",
            "tags": [
                "$31 - $50",
                "Vegetarian Friendly",
                " Gluten Free Options",
                "Lunch",
                " Dinner",
                " Brunch",
                "American",
                "Television",
                " Free Wifi",
                " Takeout",
                " Reservations",
                " Seating",
                " Parking Available",
                " Highchairs Available",
                " Wheelchair Accessible",
                " Serves Alcohol",
                " Full Bar",
                " Accepts American Express",
                " Accepts Mastercard",
                " Accepts Visa",
                " Accepts Discover",
                " Accepts Credit Cards",
                " Table Service"
            ],
            "reviews": [
                "We thoroughly enjoyed our dinner at Yardbird.  Highly recommend Llewellyn's chicken, corn bread, and fried green tomatoes.  Service is awesome also.  A little loud but fun place with everyone enjoying the food and company.  We make this a must stop on our Las Vegas trips.",
                "Hi Kapaluacat29220,\nThank you for taking the time to review Yardbird Southern. We're so glad to hear you enjoyed our fried chicken, skillet cornbread and fried green tomato BLT. We're also glad to hear that you received awesome service and will be sure to pass.",
                "The Yardbird is located in the Venetian on restaurant row. Reservations are recommended as the place is usually always packed full. The major reason for an average rating is the drinks. We had margaritas at $20 a pop -- sorry but the drinks hardly tasted.",
                "Hi lvgirl09,\nThank you for taking the time to review Yardbird Southern. We never like to hear when a guest leaves disappointed. Please check your inbox so we can personally address your individual experience.",
                "I had shrimp and grits. They were okay, but nothing special.  My wife had a kale salad that was good.  I am not big on chicken and waffles.  They push that hard.  Probably good option if you like chicken and waffles.",
                "Good value for money in the Palazzo Venetian. Really good cocktails and beers. Get the fried chicken and waffles but skip the burgers and the sides as portions are huge.",
                "Hi Ville_VK,\nThank you for taking the time to review Yardbird Southern. We're so glad to hear you enjoyed your experience. We look forward to having you back again soon.",
                "We enjoyed the Yardbird very much, the food was great. The atmosphere was casual and friendly. As the name suggest, the chicken was awesome!",
                "Hi Firespk,\nThank you for taking the time to review Yardbird Southern. We're so glad to hear you enjoyed our fried chicken. We look forward to having you back again soon.",
                "Came for drinks after dinner. The whiskey options were very diverse and the infused banana Jack Daniels was excellent.",
                "All around good fattening southern comfort food.  We had the July 4th appetizer special which was great, shrimp and grits, biscuits and gravy and barbecue brisket burger were all good.  I wish I would have ordered the chicken instead of the crab Benedict.  I also.",
                "Hi RussU2525,\nThank you for taking the time to review Yardbird Southern. We're so glad to hear you enjoyed our 4th of July sampler, shrimp & grits, biscuits & gravy, BBQ brisket burger and peanut butter ice cream pie. We look forward to having you.",
                "Amazing food and cocktails. Service we had throughout trip to the USA was very good but our server at Yardbird was outstanding.More",
                "Hi Bobby284647,\nThank you for taking the time to review Yardbird Southern. We're so glad to hear you enjoyed your experience and will pass along your kind words to the team for taking outstanding care of you. We look forward to having you back again.",
                "We come to Vegas every year. We were in Vegas for 5 nights. I read reviews ahead of time and knew we wanted to eat here. Tried to come here the first night and it was closed for a private party. Made a reservation for.",
                "Hi NEmmerson,\nThank you for taking the time to review Yardbird Southern. We're so glad to hear you enjoyed our fried chicken, skillet cornbread, crispy Brussel sprouts and peach cobbler. We look forward to having you back again soon.",
                "Really cool place down to the table ware! Best chicken I've ever eaten!!! The greens are AMAZING, I live in the south and those are the best! Service is great even when super busy.",
                "Hi hikerap,\nThank you for taking the time to review Yardbird Southern. We're so glad to hear you enjoyed our fried chicken and collard greens. We look forward to having you back again soon."
            ]
        },
        {
            "name": "Green Leaf's ",
            "address": "875 S Grand Central Pkwy",
            "city": "Las Vegas",
            "state": "NV",
            "source": "TripAdvisor",
            "tags": [],
            "reviews": [
                "My husband and I were  determined to stay close to our diet during our trip. When we found Green Leaf\u2019s  it really made our day.\nThe Caribbean berry smoothie closely resembled what we have been eating the last 30 days and the price wasn\u2019t bad.",
                "We found the prices on the high side but the ingedients looked fresh. All we needed was a cold drink to refresh from the heat. We had a nice smoothie and a cold, bottled drink.",
                "Stopped in at Bananas for a smoothie while shopping at the outlets. The price was a bit expensive for a standard smoothie and the service was very matt-of-fact with no real interaction other than asking what I wanted, but the drink was very good and.",
                "great variety of salads and wraps, made fresh for you at time your order\n\nwas nice to see such a refreshing option (vs junk type food).\n\nI highly recommend this place for something to eat!",
                "Lunch at outlets is always iffy but the food at Greenleaf and Bananas was an exception. Both the Thai chicken wrap and the turkey/ ham Cuban sandwich were well prepared and filling."
            ]
        }
    ]
}]);