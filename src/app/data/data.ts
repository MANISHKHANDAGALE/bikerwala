import { amperelogo, apriliaLogo, bajajLogo, baseUrl, benelliLogo, bgaussLogo, bmwLogo, bounceLogo, brixtonLogo, bsaLogo, cfmotoLogo, ducatiLogo, evoletLogo, ferratoLogo, gemopaiLogo, harleyDavidsonLogo, heroLogo, hondaLogo, hopElectricLogo, husqvarnaLogo, indianLogo, ivoomiLogo, jawaLogo, joyEBikeLogo, kawasakiLogo, keewayLogo, kineticGreenLogo, kineticLogo, ktmLogo, lambrettaLogo, lectrixLogo, matterLogo, motoGuzziLogo, motoMoriniLogo, nortonLogo, obenLogo, odysseLogo, okinawaLogo, olaLogo, pureEvLogo, qjMotorLogo, quantumEnergyLogo, revoltLogo, royalenfield, royalEnfieldLogo, simpleEnergyLogo, suzukiLogo, triumphLogo, tvsLogo, ultravioletteLogo, vespaLogo, vidaLogo, vlfLogo, yamahaLogo, yezdiLogo, yoLogo, zontesLogo } from "./imageUrls";


export interface Prodcuts {
    slug: string
    title: string;
    imageUrl?: string;
    price?: string;
    rating?: string | null;
    description?: string;
    brand?: string;
    category?: string;
    longdescription?: string;

    /* 🔹 Added fields (no breaking changes) */

    id?: number;
    stars?: number

    fuelType?: 'petrol' | 'electric' | 'cng';
    bikeType?: 'commuter' | 'sports' | 'cruiser' | 'adventure' | 'scooter' | 'tourer';

    engineCC?: number;
    power?: string;
    torque?: string;
    mileage?: string;
    topSpeed?: string;
    transmission?: string;

    priceExShowroom?: number;
    priceOnRoad?: number;

    launchStatus?: 'launched' | 'upcoming';

    tags?: string[];        // trending, popular, electric, budget etc.

    kerbWeight?: number;   // in kg
    seatHeight?: number;   // in mm
    fuelTankCapacity?: number | null
}


