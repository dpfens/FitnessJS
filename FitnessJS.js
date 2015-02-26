var Fit = (function() {

	/* Exercise Physiology Library
	 * Version: 0.7.0
	 * Created: March 2013
	 * Updated: Feb 22 2015
	 */


		// METsList acquired from https://sites.google.com/site/compendiumofphysicalactivities/
	var Mets = (function() {
		
		var metsList = [
			{"met":14.0,"code":01003,"description":"bicycling, mountain, uphill, vigorous"},
			{"met":16.0,"code":01004,"description":"bicycling, mountain, competitive, racing"},
			{"met":8.5,"code":01008,"description":"bicycling, BMX"},
			{"met":8.5,"code":01009,"description":"bicycling, mountain, general"},
			{"met":4.0,"code":01010,"description":"bicycling, <10 mph, leisure, to work or for pleasure (Taylor Code 115)"},
			{"met":6.8,"code":01011,"description":"bicycling, to/from work, self selected pace"},
			{"met":5.8,"code":01013,"description":"bicycling, on dirt or farm road, moderate pace"},
			{"met":7.5,"code":01015,"description":"bicycling, general"},
			{"met":3.5,"code":01018,"description":"bicycling, leisure, 5.5 mph"},
			{"met":6.8,"code":01020,"description":"bicycling, 10-11.9 mph, leisure, slow, light effort"},
			{"met":8.0,"code":01030,"description":"bicycling, 12-13.9 mph, leisure, moderate effort"},
			{"met":10.0,"code":01040,"description":"bicycling, 14-15.9 mph, racing or leisure, fast, vigorous effort"},
			{"met":12.0,"code":01050,"description":"bicycling, 16-19 mph, racing/not drafting or > 19 mph drafting, very fast, racing general"},
			{"met":15.8,"code":01060,"description":"bicycling, > 20 mph, racing, not drafting"},
			{"met":8.5,"code":01065,"description":"bicycling, 12 mph, seated, hands on brake hoods or bar drops, 80 rpm"},
			{"met":9.0,"code":01066,"description":"bicycling, 12 mph, standing, hands on brake hoods, 60 rpm"},
			{"met":5.0,"code":01070,"description":"unicycling"},
			{"met":2.3,"code":02001,"description":"activity promoting video game (e.g., Wii Fit), light effort (e.g., balance, yoga)"},
			{"met":3.8,"code":02003,"description":"activity promoting video game (e.g., Wii Fit), moderate effort (e.g., aerobic, resistance)"},
			{"met":7.2,"code":02005,"description":"activity promoting video/arcade game (e.g., Exergaming, Dance Dance Revolution), vigorous effort"},
			{"met":5.0,"code":02008,"description":"army type obstacle course exercise, boot camp training program\u00a0"},
			{"met":7.0,"code":02010,"description":"bicycling, stationary, general"},
			{"met":3.5,"code":02011,"description":"bicycling, stationary, 30-50 watts, very light to light effort"},
			{"met":6.8,"code":02012,"description":"bicycling, stationary, 90-100 watts, moderate to vigorous effort"},
			{"met":8.8,"code":02013,"description":"bicycling, stationary, 101-160 watts, vigorous effort"},
			{"met":11.0,"code":02014,"description":"bicycling, stationary, 161-200 watts, vigorous effort"},
			{"met":14.0,"code":02015,"description":"bicycling, stationary, 201-270 watts, very vigorous effort"},
			{"met":4.8,"code":02017,"description":"bicycling, stationary, 51-89 watts, light-to-moderate effort"},
			{"met":8.5,"code":02019,"description":"bicycling, stationary, RPM/Spin bike class"},
			{"met":8.0,"code":02020,"description":"calisthenics (e.g., push ups, sit ups, pull-ups, jumping jacks), vigorous effort"},
			{"met":3.8,"code":02022,"description":"calisthenics (e.g., push ups, sit ups, pull-ups, lunges), moderate effort"},
			{"met":2.8,"code":02024,"description":"calisthenics (e.g., situps, abdominal crunches), light effort"},
			{"met":3.5,"code":02030,"description":"calisthenics, light or moderate effort, general (example: back exercises), going up & down from floor (Taylor Code 150)"},
			{"met":4.3,"code":02035,"description":"circuit training, moderate effort"},
			{"met":8.0,"code":02040,"description":"circuit training, including kettlebells, some aerobic movement with minimal rest, general, vigorous intensity"},
			{"met":3.5,"code":02045,"description": "Curves exercise routines in women"},
			{"met":5.0,"code":02048,"description":"Elliptical trainer, moderate effort\u00a0"},
			{"met":6.0,"code":02050,"description":"resistance training (wt lifting - free wt, nautilus or universal-type), power lifting or body building, vigorous effort (Taylor Code 210)"},
			{"met":5.0,"code":02052,"description":"resistance (wt) training, squats , slow or explosive effort"},
			{"met":3.5,"code":02054,"description":"resistance (wt) training, multiple exercises, 8-15 repetitions at varied resistance\u00a0"},
			{"met":5.5,"code":02060,"description":"health club exercise, general (Taylor Code 160)"},
			{"met":9.0,"code":02065,"description":"stair-treadmill ergometer, general"},
			{"met":11.0,"code":02068,"description":"rope skipping, general"},
			{"met":6.0,"code":02070,"description":"rowing, stationary ergometer, general, vigorous effort"},
			{"met":4.8,"code":02071,"description":"rowing, stationary, general, moderate effort"},
			{"met":7.0,"code":02072,"description":"rowing, stationary, 100 watts, moderate effort"},
			{"met":8.5,"code":02073,"description":"rowing, stationary, 150 watts, vigorous effort"},
			{"met":12.0,"code":02074,"description":"rowing, stationary, 200 watts, very vigorous effort"},
			{"met":6.8,"code":02080,"description":"ski machine, general"},
			{"met":11.0,"code":02085,"description":"slide board exercise, general"},
			{"met":6.0,"code":02090,"description":"slimnastics, jazzercise"},
			{"met":2.3,"code":02101,"description":"stretching, mild"},
			{"met":3.0,"code":02105,"description":"pilates, general"},
			{"met":6.8,"code":02110,"description":"teaching exercise class (e.g., aerobic, water)"},
			{"met":2.8,"code":02112,"description":"therapeutic exercise ball, Fitball exercise"},
			{"met":2.8,"code":02115,"description":"upper body exercise, arm ergometer"},
			{"met":4.3,"code":02117,"description":"upper body exercise, stationary bicycle - Airdyne (arms only) 40 rpm, moderate"},
			{"met":5.3,"code":02120,"description":"water aerobics, water calisthenics, water exercise"},
			{"met":1.3,"code":02135,"description":"whirlpool, sitting"},
			{"met":2.3,"code":02140,"description":"video exercise workouts, TV conditioning programs (e.g., yoga, stretching), light effort"},
			{"met":4.0,"code":02143,"description":"video exercise workouts, TV conditioning programs (e.g., cardio-resistance), moderate effort"},
			{"met":6.0,"code":02146,"description":"video exercise workouts, TV conditioning programs (e.g., cardio-resistance), vigorous effort"},
			{"met":2.5,"code":02150,"description":"yoga, Hatha"},
			{"met":4.0,"code":02160,"description":"yoga, Power"},
			{"met":2.0,"code":02170,"description":"yoga, Nadisodhana"},
			{"met":3.3,"code":02180,"description":"yoga, Surya Namaskar"},
			{"met":5.3,"code":02200,"description":"native New Zealander physical activities (e.g., Haka Powhiri, Moteatea, Waita Tira, Whakawatea, etc.) , general, moderate effort"},
			{"met":6.8,"code":02205,"description":"native New Zealander physical activities (e.g., Haka, Taiahab), general, vigorous effort"},
			{"met":5.0,"code":03010,"description":"ballet, modern, or jazz, general, rehearsal or class"},
			{"met":6.8,"code":03012,"description":"ballet, modern, or jazz, performance, vigorous effort"},
			{"met":4.8,"code":03014,"description":"tap"},
			{"met":7.3,"code":03015,"description":"aerobic, general"},
			{"met":7.5,"code":03016,"description":"aerobic, step, with 6 - 8 inch step"},
			{"met":9.5,"code":03017,"description":"aerobic, step, with 10 - 12 inch step"},
			{"met":5.5,"code":03018,"description":"aerobic, step, with 4-inch step"},
			{"met":8.5,"code":03019,"description":"bench step class, general"},
			{"met":5.0,"code":03020,"description":"aerobic, low impact"},
			{"met":7.3,"code":03021,"description":"aerobic, high impact"},
			{"met":10.0,"code":03022,"description":"aerobic dance wearing 10-15 lb wts"},
			{"met":4.5,"code":03025,"description":"ethnic or cultural dancing (e.g., Greek, Middle Eastern, hula, salsa, merengue, bamba y plena, flamenco, belly, and swing)"},
			{"met":5.5,"code":03030,"description":"ballroom, fast (Taylor Code 125)"},
			{"met":7.8,"code":03031,"description":"general dancing (e.g., disco, folk, Irish step dancing, line dancing, polka, contra, country)"},
			{"met":11.3,"code":03038,"description":"ballroom dancing, competitive, general"},
			{"met":3.0,"code":03040,"description":"ballroom, slow (e.g., waltz, foxtrot, slow dancing, samba, tango, 19th century dance, mambo, cha cha)"},
			{"met":5.5,"code":03050,"description":"Anishinaabe Jingle Dancing"},
			{"met":3.5,"code":03060,"description":"Caribbean dance (Abakua, Beguine, Bellair, Bongo, Brukin's, Caribbean Quadrills, Dinki Mini, Gere, Gumbay, Ibo, Jonkonnu, Kumina, Oreisha, Jambu)"},
			{"met":3.5,"code":04001,"description":"fishing, general"},
			{"met":4.5,"code":04005,"description":"fishing, crab fishing"},
			{"met":4.0,"code":04007,"description":"fishing, catching fish with hands"},
			{"met":4.3,"code":04010,"description":"fishing related, digging worms, with shovel"},
			{"met":4.0,"code":04020,"description":"fishing from river bank and walking"},
			{"met":2.0,"code":04030,"description":"fishing from boat or canoe, sitting"},
			{"met":3.5,"code":04040,"description":"fishing from river bank, standing (Taylor Code 660)"},
			{"met":6.0,"code":04050,"description":"fishing in stream, in waders (Taylor Code 670)"},
			{"met":2.0,"code":04060,"description":"fishing, ice, sitting"},
			{"met":1.8,"code":04061,"description":"fishing, jog or line, standing, general"},
			{"met":3.5,"code":04062,"description":"fishing, dip net, setting net and retrieving fish, general"},
			{"met":3.8,"code":04063,"description":"fishing, set net, setting net and retrieving fish, general"},
			{"met":3.0,"code":04064,"description":"fishing, fishing wheel, setting net and retrieving fish, general"},
			{"met":2.3,"code":04065,"description":"fishing with a spear, standing"},
			{"met":2.5,"code":04070,"description":"hunting, bow and arrow, or crossbow"},
			{"met":6.0,"code":04080,"description":"hunting, deer, elk, large game (Taylor Code 170)"},
			{"met":11.3,"code":04081,"description":"hunting large game, dragging carcass"},
			{"met":4.0,"code":04083,"description":"hunting large marine animals"},
			{"met":2.5,"code":04085,"description":"hunting large game, from a hunting stand, limited walking"},
			{"met":2.0,"code":04086,"description":"hunting large game from a car, plane, or boat"},
			{"met":2.5,"code":04090,"description":"hunting, duck, wading"},
			{"met":3.0,"code":04095,"description":"hunting, flying fox, squirrel"},
			{"met":5.0,"code":04100,"description":"hunting, general"},
			{"met":6.0,"code":04110,"description":"hunting, pheasants or grouse (Taylor Code 680)"},
			{"met":3.3,"code":04115,"description":"hunting, birds"},
			{"met":5.0,"code":04120,"description":"hunting, rabbit, squirrel, prairie chick, raccoon, small game (Taylor Code 690)"},
			{"met":3.3,"code":04123,"description":"hunting, pigs, wild"},
			{"met":2.0,"code":04124,"description":"trapping game, general"},
			{"met":9.5,"code":04125,"description":"hunting, hiking with hunting gear"},
			{"met":2.5,"code":04130,"description":"pistol shooting or trap shooting, standing"},
			{"met":2.3,"code":04140,"description":"rifle exercises, shooting, lying down"},
			{"met":2.5,"code":04145,"description":"rifle exercises, shooting, kneeling or standing"},
			{"met":3.3,"code":05010,"description":"cleaning, sweeping carpet or floors, general"},
			{"met":2.3,"code":05011,"description":"cleaning, sweeping, slow, light effort"},
			{"met":3.8,"code":05012,"description": "cleaning, sweeping, slow, moderate effort"},
			{"met":3.5,"code":05020,"description":"cleaning, heavy or major (e.g. wash car, wash windows, clean garage), moderate effort"},
			{"met":3.5,"code":05021,"description":"cleaning, mopping, standing, moderate effort"},
			{"met":3.2,"code":05022,"description":"cleaning windows, washing windows, general"},
			{"met":2.5,"code":05023,"description":"mopping, standing, light effort"},
			{"met":4.5,"code":05024,"description":"polishing floors, standing, walking slowly, using electric polishing machine"},
			{"met":2.8,"code":05025,"description":"multiple household tasks all at once, light effort"},
			{"met":3.5,"code":05026,"description":"multiple household tasks all at once, moderate effort"},
			{"met":4.3,"code":05027,"description":"multiple household tasks all at once, vigorous effort"},
			{"met":3.3,"code":05030,"description":"cleaning, house or cabin, general, moderate effort"},
			{"met":2.3,"code":05032,"description":"dusting or polishing furniture, general"},
			{"met":3.3,"code":05035,"description":"kitchen activity, general, (e.g., cooking, washing dishes, cleaning up), moderate effort"},
			{"met":2.5,"code":05040,"description":"cleaning, general (straightening up, changing linen, carrying out trash, light effort"},
			{"met":1.8,"code":05041,"description":"wash dishes, standing or in general (not broken into stand/walk components)"},
			{"met":2.5,"code":05042,"description":"wash dishes, clearing dishes from table, walking, light effort"},
			{"met":3.3,"code":05043,"description":"vacuuming, general, moderate effort"},
			{"met":3.0,"code":05044,"description":"butchering animals, small"},
			{"met":6.0,"code":05045,"description":"butchering animal, large, vigorous effort"},
			{"met":2.3,"code":05046,"description":"cutting and smoking fish, drying fish or meat"},
			{"met":4.0,"code":05048,"description":"tanning hides, general"},
			{"met":3.5,"code":05049,"description":"cooking or food preparation, moderate effort"},
			{"met":2.0,"code":05050,"description":"cooking or food preparation - standing or sitting or in general (not broken into stand/walk components), manual appliances, light effort"},
			{"met":2.5,"code":05051,"description":"serving food, setting table, implied walking or standing"},
			{"met":2.5,"code":05052,"description":"cooking or food preparation, walking"},
			{"met":2.5,"code":05053,"description":"feeding household animals"},
			{"met":2.5,"code":05055,"description":"putting away groceries (e.g. carrying groceries, shopping without a grocery cart), carrying packages"},
			{"met":7.5,"code":05056,"description":"carrying groceries upstairs"},
			{"met":3.0,"code":05057,"description":"cooking Indian bread on an outside stove"},
			{"met":2.3,"code":05060,"description":"food shopping with or without a grocery cart, standing or walking"},
			{"met":2.3,"code":05065,"description":"non-food shopping, with or without a cart, standing or walking"},
			{"met":1.8,"code":05070,"description":"ironing"},
			{"met":1.3,"code":05080,"description":"knitting, sewing, light effort, wrapping presents, sitting"},
			{"met":2.8,"code":05082,"description":"sewing with a machine"},
			{"met":2.0,"code":05090,"description":"laundry, fold or hang clothes, put clothes in washer or dryer, packing suitcase, washing clothes by hand,implied standing, light effort"},
			{"met":4.0,"code":05092,"description":"laundry, hanging wash, washing clothes by hand, moderate effort"},
			{"met":2.3,"code":05095,"description":"laundry, putting away clothes, gathering clothes to pack, putting away laundry,implied walking"},
			{"met":3.3,"code":05100,"description":"making bed, changing linens"},
			{"met":5.0,"code":05110,"description":"maple syruping/sugar bushing (including carrying buckets, carrying wood)"},
			{"met":5.8,"code":05120,"description":"moving furniture, household items, carrying boxes"},
			{"met":5.0,"code":05121,"description":"moving, lifting light loads"},
			{"met":4.8,"code":05125,"description":"organizing room"},
			{"met":3.5,"code":05130,"description":"scrubbing floors, on hands and knees, scrubbing bathroom, bathtub, moderate effort"},
			{"met":2.0,"code":05131,"description":"scrubbing floors, on hands and knees, scrubbing bathroom, bathtub, light effort"},
			{"met":6.5,"code":05132,"description":"scrubbing floors, on hands and knees, scrubbing bathroom, bathtub, vigorous effort"},
			{"met":4.0,"code":05140,"description":"sweeping garage, sidewalk or outside of house"},
			{"met":3.5,"code":05146,"description":"standing, packing/unpacking boxes, occasional lifting of lightwt household items, loading or unloading items in car, moderate effort"},
			{"met":3.0,"code":05147,"description":"implied walking, putting away household items, moderate effort"},
			{"met":2.5,"code":05148,"description":"watering  plants"},
			{"met":2.5,"code":05149,"description":"building a fire inside"},
			{"met":9.0,"code":05150,"description":"moving household items upstairs, carrying boxes or furniture"},
			{"met":2.0,"code":05160,"description":"standing, light effort tasks (pump gas, change light bulb, etc.)"},
			{"met":3.5,"code":05165,"description":"walking, moderate effort tasks, non-cleaning (readying to leave, shut/lock doors, close windows, etc.)"},
			{"met":2.2,"code":05170,"description":"sitting, playing with child(ren), light effort, only active periods"},
			{"met":2.8,"code":05171,"description":"standing, playing with child(ren) light effort, only active periods"},
			{"met":3.5,"code":05175,"description":"walking/running, playing with child(ren), moderate effort, only active periods"},
			{"met":5.8,"code":05180,"description":"walking/running, playing with child(ren), vigorous effort, only active periods"},
			{"met":3.0,"code":05181,"description":"walking and carrying small child, child weighing 15 lbs or more"},
			{"met":2.3,"code":05182,"description":"walking, moderate effort tasks, non-cleaning (readying to leave, shut/lock doors, close windows, etc.)"},
			{"met":2.0,"code":05183,"description":"standing, holding child"},
			{"met":2.5,"code":05184,"description":"child care, infant, general"},
			{"met":2.0,"code":05185,"description":"child care, sitting/kneeling (e.g., dressing, bathing, grooming, feeding, occasional lifting of child), light effort, general"},
			{"met":3.0,"code":05186,"description":"child care, standing (e.g., dressing, bathing, grooming, feeding, occasional lifting of child), moderate effort"},
			{"met":1.5,"code":05188,"description":"reclining with baby"},
			{"met":2.0,"code":05189,"description":"breastfeeding, sitting or reclining"},
			{"met":2.5,"code":05190,"description":"sit, playing with animals, light effort, only active periods"},
			{"met":2.8,"code":05191,"description":"stand, playing with animals, light effort, only active periods"},
			{"met":3.0,"code":05192,"description":"walk/run, playing with animals, general, light effort, only active periods"},
			{"met":4.0,"code":05193,"description":"walk/run, playing with animals, moderate effort, only active periods"},
			{"met":5.0,"code":05194,"description":"walk/run, playing with animals, vigorous effort, only active periods"},
			{"met":3.5,"code":05195,"description":"standing, bathing dog"},
			{"met":2.3,"code":05197,"description":"animal care, household animals, general"},
			{"met":4.0,"code":05200,"description":"elder care, disabled adult, bathing, dressing, moving into and out of bed, only active periods "},
			{"met":2.3,"code":05205,"description":"elder care, disabled adult, feeding, combing hair, light effort, only active periods"},
			{"met":3.0,"code":06010,"description":"airplane repair"},
			{"met":4.0,"code":06020,"description":"automobile body work"},
			{"met":3.3,"code":06030,"description":"automobile repair, light or moderate effort"},
			{"met":3.0,"code":06040,"description":"carpentry, general, workshop (Taylor Code 620)"},
			{"met":6.0,"code":06050,"description":"carpentry, outside house, installing rain gutters (Taylor Code 640),carpentry, outside house, building a fence"},
			{"met":3.8,"code":06052,"description":"carpentry, outside house, building a fence"},
			{"met":3.3,"code":06060,"description":"carpentry, finishing or refinishing cabinets or furniture"},
			{"met":6.0,"code":06070,"description":"carpentry, sawing hardwood"},
			{"met":4.0,"code":06072,"description":"carpentry, home remodeling tasks, moderate effort"},
			{"met":2.3,"code":06074,"description":"carpentry, home remodeling tasks, light effort\u00a0"},
			{"met":5.0,"code":06080,"description":"caulking, chinking log cabin"},
			{"met":4.5,"code":06090,"description":"caulking, except log cabin"},
			{"met":5.0,"code":06100,"description":"cleaning gutters"},
			{"met":5.0,"code":06110,"description":"excavating garage"},
			{"met":5.0,"code":06120,"description":"hanging storm windows"},
			{"met":5.0,"code":06122,"description":"hanging sheet rock inside house"},
			{"met":3.0,"code":06124,"description":"hammering nails"},
			{"met":2.5,"code":06126,"description":"home repair, general, light effort"},
			{"met":4.5,"code":06127,"description":"home repair, general, moderate effort"},
			{"met":6.0,"code":06128,"description":"home repair, general, vigorous effort"},
			{"met":4.5,"code":06130,"description":"laying or removing carpet"},
			{"met":3.8,"code":06140,"description":"laying tile or linoleum,repairing appliances"},
			{"met":3.0,"code":06144,"description":"repairing appliances"},
			{"met":5.0,"code":06150,"description":"painting, outside home (Taylor Code 650)"},
			{"met":3.3,"code":06160,"description":"painting inside house,wallpapering, scraping paint"},
			{"met":4.5,"code":06165,"description":"painting, (Taylor Code 630)"},
			{"met":3.0,"code":06167,"description":"plumbing, general"},
			{"met":3.0,"code":06170,"description":"put on and removal of tarp - sailboat"},
			{"met":6.0,"code":06180,"description":"roofing"},
			{"met":4.5,"code":06190,"description":"sanding floors with a power sander"},
			{"met":4.5,"code":06200,"description":"scraping and painting sailboat or powerboat"},
			{"met":2.0,"code":06205,"description":"sharpening tools"},
			{"met":5.0,"code":06210,"description":"spreading dirt with a shovel"},
			{"met":4.5,"code":06220,"description":"washing and waxing hull of sailboat or airplane"},
			{"met":2.0,"code":06225,"description":"washing and waxing car"},
			{"met":4.5,"code":06230,"description":"washing fence, painting fence, moderate effort"},
			{"met":3.3,"code":06240,"description":"wiring, tapping-splicing"},
			{"met":1.0,"code":07010,"description":"lying quietly and watching television"},
			{"met":1.3,"code":07011,"description":"lying quietly, doing nothing, lying in bed awake, listening to music (not talking or reading)"},
			{"met":1.3,"code":07020,"description":"sitting quietly and watching television"},
			{"met":1.3,"code":07021,"description":"sitting quietly, general"},
			{"met":1.5,"code":07022,"description":"sitting quietly, fidgeting, general, fidgeting hands"},
			{"met":1.8,"code":07023,"description":"sitting, fidgeting feet"},
			{"met":1.3,"code":07024,"description":"sitting, smoking"},
			{"met":1.5,"code":07025,"description":"sitting, listening to music (not talking or reading) or watching a movie in a theater"},
			{"met":1.3,"code":07026,"description":"sitting at a desk, resting head in hands"},
			{"met":1.3,"code":07040,"description":"standing quietly, standing in a line"},
			{"met":1.8,"code":07041,"description":"standing, fidgeting"},
			{"met":1.3,"code":07050,"description":"reclining, writing"},
			{"met":1.3,"code":07060,"description":"reclining, talking or talking on phone"},
			{"met":1.3,"code":07070,"description":"reclining, reading"},
			{"met":1.0,"code":07075,"description":"meditating"},
			{"met":3.3,"code":08009,"description":"carrying, loading or stacking wood, loading/unloading or carrying lumber, light-to-moderate effort"},
			{"met":5.5,"code":08010,"description":"carrying, loading or stacking wood, loading/unloading or carrying lumber"},
			{"met":4.5,"code":08019,"description":"chopping wood, splitting logs, moderate effort"},
			{"met":6.3,"code":08020,"description":"chopping wood, splitting logs, vigorous effort"},
			{"met":3.5,"code":08025,"description":"clearing light brush, thinning garden, moderate effort"},
			{"met":6.3,"code":08030,"description":"clearing brush/land, undergrowth, or ground, hauling branches, wheelbarrow chores, vigorous effort"},
			{"met":5.0,"code":08040,"description":"digging sandbox, shoveling sand"},
			{"met":3.5,"code":08045,"description":"digging, spading, filling garden, composting, light-to-moderate effort"},
			{"met":5.0,"code":08050,"description":"digging, spading, filling garden, compositing, (Taylor Code 590)"},
			{"met":7.8,"code":08052,"description":"digging, spading, filling garden, composting, vigorous effort"},
			{"met":2.8,"code":08055,"description":"driving tractor"},
			{"met":8.3,"code":08057,"description":"felling trees, large size"},
			{"met":5.3,"code":08058,"description":"felling trees, small-medium size"},
			{"met":5.8,"code":08060,"description":"gardening with heavy power tools, tilling a garden, chain saw"},
			{"met":2.3,"code":08065,"description":"gardening, using containers, older adults > 60 years"},
			{"met":4.0,"code":08070,"description":"irrigation channels, opening and closing ports"},
			{"met":6.3,"code":08080,"description":"laying crushed rock"},
			{"met":5.0,"code":08090,"description":"laying sod"},
			{"met":5.5,"code":08095,"description":"mowing lawn, general"},
			{"met":2.5,"code":08100,"description":"mowing lawn, riding mower (Taylor Code 550)"},
			{"met":6.0,"code":08110,"description":"mowing lawn, walk, hand mower (Taylor Code 570)"},
			{"met":5.0,"code":08120,"description":"mowing lawn, walk, power mower, moderate or vigorous effort"},
			{"met":4.5,"code":08125,"description":"mowing lawn, power mower, light or moderate effort (Taylor Code 590)"},
			{"met":2.5,"code":08130,"description":"operating snow blower, walking"},
			{"met":2.0,"code":08135,"description":"planting, potting, transplanting seedlings or plants, light effort"},
			{"met":4.3,"code":08140,"description":"planting seedlings, shrub, stooping, moderate effort"},
			{"met":4.3,"code":08145,"description":"planting crops or garden, stooping, moderate effort"},
			{"met":4.5,"code":08150,"description":"planting trees"},
			{"met":3.8,"code":08160,"description":"raking lawn or leaves, moderate effort"},
			{"met":4.0,"code":08165,"description":"raking lawn (Taylor Code 600)"},
			{"met":4.0,"code":08170,"description":"raking roof with snow rake"},
			{"met":3.0,"code":08180,"description":"riding snow blower"},
			{"met":4.0,"code":08190,"description":"sacking grass, leaves"},
			{"met":5.5,"code":08192,"description":"shoveling dirt or mud"},
			{"met":5.3,"code":08195,"description":"shoveling snow, by hand, moderate effort"},
			{"met":6.0,"code":08200,"description":"shovelling snow, by hand (Taylor Code 610)"},
			{"met":7.5,"code":08202,"description":"shoveling snow, by hand, vigorous effort"},
			{"met":4.0,"code":08210,"description":"trimming shrubs or trees, manual cutter"},
			{"met":3.5,"code":08215,"description":"trimming shrubs or trees, power cutter, using leaf blower, edge, moderate effort"},
			{"met":3.0,"code":08220,"description":"walking, applying fertilizer or seeding a lawn, push applicator"},
			{"met":1.5,"code":08230,"description":"watering lawn or garden, standing or walking"},
			{"met":3.5,"code":08239,"description":"weeding, cultivating garden, light-to-moderate effort"},
			{"met":4.5,"code":08240,"description":"weeding, cultivating garden (Taylor Code 580)"},
			{"met":5.0,"code":08241,"description":"weeding, cultivating garden, using a hoe, moderate-to-vigorous effort"},
			{"met":3.8,"code":08245,"description":"gardening, general, moderate effort"},
			{"met":3.5,"code":08246,"description":"picking fruit off trees, picking fruits/vegetables, moderate effort"},
			{"met":4.5,"code":08248,"description":"picking fruit off trees, gleaning fruits, picking fruits/vegetables, climbing ladder to pick fruit, vigorous effort"},
			{"met":3.3,"code":08250,"description":"implied walking/standing - picking up yard, light, picking flowers or vegetables"},
			{"met":3.0,"code":08251,"description":"walking, gathering gardening tools"},
			{"met":5.5,"code":08255,"description":"wheelbarrow, pushing garden cart or wheelbarrow"},
			{"met":3.0,"code":08260,"description":"yard work, general, light effort"},
			{"met":4.0,"code":08261,"description":"yard work, general, moderate effort"},
			{"met":6.0,"code":08262,"description":"yard work, general, vigorous effort"},
			{"met":1.5,"code":09000,"description":"board game playing, sitting"},
			{"met":2.5,"code":09005,"description":"casino gambling, standing"},
			{"met":1.5,"code":09010,"description":"card playing, sitting"},
			{"met":1.5,"code":09013,"description":"chess game, sitting"},
			{"met":1.5,"code":09015,"description":"copying documents, standing"},
			{"met":1.8,"code":09020,"description":"drawing, writing, painting, standing"},
			{"met":1.0,"code":09025,"description":"laughing, sitting"},
			{"met":1.3,"code":09030,"description":"sitting, reading, book, newspaper, etc."},
			{"met":1.3,"code":09040,"description":"sitting, writing, desk work, typing"},
			{"met":1.0,"code":09045,"description":"sitting, playing traditional video game, computer game"},
			{"met":1.8,"code":09050,"description":"standing, talking in person, on the phone, computer, or text messaging, light effort"},
			{"met":1.5,"code":09055,"description":"sitting, talking in person, on the phone, computer, or text messaging, light effort"},
			{"met":1.3,"code":09060,"description":"sitting, studying, general, including reading and/or writing, light effort"},
			{"met":1.8,"code":09065,"description":"sitting, in class, general, including note-taking or class discussion"},
			{"met":1.8,"code":09070,"description":"standing, reading"},
			{"met":2.5,"code":09071,"description":"standing, miscellaneous"},
			{"met":1.8,"code":09075,"description":"sitting, arts and crafts,\u00a0 carving wood, weaving, spinning wool, light effort"},
			{"met":3.0,"code":09080,"description":"sitting, arts and crafts,\u00a0 carving wood, weaving, spinning wool, moderate effort"},
			{"met":2.5,"code":09085,"description":"standing, arts and crafts, sand painting, carving, weaving, light effort"},
			{"met":3.3,"code":09090,"description":"standing, arts and crafts, sand painting, carving, weaving, moderate effort"},
			{"met":3.5,"code":09095,"description":"standing, arts and crafts, sand painting, carving, weaving, vigorous effort"},
			{"met":1.8,"code":09100,"description":"retreat/family reunion activities involving sitting, relaxing, talking, eating"},
			{"met":3.0,"code":09101,"description":"retreat/family reunion activities involving playing games with children"},
			{"met":2.0,"code":09105,"description":"touring/traveling/vacation involving riding in a vehicle"},
			{"met":3.5,"code":09106,"description":"touring/traveling/vacation involving walking"},
			{"met":2.5,"code":09110,"description":"camping involving standing, walking, sitting, light-to-moderate effort"},
			{"met":1.5,"code":09115,"description":"sitting at a sporting event, spectator"},
			{"met":1.8,"code":10010,"description":"accordion, sitting"},
			{"met":2.3,"code":10020,"description":"cello, sitting"},
			{"met":2.3,"code":10030,"description":"conducting orchestra, standing"},
			{"met":3.8,"code":10040,"description":"drums, sitting"},
			{"met":3.0,"code":10045,"description":"drumming (e.g., bongo, conga, benbe), moderate, sitting"},
			{"met":2.0,"code":10050,"description":"flute, sitting"},
			{"met":1.8,"code":10060,"description":"horn, standing"},
			{"met":2.3,"code":10070,"description":"piano, sitting"},
			{"met":3.5,"code":10080,"description":"trombone, standing"},
			{"met":1.8,"code":10090,"description":"trumpet, standing"},
			{"met":2.5,"code":10100,"description":"violin, sitting"},
			{"met":1.8,"code":10110,"description":"woodwind, sitting"},
			{"met":2.0,"code":10120,"description":"guitar, classical, folk, sitting"},
			{"met":3.0,"code":10125,"description":"guitar, rock and roll band, standing"},
			{"met":4.0,"code":10130,"description":"marching band, baton twirling, walking, moderate pace, general"},
			{"met":5.5,"code":10131,"description":"marching band, playing an instrument, walking, brisk pace, general"},
			{"met":3.5,"code":10135,"description":"marching band, drum major, walking"},
			{"met":2.3,"code":11003,"description":"active workstation, treadmill desk, walking"},
			{"met":3.0,"code":11006,"description":"airline flight attendant"},
			{"met":4.0,"code":11010,"description":"bakery, general, moderate effort"},
			{"met":2.0,"code":11015,"description":"bakery, light effort"},
			{"met":2.3,"code":11020,"description":"bookbinding"},
			{"met":6.0,"code":11030,"description":"building road, driving heavy machinery"},
			{"met":2.0,"code":11035,"description":"building road, directing traffic, standing"},
			{"met":2.5,"code":11038,"description":"carpentry, general, light effort"},
			{"met":4.3,"code":11040,"description":"carpentry, general, moderate effort"},
			{"met":7.0,"code":11042,"description":"carpentry, general, heavy or vigorous effort"},
			{"met":8.0,"code":11050,"description":"carrying heavy loads (e.g., bricks, tools)"},
			{"met":8.0,"code":11060,"description":"carrying moderate loads up stairs, moving boxes 25-49 lbs"},
			{"met":4.0,"code":11070,"description":"chambermaid, hotel housekeeper, making bed, cleaning bathroom, pushing cart"},
			{"met":5.3,"code":11080,"description":"coal mining, drilling coal, rock"},
			{"met":5.0,"code":11090,"description":"coal mining, erecting supports"},
			{"met":5.5,"code":11100,"description":"coal mining, general"},
			{"met":6.3,"code":11110,"description":"coal mining, shoveling coal"},
			{"met":2.5,"code":11115,"description":"cook, chef"},
			{"met":4.0,"code":11120,"description":"construction, outside, remodeling, new structures (e.g., roof repair, miscellaneous"},
			{"met":2.3,"code":11125,"description":"custodial work, light effort (e.g., cleaning sink and toilet, dusting, vacuuming, light cleaning)"},
			{"met":3.8,"code":11126,"description":"custodial work, moderate effort (e.g., electric buffer, feathering arena floors, mopping, taking out trash, vacuuming)"},
			{"met":2.0,"code":11128,"description":"driving delivery truck, taxi, shuttle bus, school bus"},
			{"met":3.3,"code":11130,"description":"electrical work (e.g., hook up wire, tapping-splicing)"},
			{"met":1.8,"code":11135,"description":"engineer (e.g., mechanical or electrical)"},
			{"met":7.8,"code":11145,"description":"farming, vigorous effort (e.g., baling hay, cleaning barn)"},
			{"met":4.8,"code":11146,"description":"farming, moderate effort (e.g., feeding animals, chasing cattle by walking and/or horseback, spreading manure, harvesting crops)"},
			{"met":2.0,"code":11147,"description":"farming, light effort (e.g., cleaning animal sheds, preparing animal feed)"},
			{"met":2.8,"code":11170,"description":"farming, driving tasks (e.g., driving tractor or harvester)"},
			{"met":3.5,"code":11180,"description":"farming, feeding small animals"},
			{"met":4.3,"code":11190,"description":"farming, feeding cattle, horses"},
			{"met":4.3,"code":11191,"description":"farming, hauling water for animals, general hauling water"},
			{"met":4.5,"code":11192,"description":"farming, taking care of animals (e.g., grooming, brushing, shearing sheep, assisting with birthing, medical care, branding), general"},
			{"met":3.8,"code":11195,"description":"farming, rice, planting, grain milling activities"},
			{"met":3.5,"code":11210,"description":"farming, milking by hand, cleaning pails, moderate effort"},
			{"met":1.3,"code":11220,"description":"farming, milking by machine, light effort"},
			{"met":8.0,"code":11240,"description":"fire fighter, general"},
			{"met":6.8,"code":11244,"description":"fire fighter, rescue victim, automobile accident, using pike pole"},
			{"met":8.0,"code":11245,"description":"fire fighter, raising and climbing ladder with full gear, simulated fire suppression"},
			{"met":9.0,"code":11246,"description":"fire fighter, hauling hoses on ground, carrying/hoisting equipment, breaking down walls, wearing full gear"},
			{"met":3.5,"code":11247,"description":"fishing, commercial, light effort"},
			{"met":5.0,"code":11248,"description":"fishing, commercial, moderate effort"},
			{"met":7.0,"code":11249,"description":"fishing, commercial, vigorous effort"},
			{"met":17.5,"code":11250,"description":"forestry, ax chopping, very fast, 1.25 kg axe, 51 blows/min, extremely vigorous effort"},
			{"met":5.0,"code":11260,"description":"forestry, ax chopping, slow, 1.25 kg axe, 19 blows/min, moderate effort"},
			{"met":8.0,"code":11262,"description":"forestry, ax chopping, fast, 1.25 kg axe, 35 blows/min, vigorous effort"},
			{"met":4.5,"code":11264,"description":"forestry, moderate effort (e.g., sawing wood with power saw, weeding, hoeing)"},
			{"met":8.0,"code":11266,"description":"forestry, vigorous effort (e.g., barking, felling, or trimming trees, carrying or stacking logs, felling trees, planting seeds, sawing lumber by hand )"},
			{"met":4.5,"code":11370,"description":"furriery"},
			{"met":4.0,"code":11375,"description":"garbage collector, walking, dumping bins into truck"},
			{"met":1.8,"code":11378,"description":"hairstylist (e.g., plaiting hair, manicure, make-up artist)"},
			{"met":7.3,"code":11380,"description":"horse grooming, including feeding, cleaning stalls, bathing, brushing, clipping, longeing and exercising horses."},
			{"met":4.3,"code":11381,"description":"horse, feeding, watering, cleaning stalls, implied walking and lifting loads"},
			{"met":7.3,"code":11390,"description":"horse racing, galloping"},
			{"met":5.8,"code":11400,"description":"horse racing, trotting"},
			{"met":3.8,"code":11410,"description":"horse racing, walking"},
			{"met":3.0,"code":11413,"description":"kitchen maid"},
			{"met":4.0,"code":11415,"description":"lawn keeper, yard work, general"},
			{"met":3.3,"code":11418,"description":"laundry worker"},
			{"met":3.0,"code":11420,"description":"locksmith"},
			{"met":3.0,"code":11430,"description":"machine tooling (e.g., machining, working sheet metal, machine fitter, operating lathe, welding) light-to-moderate effort"},
			{"met":5.0,"code":11450,"description":"machine tooling, operating punch press, moderate effort"},
			{"met":1.8,"code":11472,"description":"manager, property"},
			{"met":2.8,"code":11475,"description":"manual or unskilled labor, general, light effort"},
			{"met":4.5,"code":11476,"description":"manual or unskilled labor, general, moderate effort"},
			{"met":6.5,"code":11477,"description":"manual or unskilled labor, general, vigorous effort"},
			{"met":4.3,"code":11480,"description":"masonry, concrete, moderate effort"},
			{"met":2.5,"code":11482,"description":"masonry, concrete, light effort"},
			{"met":4.0,"code":11485,"description":"massage therapist, standing"},
			{"met":7.5,"code":11490,"description":"moving, carrying or pushing heavy objects, 75 lbs or more, only active time (e.g., desks, moving van work)"},
			{"met":12.0,"code":11495,"description":"skindiving or SCUBA diving as a frogman, Navy Seal"},
			{"met":2.5,"code":11500,"description":"operating heavy duty equipment, automated, not driving"},
			{"met":4.5,"code":11510,"description":"orange grove work, picking fruit"},
			{"met":3.3,"code":11514,"description":"painting,house, furniture, moderate effort"},
			{"met":3.0,"code":11516,"description":"plumbing activities"},
			{"met":2.0,"code":11520,"description":"printing, paper industry worker, standing"},
			{"met":2.5,"code":11525,"description":"police, directing traffic, standing"},
			{"met":2.5,"code":11526,"description":"police, driving a squad car, sitting"},
			{"met":1.3,"code":11527,"description":"police, riding in a squad car, sitting"},
			{"met":4.0,"code":11528,"description":"police, making an arrest, standing"},
			{"met":2.3,"code":11529,"description":"postal carrier, walking to deliver mail"},
			{"met":2.0,"code":11530,"description":"shoe repair, general"},
			{"met":7.8,"code":11540,"description":"shoveling, digging ditches"},
			{"met":8.8,"code":11550,"description":"shoveling, more than 16 pounds/minute, deep digging, vigorous effort"},
			{"met":5.0,"code":11560,"description":"shoveling, less than 10 pounds/minute, moderate effort"},
			{"met":6.5,"code":11570,"description":"shoveling, 10 to 15 pounds/minute, vigorous effort"},
			{"met":1.5,"code":11580,"description":"sitting tasks, light effort (e.g., office work, chemistry lab work, computer work, light assembly repair, watch repair, reading, desk work)"},
			{"met":1.5,"code":11585,"description":"sitting meetings, light effort, general, and/or with talking involved (e.g., eating at a business meeting)"},
			{"met":2.5,"code":11590,"description":"sitting tasks, moderate effort (e.g., pushing heavy levers, riding mower/forklift, crane operation)"},
			{"met":2.8,"code":11593,"description":"sitting, teaching stretching or yoga, or light effort exercise class"},
			{"met":3.0,"code":11600,"description":"standing tasks, light effort (e.g., bartending, store clerk, assembling, filing, duplicating, librarian, putting up a Christmas tree, standing and talking at work, changing clothes when teaching physical education,standing)"},
			{"met":3.0,"code":11610,"description":"standing, light/moderate effort (e.g., assemble/repair heavy parts, welding,stocking parts,auto repair,standing, packing boxes, nursing patient care)"},
			{"met":4.5,"code":11615,"description":"standing, moderate effort, lifting items continuously, 10 \u2013 20 lbs, with limited walking or resting"},
			{"met":3.5,"code":11620,"description":"standing, moderate effort, intermittent lifting 50 lbs, hitch/twisting ropes"},
			{"met":4.5,"code":11630,"description":"standing, moderate/heavy tasks (e.g., lifting more than 50 lbs, masonry, painting, paper hanging)"},
			{"met":5.3,"code":11708,"description":"steel mill, moderate effort (e.g., fettling, forging, tipping molds)"},
			{"met":8.3,"code":11710,"description":"steel mill, vigorous effort (e.g., hand rolling, merchant mill rolling, removing slag, tending furnace)"},
			{"met":2.3,"code":11720,"description":"tailoring, cutting fabric"},
			{"met":2.5,"code":11730,"description":"tailoring, general"},
			{"met":1.8,"code":11740,"description":"tailoring, hand sewing"},
			{"met":2.5,"code":11750,"description":"tailoring, machine sewing"},
			{"met":3.5,"code":11760,"description":"tailoring, pressing"},
			{"met":2.0,"code":11763,"description":"tailoring, weaving, light effort (e.g., finishing operations, washing, dyeing, inspecting cloth, counting yards, paperwork)"},
			{"met":4.0,"code":11765,"description":"tailoring, weaving, moderate effort (e.g., spinning and weaving operations, delivering boxes of yam to spinners, loading of warp bean, pinwinding, conewinding, warping, cloth cutting)"},
			{"met":6.5,"code":11766,"description":"truck driving, loading and unloading truck, tying down load, standing, walking and carrying heavy loads"},
			{"met":1.3,"code":11770,"description":"typing, electric, manual or computer"},
			{"met":6.3,"code":11780,"description":"using heavy power tools such as pneumatic tools (e.g., jackhammers, drills)"},
			{"met":8.0,"code":11790,"description":"using heavy tools (not power) such as shovel, pick, tunnel bar, spade"},
			{"met":2.0,"code":11791,"description":"walking on job, less than 2.0 mph, very slow speed, in office or lab area"},
			{"met":3.5,"code":11792,"description":"walking on job, 3.0 mph, in office, moderate speed, not carrying anything"},
			{"met":4.3,"code":11793,"description":"walking on job, 3.5 mph, in office, brisk speed, not carrying anything"},
			{"met":3.5,"code":11795,"description":"walking on job, 2.5 mph, slow speed and carrying light objects less than 25 pounds"},
			{"met":3.0,"code":11796,"description":"walking, gathering things at work, ready to leave"},
			{"met":3.8,"code":11797,"description":"walking, 2.5 mph, slow speed, carrying heavy objects more than 25 lbs"},
			{"met":4.5,"code":11800,"description":"walking, 3.0 mph, moderately and carrying light objects less than 25 lbs"},
			{"met":3.5,"code":11805,"description":"walking, pushing a wheelchair"},
			{"met":4.8,"code":11810,"description":"walking, 3.5 mph, briskly and carrying objects less than 25 pounds"},
			{"met":5.0,"code":11820,"description":"walking or walk downstairs or standing, carrying objects about 25 to 49 pounds"},
			{"met":6.5,"code":11830,"description":"walking or walk downstairs or standing, carrying objects about 50 to 74 pounds"},
			{"met":7.5,"code":11840,"description":"walking or walk downstairs or standing, carrying objects about 75 to 99 pounds"},
			{"met":8.5,"code":11850,"description":"walking or walk downstairs or standing, carrying objects about 100 pounds or over"},
			{"met":3.0,"code":11870,"description":"working in scene shop, theater actor, backstage employee"},
			{"met":6.0,"code":12010,"description":"jog/walk combination (jogging component of less than 10 minutes) (Taylor Code 180)"},
			{"met":7.0,"code":12020,"description":"jogging, general"},
			{"met":8.0,"code":12025,"description":"jogging, in place"},
			{"met":4.5,"code":12027,"description":"jogging, on a mini-tramp"},
			{"met":6.0,"code":12029,"description":"running, 4 mph (15 min/mile)"},
			{"met":8.3,"code":12030,"description":"running, 5 mph (12 min/mile)"},
			{"met":9.0,"code":12040,"description":"running, 5.2 mph (11.5 min/mile)"},
			{"met":9.8,"code":12050,"description":"running, 6 mph (10 min/mile)"},
			{"met":10.5,"code":12060,"description":"running, 6.7 mph (9 min/mile)"},
			{"met":11.0,"code":12070,"description":"running, 7 mph (8.5 min/mile)"},
			{"met":11.8,"code":12080,"description":"running, 7.5 mph (8 min/mile)"},
			{"met":11.8,"code":12090,"description":"running, 8 mph (7.5 min/mile)"},
			{"met":12.3,"code":12100,"description":"running, 8.6 mph (7 min/mile)"},
			{"met":12.8,"code":12110,"description":"running, 9 mph (6.5 min/mile)"},
			{"met":14.5,"code":12120,"description":"running, 10 mph (6 min/mile)"},
			{"met":16.0,"code":12130,"description":"running, 11 mph (5.5 min/mile)"},
			{"met":19.0,"code":12132,"description":"running, 12 mph (5 min/mile)"},
			{"met":19.8,"code":12134,"description":"running, 13 mph (4.6 min/mile)"},
			{"met":23.0,"code":12135,"description":"running, 14 mph (4.3 min/mile)"},
			{"met":9.0,"code":12140,"description":"running, cross country"},
			{"met":8.0,"code":12150,"description":"running, (Taylor code 200)"},
			{"met":15.0,"code":12170,"description":"running, stairs, up"},
			{"met":10.0,"code":12180,"description":"running, on a track, team practice"},
			{"met":8.0,"code":12190,"description":"running, training, pushing a wheelchair or baby carrier"},
			{"met":13.3,"code":12200,"description":"running, marathon"},
			{"met":2.3,"code":13000,"description":"getting ready for bed, general, standing"},
			{"met":1.8,"code":13009,"description":"sitting on toilet, eliminating while standing or squating"},
			{"met":1.5,"code":13010,"description":"bathing, sitting"},
			{"met":2.5,"code":13020,"description":"dressing, undressing, standing or sitting"},
			{"met":1.5,"code":13030,"description":"eating, sitting"},
			{"met":2.0,"code":13035,"description":"talking and eating or eating only, standing"},
			{"met":1.5,"code":13036,"description":"taking medication, sitting or standing"},
			{"met":2.0,"code":13040,"description":"grooming, washing hands, shaving, brushing teeth, putting on make-up, sitting or standing"},
			{"met":2.5,"code":13045,"description":"hairstyling, standing"},
			{"met":1.3,"code":13046,"description":"having hair or nails done by someone else, sitting"},
			{"met":2.0,"code":13050,"description":"showering, toweling off, standing"},
			{"met":2.8,"code":14010,"description":"active, vigorous effort"},
			{"met":1.8,"code":14020,"description":"general, moderate effort"},
			{"met":1.3,"code":14030,"description":"passive, light effort, kissing, hugging"},
			{"met":5.5,"code":15000,"description":"Alaska Native Games, Eskimo Olympics, general"},
			{"met":4.3,"code":15010,"description":"archery, non-hunting"},
			{"met":7.0,"code":15020,"description":"badminton, competitive (Taylor Code 450)"},
			{"met":5.5,"code":15030,"description":"badminton, social singles and doubles, general"},
			{"met":8.0,"code":15040,"description":"basketball, game (Taylor Code 490)"},
			{"met":6.0,"code":15050,"description":"basketball, non-game, general (Taylor Code 480)"},
			{"met":6.5,"code":15055,"description":"basketball, general"},
			{"met":7.0,"code":15060,"description":"basketball, officiating (Taylor Code 500)"},
			{"met":4.5,"code":15070,"description":"basketball, shooting baskets"},
			{"met":9.3,"code":15072,"description":"basketball, drills, practice"},
			{"met":7.8,"code":15075,"description":"basketball, wheelchair"},
			{"met":2.5,"code":15080,"description":"billiards"},
			{"met":3.0,"code":15090,"description":"bowling (Taylor Code 390)"},
			{"met":3.8,"code":15092,"description":"bowling, indoor, bowling alley"},
			{"met":12.8,"code":15100,"description":"boxing, in ring, general"},
			{"met":5.5,"code":15110,"description":"boxing, punching bag"},
			{"met":7.8,"code":15120,"description":"boxing, sparring"},
			{"met":7.0,"code":15130,"description":"broomball"},
			{"met":5.8,"code":15135,"description":"children\u2019s games, adults playing (e.g., hopscotch, 4-square, dodge ball, playground apparatus, t-ball, tetherball, marbles, jacks, arcade games), moderate effort"},
			{"met":6.0,"code":15138,"description":"cheerleading, gymnastic moves, competitive"},
			{"met":4.0,"code":15140,"description":"coaching, football, soccer, basketball, baseball, swimming, etc."},
			{"met":8.0,"code":15142,"description":"coaching, actively playing sport with players"},
			{"met":4.8,"code":15150,"description":"cricket, batting, bowling, fielding"},
			{"met":3.3,"code":15160,"description":"croquet"},
			{"met":4.0,"code":15170,"description":"curling"},
			{"met":2.5,"code":15180,"description":"darts, wall or lawn"},
			{"met":6.0,"code":15190,"description":"drag racing, pushing or driving a car"},
			{"met":8.5,"code":15192,"description":"auto racing, open wheel"},
			{"met":6.0,"code":15200,"description":"fencing"},
			{"met":8.0,"code":15210,"description":"football, competitive"},
			{"met":8.0,"code":15230,"description":"football, touch, flag, general (Taylor Code 510)"},
			{"met":4.0,"code":15232,"description":"football, touch, flag, light effort"},
			{"met":2.5,"code":15235,"description":"football or baseball, playing catch"},
			{"met":3.0,"code":15240,"description":"frisbee playing, general"},
			{"met":8.0,"code":15250,"description":"frisbee, ultimate"},
			{"met":4.8,"code":15255,"description":"golf, general"},
			{"met":4.3,"code":15265,"description":"golf, walking, carrying clubs"},
			{"met":3.0,"code":15270,"description":"golf, miniature, driving range"},
			{"met":5.3,"code":15285,"description":"golf, walking, pulling clubs"},
			{"met":3.5,"code":15290,"description":"golf, using power cart (Taylor Code 070)"},
			{"met":3.8,"code":15300,"description":"gymnastics, general"},
			{"met":4.0,"code":15310,"description":"hacky sack"},
			{"met":12.0,"code":15320,"description":"handball, general (Taylor Code 520)"},
			{"met":8.0,"code":15330,"description":"handball, team"},
			{"met":4.0,"code":15335,"description":"high ropes course, multiple elements"},
			{"met":3.5,"code":15340,"description":"hang gliding"},
			{"met":7.8,"code":15350,"description":"hockey, field"},
			{"met":8.0,"code":15360,"description":"hockey, ice, general"},
			{"met":10.0,"code":15362,"description":"hockey, ice, competitive"},
			{"met":5.5,"code":15370,"description":"horseback riding, general"},
			{"met":4.3,"code":15375,"description":"horse chores, feeding, watering, cleaning stalls, implied walking and lifting loads"},
			{"met":4.5,"code":15380,"description":"saddling, cleaning, grooming, harnessing and unharnessing horse"},
			{"met":5.8,"code":15390,"description":"horseback riding, trotting"},
			{"met":7.3,"code":15395,"description":"horseback riding, canter or gallop"},
			{"met":3.8,"code":15400,"description":"horseback riding,walking"},
			{"met":9.0,"code":15402,"description":"horseback riding, jumping"},
			{"met":1.8,"code":15408,"description":"horse cart, driving, standing or sitting"},
			{"met":3.0,"code":15410,"description":"horseshoe pitching, quoits"},
			{"met":12.0,"code":15420,"description":"jai alai"},
			{"met":5.3,"code":15425,"description":"martial arts, different types, slower pace, novice performers, practice"},
			{"met":10.3,"code":15430,"description":"martial arts, different types, moderate pace (e.g., judo, jujitsu, karate, kick boxing, tae kwan do, tai-bo, Muay Thai boxing)"},
			{"met":4.0,"code":15440,"description":"juggling"},
			{"met":7.0,"code":15450,"description":"kickball"},
			{"met":8.0,"code":15460,"description":"lacrosse"},
			{"met":3.3,"code":15465,"description":"lawn bowling, bocce ball, outdoor"},
			{"met":4.0,"code":15470,"description":"moto-cross, off-road motor sports, all-terrain vehicle, general"},
			{"met":9.0,"code":15480,"description":"orienteering"},
			{"met":10.0,"code":15490,"description":"paddleball, competitive"},
			{"met":6.0,"code":15500,"description":"paddleball, casual, general (Taylor Code 460)"},
			{"met":8.0,"code":15510,"description":"polo, on horseback"},
			{"met":10.0,"code":15520,"description":"racquetball, competitive"},
			{"met":7.0,"code":15530,"description":"racquetball, general (Taylor Code 470)"},
			{"met":8.0,"code":15533,"description":"rock or mountain climbing (Taylor Code 470) "},
			{"met":7.5,"code":15535,"description":"rock climbing, ascending rock, high difficulty"},
			{"met":5.8,"code":15537,"description":"rock climbing, ascending or traversing rock, low-to-moderate difficulty"},
			{"met":5.0,"code":15540,"description":"rock climbing, rappelling"},
			{"met":4.0,"code":15542,"description":"rodeo sports, general, light effort"},
			{"met":5.5,"code":15544,"description":"rodeo sports, general, moderate effort"},
			{"met":7.0,"code":15546,"description":"rodeo sports, general, vigorous effort"},
			{"met":12.3,"code":15550,"description":"rope jumping, fast pace, 120-160 skips/min"},
			{"met":11.8,"code":15551,"description":"rope jumping, moderate pace, 100-120 skips/min, general,\u00a0 2 foot skip, plain bounce"},
			{"met":8.8,"code":15552,"description":"rope jumping, slow pace, < 100 skips/min, 2 foot skip, rhythm bounce"},
			{"met":8.3,"code":15560,"description":"rugby, union, team, competitive"},
			{"met":6.3,"code":15562,"description":"rugby, touch, non-competitive"},
			{"met":3.0,"code":15570,"description":"shuffleboard"},
			{"met":5.0,"code":15580,"description":"skateboarding, general, moderate effort"},
			{"met":6.0,"code":15582,"description":"skateboarding, competitive, vigorous effort"},
			{"met":7.0,"code":15590,"description":"skating, roller (Taylor Code 360)"},
			{"met":7.5,"code":15591,"description":"rollerblading, in-line skating, 14.4 km/h (9.0 mph), recreational pace"},
			{"met":9.8,"code":15592,"description":"rollerblading, in-line skating, 17.7 km/h (11.0 mph), moderate pace, exercise training"},
			{"met":12.3,"code":15593,"description":"rollerblading, in-line skating, 21.0 to 21.7 km/h (13.0 to 13.6 mph), fast pace, exercise training"},
			{"met":14.0,"code":15594,"description":"rollerblading, in-line skating, 24.0 km/h (15.0 mph), maximal effort"},
			{"met":3.5,"code":15600,"description":"skydiving, base jumping, bungee jumping"},
			{"met":10.0,"code":15605,"description":"soccer, competitive"},
			{"met":7.0,"code":15610,"description":"soccer, casual, general (Taylor Code 540)"},
			{"met":5.0,"code":15620,"description":"softball or baseball, fast or slow pitch, general (Taylor Code 440)"},
			{"met":4.0,"code":15625,"description":"softball, practice"},
			{"met":4.0,"code":15630,"description":"softball, officiating"},
			{"met":6.0,"code":15640,"description":"softball,pitching"},
			{"met":3.3,"code":15645,"description":"sports spectator, very excited, emotional, physically moving\u00a0"},
			{"met":12.0,"code":15650,"description":"squash (Taylor Code 530)"},
			{"met":7.3,"code":15652,"description":"squash, general"},
			{"met":4.0,"code":15660,"description":"table tennis, ping pong (Taylor Code 410)"},
			{"met":3.0,"code":15670,"description":"tai chi, qi gong, general"},
			{"met":1.5,"code":15672,"description":"tai chi, qi gong, sitting, light effort"},
			{"met":7.3,"code":15675,"description":"tennis, general"},
			{"met":6.0,"code":15680,"description":"tennis, doubles (Taylor Code 430)"},
			{"met":4.5,"code":15685,"description":"tennis, doubles"},
			{"met":8.0,"code":15690,"description":"tennis, singles (Taylor Code 420)"},
			{"met":5.0,"code":15695,"description":"tennis, hitting balls, non-game play, moderate effort"},
			{"met":3.5,"code":15700,"description":"trampoline, recreational"},
			{"met":4.5,"code":15702,"description":"trampoline, competitive"},
			{"met":4.0,"code":15710,"description":"volleyball (Taylor Code 400)"},
			{"met":6.0,"code":15711,"description":"volleyball, competitive, in gymnasium"},
			{"met":3.0,"code":15720,"description":"volleyball, non-competitive, 6 - 9 member team, general"},
			{"met":8.0,"code":15725,"description":"volleyball, beach, in sand"},
			{"met":6.0,"code":15730,"description":"wrestling (one match = 5 minutes)"},
			{"met":7.0,"code":15731,"description":"wallyball, general"},
			{"met":4.0,"code":15732,"description":"track and field (e.g., shot, discus, hammer throw)"},
			{"met":6.0,"code":15733,"description":"track and field (e.g., high jump, long jump, triple jump, javelin, pole vault)"},
			{"met":10.0,"code":15734,"description":"track and field (e.g., steeplechase, hurdles)"},
			{"met":2.5,"code":16010,"description":"automobile or light truck (not a semi) driving"},
			{"met":1.3,"code":16015,"description":"riding in a car or truck"},
			{"met":1.3,"code":16016,"description":"riding in a bus or train"},
			{"met":1.8,"code":16020,"description":"flying airplane or helicopter"},
			{"met":3.5,"code":16030,"description":"motor scooter, motorcycle"},
			{"met":6.3,"code":16035,"description":"pulling rickshaw"},
			{"met":6.0,"code":16040,"description":"pushing plane in and out of hangar"},
			{"met":2.5,"code":16050,"description":"truck, semi, tractor, > 1 ton, or bus, driving"},
			{"met":3.5,"code":16060,"description":"walking for transportation, 2.8-3.2 mph, level, moderate pace, firm surface"},
			{"met":7.0,"code":17010,"description":"backpacking (Taylor Code 050)"},
			{"met":7.8,"code":17012,"description":"backpacking, hiking or organized walking with a daypack"},
			{"met":5.0,"code":17020,"description":"carrying 15 pound load (e.g. suitcase), level ground or downstairs"},
			{"met":2.3,"code":17021,"description":"carrying 15 lb child, slow walking"},
			{"met":8.3,"code":17025,"description":"carrying load upstairs, general"},
			{"met":5.0,"code":17026,"description":"carrying 1 to 15 lb load, upstairs"},
			{"met":6.0,"code":17027,"description":"carrying 16 to 24 lb load, upstairs"},
			{"met":8.0,"code":17028,"description":"carrying 25 to 49 lb load, upstairs"},
			{"met":10.0,"code":17029,"description":"carrying 50 to 74 lb load, upstairs"},
			{"met":12.0,"code":17030,"description":"carrying > 74 lb load, upstairs"},
			{"met":3.5,"code":17031,"description":"loading /unloading a car, implied walking"},
			{"met":6.3,"code":17033,"description":"climbing hills, no load"},
			{"met":6.5,"code":17035,"description":"climbing hills with 0 to 9 lb load"},
			{"met":7.3,"code":17040,"description":"climbing hills with 10 to 20 lb load"},
			{"met":8.3,"code":17050,"description":"climbing hills with 21 to 42 lb load"},
			{"met":9.0,"code":17060,"description":"climbing hills with 42+ lb load"},
			{"met":3.5,"code":17070,"description":"descending stairs"},
			{"met":6.0,"code":17080,"description":"hiking, cross country (Taylor Code 040)"},
			{"met":5.3,"code":17082,"description":"hiking or walking at a normal pace through fields and hillsides"},
			{"met":2.5,"code":17085,"description":"bird watching, slow walk"},
			{"met":4.5,"code":17088,"description":"marching, moderate speed, military, no pack"},
			{"met":8.0,"code":17090,"description":"marching rapidly, military, no pack"},
			{"met":4.0,"code":17100,"description":"pushing or pulling stroller with child or walking with children, 2.5 to 3.1 mph"},
			{"met":3.8,"code":17105,"description":"pushing a wheelchair, non-occupational\u00a0"},
			{"met":6.5,"code":17110,"description":"race walking"},
			{"met":8.0,"code":17130,"description":"stair climbing, using or climbing up ladder (Taylor Code 030)"},
			{"met":4.0,"code":17133,"description":"stair climbing, slow pace"},
			{"met":8.8,"code":17134,"description":"stair climbing, fast pace"},
			{"met":5.0,"code":17140,"description":"using crutches"},
			{"met":2.0,"code":17150,"description":"walking, household"},
			{"met":2.0,"code":17151,"description":"walking, less than 2.0 mph, level, strolling, very slow"},
			{"met":2.8,"code":17152,"description":"walking, 2.0 mph, level, slow pace, firm surface"},
			{"met":3.5,"code":17160,"description":"walking for pleasure (Taylor Code 010)"},
			{"met":2.5,"code":17161,"description":"walking from house to car or bus, from car or bus to go places, from car or bus to and from the worksite"},
			{"met":2.5,"code":17162,"description":"walking to neighbor\u2019s house or family\u2019s house for social reasons"},
			{"met":3.0,"code":17165,"description":"walking the dog"},
			{"met":3.0,"code":17170,"description":"walking, 2.5 mph, level, firm surface"},
			{"met":3.3,"code":17180,"description":"walking, 2.5 mph, downhill"},
			{"met":3.5,"code":17190,"description":"walking, 2.8 to 3.2 mph, level, moderate pace, firm surface"},
			{"met":4.3,"code":17200,"description":"walking, 3.5 mph, level, brisk, firm surface, walking for exercise"},
			{"met":5.3,"code":17210,"description":"walking, 2.9 to 3.5 mph, uphill, 1 to 5% grade"},
			{"met":8.0,"code":17211,"description":"walking, 2.9 to 3.5 mph, uphill, 6% to 15% grade"},
			{"met":5.0,"code":17220,"description":"walking, 4.0 mph, level, firm surface, very brisk pace"},
			{"met":7.0,"code":17230,"description":"walking, 4.5 mph, level, firm surface, very, very brisk"},
			{"met":8.3,"code":17231,"description":"walking, 5.0 mph, level, firm surface"},
			{"met":9.8,"code":17235,"description":"walking, 5.0 mph, uphill, 3% grade"},
			{"met":3.5,"code":17250,"description":"walking, for pleasure, work break"},
			{"met":4.8,"code":17260,"description":"walking, grass track"},
			{"met":4.5,"code":17262,"description":"walking, normal pace, plowed field or sand"},
			{"met":4.0,"code":17270,"description":"walking, to work or class (Taylor Code 015)"},
			{"met":2.5,"code":17280,"description":"walking, to and from an outhouse"},
			{"met":4.8,"code":17302,"description":"walking, for exercise, 3.5 to 4 mph, with ski poles, Nordic walking, level, moderate pace"},
			{"met":9.5,"code":17305,"description":"walking, for exercise, 5.0 mph, with ski poles, Nordic walking, level, fast pace"},
			{"met":6.8,"code":17310,"description":"walking, for exercise, with ski poles, Nordic walking, uphill"},
			{"met":6.0,"code":17320,"description":"walking, backwards, 3.5 mph, level"},
			{"met":8.0,"code":17325,"description":"walking, backwards, 3.5 mph, uphill, 5% grade"},
			{"met":2.5,"code":18010,"description":"boating, power, driving"},
			{"met":1.3,"code":18012,"description":"boating, power, passenger, light"},
			{"met":4.0,"code":18020,"description":"canoeing, on camping trip (Taylor Code 270)"},
			{"met":3.3,"code":18025,"description":"canoeing, harvesting wild rice, knocking rice off the stalks"},
			{"met":7.0,"code":18030,"description":"canoeing, portaging"},
			{"met":2.8,"code":18040,"description":"canoeing, rowing, 2.0-3.9 mph, light effort"},
			{"met":5.8,"code":18050,"description":"canoeing, rowing, 4.0-5.9 mph, moderate effort"},
			{"met":12.5,"code":18060,"description":"canoeing, rowing, kayaking, competition, >6 mph, vigorous effort"},
			{"met":3.5,"code":18070,"description":"canoeing, rowing, for pleasure, general (Taylor Code 250)"},
			{"met":12.0,"code":18080,"description":"canoeing, rowing, in competition, or crew or sculling (Taylor Code 260)"},
			{"met":3.0,"code":18090,"description":"diving, springboard or platform"},
			{"met":5.0,"code":18100,"description":"kayaking, moderate effort"},
			{"met":4.0,"code":18110,"description":"paddle boat"},
			{"met":3.0,"code":18120,"description":"sailing, boat and board sailing, windsurfing, ice sailing, general (Taylor Code 235)"},
			{"met":4.5,"code":18130,"description":"sailing, in competition"},
			{"met":3.3,"code":18140,"description":"sailing, Sunfish/Laser/Hobby Cat, Keel boats, ocean sailing, yachting, leisure"},
			{"met":6.0,"code":18150,"description":"skiing, water or wakeboarding (Taylor Code 220)"},
			{"met":7.0,"code":18160,"description":"jet skiing, driving, in water"},
			{"met":15.8,"code":18180,"description":"skindiving, fast"},
			{"met":11.8,"code":18190,"description":"skindiving, moderate"},
			{"met":7.0,"code":18200,"description":"skindiving, scuba diving, general (Taylor Code 310)"},
			{"met":5.0,"code":18210,"description":"snorkeling (Taylor Code 310)"},
			{"met":3.0,"code":18220,"description":"surfing, body or board, general"},
			{"met":5.0,"code":18222,"description":"surfing, body or board, competitive"},
			{"met":6.0,"code":18225,"description":"paddle boarding, standing"},
			{"met":9.8,"code":18230,"description":"swimming laps, freestyle, fast, vigorous effort"},
			{"met":5.8,"code":18240,"description":"swimming laps, freestyle, front crawl, slow, light or moderate effort"},
			{"met":9.5,"code":18250,"description":"swimming, backstroke, general, training or competition"},
			{"met":4.8,"code":18255,"description":"swimming, backstroke, recreational"},
			{"met":10.3,"code":18260,"description":"swimming, breaststroke, general, training or competition"},
			{"met":5.3,"code":18265,"description":"swimming, breaststroke, recreational"},
			{"met":13.8,"code":18270,"description":"swimming, butterfly, general"},
			{"met":10.0,"code":18280,"description":"swimming, crawl, fast speed, ~75 yards/minute, vigorous effort"},
			{"met":8.3,"code":18290,"description":"swimming, crawl, medium speed, ~50 yards/minute, vigorous effort"},
			{"met":6.0,"code":18300,"description":"swimming, lake, ocean, river (Taylor Codes 280, 295)"},
			{"met":6.0,"code":18310,"description":"swimming, leisurely, not lap swimming, general"},
			{"met":7.0,"code":18320,"description":"swimming, sidestroke, general"},
			{"met":8.0,"code":18330,"description":"swimming, synchronized"},
			{"met":9.8,"code":18340,"description":"swimming, treading water, fast, vigorous effort"},
			{"met":3.5,"code":18350,"description":"swimming, treading water, moderate effort, general"},
			{"met":2.3,"code":18352,"description":"tubing, floating on a river, general"},
			{"met":5.5,"code":18355,"description":"water aerobics, water calisthenics"},
			{"met":10.0,"code":18360,"description":"water polo"},
			{"met":3.0,"code":18365,"description":"water volleyball"},
			{"met":2.5,"code":18367,"description":"water walking, light effort, slow pace"},
			{"met":4.5,"code":18368,"description":"water walking, moderate effort, moderate pace"},
			{"met":6.8,"code":18369,"description":"water walking, vigorous effort, brisk pace"},
			{"met":5.0,"code":18370,"description":"whitewater rafting, kayaking, or canoeing"},
			{"met":5.0,"code":18380,"description":"windsurfing, not pumping for speed"},
			{"met":11.0,"code":18385,"description":"windsurfing or kitesurfing, crossing trial"},
			{"met":13.5,"code":18390,"description":"windsurfing, competition, pumping for speed"},
			{"met":7.5,"code":19005,"description":"dog sledding, mushing"},
			{"met":2.5,"code":19006,"description":"dog sledding, passenger"},
			{"met":6.0,"code":19010,"description":"moving ice house, set up/drill holes"},
			{"met":null,"code":19011,"description":"ice fishing, sitting"},
			{"met":14.0,"code":19018,"description":"skating, ice dancing"},
			{"met":5.5,"code":19020,"description":"skating, ice, 9 mph or less"},
			{"met":7.0,"code":19030,"description":"skating, ice, general (Taylor Code 360)"},
			{"met":9.0,"code":19040,"description":"skating, ice, rapidly, more than 9 mph, not competitive"},
			{"met":13.3,"code":19050,"description":"skating, speed, competitive"},
			{"met":7.0,"code":19060,"description":"ski jumping, climb up carrying skis"},
			{"met":7.0,"code":19075,"description":"skiing, general"},
			{"met":6.8,"code":19080,"description":"skiing, cross country, 2.5 mph, slow or light effort, ski walking"},
			{"met":9.0,"code":19090,"description":"skiing, cross country, 4.0-4.9 mph, moderate speed and effort, general"},
			{"met":12.5,"code":19100,"description":"skiing, cross country, 5.0-7.9 mph, brisk speed, vigorous effort"},
			{"met":15.0,"code":19110,"description":"skiing, cross country, >8.0 mph, elite skier, racing"},
			{"met":15.5,"code":19130,"description":"skiing, cross country, hard snow, uphill, maximum, snow mountaineering"},
			{"met":13.3,"code":19135,"description":"skiing, cross-country, skating"},
			{"met":13.5,"code":19140,"description":"skiing, cross-country, biathlon, skating technique"},
			{"met":4.3,"code":19150,"description":"skiing, downhill, alpine or snowboarding, light effort, active time only"},
			{"met":5.3,"code":19160,"description":"skiing, downhill, alpine or snowboarding, moderate effort, general, active time only"},
			{"met":8.0,"code":19170,"description":"skiing, downhill, vigorous effort, racing"},
			{"met":12.5,"code":19175,"description":"skiing, roller, elite racers"},
			{"met":7.0,"code":19180,"description":"sledding, tobogganing, bobsledding, luge (Taylor Code 370)"},
			{"met":5.3,"code":19190,"description":"snow shoeing, moderate effort"},
			{"met":10.0,"code":19192,"description":"snow shoeing, vigorous effort"},
			{"met":3.5,"code":19200,"description":"snowmobiling, driving, moderate"},
			{"met":2.0,"code":19202,"description":"snowmobiling, passenger"},
			{"met":5.3,"code":19252,"description":"snow shoveling, by hand, moderate effort"},
			{"met":7.5,"code":19254,"description":"snow shoveling, by hand, vigorous effort"},
			{"met":2.5,"code":19260,"description":"snow blower, walking and pushing"},
			{"met":1.3,"code":20000,"description":"sitting in church, in service, attending a ceremony, sitting quietly"},
			{"met":2.0,"code":20001,"description":"sitting, playing an instrument at church"},
			{"met":1.8,"code":20005,"description":"sitting in church, talking or singing, attending a ceremony, sitting, active participation"},
			{"met":1.3,"code":20010,"description":"sitting, reading religious materials at home"},
			{"met":1.3,"code":20015,"description":"standing quietly in church, attending a ceremony"},
			{"met":2.0,"code":20020,"description":"standing, singing in church, attending a ceremony, standing, active participation"},
			{"met":1.3,"code":20025,"description":"kneeling in church or at home, praying"},
			{"met":1.8,"code":20030,"description":"standing, talking in church"},
			{"met":2.0,"code":20035,"description":"walking in church"},
			{"met":2.0,"code":20036,"description":"walking, less than 2.0 mph, very slow"},
			{"met":3.5,"code":20037,"description":"walking, 3.0 mph, moderate speed, not carrying anything"},
			{"met":4.3,"code":20038,"description":"walking, 3.5 mph, brisk speed, not carrying anything"},
			{"met":2.0,"code":20039,"description":"walk/stand combination for religious purposes, usher"},
			{"met":5.0,"code":20040,"description":"praise with dance or run, spiritual dancing in church"},
			{"met":2.5,"code":20045,"description":"serving food at church"},
			{"met":2.0,"code":20046,"description":"preparing food at church"},
			{"met":3.3,"code":20047,"description":"washing dishes, cleaning kitchen at church"},
			{"met":1.5,"code":20050,"description":"eating at church"},
			{"met":2.0,"code":20055,"description":"eating/talking at church or standing eating, American Indian Feast days"},
			{"met":3.3,"code":20060,"description":"cleaning church"},
			{"met":4.0,"code":20061,"description":"general yard work at church"},
			{"met":3.5,"code":20065,"description":"standing, moderate effort (e.g., lifting heavy objects, assembling at fast rate)"},
			{"met":4.5,"code":20095,"description":"standing, moderate-to-heavy effort, manual labor, lifting \u2265 50 lbs, heavy maintenance"},
			{"met":1.3,"code":20100,"description":"typing, electric, manual, or computer"},
			{"met":1.5,"code":21000,"description":"sitting, meeting, general, and/or with talking involved"},
			{"met":1.5,"code":21005,"description":"sitting, light office work, in general"},
			{"met":2.5,"code":21010,"description":"sitting, moderate work"},
			{"met":2.3,"code":21015,"description":"standing, light work (filing, talking, assembling)"},
			{"met":2.0,"code":21016,"description":"sitting, child care, only active periods"},
			{"met":3.0,"code":21017,"description":"standing, child care, only active periods"},
			{"met":3.5,"code":21018,"description":"walk/run play with children, moderate, only active periods"},
			{"met":5.8,"code":21019,"description":"walk/run play with children, vigorous, only active periods"},
			{"met":3.0,"code":21020,"description":"standing, light/moderate work (e.g., pack boxes, assemble/repair, set up chairs/furniture)"},
			{"met":3.5,"code":21025,"description":"standing, moderate (lifting 50 lbs., assembling at fast rate)"},
			{"met":4.5,"code":21030,"description":"standing, moderate/heavy work"},
			{"met":1.3,"code":21035,"description":"typing, electric, manual, or computer"},
			{"met":2.0,"code":21040,"description":"walking, less than 2.0 mph, very slow"},
			{"met":3.5,"code":21045,"description":"walking, 3.0 mph, moderate speed, not carrying anything"},
			{"met":4.3,"code":21050,"description":"walking, 3.5 mph, brisk speed, not carrying anything"},
			{"met":3.5,"code":21055,"description":"walking, 2.5 mph slowly and carrying objects less than 25 pounds"},
			{"met":4.5,"code":21060,"description":"walking, 3.0 mph moderately and carrying objects less than 25 pounds, pushing something"},
			{"met":4.8,"code":21065,"description":"walking, 3.5 mph, briskly and carrying objects less than 25 pounds"},
			{"met":3.0,"code":21070,"description":"walk/stand combination, for volunteer purposes"},
			{"met":1.5,"code":21000,"description":"sitting, meeting, general, and/or with talking involved"},
			{"met":1.5,"code":21005,"description":"sitting, light office work, in general"},
			{"met":2.5,"code":21010,"description":"sitting, moderate work"},
			{"met":2.3,"code":21015,"description":"standing, light work (filing, talking, assembling)"},
			{"met":2.0,"code":21016,"description":"sitting, child care, only active periods"},
			{"met":3.0,"code":21017,"description":"standing, child care, only active periods"},
			{"met":3.5,"code":21018,"description":"walk/run play with children, moderate, only active periods"},
			{"met":5.8,"code":21019,"description":"walk/run play with children, vigorous, only active periods"},
			{"met":3.0,"code":21020,"description":"standing, light/moderate work (e.g., pack boxes, assemble/repair, set up chairs/furniture)"},
			{"met":3.5,"code":21025,"description":"standing, moderate (lifting 50 lbs., assembling at fast rate)"},
			{"met":4.5,"code":21030,"description":"standing, moderate/heavy work"},
			{"met":1.3,"code":21035,"description":"typing, electric, manual, or computer"},
			{"met":2.0,"code":21040,"description":"walking, less than 2.0 mph, very slow"},
			{"met":3.5,"code":21045,"description":"walking, 3.0 mph, moderate speed, not carrying anything"},
			{"met":4.3,"code":21050,"description":"walking, 3.5 mph, brisk speed, not carrying anything"},
			{"met":3.5,"code":21055,"description":"walking, 2.5 mph slowly and carrying objects less than 25 pounds"},
			{"met":4.5,"code":21060,"description":"walking, 3.0 mph moderately and carrying objects less than 25 pounds, pushing something"},
			{"met":4.8,"code":21065,"description":"walking, 3.5 mph, briskly and carrying objects less than 25 pounds"},
			{"met":3.0,"code":21070,"description":"walk/stand combination, for volunteer purposes"}];
		
		return {
			// Returns list of all known MET values
			getMets: function() {
				return metsList;
			},
		
			getMetsByCode: function(code) {
				code = parseFloat(code) || 0;
				for (var i=0; i < metsList.length; i++) {
					if(metsList[i]["code"] === code) {
						return metsList[i];
					}
				}
				return false;
			},
		}

	})();

	function Cardiovascular(gender, dob, ht, wt, race) {
		this.gender = gender;
		this.dateofbirth = dob || new Date();
		this.height = ht || 1;
		this.weight = wt || 1;
		this.race = race || null;
	}

	Cardiovascular.prototype = {
		
		getAge: function() {
			var diff = new Date() - this.dateofbirth;
			return diff / 31556900000;
		},
		
		
		// Skinfold tests
		            	
		/*
		*  Fat Free Body Mass (FFM) based on impedance
		* resistance in ohms
		* ht in centimeters (cm)
		* wt in kg
		* returns fat free mass (FFM) in kg
		*/
		fatFreeMass : function(resistance, reactance) {
			resistance = parseFloat(resistance) || 0,
			reactance = parseFloat(reactance) || 0,
			gender = this.gender,
			age = this.getAge(),
			wt = this.weight,
			ht = this.height,
		    results = {};
		            		
		    /*
		    * White boys and girls, 8-15 years
		    * Lohman(1992)
		    */
		    if(age >= 8 && age <= 15) {
		    	results.child = (0.62*(Math.pow(ht,2)/resistance)) + (0.21*wt) + (0.1*reactance) + 4.2;
		    }
		            		
		    /*
		    * White boys and girls, 10-19 years
		    * Houtkooper e al. (1992)
		    */
		    if(age >= 10 && age <= 19) {
		    	results.adolescent = (0.61*(Math.pow(ht,2)/resistance)) + (0.25*wt) + 1.31;
		    	
		    }
		            		
		    if(gender === "male") { // male
		    	if(age >= 17 && age <= 62) { // Adults between 17 and 62
		    	results.adult = {
		            /*
		            * American Indian, black, Hispanic, and White Men
		            * %BF < .20 Segal et al. (1988)
		            */ 
		            lean: (0.00066360*Math.pow(ht,2)) - (0.02117 * resistance) + (0.62854*wt) - (0.12380 * age) + 9.33285,
		            /*
		            * American Indian, black, Hispanic, and White Men
		            * %BF > .20 Segal et al. (1988)
		            */ 
		            obese: (0.00088580*Math.pow(ht,2)) - (0.02999 * resistance) + (0.42688*wt) - (0.07002 * age) + 14.52435,
		    	}
		    	/*
		    	 * Male athletes 19-40 years
		    	 * Oppliger et al. (1991)
		    	 */
		    	if (age >= 19 && age <= 40) {
		    		results.athlete = (0.186*(Math.pow(ht,2)/resistance)) + (0.701*wt) + 1.949;
		    	}
		    	results.adult.average = (results.adult.lean + results.adult.obese) / 2;
		    	}
		    }
		    else if(gender === "female") {
		    	if(age >= 17 && age <= 62 && gender === 'female') { // Adults between 17 and 62
		    	results['adult'] = {
		    		/*
		    		* American Indian, black, Hispanic, and White Women
		    		* %BF < .30 Segal et al. (1988)
		    		*/ 
		    		lean: (0.000646*Math.pow(ht,2)) - (0.014 * resistance) + (0.421*wt) + 10.4,
		    		/*
		    		* American Indian, black, Hispanic, and White Women
		    		* %BF > .30 Segal et al. (1988)
		    		*/ 
		    		obese: (0.00091186*Math.pow(ht,2)) - (0.1466 * resistance) + (0.29990*wt) - (0.07012 * age) + 9.37938,
		    	};
		    	results.adult.average = (results.adult.lean + results.adult.obese) / 2;
		    	}
		    	/*
		    	 * Female athletes 18-27 years
		    	 * Fornetti et al. (1999)
		    	 */
		    	if (age >= 18 && age <=27) {
		    	results.athlete = (0.282*ht) + (0.415*wt) - (0.037*resistance) + (0.096*reactance) - 9.734;
		    	}
		    
		    }
		return results;
		},
		            		
		/****************************** Cardiovascular Assessments, Tests, and Formulas ****************************************/
		            		
		fieldTestsV02Max: function(time, hr, speed) {
			gender = this.gender,
			age = this.getAge(),
			wt = this.weight,
			bmi = (this.weight/Math.pow(this.height, 2)),
			results = {};
			            	        	
			if(gender === "female") {
				gender = 0;
			} else if(gender === "male") {
				gender = 1;
			}
			            	        	
			/*
			*  20m Shuttle Run Test
			*  Leger et al. (1988)
			*  Children 8-19 years old)
			*/
			if(age && speed) {
				results.shuttle = 31.025 + (3.238*speed) - (3.248*age) + 0.1536*(age*speed);
			}
		
			/*
			* 1.0 mile run/walk (8-17 years old)
			* Cureton et al. (1995)
			* for gender field, 1 for male, 0 for female
			*/
			if(bmi && time && gender) {
				results.mileRunWalk =108.94 - (8.41 * time) + 0.34 * Math.pow(time,2) + 0.21*(age*gender) - (0.84*bmi);
			}
			if(distance) {
				/*
				 * 12 minute Run Test
			     * Cooper (1968)
			     * distance expected in meters
			     */
				results.TwelveMinuteTest = 0.0268*distance - 11.3;
				/*
			    * 15 minute run test
			    * Balke (1963)
			    * distance expected in meters 
			    */
			    results.FifteenMinuteTest = 0.0178*distance + 9.6;
			}
			            	        	
			/*
			*  1 Mile Walk Test
			*  Kline et al. (1987)
			*  for gender field, 1 for male, 0 for female
			*  
			*/
			if(age && wt && gender && time && hr) {
				results.mileWalk = 132.853 - .0769*wt - 0.3877*age + 6.315*gender - 3.2649*time - 0.1565*hr;
			}
			            	        	
			/*
			* 1.0 mile steady-state jog
			* George et al. (1993)
			*/
			if(time && hr && wt) {
				results.mileSteady = 100.5 - 0.1636 * wt - 1.438 * time - 0.1928 * hr;
				results.MileHalf = [88.02 - (0.1656*wt) - (2.76*time) + (3.716*gender),
				100.16 + (7.30*gender) - (0.164*wt) - (1.273 * time) - (0.1563 * hr)];
			}
			if(hr && wt) {
				/*
				 * Astrand Step Test
			     * Marley and Linnerud (1976)
		
			     * Queen's College Step Test
			     * McArdle et al. (1972)
			     * For gender field, 1 for male, 0 for female
			     */
			     // Male
			     if(gender ==="male") {
			    	 results.astrand = 3.744*((wt+5)/(hr-62));
			    	 results.queenscollege = 111.33 - (0.42 * hr); 
			     } // Female
			     else if(gender === "female") { 
			    	 results.astrand = 3.750*((wt-3)/(hr-65)); 
			    	 results.queenscollege = 65.81 - (0.1847 * hr); 
			     }	
			 }
			            	        	    	        	
			 return results;
		},
		            	        
		// VO2 Max
		popV02Max: function(time, time2, time3) {
			time = parseFloat(time),
			time2 = parseFloat(time2) || 0,
			time3 = parseFloat(time3) || 0;
			results = {
				male: {
					/*
			            * Active & Sedentary Men
			            * Pollock et al. (1976)
			            * SEE = 2.50 (mL/kg/min)
			            */
			            balke: 1.444 * time + 14.99,
			            /*
			            * Naughton Protocol
			            * Male cardiac patients
			            * Foster et a. (1983)
			            * SEE = 2.60 (mL/kg/min)
			            */
			            naughton: (1.61*time) +3.60, 
			       },
			       female: {
			    	   /*
			    	    * Balke Protocol
			            * Active & Sedentary Women
			            * Pollock et al. (1982)
			            * SEE = 2.20 (mL/kg/min)
			            */
			            balke: 1.38 * time + 5.22,
			            /*
			            * Bruce Protocol
			            * Active & Sedentary Women
			            * Pollock et al. (1982)
			            * SEE = 2.70 (mL/kg/min)
			            */
			            bruce: 4.38 * time - 3.90,
			       },
			       /*
			       * Bruce Protocol
			       * Cardiac patients and Elderly Persons
			       * McConnell and Clark (1987)
			       * SEE = 4.9 (mL/kg/min)
			       */
			       elderlycardiac: (2.282*time) + 8.545,
			  };
			  if (time2 && time3) {
				  /*
			      * Bruce Protocol
			      * Active & Sedentary Men
			      * Foster et al. (1984)
			      * SEE = 3.35 (mL/kg/min)
			      */
			      results.male.bruce = 14.76 - 1.379*time + 0.451*time2 - 0.012*time3;
			  }
			  return results;
		},
		            	        
		/*
		* Walking VO2
		* speed of treadmill in meters / minute
		* grade (% incline) of treadmill in decimal form (e.g. 10% = 0.10) 
		*/
		walkingVO2: function(speed, grade) {
			return (speed * 0.1) + (1.8 * speed * grade);
		},
		/*
		* Running VO2
		* speed of treadmill in meters / minute
		* grade (% incline) of treadmill in decimal form (e.g. 10% = 0.10) 
		*/
		runningVO2: function(speed, grade) {
			return (speed * 0.2) + (speed * grade * 0.9);
		},
		            	        
		/* Leg Ergometry VO2
		* work rate in kgm / min; 1 Watt = 6 kgm / min
		* body mass in kilograms; 1 kg = 2.2 lb
		*/
		legErgometryVO2: function(work, mass) {
			return work/mass * 1.8 + 3.5;
		},
		            	        
		/* Arm Ergometry VO2
		* work rate in kgm / min; 1 Watt = 6 kgm / min
		* body mass in kilograms; 1 kg = 2.2 lb
		*/
		armErgometryVO2: function(work, mass) {
			return work/mass * 3.0;
		},
		            	        
		/* Stepping VO2
		* frequency of stepping in steps per minute
		* bench ht in meters; 1 inch = 0.0254 meters
		*/
		SteppingVO2: function(frequency, ht) {
			return frequency * 0.2 + frequency * ht * 1.8 * 1.33;
		},
		            	        
		// Submaximal Tests
		            	        
		/*
		* VO2 Reserve
		* max is Max VO2
		* rest is Resting VO2
		* reserve and rest must be of same unit type (METs or mL/kg/min)
		* 1 MET = 3.5 mL/kg/min
		*/
		vO2Reserve: function(max, rest) {
			data = max - rest;
			return data;
		},
		            	        
		/*
		* Target VO2 
		* intensity as relative exercise percentage (e.g. 10% = 0.10)
		* reserve is Reserve VO2
		* rest is Resting VO2
		* reserve and rest must be of same unit type (METs or mL/kg/min)
		* 1 MET = 3.5 mL/kg/min
		*/
		targetVO2: function(intensity, reserve, rest) {
			data = (intensity * reserve) + rest;
			return data;
		},
		            	        
		// HR Max
		heartRateMax: function() {
			age = this.getAge();
			data = 208 - (0.7 * age);
			return data;
		},
		            	        
		/*
		* Target Heart Rate
		* intensity as relative exercise percentage (e.g. 10% = 0.10)
		* ACSM (2010) recommendati using 40% to 85% Hear Rate Reserve (HRR) for intensity
		* rest is resting heart rate
		* max is maximum heart rate
		* max and rest must be of same unit type
		*/
		targetHeartRate: function(intensity, rest, max) {
			data = (intensity * (max - rest)) + rest;
			return data;
		},
		            	        
		// Device Specific Formulas
		            	        
		/*
		* Accurate StairMaster 4000 PT METs
		* setting is the Stairmaster MET setting
		*/
		stairMasterMets: function(setting) {
			return 0.556 + 7.45 * setting
		},
		            	        
		/*
		 * Tidal Volume (TV = IC - IRV)
		 * Inspiratory Reserve Volume (IRV = ERV + TV - VC)
		 * Expiratory Reserve Volume (ERV = FRC - RV) 
		 * Residual Volume (RV)
		 * age in years
		 * bsa in meters squared ( body surface area for females) or kilograms (body mass for males)
		*/ 
		residualVolume: function(bsa) {
			gender = this.gender,
			age = this.getAge(),
			ht = this.height,
			wt = this.weight,
			bsa = bsa || 0,
			data = {};
			if(gender === "male") {
				data = {
				Berglund: (0.0115*age) + (0.019* ht) - 2.24,
				Boren: (0.022*age) + (0.0198*ht) - (0.015*wt) - 1.54,
				Goldman: (0.017*age) + (0.027*ht) - 3.477,
				}
			}
			else if(gender === "female") {
				data = {
				Berglund: (0.0115*age) + (0.019* ht) - 2.24,
				Black: (0.021*age) + (0.023*ht) - 2.978,
				Goldman: (0.017*age) + (0.027*ht) - 3.477,
				}
				if (bsa) {
					data.Obrien = (0.03*age) + (0.0387*ht) - (0.73*bsa) - 4.78
				}
			}
			return data;
		},   
		
		// Vital Capacity (VC = ERB + TV + IRV)
		// Inspiratory Capacity (IC = TV + IRV)
		// Functional Residual Capacity (FRC = RV + ERV)
		// Total Lung Capacity (TLC = RV + VC)
		totalLungCapacity: function(rv,vc) {
			rv = parseFloat(rv) || 1300, vc = parseFloat(vc) || 4700;       	        	
			return rv + vc;
		},
		
	}

	// PT Muscular Module
	function Muscle(gender, dob, ht, wt, race) {
		this.gender = gender;
		this.dateofbirth = dob;
		this.weight = wt;
		this.height = ht;
		this.race = race;
	}

	Muscle.prototype = {
		
		getAge: function() {
			var diff = new Date() - this.dateofbirth;
			return diff / 31556900000;
		},
		
		balanceratios: {
				hip: 1,
				elbow: 1,
				trunk: 1,
				ankle: 1,
				shoulders: (2/3),
				knee: 1.5,
				shoulderrotation: 1.5,
				ankleflexion: 3
		},
			
		isMuscleBalanced: function( group, rm1, rm2) {
			rm1 = parseFloat(rm1), rm2 = parseFloat(rm2);
			var ratio = rm1/rm2;
			if(ratio > 0.9 * this.balanceratios[group] || ratio < 1.1 * balanceratios[group]) {
				return true;
			} else {
				return false;
			}
		},
		
	      /******************* Muscle Balance and RM *****************/
	        
		/*
		* 1-RM Formula
		* Based on number of repetitions to fatigue in one set
		* wt is the wt lifted in lb
		*/
		fatigueRepMaximum: function(reps, wt) {
			data = wt / (1.0278 - (reps * 0.0278));
			return data;
		},
		            		
		/*
		* 1-RM Formula
		* Based on the number of repetitions to fatigue obtained in two submaximal sets so long as number of reps is under 10
		* wt1 and wt2 must be of same unit (kg or lb)
		*/
		twoSetMaximum : function(rep1, wt1, rep2, wt2) {
			rep1 = parseFloat(rep1) || 1,
			wt1 = wt1 || 1,
			rep2 = parseFloat(rep2) || 1,
			wt2 = wt2 || 1,
			data = 0;
			data = ((wt1 - wt2)/(rep2 - rep1)) * (rep1 - 1) + wt1;
			return data;
		},
		            		
		/*
		*  gender-specific 1-RM Formula for Younger adults (22 - 36 years old)
		*  Kim, Mayhew, and Peterson (2002)
		*  return value in kg
		*  For gender field, 1 for male, 0 for female
		*/
		YMCAUpperBodyRepMax : function(reps) {
			gender = this.gender;
			reps = parseFloat(reps) || 0,
			data = 0;
			if (gender === "male") {
				data = (1.55 * reps) + 37.9; // male
			} else if(gender === "female") {
				data = (0.31 * reps) + 19.2; // female
			}
			return data;
		},
		            		
		/*
		* Relative Strength
		* rm is 1-Rep Maximum
		* wt is the body mass of the individual
		* rm and wt must be of the same unit (kg or lbs)
		*/
		relativeStrength: function(rm) {
			return rm / this.weight;
		},

		/*
		* Middle Age (40-50 years old) & Older adult (60-70 years old) 1-RM
		* Kuramoto & Payne (1995)
		*/
		femaleRepMax: function(reps, wt) {
			age = this.getAge(),
			data = 0;
			if (age >= 40 && age <= 50) {
				data = (1.06 * wt) + (0.58 * reps) - (0.20 * age) - 3.41;
			} else if(age >= 60 && age <= 70) {
				data = (0.92 * wt) + (0.79 * reps) - (0.20 * age) - 3.73;
			}
			return data;
		},
	}

	function Person(name, gender, dob, wt, ht, race) {
		this.name = name || "John Doe";
		this.gender = gender;
		this.dateofbirth = dob || new Date();
		this.weight = parseFloat(wt) || 1;
		this.height = parseFloat(ht) || 1;
		this.race = race || null;
		this.cardio = new Cardiovascular(gender, this.dateofbirth, this.height, this.weight, race);
		this.muscle = new Muscle(gender, this.dateofbirth, this.height, this.weight, race);
	};

	Person.prototype = {
			
		getAge: function() {
			var diff = new Date() - this.dateofbirth;
			return diff / 31556900000;
		},
		
		
		/****************************** Body Composition ****************************************/
		
		
		/*
		* Net Caloric Cost
		* Mets must be in MET form (not mL/kg/min)
		*/
		netCaloricCost : function(mets) {
			wt = this.weight,
			data = mets * 3.5 * (wt/200);
			return data;
		},
		               	
		bmiToBodyFat : function() {
			gender = this.gender,
			age = this.getAge(),
			bmi = (this.weight/Math.pow(this.height, 2));
			if(gender === "male") { // male
				gender = 1;
			} else if (gender === "female") { // male
				gender = 0;
			}
			data = {
				child: ((1.51*bmi) - (0.70*age) - (3.6*gender) + 1.4) / 100,
				adult: ((1.20*bmi) - (0.23*age) - (10.8*gender) - 5.4) / 100
				}
			return data;
		},
		            	
		/*
		* Population-specific Formulas for converting Body Density (Db) to Percent Body Fat (%BF) 
		*/
		dbToBodyFat : function(bd) {
			bd = parseFloat(bd) || 0,
			data = {Brozek: ((4.570/bd)-4.142) , Siri: ((495/bd)-450)};
		    return data;
		},
		            	
		/*
		* Skinfold tests
		*/
		skinfoldDb : function (sum) {
			sum = parseFloat(sum) || 0,
			age = this.getAge(),
			data = {};
			if(this.gender === "male" ) { // male
			data = {
				black: 1.112 - (0.00043499*sum) + (0.00000055*Math.pow(sum, 2)) - (0.00028826*age),
				white: 1.10938 - (0.0008267*sum) + (0.0000016*Math.pow(sum, 2)) - (0.0002574*age),
				collegiateathlete: {
				black: 8.997 - (0.2468*sum) - (6.343 * 1) - (1.998),
				white: 8.997 - (0.2468*sum) - (6.343 * 1),
				},
				child: (0.735*sum) + 1.0
				}
			} else if(this.gender === "female") {
			data = {
				blackhispanic: 1.0970 - (0.00046971*sum) + (0.00000056*Math.pow(sum, 2)) - (0.00012828*age),
				whiteanorexic: 1.0994921 - (0.0009929*sum) + (0.0000023*Math.pow(sum, 2)) - (0.00001392*age),
				athlete: 1.096095 - (0.0006952*sum) + (0.0000011*Math.pow(sum, 2)) - (0.0000714*age),
				collegiateathlete: {
				black: 8.997 - (0.2468*sum) - (1.998),
				white: 8.997 - (0.2468*sum),
				},
				child: (0.610*sum) + 5.1
			}
			}
			return data;
		},
		
		/*
		* calculate Body Density at TLCNS
		*/
		dbAtTLCNS : function(bd) {
			bd = parseFloat(bd) || 0;
			gender = this.gender,
			data=0;
			if(gender === "female") {
			data = 0.4745*bd + 0.5173;
			}
			else if(gender === "male") {
			data = 0.5829*bd+0.4059;
			}
			return data;
		},
		            	
		/*
		* ulation of body surface area in Meters^2
		* wt in kilogams (kg)
		* ht in centimeters (cm)
		*/
		bodySurfaceArea : function() {
			wt = this.weight,
			ht = this.height;
		    data = { 
		    	Boyd: 0.03330 * Math.pow(wt,(0.7285-0.0188*Math.log(wt)))*Math.pow(ht,0.3),
		    	Costeff: (4*wt+7)/(90+wt),
		        DuBois: 0.0087184 * Math.pow(wt,0.425) * Math.pow(ht,0.725),
		        Fujimoto: 0.008883 * Math.pow(wt, 0.444) * Math.pow(ht, 0.663),
		        GehanGeorge: 0.0235 * Math.pow(wt, 0.51456) * Math.pow(ht, 0.42246),
		        Haycock: 0.024265 * Math.pow(wt, 0.5378) * Math.pow(ht, 0.3964),
		        Mosteller: Math.sqrt(wt*ht)/60,
		        Takahira: 0.007241 * Math.pow(wt, 0.425) * Math.pow(ht,0.725) 
		    };
		    return data;
		},
		            	
		/*
		* Body volume calculation from hydrostatic weighing
		* uww is Underwater wt
		* rv is Residual Volume in mL
		* gv is Volume of air in gastrointestinal tract (GV) (default: 100mL)
		 */
		bodyVolume : function(uww, rv, gv, wd) {
		    wt = this.weight,
		    gv = gv || 100,
		    wd = parseFloat(wd) | 1,
		    data = ((wt - uww)/ waterdensity) - (rv - gv);
		    return data;
		},
		
		/*
		* Resting Metabolic Rate
		* wt in kg, ht in cm, age in years
		*/
		restingMetabolicRate : function() {
			gender = this.gender;
			age = this.getAge(),
			wt = this.weight,
			ht = this.height;
			if(gender ==="male") {
				data = {'Harris-Benedict': 66.473 + 13.751*wt + 5.0033*ht - 6.755*age,'Mifflin': (9.99*wt + 6.25*ht + - 4.92*age)+5} // male
			} else if(gender === "female") {
				data = {'Harris-Benedict': 655.0955 + 9.463*wt + 1.8496*ht - 4.6756*age,'Mifflin': (9.99*wt + 6.25*ht + - 4.92*age)-161}// female
		    }
			return data;
		},
		            	
		/*
		* Total Daily Energy Expenditure of Children and Adults
		* age in years
		* wt in kilograms (kg)
		* ht in meters
		* returns object with sedentary (1.0 < PAL < 1.4), low activity (1.4 < PAL < 1.6), active (1.6 < PAL < 1.9), and very active (1.9 < PAL < 2.5)
		* 
		*/
		predictedTEE : function() {
			gender =  this.gender;
			age = this.getAge(),
			wt = this.weight,
			ht = this.height /100,
			data = {};
		    if(gender === "male") { // male
		    	if (age >= 3 && age <= 18) {
		    	data = {
		    		sedentary: 88.5 - (61.9 * age) + 1*((26.7*wt)+(903*ht)),
		    		low: 88.5 - (61.9 * age) + 1.13*((26.7*wt)+(903*ht)),
		    		active: 88.5 - (61.9 * age) + 1.26*((26.7*wt)+(903*ht)),
		    		veryactive: 88.5 - (61.9 * age) + 1.42*((26.7*wt)+(903*ht)),
		           }
		    	}
		    	else if (age >= 19) {
		    	data = {
		    		sedentary: 662 - (9.53 * age) + 1*((15.9*wt)+(540*ht)),
		    		low: 662 - (9.53 * age) + 1.11*((15.9*wt)+(540*ht)),
		    		active: 662 - (9.53 * age) + 1.25*((15.9*wt)+(540*ht)),
		    		veryactive: 662 - (9.53 * age) + 1.48*((15.9*wt)+(540*ht)),
		            }
		        }
		    } else if(gender === "female") {
		    	if (age >= 3 && age <= 18) {
		    	data = {
		    		sedentary: 135.3 - (30.8 * age) + 1*((10*wt)+(934*ht)),
		    		low: 135.3 - (30.8 * age) + 1.16*((10*wt)+(934*ht)),
		    		active: 135.3 - (30.8 * age) + 1.31*((10*wt)+(934*ht)),
		    		veryactive: 135.3 - (30.8 * age) + 1.56*((10*wt)+(934*ht)),
		    	}
		    	}
		    	else if (age >= 19) {
		    	data = {
		    		sedentary: 354 - (6.91 * age) + 1*((9.36*wt)+(726*ht)),
		    		low: 662 - (9.53 * age) + 1.12*((15.9*wt)+(540*ht)),
		    		active: 662 - (9.53 * age) + 1.27*((15.9*wt)+(540*ht)),
		    		veryactive: 662 - (9.53 * age) + 1.45*((15.9*wt)+(540*ht)),
		    	}
		    	}
		    }
		    return data;
		},
		
	}
	
	return {
		Person: Person,
		Cardiovascular: Cardiovascular,
		Mets: Mets,
		Muscle: Muscle,
	}
	
})();