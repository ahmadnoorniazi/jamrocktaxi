import React from 'react';

import BlogInfoImg from '../assets/blog/blog-info.png';
import { useParams, useHistory } from 'react-router-dom';

// icons
import { GoMail } from 'react-icons/go';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { FaWhatsapp, FaTwitter, FaFacebookF } from 'react-icons/fa';

import fakeData from '../data/blog';

const SingleBlog = () => {
	const { id } = useParams();
	const history = useHistory();

	const data = fakeData[id];

	return (
		<div className="blog-card">
			<div className="p-3">
				<span onClick={() => history.push('/blog')}>
					<IoIosArrowBack size={22} className="mb-1" /> {'    '}Blogs
				</span>
			</div>
			<img src={data.img} alt="blog item" />
			<div className="blog-card-content">
				<p className="blog-card-tag">Money, Tips</p>
				<h3 className="blog-card-title">{data.title}</h3>
				<div className="blog-card-info">
					<div>
						<img src={BlogInfoImg} alt="" />
						<span>JamRockTaxi</span>
					</div>
					<span className="blog-card-date">27 Dec</span>
				</div>
				<p className="blog-card-text ">
					{id === '0' ? (
						<div>
							<p>
								Near Ocho Rios town, the waterfalls of Dunn’s River are one of the most famous
								attractions in the country. Climb the limestone on your own or with a guide. Due to the
								strong current, some caution is required. Don’t forget to look around you, because the
								views with the rainforest by your side are fantastic!
							</p>
							<br />
							<p>
								Dunn’s River Falls is an absolute must if you go to Jamaica . You can climb this
								waterfall, making it a unique excursion. The waterfall is located in the (temperate)
								rain forest of Jamaica. A wonderful green environment where you can go wild in the
								water. In the first place to be busy, but also to cool down and enjoy. Dunn’s River
								Waterfall is the most famous waterfall in Jamaica. It is a 180 meter long and 55 meter
								high waterfall whose water flows directly from the river into the sea. Very special to
								see.
							</p>
							<br />
							<h6 className="font-weight-bold">Climbing Dunn’s River Falls </h6>
							<p>
								Dunn’s waterfall runs cascading down so you can find small lagoons everywhere. It is one
								of the most beautiful waterfalls in the world that you can climb. Many waterfalls are
								too dangerous for this, but not this one. You can climb up (and down) relatively easily
								here, but you can also just swim in the various pools.
								<br />
								You can climb high independently, as well as with a guide. There are various boarding
								places. The most beautiful route is from the beach. Then you can climb and clamber up on
								the way. And then you will automatically see the larger swimming pools.
								<br />
								On the way, see how the water has buffed the rocks. Most are strikingly round and also
								quite smooth. So pay attention. Especially in places where algae grow you can quickly
								fall. These are the dark places and you better avoid them. You can also wear special
								water shoes, but it is relatively easy with bare feet. as long as you hold onto the road
								well. And you move on calmly.
							</p>
							<br />
							<h6 className="font-weight-bold">Short History</h6>
							<p>
								This tourist attraction is to be the scene of the legendary historical battle for “Las
								Chorreras”.
								<br />
								In 1657, the Spaniards and the English fought for the ownership of the country. The
								Spaniards were defeated.During England’s triumph over Spain, the name of the island
								seemed lost in translation and was somehow reduced to the Spanish name Ocho Rios, which
								means “eight rivers” and changes it from “Las Chorreras”. Ironically, Ocho Rios doesn’t
								have eight rivers, only four. If this history lesson doesn’t call, you’ll definitely
								have the beauty of the region in the James Bond movie of Dr. No, or beach scenes from a
								cocktail with Tom Cruise, and in recent years a paradise for fashion fans in the Next
								Top Model series in America.
							</p>
							<br />
							<h6 className="font-weight-bold">
								Other activities at Dunn’s River Falls: something for everyone{' '}
							</h6>
							<p>
								Chasing waterfalls is not for everyone, so if you only need a simple shutter against the
								cascades, you should do it this way. There are many alternative activities that will
								keep you entertained while you wait for vacation mates to climb the waterfalls.
								<br />
								Enjoy the central garden: a tropical garden with a water park for children
								<br />
								The rustic room has three lush gardens, a waterslide and a protective pad as a focal
								point, and offers 12 wood-covered kiosks as Dunn’s River Falls Park merchandise, ice
								cream, pizza and many other items.
								<br />
								Get authentic souvenirs on the craft market
								<br />
								Get caught up in the highly competitive world of handicraft markets at Ocho Rios.
								<br />
								Craft markets abound, but because Dunns River Falls is the biggest attraction, it’s fair
								to say that the Dunns River Falls Park Handicraft Market offers some of the best
								souvenirs.
								<br />
								Relax on the beach at Dunn’s River Falls
								<br />
								Dunn’s River Falls Beach is located at the base of the waterfall and offers spectacular
								views of the falls. Your waterfall adventure includes all-day beach access. So go for a
								walk on the beach and admire the flora near the waterfalls (including tropical plants
								such as bamboo, throats, ferns, ginger lilies, orchids and various species) palm trees
								and bread trees) orjust watch the sunset while you’re in. Relax at the foot of a decent
								beach.
								<br />
							</p>
							<br />
							<h6 className="font-weight-bold">Enjoy local dishes at the waterfalls </h6>
							<p>
								To experience real Jamaica cuisine, visit the café that serves chicken, pork, fish and a
								variety of snacks. Pack your own picnic for a nice day with family and friends and cook
								your favorite barbecues spread out in the park.{' '}
							</p>
							<br />
							<h6 className="font-weight-bold">Best time to visit Dunn’s River Falls</h6>
							<p>
								Dunn’s River Waterfalls, known as a living phenomenon, have become a distinguished list
								around the world. Needless to say, crowds are something to know, especially when it
								comes to cruise ships. Crowds can easily be avoided if you know the right time to visit.
								Check the Ocho Rios cruise ship schedule on the days when you want to book tickets or
								trips. When booking a trip, the tour operator should be able to give the best advice.{' '}
							</p>
							<br />
							<h6 className="font-weight-bold">
								Daily opening hours of the Dunn River (Monday – Sunday):{' '}
							</h6>
							<p>8:00 – 16:00 on non-cruise days and </p>
							<p>7 am – 4 pm on days on a cruise ship</p>
							<br />
							<p>
								Tip of the day: Avoid on Wednesdays. Wednesdays are busy cruise days. Saturdays and
								Sundays are great days to visit the waterfalls, but also busy days, because it is a
								weekend for local tourists. We also recommend that you consider your case first thing in
								the morning or afternoon. In this way you will miss daily masses. The entrance takes
								from 35 minutes to 1 hour and 30 minutes. The faster you start moving, the longer you
								will have to record everything with limited intervals.{' '}
							</p>
							<br />
							<h6 className="font-weight-bold">
								Tip for the insiders: read our detailed guide when the best time to travel to Jamaica
								is.
							</h6>
							<p>
								Includes temperature and rainfall at various locations in Jamaica, as well as an
								overview of annual events in Jamaica. The temperature of the water during precipitation
								is quite constant throughout the year. On rainy days you can expect a bit of cold water.
								Similarly, on hot, sunny days, the water temperature in Dunn’s Falls waters is less
								likely, but cool and refreshing.{' '}
							</p>
							<br />
							<h6 className="font-weight-bold">Where is Dunns River Falls and how to get there?</h6>
							<br />
							<p>
								Visitors can take a 5-minute drive to the shore or water from one of the Sandals
								resorts, including Sandals Ochi (all inclusive resort for couples), Beaches Ocho Rios
								(all inclusive resort for families) and Sandals RoyalPlantage (luxury butler beachside
								apartments). If the surrounding cities have aroused your interest, please note that
								Dunn’s River Falls is 1 to 3 hours away by car, depending on the location.{' '}
							</p>
							<br />
							<p>From Falmouth to Ocho Rios: 1 hour and 10 minutes by car. </p>
							<p>From Kingston to Ocho Rios: 1 hour, 15 minutes drive. </p>
							<p>From Montego Bay to Ocho Rios: 1 hour and 45 minutes by car. </p>
							<p>From Port Antonio to Ocho Rios: 2 hours by car. </p>
							<p>From Negril to Ocho Rios: 3 hours by car. </p>
						</div>
					) : id === '1' ? (
						<div>
							<p>
								Bob Marley is considered one of the absolute titans of world music, known for his
								thrilling reggae melodies and strong attachment to political and social justice. Marley
								was born in Jamaica in 1945. His Jamaican heritage inspired his music; he had an
								extremely successful career until he died tragically of malignant melanoma in 1981.
								Until now, he has been a cult talisman for this colorful Caribbean nation, and tourists
								can still visit some Marley themed attractions in Jamaica.{' '}
							</p>
							<br />
							<h6 className="font-weight-bold">Bob Marley Museum, Kingston </h6>
							<p>
								The Bob Marley Museum is located in the capital, Kingston. The museum is housed in
								Marley’s former home, which was also the original studio of the famous Tuff Gong label
								founded in 1970 by Marley and The Wailers. Here, the infamous attempted assassination
								attempt on Marley was unsuccessful in 1976, causing him to be wounded but not dead. The
								Jamaican Government declared this museum a national heritage protected in 2001. The tour
								includes an insight into the platinum Marley CD collection, original press clippings and
								authentic stage costumes, you even have access to Marley’s bedroom and kitchen.
								<br />
								Remove some time from your running and swimming to give proper respect to a melodic
								legend. Situated in Kingston, this historical center possesses the previous home of Bob
								Marley. Inside, you’ll see individual ancient rarities, Marley’s own chronicle studio
								and his room, among different features. Make certain to snap a couple photographs by the
								encompassing wall, decked out in Rastafarian “ice, gold and green” (or red, yellow and
								green).
								<br />
								Remember that this site can get occupied, which made the experience disillusioning for a
								few. All things considered, others said their visit guides made Marley and his music
								come to life.
							</p>
							<br />
							<h6 className="font-weight-bold">Bounce Marley Experience & Theater, Montego Bay </h6>
							<p>
								Tourists can likewise look at the Bob Marley Experience and Theater in Montego Bay. This
								68-seat theater includes a complete narrative film on the life and work of Marley. The
								performance center has cooling, a wonderful reward for those hoping to get away from the
								sweltering evening sun in Montego Bay. Following the screening visitors have the choice
								of scrutinizing the performance center’s blessing shop, loaded with memorabilia and
								trinkets. Truth be told, this blessing shop positions as the biggest assortment of Bob
								Marley trinkets on the planet, as per Visit Jamaica.{' '}
							</p>
							<br />
							<h6 className="font-weight-bold">Nine Miles (Bob Marley Birthplace):</h6>
							<p>
								Come and see where Bob Marley, legendary reggae king was born in the village of Nine
								Miles Street. Ann February 6, 1945. And where he was buried in the mausoleum, you can
								touch May 21, 1981. Nine Mile is owned and managed authentically by the Bob family. Many
								come from far to visit this quiet village to experience and sensitize Bob’s beginnings.
								<br />
								Nine Mile is where Bob’s journey began and influenced many of his songs. The quiet
								hometown of Bob offers visitors a truly wonderful tour of Bob’s birthplace (the original
								birthplace), the natural areas where he grew up and where he spent most of his time
								meditating on the “mountain”. Zion Rock. ” Nine Mile offers a bird’s-eye view of Bob’s
								birth, life and resting place, and the environment was a solid foundation that
								influenced the music and legend of King Reggae.
							</p>
							<br />
							<h6 className="font-weight-bold">Bounce Marley Mausoleum, Nine Mile </h6>
							<p>
								Another intriguing fascination is the Bob Marley Mausoleum. Situated around an hour and
								a half from Ocho Rios in the modest town of Nine Mile, the Bob Marley Mausoleum acquires
								reggae fans from around the world. Nine Mile was the site of Bob’s introduction to the
								world, and it currently fills in as his last resting spot. The fascination comprises of
								a catacomb and a two-room bungalow, which was at one time Marley’s youth home. The cabin
								overflows with family treasures, and the catacomb is set up so you can see Marley’s real
								tomb. A little blessing shop sells memorabilia nearby.{' '}
							</p>
							<br />
							<h6 className="font-weight-bold">Final Words: </h6>
							<p>
								The Bob Marley Tour takes you up to 14 km, a charming little village in the beautiful
								mountains of St. Ann in Jamaica, where thousands of Bob Marley fans every year make
								pilgrimages to pay homage and place of birth, and last To experience the peace of King
								Reggae Place.
								<br />
								Our Reggae adventure with Bob Marley begins with a hotel or cruise ship.
								<br />
								From Ocho Rios, Nine Mile is an hour and a half drive through the village and a journey
								that will take you to a part of Jamaica that few tourists appreciate.
								<br />
								Our breathtaking ride to the Graceland of Reggae begins with a tour of the famous Fern
								Gully, where we wander uphill through some of the most beautiful landscapes of Ocho
								Rios.
								<br />
								Our journey continues to the Jamaican countryside, enjoying the sounds of Bob Marley and
								admiring the rural villages in the hilly landscape of Jamaica. When you arrive at Nine
								Mile, you’ll discover the area and home that influenced Bob Marley to write lyrics for
								his most famous songs.
								<br />
								Your trip starts with a walk around the same house where Bob lived as a small child.
								<br />
								Your Rastafarian guide tells stories from Bob Marley’s childhood and musical career.
								<br />
								Our Nine Mile Bob Marley tour is a tour for die-hard fans of Bob Marley and for those
								seeking a better understanding of a young man whose music and vision have helped change
								the minds of people around the world.
								<br />
								His music and message were global, and his premature death made him a legend and an
								icon. On the way back to Ocho Rios you can go shopping or visit the local chicken
								center, where you can enjoy an authentic lunch of chicken, pork, rice and peas. Robert
								Nestor Marley talked about simple ways of living in the countryside. He spoke about
								peace, respect and freedom. These are the values ​​and qualities that were passed on
								during his youth in a small mountain village, which is still called Nine Mile. Love and
								a great Jamaican adventure. If you’re a fan of Bob Marley, don’t miss it.
							</p>
						</div>
					) : id === '2' ? (
						<div>
							<p>
								Beach vacations are loved for many reasons; relax and unwind, campfires at night, walks,
								cocktails, a romantic dinner on the beach with a beautiful sunset and enjoy the view.
								And did you know that everything is also possible in Jamaica? You will find small bays,
								long beaches, rugged rocks, shells and crabs, the most beautiful sunsets, parties and
								snorkeling opportunities. We have listed the most special Jamaica beaches for you here
								with palm trees, glass-bottom boats and waterfalls. Treat yourself to a beach vacation
								to Jamaica and also discover the gems of this Caribbean island. <br /> Beach and Jamaica
								are one. The tropical sun, the palm trees and the most delicious drinks are within
								reach. Snorkeling, diving and making trips with the glass bottom boat are mainly done in
								tourist places such as Ocho Rios, Montego Bay and Negril. However, most beaches in Ocho
								Rios and Montego Bay are only accessible to hotel guests or when you pay an entrance
								fee. They are therefore not included in this blog, because here we want to get
								acquainted with the more special beaches of Jamaica. We start our beach discovery trip
								in Negril and go around the island counterclockwise.{' '}
							</p>
							<br />
							<h6 className="font-weight-bold">Negril and its vast beaches </h6>
							<p>
								Negril is at the top when it comes to beach and party. The eleven kilometre-long beach
								has almost full-length hotels and bars with Margarita Ville as the most famous party
								bar. Yet it is not terribly busy. Negril is actually a small village in the western
								corner of the island. On the beach, for example, you will not see high ugly hotels or a
								luxury boulevard and the shop that there are consists of small local boutiques with
								mainly clothing, jewellery and carvings.
								<br /> Because Negril attracts many tourists, there are also many beach vendors. Some
								can sometimes do their best too much. The advice, when you are not in the mood to buy,
								is to say calmly and clearly that you are completely satisfied, so you do not need
								anything. <br />A long morning walk on ‘7-mile beach-Negril’ to the east, brings you to
								a small beach where Doctor Love welcomes you and conjures up cool beer from his tree
								bar; the well-known Red Stripe. It is well worth the walk because it is an idyllic beach
								and there is a relaxed atmosphere. <br />
								In the morning you see a lot of joggers on the beach, in the afternoon especially those
								who enjoy sunbathing and swimming. You should not miss the beautiful sunset, in all the
								colours of the rainbow around six in the early evening; it’s the time for a nice drink,
								photos and chat. In the evening you can dine at different places on the beach. A table
								for 2 surrounded by torches, how romantic can you have it? Later in the evening, there
								is live music and you can walk from bar to bar on the beach. Here and there a ‘bonfire’
								and further dancing and singing along on reggae and dancehall tunes. <br />
								There is a reef off the coast of Negril. There are several places on the beach where you
								can find information about a boat trip to the reef and snorkelling or diving
								opportunities. In the area of ​​Negril, there are also small local bays that are really
								worth a visit, they have a unique atmosphere and it is nice and quiet. Find a local tour
								guide to take you and bring your snorkel gear!{' '}
							</p>
							<br />
							<h6 className="font-weight-bold">Bluefields Bay </h6>
							<p>
								This beach can easily be combined with a visit to the Mausoleum of Peter Tosch in
								Belmont. You also have a fantastic accommodation option with a Rasta family who have a
								cottage on their land with their own kitchen, WiFi and 2-3 rooms with verandas; Natural
								Cottages by Doctor Bush. Bluefields Bay is located in Bluefields Beach Park and is a
								long, narrow beach with a nice view.
								<br />
								There are a few trees for shade where you can hang your hammock. In the park, you can
								change clothes and use the toilet. Along the beach, you will find a few stalls with
								snacks and drinks. This is the place to enjoy a ‘local beach’ in peace and quiet with
								the typical ‘local feel’ without being very busy or noisy.
							</p>
							<br />
							<h6 className="font-weight-bold">Treasure beach </h6>
							<p>
								No jet skis, para-sailing or glitzy nightlife, but a friendly community with a few small
								bays; Fort Charles Bay, Billy’s Bay, Frenchman’s Bay, Calabash Bay and Great Pedro Bay.{' '}
								<br />
								Fort Charles Bay is about 16 km long and closest to Black River if you want to make a
								trip to the river full of crocodiles. Billy’s Bay is a fishing beach par excellence.
								Frenchman’s Bay is best known for its bars and restaurants. <br />
								Calabash Bay with its 600 m long beach has bars and restaurants and stalls on the beach.
								The most trendy hotel/restaurant Jack Sprat is located here and has recently been
								expanded with a backpackers hostel. Welcoming Vibes in Calabash Bay is the place for
								your overnight stay if you want to support the community and stay ecologically, it also
								looks fantastic with handmade furniture made of wood. Moreover, you have a great view
								from the upper rooms. <br />
								Great Pedro Bay is a little more remote from the rest to the east. If you really are
								looking for no other distraction than nature and Rasta Viking, you can rent rooms from
								him. Treasure beach is not that big and so you can easily walk from one bay to the
								other.{' '}
							</p>
							<br />
							<h6 className="font-weight-bold">Gut river</h6>
							<p>
								The most remote part of Jamaica in the bush, with waterfalls and caves, old slave paths
								to the villages and a ‘Blue hole’ with mineral water, on the most fantastic expansive
								quiet beach of Manchester. This is Gut River. Little Ochi, Rockey Point, Manatees, Care
								Valley and Milk River Mineral Spa & Hotel in the nearby area to explore. Not to mention
								the hotel on top of the hill with amazing views over the entire area: Rustic Guesthouse.
								They have karaoke on Fridays! Make no mistake there is a lot of singing talent among
								locals. Gut River, where the river meets the ocean, has been sold and recently small
								cabins have been placed so that you can spend the night there and if you bring your own
								tent you can also camp there. Rasta Gully and Country Cook Out can provide dinner and a
								campfire if you wish. There is no store, no electricity and reception for your cell
								phone are also difficult. In addition, you can enjoy pure nature, palm trees, the beach
								and the mystical river with its Blue Hole for swimming.{' '}
							</p>
							<br />
							<h6 className="font-weight-bold">
								Beach at Kingston; Hellshire Beach and Bob Marley Beach{' '}
							</h6>
							<p>
								Go to Hellshire Beach on a Sunday to immerse yourself in the real Jamaican beach scene.
								Here families come to chill and relax, children play in the water, couples are embraced
								intimately in the sea, restaurants sell delicious fish, and dance hall dance lovers
								improvise on the beach. In short, a lively beach in Portmore – Kingston. East of
								Kingston in the direction of the airport is the so-called Bob Marley beach or Bull Bay.
								You get there by driving a dirt road at a height of 9 miles until you reach a beautiful
								bay. It is a quiet local beach with a bar where you can also buy something to eat, such
								as fish. In strong winds, the waves are powerful and not suitable for children, but it
								is an ideal place near Kingston for the Sunday afternoon to leave the city behind.{' '}
								<br />
								Bull Bay is the largest Rastafarian community on 13 Marcus Garvey Way, Zion Hill with
								around 300 residents. You can hear the singing during the ceremony and the Nyabinghi
								drum at set times. The unknown, hidden Cane River Falls at the height of Bull Bay is the
								place where Bob Marley often came, they say to wash his hair.{' '}
							</p>
							<br />
							<h6 className="font-weight-bold">Long Bay, Boston Bay and Winnifred Bay </h6>
							<p>
								From the far east, past Manchioneal with its spectacular Reach Falls, you will come to a
								long beach called Long Bay. The beach is deserted, the waves are strong. At the beach is
								a cozy, local restaurant-bar, where you can eat and relax in your beach chair and enjoy
								the panoramic view of your drink. The small village has a library, with wifi access. If
								you want to stay the night there is the Hotel Sea Dream, on the beach or a B&B in the
								village just in front of the library and the shop on the other side of the road. A
								little further on is Boston Bay and the favourite Jerk Center with its annual Jerk
								festival, the best place for Jerk Food. Boston Bay is a cozy, small, round bay with
								beautiful blue water, a picture like a postcard, where surfing is possible. Boston Bay
								has a backpackers, hippie-like atmosphere. If you are in Portland, you should definitely
								not miss this bay. <br />
								Winnifred Bay is a family beach with a local atmosphere, fully equipped. People come
								here to chill out and for the children, it is safe to swim. It looks completely perfect
								with beautiful white beach, trees, bars, food stalls and arts and crafts. The bay is
								larger than Boston Bay, so you have a wider view. You can get there by car but it is
								more convenient to descend to the beach via a walking path.{' '}
							</p>
						</div>
					) : id === '3' ? (
						<div>
							<p>
								Warming sun rays, vast beaches, beautiful sunsets, waterfalls and forests, delicious rum
								and addictive music. That’s Jamaica! As soon as you are in Jamaica you dance and sing
								along with the reggae tunes. The dancehall parties with the sexy moves are a feast for
								the eyes. In addition to dancing and music, the Jamaicans enjoy discussing all kinds of
								subjects: an artist, sports or something that has just happened. This is often possible
								in English, but they also speak with Patois. You will soon have a say when you are on
								vacation in Jamaica and if you have trouble with it you will hear: “No worry, soon
								you’ll catch it!”. The exotic Jamaica is a place that can satisfy you intensely, it is
								buzzing and oozing, gives you energy and has a calming effect at the same time. Are you
								traveling to this unique Caribbean island where you can feel the African influences?
								Below are some of the hotel in jamaica.{' '}
							</p>
							<br />
							<h6 className="font-weight-bold">1. Hotel Four Seasons , Kingston</h6>
							<p>
								Kingston is a dynamic stronghold of art, music, rastas and rum. You can feel the
								laidback lifestyle and arty vibe everywhere. If you want to stay in Kingston for one or
								more days, check out Hotel Four Seasons. A good hotel with 114 rooms, excellent service,
								not far from the National Gallery and the Bob Marley museum. Also with swimming pool to
								cool off after a day of sightseeing. From € 105.{' '}
							</p>
							<br />
							<h6 className="font-weight-bold">2. Great Huts , Port Antonio</h6>
							<p>
								Boston Bay is located on the northeast coast of Jamaica where you can see Great Huts on
								top of the cliffs. Inspired by afro culture, eco-friendly and a bit artistic; actually
								it is nothing like the typical Caribbean resort. It has 17 rustic accommodations – from
								bamboo hut, stone towers to a reproduction of an African silo where you can sleep – and
								tree houses on a jungle-like terrain. You will not get closer to nature and the basics
								of life than here: the rooms do not have a television, a few lack hot and cold running
								water and as a guest you are told that lizards, frogs and crabs keep you company. The
								atmosphere is special and all rooms have colorful African art. From € 37.{' '}
							</p>
							<br />
							<h6 className="font-weight-bold">3. The Palms Negril , Negril</h6>
							<p>
								Close to the lively Seven Mile Beach is this relaxed and attractive two-star hotel
								surrounded by tropical gardens, 5 km from Negril. It is what you expect from a tropical
								hideaway and a sunny stay in Jamaica: colorful, neat, with a stylish beach bar and
								swimming pool and super friendly staff. Negril’s tourist beach life starts around the
								corner, but it is quiet on the site itself. You choose from 35 standard or deluxe rooms.
								From € 128.{' '}
							</p>
							<br />
							<h6 className="font-weight-bold">4. Villa Sonaté , Runaway Bay</h6>
							<p>
								Villa Sonaté is located in the hills of Cardiff Hall, Runaway Bay, St. Ann near Runaway
								Bay Golf Course. A small but very nice place to relax and explore the island from there.
								The Green Grotto Caves and Puerto Seco Beach Park are not far away. You choose from 15
								suites, 1 of which is a honeymoon suite, all of which are equipped with whatever you
								want at home. Eating out is good in Jamaica, but if you want, you can go to the
								accompanying Lantana restaurant. From € 81.{' '}
							</p>
							<br />
							<h6 className="font-weight-bold">5. Banana Shout resort , Negril</h6>
							<p>
								Banana Shout Resort is located on the west coast of Jamaica just a short kilometers from
								the historic Negril Lighthouse. Recently transformed into a small boutique resort and a
								cool place as a base for your Jamaica vacation. Nice to know: everything you see – from
								the buildings to the furniture – is handmade by Jamaicans in Jamaican style. Choose from
								four cottages with spectacular sea views and get the sunsets for the most beautiful
								Jamaica moments as a gift.{' '}
							</p>
							<br />
							<h6 className="font-weight-bold">6. Westender Inn , Negril</h6>
							<p>
								Acclaimed, family-run boutique hotel in Negril in a beautiful location on the Caribbean
								Sea. With unique 28 rooms, suites and cottages in beautiful surroundings. The features:
								charming, friendly service and extremely affordable. The rooms are tastefully decorated
								in Jamaican ‘island style’ and all have sea ​​view for beautiful sunsets. From € 114.{' '}
							</p>
							<br />
							<h6 className="font-weight-bold">7. The Cliff Hotel</h6>
							<p>
								Hotel Cliff has been recognized by guests for several reasons, including stunning
								reasons and attentive customer service. The Cliff Hotel in Negril, Jamaica offers a spa,
								outdoor pool, fitness center, paid yoga lessons and an outdoor games room. In addition
								to numerous amenities, the hotel has 26 apartments and villas that also impress with
								their size and features. Rooms from 480 square feet are equipped with verandas and
								hammocks, mini refrigerators, free internet access and a direct view of the Caribbean
								Sea.
								<br />
								Choose a villa if you need even more space (the villas have an area of ​​1050 to 5000
								square meters), as well as a private courtyard and outdoor tub. Enjoy even greater views
								in the hotel restaurant Zest, which specializes in fish dishes. Or simply relax with a
								cocktail in one of the three bars at the resort. Lovebirds take note: Critics say the
								Cliff Hotel is the perfect place for a romantic getaway or honeymoon.
							</p>
							<br />
							<h6 className="font-weight-bold">8. Iberostar Grand Rose Hall</h6>
							<p>
								Iberostar Grand Rose Hall on the north coast of Jamaica in Montego Bay offers luxurious
								facilities that increase the comfort of guests. After checking in at one of the 295
								all-inclusive apartments, which are only accessible to adults and are decorated in
								tropical shades of orange and blue, you will receive a selection of pillows, a minibar
								(stocked according to your preferences) and free Wi-Fi welcome access, butler and
								jacuzzi services Outside the room there are four restaurants with an à la carte menu,
								two buffet meals, five bars (including one at the nightclub), a spa, a beach and two
								swimming pools (and a lazy river) surrounded by roofed sunbeds.{' '}
							</p>
							<br />
							<h6 className="font-weight-bold">9. Secrets St. James Montego Bay</h6>
							<p>
								In the same lane of Montego Bay, Jamaica, sand like the secrets of wild orchid Montego
								Bay, the secrets of St. James offers all the amenities of a luxury all-inclusive hotel
								on the beach, but is only about 3 km southwest of Sangster International Airport. The
								resort offers 350 apartments for adults only, which are elegantly decorated in soft,
								neutral colors and equipped with four-poster beds, 24-hour room service, a flat-screen
								TV and a balcony with sunbeds. Some of these balconies overlook St. James’s Ivory Beach,
								but all facilities are located near the pool, where guests can relax with free service –
								part of the unlimited luxury Secrets package.
								<br />
								With Unlimited-Luxury guests can also enjoy wireless internet access, take part in
								themed events, take part in activities such as snorkelling and tennis, and enjoy an
								unlimited amount of food and drinks. Former travelers enter Secrets St. Nine James’s
								restaurants mixed up the reviews, although most said they enjoyed a meal at Oceana’s
								seafood restaurant and El Patio’s Mexican influence. Others warned that some parts of
								the property are currently under renovation, so expect some closures and construction
								noise.{' '}
							</p>
							<br />
							<h6 className="font-weight-bold">10. Breathless Montego Bay Resort & Spa</h6>
							<p>
								If you’re looking for a lively adults-only resort in Montego Bay, Jamaica, previous
								guests say you want to book a stay at the breathless Montego Bay Resort Meanwhile,
								travelers seeking relaxation can treat themselves at the Spa by Pevonia, located at
								Secrets Wild Orchid and Secrets St. James withdraws. The brand’s Endless Privileges
								program also gives tenants access to restaurants and bars at Secrets and Sunscape
								branded resorts near Breathless Montego Bay.
								<br />
								Or travelers can dine on-site in one of the property’s six restaurants. On the roof of
								the resort there is one of the restaurants and a pool with a bar in the pool. The
								property also offers a beach bar, cocktail bar and lobby bar. Along with the long list
								of amenities, the resort received praise from travelers for its Gilchrest accommodations
							</p>
						</div>
					) : id === '4' ? (
						<div>
							<p>
								If you say Jamaica, Bob Marley is directly on your retina, including rasta, reggae and a
								lot of weed. You can taste the ‘don’t worry be happy’ vibe on the entire island, from
								the pearly white beaches to the rough inland. Not ‘one love’, but you certainly want to
								experience ten loves firsthand.
							</p>
							<br />
							<h6 className="font-weight-bold">1. Dunn’s River Falls</h6>
							<p>
								Near Ocho Rios, the waterfalls of Dunn’s River are one of the most famous attractions in
								the country. Climb the limestone on your own or together with a guide. Due to the strong
								current, some caution is required. Don’t forget to look around you, because the views
								with the rainforest by your side are fantastic!
							</p>
							<br />
							<h6 className="font-weight-bold">2. Dolphin Cove</h6>
							<p>
								Is ‘swimming with dolphins’ on your bucket list? Then this is an unmissable spot during
								your vacation to Jamaica. At this beautiful location, you will meet dolphins in their
								natural habitat. Cuddle (carefully) and play with these beautiful animals and learn
								about their everyday habits. Dreams do come true!
							</p>
							<br />
							<h6 className="font-weight-bold">3. Montego Bay</h6>
							<p>
								When you need sun, sea, sand with the facilities of a bustling city within reach, you
								are in Montego Bay. The third-largest city in Jamaica has a vibrant nightlife, offers
								tax-free shopping, is known for beautiful beaches and is a true water sports paradise.
								Dive into the Widowmaker’s Cave during the day and drink a cocktail in the ‘Pier 1’ bar
								in the evening. Cheers!
							</p>
							<br />
							<h6 className="font-weight-bold">4. Green Grotto Caves</h6>
							<p>
								The north coast of Jamaica is also charismatic underground. The largely undiscovered
								labyrinth of mystical caves with unique rock formations, stalactites and stalagmites
								served as a shelter for the Spaniards in the 17th century and was used as a smuggling
								route in the 20th century. Look out your eyes and don’t be frightened by the bats!
							</p>
							<br />
							<h6 className="font-weight-bold">5. Mayfield waterfalls</h6>
							<p>
								Two bizarre beautiful waterfalls, 21 natural swimming pools, lots of exotic flowers,
								plants, birds, butterflies and wildlife make the Mayfield waterfalls in the Westmoreland
								area a special day trip. The calm water in combination with the jungle-like environment
								brings you closer to nature. Tip: wear water shoes, because the stones can be quite
								slippery.
							</p>
							<br />
							<h6 className="font-weight-bold">6. Blue Mountains</h6>
							<p>
								Marvel at the fabulous Blue Mountains area, which stretches for 45 kilometres northeast
								of Kingston, the Cinchona Botanical Gardens and the Hollywell National Park. Take a
								full-day coffee tour from the capital, scout for several days into unspoilt nature or
								take a night walk to the Blue Mountain Peak, which is the highest peak at 2,256 meters.
								At the end of a tough journey, you will be treated to an enchanting sunrise. An
								experience that you will remember for a long time.
							</p>
							<br />
							<h6 className="font-weight-bold">Kingston</h6>
							<p>
								The cultural and economic heart of the island can be found in the capital Kingston. The
								city offers a nice mix of history and hipster affairs. Old buildings, street markets and
								art museums alternate in the city centre. Uptown, on the other hand, is modern and
								flashy. Visit the National Gallery of Jamaica, the Bob Marley Museum and come to
								yourself in the National Heroes Park. As in any major hub, it can be quite busy. Embrace
								the chaos and shuffle to the sounds of this musical city.
							</p>
							<br />
							<h6 className="font-weight-bold">Reggae Beach</h6>
							<p>
								To the east of Ocho Rios are beautiful beaches hidden under cliffs. Reggae and Boscobel
								Beach are the best known. The combination of white sand, blue water and romantic views
								create an unforgettable tropical paradise. With on-going entertainment from Jamaican
								dancers, drummers, exotic singers and artistic acrobats you will experience the laidback
								culture here at its best.
							</p>
							<br />
							<h6 className="font-weight-bold">Rio Grande</h6>
							<p>
								You can raft on the wide river the Rio Grande with a raft over the beautiful waters of
								Jamaica. Be guided through the rugged rainforest during a two and a half hour trip. A
								local ‘captain’ shows the way. Along the way you take a refreshing dip and have a
								traditional lunch. A breathtaking experience!
							</p>
							<br />
							<h6 className="font-weight-bold">Bob Marley Mausoleum</h6>
							<p>
								In addition to enjoying the sensational natural beauty, a tribute to musical hero Bob
								Marley should not be missed. Between Montego Bay and Ocho Rios, you visit the birth and
								burial place of the legend in Nine Mile. The handwritten notes on the interior walls of
								the house show how great he was among the people. Put it on your agenda as the
								first-morning activity, so as not to be among a mass visit of cruise shipgoers!
							</p>
						</div>
					) : id === '5' ? (
						<div>
							<p>
								Jamaica is a popular destination for a sunny holiday. The Caribbean island is not only
								tropical hot but also quite humid. This naturally results in lush greenery. Due to the
								tropical savannah climate, Jamaica has a dry period and a rainy season. Although it is
								always nice and warm on the island of Rum and reggae, some periods are better suited to
								a vacation than others.
								<br />
								In Jamaica, the weather is nice all year round. So you can always go on holiday to this
								Caribbean island. It is always warm and fairly humid, which results in beautiful green
								nature reserves. Because the country has a dry season and a rainy season, there are
								periods that may be less pleasant than other periods. We found the best travel time for
								Jamaica for you.
								<br />
							</p>
							<h6 className="font-weight-bold">Rain</h6>
							<p>
								The rainy season of Jamaica runs from May to November, where most of the rain of the
								year often falls in May, June, September and October. These showers often do not last an
								entire day and the sun then dries everything up quickly. In the rainy season the chance
								of severe weather conditions, such as hurricanes and tropical currents, is also greater
								than in the rest of the year. Therefore always check the current situation and weather
								forecasts in Jamaica before you leave.
								<br />
								Whether you are looking for culture, a special long-distance trip or just planning an
								active holiday: you want good weather when you travel. That is why it is useful to check
								the current outlook for Jamaica in advance so as not to be surprised by bad weather
								conditions.
								<br />
								Do you want to know what the climate and weather forecast are in Jamaica? Below you will
								find the average temperature and rainfall per month so that you know whether you should
								count on rain or shine. This way you will always be prepared for your trip.
								<br />
							</p>
							<h6 className="font-weight-bold">Temperature</h6>
							<p>
								Jamaica is hot all year round. It is warmest in the rainy season, in which the average
								temperature is a maximum of 30 degrees. In the dry season, December to April, it is on
								average 28 degrees. The seawater is also nice and warm, so you can always swim. Because
								Jamaica is an island, it can blow a bit in the coastal areas. This ensures a nice
								cooling in the warm sun. The wind usually comes from the northeast.
								<br />
								The dry season lasts from December to April. That is also the period that counts as the
								best travel time for Jamaica. The temperature is pleasant during the day and around 28
								degrees, the water is also nice with an average temperature of 27 degrees. Keep in mind
								that it is always moist in Jamaica, so it can feel rather clammy, especially in the
								interior. Along the coast, there is a cooling trade wind but in the forests, it is too
								sheltered for that. That is something to take into account for excursions and
								activities.
							</p>
							<br />
							<h6 className="font-weight-bold">Crowds </h6>
							<p>
								The dry season is also the high season of Jamaica, it is busier there than in the rest
								of the year. The island is full of tourists, especially at Christmas and Easter. In
								addition, the prices of restaurants and hotels in Jamaica are also higher in high
								season. A disadvantage of a holiday in the offseason can be that hotels sometimes offer
								less service. In that case, it is smart to inform the hotel about this in advance.
							</p>
							<br />
							<h6 className="font-weight-bold">Best travel time </h6>
							<p>
								Jamaica is always the right place for the warmth and you can lie on the beach all year
								round. Do you not like rain and do you want to avoid tropical storms? Then go in the dry
								season, between December and April. Keep in mind that it can be busier and the prices
								are a bit higher than in the rainy season. But you get the best in return.
							</p>
							<br />
							<h6 className="font-weight-bold">Hurricanes </h6>
							<p>
								Although Jamaica is in an area with fairly high hurricane activity, the chance of a
								hurricane with a destructive power is rather small. Most hurricanes that hit Jamaica
								have already been watered down because they first moved over to another island. But a
								major storm is of course possible. The hurricane season lasts from June to the end of
								November, with the chance of a hurricane being greatest in the months of September and
								October.
								<br />
								However, even in the rainy season, the weather can be very pleasant. The rain falls in
								the form of refreshing, short (but often heavy) showers, while the rest of the day is
								just very nice weather. But especially during the months of August, September and
								October, you have a good chance of tropical storms and sometimes even hurricanes. If you
								want to go on a honeymoon to Jamaica or you want to get married in Jamaica, then you
								should better avoid that period.
							</p>
						</div>
					) : id === '6' ? (
						<div>
							<p>
								JamRock Taxi quality and attention to detail is second to none, all our airport
								transfers are done privately in a fleet of vehicles which are fully air-conditioned,
								modern and spacious. Take advantage of our low fees and enjoy the flexibility and
								comfort of traveling with us. We at Jamaica Tours and Transfers strive to provide high
								quality service to our customers on all occasions whether it is private shore excursions
								and customized tours or just simple private airport transfers.
							</p>
							<br />
							<h6 className="font-weight-bold">Montego Bay Airport Transfer</h6>
							<p>
								Our Montego Bay airport transfers are the best on the market. As said earlier, the
								vision of Jamaica Tours and Transfers is to be Jamaica’s most reliable tour and transfer
								provider that fulfills all the desires and needs of our guests.
								<br />
								Get quality service and make your experience in Jamaica even more memorable by availing
								our top quality private airport transfer from Montego Bay. Our previous guests have
								commended the high standard with which we deliver services. Whether you travel economy
								or first-class to Jamaica, your transfer from the Montego Bay International Airport to
								your desired destination will be in style and class.
								<br />
								Enjoy the luxury of our affordably priced private transportation service; never
								surpassing what it cost for shared transportation service. All Montego Bay airport
								transfers and tours are private allowing full access to the designated vehicle in which
								you will travel. The quality of our Jamaica transfers makes it unnecessary to choose
								another transportation option such as opting for a rent-a-car.
								<br />
								Jamaica Tours and Transfers operate an on-time Montego Bay airport transfer/taxi
								service, we are never late always arriving on-time, yet you will never be hurried. As
								said earlier our vehicles are fully air-conditioned, modern and spacious. We take
								special care of kids by providing complimentary child seats ensuring their safely and
								comfort.
								<br />
								Save precious vacation time and money by booking your airport transfer with us. Don’t
								spend hours at the Jamaica airport waiting on a bus to be filled, Jamaica Tours and
								Transfers offers the type of service that you rightly deserve. Give the best start to
								your vacation and end it just as smoothly as it began with our private Jamaica airport
								transfers.
							</p>
							<br />
							<h6 className="font-weight-bold">What to enjoy in Montego Bay Jamaica?</h6>
							<p>
								There is a variety of Montego Bay Jamaica attractions where you can have fun while
								visiting the island. These fun attractions are accessible to everyone including guests
								arriving on Cruise Lines at any of the Cruise Ports in Jamaica as well as to visitors
								staying in hotels. Known as the fastest growing city in the Caribbean, Montego Bay
								Jamaica is also one of the better known tourist resort town in the Caribbean region.
								Along with an International Airport, the city of Montego Bay also boasts a Cruise Ship
								Port and thousands of Hotel Rooms, thus making it the gateway of Jamaica welcoming
								thousands of visitors daily.
								<br />A trip to Jamaica must include visiting as many Montego Bay Jamaica attractions as
								possible; there is no possibility of regretting it; JamRock Taxi puts it all within your
								reach with its quality services.
							</p>
						</div>
					) : id === '7' ? (
						<div>
							<p>
								Jamaica is the land of legends such as Bob Marley and Usain Bolt to name a few.
								Jamaicans are proud and spontaneous people who are never shy about a starting a
								conversation. The country where you can dance to reggae music all day and all night
								long. Where you can spend your days on paradisiacal beaches or explore its green lushes
								mountains. Jamaica has more waterfalls than you have time to visit. Jamaica is a
								versatile and special holiday destination that a lot of people have discovered and a lot
								more are yet to discover! Travel specialist Karin, who has been living in Jamaica for
								years, gives you tips for making the most of the island.
							</p>
							<br />
							<h6 className="font-weight-bold">PARADISE BEACHES </h6>
							<p>
								Jamaica is especially popular with beach lovers and sun lovers. Do you see that idyllic
								picture with an azure blue sea, a snow-white sandy beach, a few waving palm trees and a
								clear blue sky? That’s Jamaica! The northern coast at Port Antonio has some of the most
								beautiful beaches on the island. Frenchman’s Cove is a quiet and somewhat romantic
								beach. At Long Bay Beach and Boston Beach, it is possible to surf in addition to
								swimming. Those who don’t like surfing should definitely visit Boston Beach: here you
								can taste the delicious jerk chicken, one of the most popular dishes in Jamaica.
							</p>
							<br />
							<h6 className="font-weight-bold">WATERFALLS AND BOATING ON A BAMBOO RAFT</h6>
							<p>
								What many people don’t know is that Jamaica is one of the greenest islands in the
								Caribbean. This not only attracts the beautiful beaches, but also the fresh green nature
								to Jamaica. For example, you can climb the Dunn’s River Falls near Ocho Rios. If you go
								early in the morning you are ahead of the crowds. Another – less known – place where you
								can climb waterfalls is Irie Blue Hole, a few kilometres from Ocho Rios. You can also
								discover the beautiful nature from the water, with a trip on a bamboo raft. This is
								called rafting in Jamaica, but actually, it is relaxed rafting.
							</p>
							<br />
							<h6 className="font-weight-bold">JAMAICA UNDER THE SPELL OF BOB MARLEY</h6>
							<p>
								Jamaica’s nature is fantastic, but what makes a trip to the Caribbean island really
								special is an introduction to the people. On the street, in the restaurant, on the
								beach: everywhere you go Jamaicans sing the popular songs of the legend Bob Marley. They
								often even use the texts in a conversation. They are all too proud that this
								world-famous musician was born and raised in Jamaica. Jamaicans are never in need of a
								conversation. In addition to talking, they also enjoy listening to other people’s
								stories. About places in other parts of the world, but also about places visited in
								Jamaica. Although Jamaica is quite compact, some people have never left their home
								village.
							</p>
							<br />
							<h6 className="font-weight-bold">DON’T WORRY, BE HAPPY </h6>
							<p>
								The motto of the Jamaicans seems: if you take care of us, then we will take care of you.
								But what exactly do they mean by this? If you go home with great experiences, you tell
								good stories to people at home. You might even persuade people to book their next
								vacation to Jamaica. Because tourism in Jamaica is starting to flourish, the local
								economy is also getting a boost. The Jamaicans want you to leave the island with a good
								feeling and they do everything to make that happen. So don’t be surprised if a stranger
								on the street asks you if everything is going well. There are no annoying ulterior
								motives behind this because he or she genuinely wants to know if everything is going
								well for you.
							</p>
							<br />
							<h6 className="font-weight-bold">SECURITY IN JAMAICA </h6>
							<p>
								What about safety in Jamaica? Many people think that this Caribbean island is too
								dangerous to travel around. But nothing is less true. Jamaica is a destination where you
								are met at the airport by dancing merry taxi drivers, where people on the street
								constantly ask you if everything is going well for you, where no one is in need of a
								chat. Most travellers who have visited Jamaica have never felt unsafe for a moment.
								<br />
								Of course, there is a chance that you will be harassed or robbed. But actually, that
								chance exists just as well in your own country. Here are the tips that apply to most
								travel destinations: don’t take expensive things with you when you walk the streets,
								don’t wear expensive jewelry and keep a camera out of sight when you don’t want to take
								pictures.
							</p>
						</div>
					) : id === '8' ? (
						<div>Learn all about golf in Jamaica!</div>
					) : id === '9' ? (
						<div>Experience Jamaica! There will be a post about this magical island!</div>
					) : (
						<div>Embark on a journey through the incredibly beautiful waterfalls in Jamaica!</div>
					)}
				</p>
				<div className="blog-card-extra">
					<div className="blog-card-tags">
						<span>Tags</span>
						<div>
							<span>Island</span>
							<span>Jamaica</span>
						</div>
					</div>
					<hr />
					<div className="blog-card-social">
						<div className="blog-card-icons">
							<span>
								<FaFacebookF />
							</span>
							<span>
								<FaTwitter />
							</span>
							<span>
								<FaWhatsapp />
							</span>
							<span>
								<GoMail />
							</span>
						</div>
						<div className="blog-card-right">
							<span>Older Posts</span>
							<span>
								<IoIosArrowForward />
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleBlog;
