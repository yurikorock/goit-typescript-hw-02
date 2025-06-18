export interface Image {
  id: string;
  alt_description: string | null;
  urls: {
    regular: string;
    small: string;
  };
}
// {
//     "id": "gKXKBY-C-Dk",
//     "slug": "black-and-white-cat-lying-on-brown-bamboo-chair-inside-room-gKXKBY-C-Dk",
//     "alternative_slugs": {
//         "en": "black-and-white-cat-lying-on-brown-bamboo-chair-inside-room-gKXKBY-C-Dk",
//         "es": "gato-blanco-y-negro-acostado-en-una-silla-de-bambu-marron-dentro-de-la-habitacion-gKXKBY-C-Dk",
//         "ja": "部屋の中の茶色の竹の椅子に横たわっている黒と白の猫-gKXKBY-C-Dk",
//         "fr": "chat-noir-et-blanc-couche-sur-une-chaise-en-bambou-marron-a-linterieur-de-la-chambre-gKXKBY-C-Dk",
//         "it": "gatto-in-bianco-e-nero-sdraiato-su-una-sedia-di-bambu-marrone-allinterno-della-stanza-gKXKBY-C-Dk",
//         "ko": "검은-색과-흰색-고양이-갈색-대나무-의자에-누워있는-방-안에-gKXKBY-C-Dk",
//         "de": "schwarz-weisse-katze-liegt-auf-braunem-bambusstuhl-im-zimmer-gKXKBY-C-Dk",
//         "pt": "gato-preto-e-branco-deitado-na-cadeira-de-bambu-marrom-dentro-do-quarto-gKXKBY-C-Dk"
//     },
//     "created_at": "2018-01-02T10:20:47Z",
//     "updated_at": "2025-06-18T15:16:43Z",
//     "promoted_at": null,
//     "width": 5026,
//     "height": 3458,
//     "color": "#598c73",
//     "blur_hash": "LDCtq6Me0_kp3mof%MofUwkp,cRP",
//     "description": "Gipsy the Cat was sitting on a bookshelf one afternoon and just stared right at me, kinda saying: “Will you take a picture already?”",
//     "alt_description": "black and white cat lying on brown bamboo chair inside room",
//     "breadcrumbs": [],
//     "urls": {
//         "raw": "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixid=M3w3NDM3NzB8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHx8fHwxNzUwMjYyMzg1fDA&ixlib=rb-4.1.0",
//         "full": "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDM3NzB8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHx8fHwxNzUwMjYyMzg1fDA&ixlib=rb-4.1.0&q=85",
//         "regular": "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDM3NzB8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHx8fHwxNzUwMjYyMzg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
//         "small": "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDM3NzB8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHx8fHwxNzUwMjYyMzg1fDA&ixlib=rb-4.1.0&q=80&w=400",
//         "thumb": "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDM3NzB8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHx8fHwxNzUwMjYyMzg1fDA&ixlib=rb-4.1.0&q=80&w=200",
//         "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1514888286974-6c03e2ca1dba"
//     },
//     "links": {
//         "self": "https://api.unsplash.com/photos/black-and-white-cat-lying-on-brown-bamboo-chair-inside-room-gKXKBY-C-Dk",
//         "html": "https://unsplash.com/photos/black-and-white-cat-lying-on-brown-bamboo-chair-inside-room-gKXKBY-C-Dk",
//         "download": "https://unsplash.com/photos/gKXKBY-C-Dk/download?ixid=M3w3NDM3NzB8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHx8fHwxNzUwMjYyMzg1fDA",
//         "download_location": "https://api.unsplash.com/photos/gKXKBY-C-Dk/download?ixid=M3w3NDM3NzB8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHx8fHwxNzUwMjYyMzg1fDA"
//     },
//     "likes": 1744,
//     "liked_by_user": false,
//     "current_user_collections": [],
//     "sponsorship": null,
//     "topic_submissions": {},
//     "asset_type": "photo",
//     "user": {
//         "id": "wBu1hC4QlL0",
//         "updated_at": "2025-01-21T06:14:30Z",
//         "username": "madhatterzone",
//         "name": "Manja Vitolic",
//         "first_name": "Manja",
//         "last_name": "Vitolic",
//         "twitter_username": null,
//         "portfolio_url": "https://www.instagram.com/makawee_photography/?hl=en",
//         "bio": "https://www.instagram.com/makawee_photography/",
//         "location": "Wiesbaden, Germany",
//         "links": {
//             "self": "https://api.unsplash.com/users/madhatterzone",
//             "html": "https://unsplash.com/@madhatterzone",
//             "photos": "https://api.unsplash.com/users/madhatterzone/photos",
//             "likes": "https://api.unsplash.com/users/madhatterzone/likes",
//             "portfolio": "https://api.unsplash.com/users/madhatterzone/portfolio",
//             "following": "https://api.unsplash.com/users/madhatterzone/following",
//             "followers": "https://api.unsplash.com/users/madhatterzone/followers"
//         },
//         "profile_image": {
//             "small": "https://images.unsplash.com/profile-fb-1514888261-0e72294039e0.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
//             "medium": "https://images.unsplash.com/profile-fb-1514888261-0e72294039e0.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
//             "large": "https://images.unsplash.com/profile-fb-1514888261-0e72294039e0.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
//         },
//         "instagram_username": "makawee_photography",
//         "total_collections": 0,
//         "total_likes": 10,
//         "total_photos": 66,
//         "total_promoted_photos": 5,
//         "total_illustrations": 0,
//         "total_promoted_illustrations": 0,
//         "accepted_tos": true,
//         "for_hire": true,
//         "social": {
//             "instagram_username": "makawee_photography",
//             "portfolio_url": "https://www.instagram.com/makawee_photography/?hl=en",
//             "twitter_username": null,
//             "paypal_email": null
//         }
//     }
// }
