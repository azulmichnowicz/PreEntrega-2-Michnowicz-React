import style from "./components/Item/Item.module.css";

const products = [
    { id: "lip-balm", name: "Sugar Lip Balm Hydrating Treatment Fresh", img: "https://www.sephora.com/productimages/sku/s2594489-main-zoom.jpg?imwidth=612", price: 25, category: "skincare", description: " A 24hr hydrating lip balm powered by sugar from beet root and sugar cane that offers sheer, buildable color with a smooth, buttery texture.", stock: 10 },
    { id: "serum-the-ordinary", name: "The Ordinary Hyaluronic Acid 2% + B5 Hydrating Serum", img: "https://www.sephora.com/productimages/sku/s2031375-main-zoom.jpg?imwidth=612", price: 8.90, category: "skincare", description: "A luxuriously hydrating formula, enriched with ultra-pure, vegan hyaluronic acid, provides long-lasting moisture, revitalizing your skin's natural radiance.", stock: 10 },
    { id: "hand-sanitizer-touchland", name: "Touchland Power Mist Hydrating Hand Sanitizer", img: "https://www.sephora.com/productimages/sku/s2556785-main-zoom.jpg?imwidth=612", price: 10, category: "skincare", description: "An award-winning hand sanitizer that does it all: sanitizes, hydrates, and softens, all while leaving your hands delicately scented.", stock: 10 },
    { id: "serum-charlotte", name: "Charlotte’s Magic Serum with Vitamin C", img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1671564701-serum-charlotte-tilbury-1671564676.jpg?crop=1xw:1xh;center,top&resize=980:*", price: 85, category: "skincare", description: "A Vitamin C and Polyglutamic Acid anti-aging serum that effectively reduces the appearance of dark spots, fine lines, and wrinkles, visibly brightens the skin tone providing a radiant complexion.", stock: 20 },
    { id: "eye-mask-sephora", name: "SEPHORA COLLECTION Clean Eye Mask", img: "https://www.sephora.com/productimages/sku/s2283034-main-zoom.jpg?imwidth=612", price: 4, category: "skincare", description: "Each of the 91% naturally sourced, vegan ingredients in this five-minute bio-cellulose eye mask meticulously targets under-eye concerns, including dryness, dark circles, and fine lines, delivering a revitalizing and soothing skincare experience.", stock: 10 },
    { id: "overnight-mask-floral", name: "fresh Floral Recovery Overnight Mask with Squalane", img: "https://www.sephora.com/productimages/sku/s2535417-main-zoom.jpg?imwidth=612", price: 69, category: "skincare", description: "An overnight face mask that is clinically proven to calm signs of sensitivity—redness, uneven tone, and rough texture—for a visibly even-toned complexion, providing a gentle and nourishing solution for those seeking relief from skin sensitivity. ", stock: 10 },
    { id: "lip-balm-laneige", name: "LANEIGE Lip Glowy Balm", img: "https://www.sephora.com/productimages/sku/s2210482-main-zoom.jpg?imwidth=612", price: 18, category: "skincare", description: "Achieve irresistibly kissable lips throughout the day with this lightweight, moisture-coating lip balm. Formulated for hydration and a subtle tint, it pampers your lips, leaving them soft and ready for every moment, from casual outings to glamorous evenings.", stock: 10 },
    { id: "night-mask-cicapair", name: "Dr. Jart+ Cicapair™ Tiger Grass Sleepair Intensive Night Mask", img: "https://www.sephora.com/productimages/sku/s2425874-main-zoom.jpg?imwidth=612", price: 42, category: "skincare", description: "Indulge in a soothing, moisturizing mask that visibly transforms skin texture and radiance as you sleep, unveiling soft, glowing skin in the morning.", stock: 10 },
    { id: "cream-tatcha", name: "Tatcha The Dewy Skin Cream Plumping & Hydrating Moisturizer", img: "https://www.sephora.com/productimages/sku/s2181006-main-zoom.jpg?imwidth=612", price: 72, category: "skincare", description: "A rich cream that hydrates & plumps, while improving skin’s moisture barrier & visibly smoothing lines for an instantly radiant, dewy look that lasts.", stock: 10 },
    { id: "facial-spray-mario-badescu", name: "Mario Badescu Mini Facial Spray with Aloe, Herbs and Rosewater", img: "https://www.sephora.com/productimages/sku/s2540789-main-zoom.jpg?imwidth=612", price: 5, category: "skincare", description: " An ultra-hydrating face mist crafted to instantly rejuvenate and replenish dehydrated skin, delivering a radiant, dewy glow wherever and whenever you need it. This revitalizing face mist serves as a quick pick-me-up.", stock: 10 },
    { id: "liquid-blush-rare-beauty", name: "Rare Beauty by Selena Gomez Soft Pinch Liquid Blush", img: "https://www.sephora.com/productimages/sku/s2640241-main-zoom.jpg?imwidth=612", price: 23, category: "makeup", description: "A weightless, long-lasting liquid blush that blends and builds beautifully for a soft, healthy flush. Available in matte and dewy finishes.", stock: 10 },
    { id: "brow-pencil-benefit-cosmetics", name: "BENEFIT COSMETICS ultra-fine brow defining pencil ", img: "https://www.benefitcosmetics.com/globalassets/pdps/sets--kits/2-be-precise/carousel-images/et_2beprecise_product_stylized.jpg?width=1200&height=1200&mode=crop&center=0.5,0.5", price: 48, category: "makeup", description: "Skillfully designed to craft natural-looking, hair-like strokes, this eyebrow product masterfully delivers precisely defined brows with an authentic and realistic appearance. The innovative formula and precision applicator work in harmony.", stock: 10 },
    { id: "filter-charlotte", name: "Charlotte Tilbury Hollywood Flawless Filter", img: "https://www.sephora.com/productimages/sku/s2419786-main-zoom.jpg?imwidth=612", price: 49, category: "makeup", description: "A complexion booster that blurs, smooths, and illuminates for a real-life filter effect. Customize your glow with four ways to apply.", stock: 10 },
    { id: "concealer-bobby-brown", name: "Bobbi Brown Skin Full Cover Concealer", img: "https://www.sephora.com/productimages/sku/s2595510-main-zoom.jpg?imwidth=612", price: 33, category: "makeup", description: " A featherweight, full-coverage concealer with up to 16-hour skin-perfecting power that resists creasing and settling.", stock: 10 },
    { id: "highlighter-rare-beauty", name: "Rare Beauty by Selena Gomez Positive Light Silky Touch Highlighter", img: "https://www.sephora.com/productimages/sku/s2629483-main-zoom.jpg?imwidth=612", price: 25, category: "makeup", description: "An innovative powder highlighter that gives skin an instant glass-like sheen for an easy, natural-looking glow that lasts.", stock: 10 },
    { id: "lip-gloss-sephora", name: "SEPHORA COLLECTION Outrageous Plumping Lip Gloss", img: "https://www.sephora.com/productimages/sku/s2234151-main-zoom.jpg?imwidth=612", price: 13, category: "makeup", description: "Transform your lips into a luscious canvas of fullness and plumpness with the application of this high-shine, vibrantly colored lip gloss. This lip-enhancing product creates a visually stunning, plumped effect for irresistibly fuller-looking lips.", stock: 10 },
    { id: "lip-liner-sephora", name: "SEPHORA COLLECTION Lip Liner To Go", img: "https://www.sephora.com/productimages/sku/s1656032-main-zoom.jpg?imwidth=612", price: 6, category: "makeup", description: "This compact and versatile lip liner is meticulously crafted to provide precision and definition, allowing you to effortlessly outline and enhance the natural contours of your lips.", stock: 10 },
    { id: "blush-cheek-tint-benefit", name: "Benefit Cosmetics Benetint Liquid Lip Blush & Cheek Tint", img: "https://www.sephora.com/productimages/sku/s2264638-main-zoom.jpg?imwidth=612", price: 24, category: "makeup", description: "Explore our collection of fan-favorite lip and cheek tints, featuring a wide range of shades—all long-wearing, non-drying, and transfer-proof for effortlessly vibrant and lasting color on your lips and cheeks.", stock: 10 },
    { id: "hoola-bronzer-benefit", name: "Benefit Cosmetics Hoola Bronzer", img: "https://www.sephora.com/productimages/sku/s2520419-main-zoom.jpg?imwidth=612", price: 35, category: "makeup", description: "An award-winning, silky-soft powder bronzer with a natural-looking matte finish available in four shades: Hoola, Hoola Lite, Hoola Toasted, and Hoola Caramel.", stock: 10 },
    { id: "lip-gloss-fenty-beauty", name: "Fenty Beauty by Rihanna Gloss Bomb Universal Lip Luminizer", img: "https://www.sephora.com/productimages/sku/s2707057-main-zoom.jpg?imwidth=612", price: 21, category: "makeup", description: "An ultimate, gotta-have-it lip gloss with explosive shine that feels as good as it looks.", stock: 10 },
    { id: "facial-roller-sephora", name: "SEPHORA COLLECTION Mini Blue Aventurine De-Puffing Facial Roller", img: "https://www.sephora.com/productimages/sku/s2600013-main-zoom.jpg?imwidth=612", price: 7, category: "sale", description: "A mini facial massage tool, perfect for travel or on the go. Blue aventurine soothes, cools, and reduces puff.", stock: 10 },
    { id: "cleansing-exfoliating-wipes-sephora", name: "SEPHORA COLLECTION Cleansing + Exfoliating Wipes", img: "https://www.sephora.com/productimages/sku/s2558542-main-zoom.jpg?imwidth=612", price: 6.50, category: "sale", description: "A retractable brow-shaping pencil with a triangular tip that defines and shapes brows plus a wider angle that fills to create naturally fuller brows.", stock: 10 },
    { id: "moisturizer-tarte-cosmetics", name: "tarte SEA drink of H2O hydrating boost moisturizer", img: "https://www.sephora.com/productimages/sku/s1778992-main-zoom.jpg?imwidth=612", price: 19, category: "sale", description: "A daily, vegan gel moisturizer that soothes and refreshes parched skin with electrolyte-packed hydration.", stock: 10 },
    { id: "brow-gel-iconic-london", name: "Iconic London Tint and Texture Brow Gel", img: "https://www.sephora.com/productimages/sku/s2645109-main-zoom.jpg?imwidth=612", price: 13, category: "sale", description: "A tinted brow gel with a petite, precise applicator brush and flexible hold for fuller-looking, more defined brows.", stock: 10 },
  ];
  
  export const getProducts = () => {
    return new Promise((resolve, reject) => {
      
      if (products.length > 0) {
        setTimeout(() => {
          resolve(products);
        }, 2000);
      } else {
        reject("There´s no products :(");
      }
    });
  };

  export const getProduct = ( id ) => {
    return new Promise((resolve, reject) => {
      
      const product = products.find( product => product.id === id); 
      setTimeout( () => { 
        if(!product) {
          reject("The product requested was not found")
        } else {
          resolve(product);
        }
      }, 2000 )
      
    });
  };