export const productsList: Prodcuts[] = [
    {
        "id": 1,
        "slug": "re-classic-350",
        "title": "Royal Enfield Classic 350",
        "imageUrl": `${royalenfield}/classic-350.png`,
        "price": "1,81,129",
        "priceExShowroom": 181129,
        "rating": "4.5",
        "description": "A classic single-cylinder Royal Enfield built for comfort and cruising.",
        "longdescription": "The Royal Enfield Classic 350 is known for its timeless design, relaxed riding posture, and strong low-end torque, making it ideal for city rides and highway cruising.",
        "brand": "Royal Enfield",
        "category": "trending",
        "tags": ["trending", "popular"],
        "fuelType": "petrol",
        "bikeType": "cruiser",
        "engineCC": 349,
        "mileage": "35 kmpl",
        "launchStatus": "launched"
    },
    {
        "id": 3,
        "slug": "re-hunter-350",
        "title": "Royal Enfield Hunter 350",
        "imageUrl": "/assests/bike_img/royalenfield/hunter-350.png",
        "price": "1,55,000",
        "priceExShowroom": 155000,
        "rating": "4.3",
        "description": "A lightweight, urban cruiser from Royal Enfield.",
        "longdescription": "Hunter 350 is designed for young urban riders, offering agile handling, compact dimensions, and a refined J-series engine.",
        "brand": "Royal Enfield",
        "category": "trending",
        "tags": ["trending", "urban"],
        "fuelType": "petrol",
        "bikeType": "cruiser",
        "engineCC": 349,
        "mileage": "36 kmpl",
        "launchStatus": "launched"
    },
    {
        "id": 4,
        "slug": "yamaha-mt-15",
        "title": "Yamaha MT-15",
        "imageUrl": "/assests/bike_img/yamaha/mt-15.png",
        "price": "1,66,000",
        "priceExShowroom": 166000,
        "rating": "4.4",
        "description": "A sporty naked bike with an aggressive stance and precise handling.",
        "longdescription": "The MT-15 offers sharp styling, advanced VVA engine technology, and excellent handling for city and highway rides.",
        "brand": "Yamaha",
        "category": "trending",
        "tags": ["trending", "sports"],
        "fuelType": "petrol",
        "bikeType": "sports",
        "engineCC": 155,
        "mileage": "45 kmpl",
        "launchStatus": "launched"
    },
    {
        "id": 5,
        "slug": "bajaj-pulsar-n160",
        "title": "Bajaj Pulsar N160",
        "imageUrl": "/assests/bike_img/bajaj/pulsar-n160.png",
        "price": "1,35,000",
        "priceExShowroom": 135000,
        "rating": "4.1",
        "description": "Modern styling with a reliable single-cylinder engine.",
        "longdescription": "The Pulsar N160 features aggressive streetfighter styling, dual-channel ABS, and a refined engine for daily performance.",
        "brand": "Bajaj",
        "category": "trending",
        "tags": ["trending", "popular"],
        "fuelType": "petrol",
        "bikeType": "sports",
        "engineCC": 164,
        "mileage": "45 kmpl",
        "launchStatus": "launched"
    },
    {
        "id": 6,
        "slug": "yamaha-r15-v4",
        "title": "Yamaha R15 V4",
        "imageUrl": "/assests/bike_img/yamaha/r15.png",
        "price": "1,82,000",
        "priceExShowroom": 182000,
        "rating": "4.6",
        "description": "Aggressive supersport design with a refined VVA engine and advanced electronics.",
        "longdescription": "The R15 V4 delivers track-inspired design, traction control, quick shifter, and a high-revving engine.",
        "brand": "Yamaha",
        "category": "trending",
        "tags": ["trending", "sports"],
        "fuelType": "petrol",
        "bikeType": "sports",
        "engineCC": 155,
        "mileage": "40 kmpl",
        "launchStatus": "launched"
    },
    {
        "id": 7,
        "slug": "tvs-ronin-225",
        "title": "TVS Ronin 225",
        "imageUrl": "/assests/bike_img/tvs/ronin.png",
        "price": "1,49,000",
        "priceExShowroom": 149000,
        "rating": "4.3",
        "description": "Neo-retro roadster with strong low-end torque and premium ride comfort.",
        "longdescription": "TVS Ronin blends modern technology with retro styling, offering a relaxed ride and excellent low-speed performance.",
        "brand": "TVS",
        "category": "trending",
        "tags": ["trending", "neo-retro"],
        "fuelType": "petrol",
        "bikeType": "cruiser",
        "engineCC": 225,
        "mileage": "42 kmpl",
        "launchStatus": "launched"
    },
    {
        "id": 8,
        "slug": "yamaha-xsr-155",
        "title": "Yamaha XSR 155",
        "imageUrl": "/assests/bike_img/yamaha/xsr-155.png",
        "price": "1,36,000",
        "priceExShowroom": 136000,
        "rating": "4.4",
        "description": "Retro-modern motorcycle built on R15 platform with relaxed ergonomics.",
        "longdescription": "XSR 155 combines classic design with modern engineering, making it suitable for daily commuting and relaxed rides.",
        "brand": "Yamaha",
        "category": "trending",
        "tags": ["trending", "retro"],
        "fuelType": "petrol",
        "bikeType": "sports",
        "engineCC": 155,
        "mileage": "48 kmpl",
        "launchStatus": "launched"
    },
    {
        "id": 9,
        "slug": "Honda hness-cb-350",
        "title": "Honda HNESS-CB 350",
        "imageUrl": "/assests/bike_img/honda/hness-cb350.png",
        "price": "3,90,677",
        "priceExShowroom": 90677,
        "rating": "4.2",
        "description": "Lightweight sporty commuter with excellent mileage and sharp styling.",
        "longdescription": "The Xtreme 125R focuses on sporty looks, fuel efficiency, and everyday usability for young commuters.",
        "brand": "Honda",
        "category": "trending",
        "tags": ["trending", "budget"],
        "fuelType": "petrol",
        "bikeType": "commuter",
        "engineCC": 125,
        "mileage": "66 kmpl",
        "launchStatus": "launched"
    },
    {
        "id": 10,
        "slug": "bajaj-platina-100",
        "title": "Bajaj Platina 100",
        "imageUrl": "/assests/bike_img/bajaj/platina-100.png",
        "price": "65,000",
        "priceExShowroom": 65000,
        "rating": "4.1",
        "description": "A highly fuel-efficient commuter bike designed for daily use.",
        "longdescription": "The Bajaj Platina 100 is known for its excellent mileage, comfortable seating, and low maintenance cost, making it ideal for everyday commuting.",
        "brand": "Bajaj",
        "category": "popular",
        "tags": ["popular", "budget"],
        "fuelType": "petrol",
        "bikeType": "commuter",
        "engineCC": 102,
        "mileage": "70 kmpl",
        "launchStatus": "launched"
    },
    {
        "id": 11,
        "slug": "bajaj-platina-110",
        "title": "Bajaj Platina 110",
        "imageUrl": "/assests/bike_img/bajaj/platina-110.png",
        "price": "70,000",
        "priceExShowroom": 70000,
        "rating": "4.2",
        "description": "A comfortable commuter bike with improved power and suspension.",
        "longdescription": "Platina 110 offers better ride comfort with a slightly more powerful engine while retaining class-leading fuel efficiency.",
        "brand": "Bajaj",
        "category": "popular",
        "tags": ["popular", "budget"],
        "fuelType": "petrol",
        "bikeType": "commuter",
        "engineCC": 115,
        "mileage": "65 kmpl",
        "launchStatus": "launched"
    },
    {
        "id": 12,
        "slug": "bajaj-ct-110",
        "title": "Bajaj CT 110",
        "imageUrl": "/assests/bike_img/bajaj/ct-110.png",
        "price": "69,000",
        "priceExShowroom": 69000,
        "rating": "4.0",
        "description": "A rugged commuter bike built for rough roads and durability.",
        "longdescription": "The CT 110 is designed for tough conditions with strong suspension, simple mechanics, and reliable performance.",
        "brand": "Bajaj",
        "category": "popular",
        "tags": ["popular", "rugged"],
        "fuelType": "petrol",
        "bikeType": "commuter",
        "engineCC": 115,
        "mileage": "70 kmpl",
        "launchStatus": "launched"
    },
    {
        "id": 13,
        "slug": "honda-activa-6g",
        "title": "Honda Activa 6G",
        "imageUrl": "/assests/bike_img/honda/activa-6g.png",
        "price": "1,06,000",
        "priceExShowroom": 76000,
        "rating": "4.5",
        "description": "India’s most popular scooter known for comfort and reliability.",
        "longdescription": "The Activa 6G delivers smooth performance, excellent refinement, and low maintenance, making it the top choice for families.",
        "brand": "Honda",
        "category": "popular",
        "tags": ["popular", "family"],
        "fuelType": "petrol",
        "bikeType": "scooter",
        "engineCC": 109,
        "mileage": "50 kmpl",
        "launchStatus": "launched"
    },
    {
        "id": 14,
        "slug": "honda-activa-125",
        "title": "Honda Activa 125",
        "imageUrl": "/assests/bike_img/honda/activa-125.png",
        "price": "82,000",
        "priceExShowroom": 82000,
        "rating": "4.4",
        "description": "A premium scooter offering more power and refined ride quality.",
        "longdescription": "Activa 125 adds extra performance, better features, and premium feel while maintaining Honda reliability.",
        "brand": "Honda",
        "category": "popular",
        "tags": ["popular", "premium"],
        "fuelType": "petrol",
        "bikeType": "scooter",
        "engineCC": 124,
        "mileage": "48 kmpl",
        "launchStatus": "launched"
    },
    {
        "id": 16,
        "slug": "re-bullet",
        "title": "Royal Enfield Bullet",
        "imageUrl": "/assests/bike_img/royalenfield/bullet.png",
        "price": "1,73,000",
        "priceExShowroom": 173000,
        "rating": "4.6",
        "description": "An iconic motorcycle famous for its thumping engine and road presence.",
        "longdescription": "The Royal Enfield Bullet is a legend with unmatched heritage, offering relaxed cruising and classic design.",
        "brand": "Royal Enfield",
        "category": "popular",
        "tags": ["popular", "classic"],
        "fuelType": "petrol",
        "bikeType": "cruiser",
        "engineCC": 349,
        "mileage": "37 kmpl",
        "launchStatus": "launched"
    },
    {
        "id": 17,
        "slug": "re-classic-350",
        "title": "Royal Enfield Classic 350",
        "imageUrl": "/assests/bike_img/royalenfield/classic-350.png",
        "price": "1,81,129",
        "priceExShowroom": 181129,
        "rating": "4.5",
        "description": "A timeless motorcycle built for comfort and cruising.",
        "longdescription": "Classic 350 blends vintage styling with modern engineering, delivering a smooth and relaxed riding experience.",
        "brand": "Royal Enfield",
        "category": "popular",
        "tags": ["popular", "classic"],
        "fuelType": "petrol",
        "bikeType": "cruiser",
        "engineCC": 349,
        "mileage": "35 kmpl",
        "launchStatus": "launched"
    },
    {
        "id": 18,
        "slug": "re-meteor-350",
        "title": "Royal Enfield Meteor 350",
        "imageUrl": "/assests/bike_img/royalenfield/meteor-350.png",
        "price": "2,05,000",
        "priceExShowroom": 205000,
        "rating": "4.4",
        "description": "A modern cruiser designed for comfortable long rides.",
        "longdescription": "Meteor 350 offers relaxed ergonomics, smooth engine performance, and excellent highway cruising ability.",
        "brand": "Royal Enfield",
        "category": "popular",
        "tags": ["popular", "touring"],
        "fuelType": "petrol",
        "bikeType": "tourer",
        "engineCC": 349,
        "mileage": "35 kmpl",
        "launchStatus": "launched"
    },
    {
        "id": 19,
        "slug": "tvs-ntorq-125",
        "title": "TVS NTorq 125",
        "imageUrl": "/assests/bike_img/tvs/ntorq-125.png",
        "price": "84,000",
        "priceExShowroom": 84000,
        "rating": "4.4",
        "description": "A sporty scooter with class-leading performance and features.",
        "longdescription": "NTorq 125 is known for its strong acceleration, sporty design, and connected features.",
        "brand": "TVS",
        "category": "popular",
        "tags": ["popular", "sports"],
        "fuelType": "petrol",
        "bikeType": "scooter",
        "engineCC": 124,
        "mileage": "47 kmpl",
        "launchStatus": "launched"
    },
    {
        "id": 20,
        "slug": "tvs-star-city",
        "title": "TVS Star City",
        "imageUrl": "/assests/bike_img/tvs/star-city.png",
        "price": "75,000",
        "priceExShowroom": 75000,
        "rating": "4.1",
        "description": "A reliable commuter bike with good comfort and mileage.",
        "longdescription": "Star City is designed for daily commuting with smooth performance, durability, and low ownership cost.",
        "brand": "TVS",
        "category": "popular",
        "tags": ["popular", "commuter"],
        "fuelType": "petrol",
        "bikeType": "commuter",
        "engineCC": 109,
        "mileage": "70 kmpl",
        "launchStatus": "launched"
    },
    {
        "id": 21,
        "slug": "tvs-sport",
        "title": "TVS Sport",
        "imageUrl": "/assests/bike_img/tvs/sport.png",
        "price": "59,000",
        "priceExShowroom": 59000,
        "rating": "4.0",
        "description": "An affordable commuter bike focused on mileage and simplicity.",
        "longdescription": "TVS Sport is one of the most fuel-efficient bikes in India, ideal for cost-conscious daily commuters.",
        "brand": "TVS",
        "category": "popular",
        "tags": ["popular", "budget"],
        "fuelType": "petrol",
        "bikeType": "commuter",
        "engineCC": 109,
        "mileage": "75 kmpl",
        "launchStatus": "launched"
    },
    {
        "id": 22,
        "slug": "honda-cb1000gt",
        "title": "Honda CB1000GT",
        "price": "₹15,00,000",
        "imageUrl": "/assests/bike_img/honda/cb1000gt.png",
        "priceExShowroom": 1500000,
        "rating": null,
        "description": "A sport-touring version of the CB1000.",
        "longdescription": "Designed for long-distance comfort with a powerful engine, upright ergonomics, and touring-focused features.",
        "brand": "Honda",
        "category": "upcoming",
        "tags": ["upcoming", "tourer", "premium"],
        "fuelType": "petrol",
        "bikeType": "tourer",
        "launchStatus": "upcoming"
    },
    {
        "id": 23,
        "slug": "bajaj-pulsar-ns",
        "title": "Bajaj Pulsar NS",
        "price": "₹1,50,000",
        "imageUrl": "/assests/bike_img/bajaj/pulsar-ns.png",
        "priceExShowroom": 150000,
        "rating": null,
        "description": "An upcoming evolution of the Pulsar NS lineup.",
        "longdescription": "Expected to feature sharper styling, improved performance, and modern tech upgrades.",
        "brand": "Bajaj",
        "category": "upcoming",
        "tags": ["upcoming", "sports", "trending"],
        "fuelType": "petrol",
        "bikeType": "sports",
        "launchStatus": "upcoming"
    },
    {
        "id": 24,
        "slug": "bajaj-pulsar-ns125",
        "title": "Bajaj Pulsar NS125",
        "price": "₹1,05,000",
        "imageUrl": "/assests/bike_img/bajaj/pulsar-ns125.png",
        "priceExShowroom": 105000,
        "rating": null,
        "description": "A lightweight and sporty commuter motorcycle.",
        "longdescription": "Aimed at young riders, offering aggressive design with a fuel-efficient 125cc engine.",
        "brand": "Bajaj",
        "category": "upcoming",
        "tags": ["upcoming", "commuter", "budget"],
        "fuelType": "petrol",
        "bikeType": "commuter",
        "launchStatus": "upcoming"
    },
    {
        "id": 25,
        "slug": "re-bear-650",
        "title": "Royal Enfield Bear 650",
        "price": "₹3,50,000",
        "imageUrl": "/assests/bike_img/royalenfield/bear-650.png",
        "priceExShowroom": 350000,
        "rating": null,
        "description": "A rugged 650cc Royal Enfield motorcycle.",
        "longdescription": "Expected to focus on durability, torque-heavy performance, and a bold road presence.",
        "brand": "Royal Enfield",
        "category": "upcoming",
        "tags": ["upcoming", "cruiser", "trending"],
        "fuelType": "petrol",
        "bikeType": "cruiser",
        "launchStatus": "upcoming"
    },
    {
        "id": 26,
        "slug": "re-classic-650",
        "title": "Royal Enfield Classic 650",
        "price": "₹3,20,000 ",
        "imageUrl": "/assests/bike_img/royalenfield/classic-650.png",
        "priceExShowroom": 320000,
        "rating": null,
        "description": "A bigger and more powerful Classic motorcycle.",
        "longdescription": "Blends iconic retro styling with a refined 650cc twin-cylinder engine.",
        "brand": "Royal Enfield",
        "category": "upcoming",
        "tags": ["upcoming", "cruiser", "popular"],
        "fuelType": "petrol",
        "bikeType": "cruiser",
        "launchStatus": "upcoming"
    },
    {
        "id": 28,
        "slug": "tvs-apache-rtx",
        "title": "TVS Apache RTX",
        "price": "₹2,50,000 ",
        "imageUrl": "/assests/bike_img/tvs/apache-rtx.png",
        "priceExShowroom": 250000,
        "rating": null,
        "description": "An upcoming adventure-style motorcycle from TVS.",
        "longdescription": "Expected to combine Apache performance DNA with touring capability and off-road readiness.",
        "brand": "TVS",
        "category": "upcoming",
        "tags": ["upcoming", "adventure", "trending"],
        "fuelType": "petrol",
        "bikeType": "adventure",
        "launchStatus": "upcoming"
    },
    {
        "id": 30,
        "slug": "re-himalayan-electric",
        "title": "Royal Enfield Himalayan Electric",
        "imageUrl": "/assests/bike_img/royalenfield/himalayan-electric.png",
        "price": "TBD",
        "rating": null,
        "description": "An upcoming electric adventure motorcycle.",
        "longdescription": "Part of Royal Enfield’s future EV strategy, combining Himalayan DNA with electric power.",
        "brand": "Royal Enfield",
        "category": "electric",
        "tags": ["electric", "upcoming"],
        "fuelType": "electric",
        "bikeType": "adventure",
        "launchStatus": "upcoming"
    },
    {
        "id": 31,
        "slug": "re-flying-flea-c6",
        "title": "Royal Enfield Flying Flea C6",
        "imageUrl": "/assests/bike_img/royalenfield/flying-flea-c6.png",
        "price": "2,00,000 ",
        "priceExShowroom": 200000,
        "rating": null,
        "description": "A heritage-inspired electric motorcycle.",
        "longdescription": "Flying Flea C6 is Royal Enfield’s first electric motorcycle concept for urban mobility.",
        "brand": "Royal Enfield",
        "category": "electric",
        "tags": ["electric", "upcoming"],
        "fuelType": "electric",
        "bikeType": "commuter",
        "launchStatus": "upcoming"
    },
    {
        "id": 32,
        "slug": "tvs-iqube",
        "title": "TVS iQube",
        "imageUrl": "/assests/bike_img/tvs/iqube.png",
        "price": "1,05,000",
        "priceExShowroom": 105000,
        "rating": "4.2",
        "description": "A reliable and feature-rich electric scooter.",
        "longdescription": "TVS iQube offers smooth performance, connected features, and strong build quality for daily urban use.",
        "brand": "TVS",
        "category": "electric",
        "tags": ["electric", "popular"],
        "fuelType": "electric",
        "bikeType": "scooter",
        "launchStatus": "launched"
    },
]

