import { v4 as uuid } from 'uuid';

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: 'Attack on Titan Volume 1',
    author: 'Hajime Isayama',
    price: 5000,
    inStock: false,
    rating: 1.2,
    categoryName: 'fiction',
    bestSeller: true,
    coverImage:
      'https://api-manga.crunchyroll.com/i/croll_manga/ecda7522c63ebbf3efeee4b5ccaeafcd_1376698396_full_c1a4a9d5c3b3856b180110e9bf35a242.jpg',
  },
  {
    _id: uuid(),
    title: 'My Hero Academia, Vol. 3',
    author: 'Kohei Horikoshi',
    price: 3000,
    inStock: true,
    rating: 3.2,
    categoryName: 'fiction',
    bestSeller: false,
    coverImage:
      'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781421589435_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D',
  },
  {
    _id: uuid(),
    title: 'Naruto, Volume 8: Life-And-Death Battles',
    author: 'Masashi Kishimoto',
    price: 1000,
    inStock: true,
    rating: 2.5,
    categoryName: 'fiction',
    bestSeller: true,
    coverImage:
      'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781421544472_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D',
  },
  {
    _id: uuid(),
    title: 'Pikachu Tutorial Drawing',
    author: 'Wolf-Pisces',
    price: 7500,
    inStock: true,
    rating: 3,
    categoryName: 'tutorial',
    bestSeller: true,
    coverImage:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3548477c-f993-4819-9123-a4fb7ff2e9ca/deyo8tl-9c19099a-0fe8-4902-b9f5-c08ff41a90e9.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM1NDg0NzdjLWY5OTMtNDgxOS05MTIzLWE0ZmI3ZmYyZTljYVwvZGV5bzh0bC05YzE5MDk5YS0wZmU4LTQ5MDItYjlmNS1jMDhmZjQxYTkwZTkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yE-uw_zaPuSkfZawldxw5EAXzO5NnvRkrseGOD71kNg',
  },
  {
    _id: uuid(),
    title: 'Photo study',
    author: 'Amina--chan',
    price: 2000,
    inStock: false,
    rating: 4.5,
    categoryName: 'tutorial',
    bestSeller: false,
    coverImage:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1cb8a628-3ceb-497f-9f6e-4582fcfe6c07/df13qdi-738c420c-dfda-4b13-a0bb-283771f795b6.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFjYjhhNjI4LTNjZWItNDk3Zi05ZjZlLTQ1ODJmY2ZlNmMwN1wvZGYxM3FkaS03MzhjNDIwYy1kZmRhLTRiMTMtYTBiYi0yODM3NzFmNzk1YjYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6f2U0omPNa-ek7D0iM4dTueAGgJAQW2iClDfBCC94mA',
  },
  {
    _id: uuid(),
    title: 'How to draw GoJo',
    author: 'NielsArtTeacher',
    price: 15000,
    inStock: true,
    rating: 5,
    categoryName: 'tutorial',
    bestSeller: true,
    coverImage:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bc168194-1ca2-42ed-a968-b61cb32ec46c/df0u93s-ecd542c1-67d3-48d8-9902-624de4bb57b1.jpg/v1/fill/w_1600,h_1132,q_75,strp/how_to_draw_gojo_by_nielsartteacher_df0u93s-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JjMTY4MTk0LTFjYTItNDJlZC1hOTY4LWI2MWNiMzJlYzQ2Y1wvZGYwdTkzcy1lY2Q1NDJjMS02N2QzLTQ4ZDgtOTkwMi02MjRkZTRiYjU3YjEuanBnIiwiaGVpZ2h0IjoiPD0xMTMyIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvYmMxNjgxOTQtMWNhMi00MmVkLWE5NjgtYjYxY2IzMmVjNDZjXC9uaWVsc2FydHRlYWNoZXItNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.6PQJbFqqTvRc4Sav405-vgrwWEdyPZlidO7xlNIIY60',
  },
  {
    _id: uuid(),
    title: 'Peter Thiel’s Religion',
    author: 'David Perell',
    price: 1500,
    inStock: true,
    rating: 3.2,
    categoryName: 'non-fiction',
    bestSeller: true,
    coverImage:
      'https://i0.wp.com/perell.com/wp-content/uploads/2020/12/Peter-Thiels-Religion-1.jpg?w=480&ssl=1',
  },
  {
    _id: uuid(),
    title: 'How Developers Stop Learning: Rise of the Expert Beginner',
    author: 'Erik Dietrich',
    price: 4000,
    inStock: true,
    rating: 2,
    categoryName: 'non-fiction',
    bestSeller: false,
    coverImage:
      'https://daedtech.com/wp-content/uploads/2014/05/ExpertBeginner.jpg',
  },
  {
    _id: uuid(),
    title: 'The Single Best Interview Question You Can Ask',
    author: 'Farnam Street ',
    price: 10000,
    inStock: false,
    rating: 4,
    categoryName: 'non-fiction',
    bestSeller: true,
    coverImage:
      'https://149664534.v2.pressablecdn.com/wp-content/uploads/2015/09/best-interview-question-peter-thiel.png',
  },
  {
    _id: uuid(),
    title: 'Fantasy objects sketches',
    author: 'DmitryNP ',
    price: 2500,
    inStock: true,
    rating: 1,
    categoryName: 'tutorial',
    bestSeller: false,
    coverImage:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5a2891d8-ee94-43df-ba28-c34a42872f22/df1xw5p-eb2b72fc-1fe1-43d1-9d1c-2387cb9ba3fd.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVhMjg5MWQ4LWVlOTQtNDNkZi1iYTI4LWMzNGE0Mjg3MmYyMlwvZGYxeHc1cC1lYjJiNzJmYy0xZmUxLTQzZDEtOWQxYy0yMzg3Y2I5YmEzZmQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.QFmH5bHfjVtt-O_uT-UH61vS6W-osOHKYu8jFAVrETY',
  },
  {
    _id: uuid(),
    title: 'Haikyu!!, Vol. 1',
    author: 'Haruichi Furudate',
    price: 1000,
    categoryName: 'fiction',
    bestSeller: false,
    inStock: true,
    rating: 3.5,
    coverImage:
      'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781421587660_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D',
  },
  {
    _id: uuid(),
    title: 'Scarcity as an API',
    author: 'The Generalist',
    price: 4000,
    inStock: false,
    rating: 4.5,
    categoryName: 'non-fiction',
    bestSeller: true,
    coverImage:
      'https://assets.website-files.com/5f73bbd13fa8b95aedaf300b/5ffe3af43e95d2f64f20b320_AAPI-p-800.jpeg',
  },
];