export interface BrandName {
    id: number;
    imageUrl: string;
    label: string;
}


export const brands: BrandName[] = [

    { id: 1, imageUrl: bajajLogo, label: 'Bajaj' },
    { id: 2, imageUrl: ktmLogo, label: 'KTM' },
    { id: 3, imageUrl: royalEnfieldLogo, label: 'Royal Enfield' },
    { id: 4, imageUrl: kawasakiLogo, label: 'Kawasaki' },
    { id: 5, imageUrl: heroLogo, label: 'Hero' },
    { id: 6, imageUrl: hondaLogo, label: 'Honda' },
    { id: 7, imageUrl: suzukiLogo, label: 'Suzuki' },
    { id: 8, imageUrl: tvsLogo, label: 'TVS' },
    { id: 9, imageUrl: triumphLogo, label: 'Triumph' },
    { id: 10, imageUrl: yamahaLogo, label: 'Yamaha' },

    { id: 11, imageUrl: amperelogo, label: 'Ampere' },
    { id: 12, imageUrl: apriliaLogo, label: 'Aprilia' },

    { id: 13, imageUrl: benelliLogo, label: 'Benelli' },
    { id: 14, imageUrl: bmwLogo, label: 'BMW' },
    { id: 15, imageUrl: bsaLogo, label: 'BSA' },
    { id: 16, imageUrl: bgaussLogo, label: 'Bgauss' },
    { id: 17, imageUrl: bounceLogo, label: 'Bounce' },
    { id: 18, imageUrl: brixtonLogo, label: 'Brixton' },

    { id: 19, imageUrl: cfmotoLogo, label: 'Cfmoto' },
    { id: 20, imageUrl: ducatiLogo, label: 'Ducati' },

    { id: 21, imageUrl: evoletLogo, label: 'Evolet' },
    { id: 22, imageUrl: ferratoLogo, label: 'Ferrato' },
    { id: 23, imageUrl: gemopaiLogo, label: 'Gemopai' },

    { id: 24, imageUrl: harleyDavidsonLogo, label: 'Harley-Davidson' },

    { id: 25, imageUrl: hopElectricLogo, label: 'Hop Electric' },

    { id: 26, imageUrl: husqvarnaLogo, label: 'Husqvarna' },
    { id: 27, imageUrl: indianLogo, label: 'Indian' },
    { id: 28, imageUrl: ivoomiLogo, label: 'Ivoomi' },

    { id: 29, imageUrl: jawaLogo, label: 'Jawa' },
    { id: 30, imageUrl: joyEBikeLogo, label: 'Joy Ebike' },

    { id: 31, imageUrl: keewayLogo, label: 'Keeway' },
    { id: 32, imageUrl: kineticLogo, label: 'Kinetic' },
    { id: 33, imageUrl: kineticGreenLogo, label: 'Kinetic Green' },

    { id: 34, imageUrl: lambrettaLogo, label: 'Lambretta' },
    { id: 35, imageUrl: lectrixLogo, label: 'Lectrix' },

    { id: 36, imageUrl: matterLogo, label: 'Matter' },
    { id: 37, imageUrl: motoGuzziLogo, label: 'Moto Guzzi' },
    { id: 38, imageUrl: motoMoriniLogo, label: 'Moto Morini' },

    { id: 39, imageUrl: nortonLogo, label: 'Norton' },

    { id: 40, imageUrl: obenLogo, label: 'Oben' },
    { id: 41, imageUrl: odysseLogo, label: 'Odysse' },
    { id: 42, imageUrl: okinawaLogo, label: 'Okinawa' },
    { id: 43, imageUrl: olaLogo, label: 'Ola' },

    { id: 44, imageUrl: pureEvLogo, label: 'Pure-Ev' },

    { id: 45, imageUrl: qjMotorLogo, label: 'Qj-Motor' },
    { id: 46, imageUrl: quantumEnergyLogo, label: 'Quantum Energy' },

    { id: 47, imageUrl: revoltLogo, label: 'Revolt' },

    { id: 48, imageUrl: simpleEnergyLogo, label: 'Simple Energy' },

    { id: 49, imageUrl: ultravioletteLogo, label: 'Ultraviolette' },

    { id: 50, imageUrl: vespaLogo, label: 'Vespa' },
    { id: 51, imageUrl: vidaLogo, label: 'Vida' },
    { id: 52, imageUrl: vlfLogo, label: 'Vlf' },

    { id: 53, imageUrl: yezdiLogo, label: 'Yezdi' },
    { id: 54, imageUrl: yoLogo, label: 'Yo' },
    { id: 55, imageUrl: zontesLogo, label: 'Zontes' },
];


